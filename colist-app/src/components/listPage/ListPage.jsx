import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ListPage.module.css';
import Button from '../ui/button/Button';
import Header from '../ui/header/Header';
import Avatar from '../ui/avatar/Avatar';
import Item from '../ui/item/Item';
import Modal from '../ui/modal/Modal';

import { HiOutlineUserAdd } from 'react-icons/hi';

export default function ListPage() {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleItemPress = () => {
    setIsEditModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsEditModalOpen(false);
  };

  return (
    <>
      <div className={styles.header}>
        <Header>Grocery List</Header>

        <div className={styles.collaboratorsBar}>
          <div
            aria-label="Collaborators"
            className={styles.collaboratorsList}
          >
            <Avatar children="M" />
            <Avatar children="S" />
          </div>
          <Button
            variant="transparent"
            onClick={() => navigate('/members')}
          >
            <HiOutlineUserAdd />
            Invite
          </Button>
        </div>
      </div>
      <main className={styles.groceryList}>
        {isEditModalOpen && (
          <Modal
            listName="Edit Item"
            type="text"
            variant="disabled"
            mainBtnName="Save"
            onClose={handleCloseModal}
          ></Modal>
        )}
        <section
          aria-label="Active items"
          className={styles.activeSection}
        >
          <ul className={styles.activeItems}>
            <Item
              key="item-1"
              name="Milk"
              addedBy="Added by you"
              onClick={handleItemPress}
            />
            <Item
              key="item-2"
              name="Milk"
              addedBy="Added by you"
              onClick={handleItemPress}
            />

            <Item
              key="item-3"
              name="Milk"
              addedBy="Added by you"
              onClick={handleItemPress}
            />
          </ul>
        </section>
        <section
          aria-label="Completed items"
          className={styles.completedSection}
        >
          <p className={styles.sectionTitle}>Completed</p>
          <ul className={styles.completedItems}>
            <Item
              key="completed-1"
              name="Milk"
              addedBy="Added by you"
              onClick={handleItemPress}
            />
            <Item
              key="completed-2"
              name="Milk"
              addedBy="Added by you"
              onClick={handleItemPress}
            />
          </ul>
        </section>
      </main>
    </>
  );
}
