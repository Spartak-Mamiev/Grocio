import { useState, useEffect, useRef, useCallback } from 'react';
import supabase from '../lib/supabaseClient';
import { useAuth } from '../context/AuthContext';

// Custom hook for managing friends with debounced user search
export default function useFriends() {
  const { user } = useAuth();
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchResults, setSearchResults] = useState([]);
  const [searching, setSearching] = useState(false);
  const debounceTimer = useRef(null);

  // Fetch all friends for the current user (both directions)
  useEffect(() => {
    if (!user) return;

    async function fetchFriends() {
      // Get friendships where user is on either side, joined with profile data
      const { data, error } = await supabase
        .from('friends')
        .select('*, friend:profiles!friends_friend_id_fkey(id, name, email), user:profiles!friends_user_id_fkey(id, name, email)')
        .or(`user_id.eq.${user.id},friend_id.eq.${user.id}`);

      if (error) {
        console.error('Error fetching friends:', error.message);
      } else {
        // Normalize: always return the "other" person's profile
        const normalized = data.map((row) => ({
          id: row.id,
          profile: row.user_id === user.id ? row.friend : row.user,
          created_at: row.created_at,
        }));
        setFriends(normalized);
      }

      setLoading(false);
    }

    fetchFriends();

    // Real-time subscription for friend changes
    const channel = supabase
      .channel(`friends:${user.id}`)
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'friends',
        },
        () => {
          // Refetch to get joined profile data
          fetchFriends();
        },
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [user]);

  // Debounced search for users by name (300ms delay)
  const searchUsers = useCallback(
    (query) => {
      // Clear previous timer
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }

      // Reset if query is empty
      if (!query.trim()) {
        setSearchResults([]);
        setSearching(false);
        return;
      }

      setSearching(true);

      debounceTimer.current = setTimeout(async () => {
        const { data, error } = await supabase
          .from('profiles')
          .select('id, name, email')
          .ilike('name', `%${query}%`)
          .neq('id', user.id)
          .limit(10);

        if (error) {
          console.error('Error searching users:', error.message);
          setSearchResults([]);
        } else {
          // Mark which results are already friends
          const friendIds = new Set(friends.map((f) => f.profile.id));
          const results = data.map((profile) => ({
            ...profile,
            isFriend: friendIds.has(profile.id),
          }));
          setSearchResults(results);
        }

        setSearching(false);
      }, 300);
    },
    [user, friends],
  );

  // Clean up the debounce timer on unmount
  useEffect(() => {
    return () => {
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }
    };
  }, []);

  // Add a friend
  async function addFriend(friendId) {
    const { error } = await supabase
      .from('friends')
      .insert({ user_id: user.id, friend_id: friendId });

    if (error) {
      console.error('Error adding friend:', error.message);
      return { error };
    }

    // Update search results to reflect the change
    setSearchResults((prev) =>
      prev.map((r) => (r.id === friendId ? { ...r, isFriend: true } : r)),
    );

    return { error: null };
  }

  // Remove a friend (by friendship row id)
  async function removeFriend(friendshipId) {
    const { error } = await supabase
      .from('friends')
      .delete()
      .eq('id', friendshipId);

    if (error) {
      console.error('Error removing friend:', error.message);
      return { error };
    }

    return { error: null };
  }

  return {
    friends,
    loading,
    searchResults,
    searching,
    searchUsers,
    addFriend,
    removeFriend,
  };
}
