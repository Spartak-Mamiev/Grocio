import { useState } from 'react';
import styles from './FriendsModal.module.css';
import Input from '../input/Input';
import Button from '../button/Button';
import Avatar from '../avatar/Avatar';
import { IoClose } from 'react-icons/io5';

// Modal for searching and managing friends.
// Uses debounced search from useFriends hook.
export default function FriendsModal({
  friends,
  searchResults,
  searching,
  onSearch,
  onAddFriend,
  onRemoveFriend,
  onClose,
}) {
  const [query, setQuery] = useState('');
  const [error, setError] = useState(null);

  function handleSearchChange(e) {
    const value = e.target.value;
    setQuery(value);
    setError(null);
    onSearch(value);
  }

  async function handleAdd(userId) {
    setError(null);
    const { error: addError } = await onAddFriend(userId);
    if (addError) {
      setError(addError.message);
    }
  }

  async function handleRemove(friendshipId, profileId) {
    setError(null);
    const { error: removeError } = await onRemoveFriend(friendshipId);
    if (removeError) {
      setError(removeError.message);
    }
  }

  // Check if a search result is already a friend and get the friendship id
  function getFriendshipId(profileId) {
    const friendship = friends.find((f) => f.profile.id === profileId);
    return friendship ? friendship.id : null;
  }

  return (
    <div
      className={styles.overlay}
      onClick={onClose}
    >
      <div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <div className={styles.modalTop}>
          <h3 className={styles.modalName}>Friends</h3>
          <Button
            variant="transparent"
            onClick={onClose}
            aria-label="Close"
          >
            <IoClose />
          </Button>
        </div>

        <Input
          type="text"
          placeholder="Search users by name..."
          value={query}
          onChange={handleSearchChange}
          autoFocus
        />

        {error && <p className={styles.error}>{error}</p>}

        <div className={styles.results}>
          {/* Show search results when user is typing */}
          {query.trim() && (
            <>
              {searching && <p className={styles.hint}>Searching...</p>}

              {!searching && searchResults.length === 0 && (
                <p className={styles.hint}>No users found</p>
              )}

              {!searching &&
                searchResults.map((profile) => {
                  const friendshipId = getFriendshipId(profile.id);
                  return (
                    <div
                      key={profile.id}
                      className={styles.resultRow}
                    >
                      <div className={styles.userInfo}>
                        <Avatar variant="collaborator">
                          {profile.name?.charAt(0)?.toUpperCase() || '?'}
                        </Avatar>
                        <div className={styles.userDetails}>
                          <span className={styles.userName}>{profile.name}</span>
                          <span className={styles.userEmail}>{profile.email}</span>
                        </div>
                      </div>
                      {friendshipId ? (
                        <Button
                          variant="secondary"
                          size="small"
                          onClick={() => handleRemove(friendshipId, profile.id)}
                        >
                          Remove
                        </Button>
                      ) : (
                        <Button
                          variant="primary"
                          size="small"
                          onClick={() => handleAdd(profile.id)}
                        >
                          Add
                        </Button>
                      )}
                    </div>
                  );
                })}
            </>
          )}

          {/* Show current friends list when not searching */}
          {!query.trim() && (
            <>
              {friends.length === 0 && (
                <p className={styles.hint}>No friends yet. Search to add some!</p>
              )}
              {friends.map((friend) => (
                <div
                  key={friend.id}
                  className={styles.resultRow}
                >
                  <div className={styles.userInfo}>
                    <Avatar variant="collaborator">
                      {friend.profile.name?.charAt(0)?.toUpperCase() || '?'}
                    </Avatar>
                    <div className={styles.userDetails}>
                      <span className={styles.userName}>{friend.profile.name}</span>
                      <span className={styles.userEmail}>{friend.profile.email}</span>
                    </div>
                  </div>
                  <Button
                    variant="secondary"
                    size="small"
                    onClick={() => handleRemove(friend.id, friend.profile.id)}
                  >
                    Remove
                  </Button>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
