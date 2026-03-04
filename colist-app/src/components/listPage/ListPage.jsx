import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./ListPage.module.css";
import Button from "../ui/button/Button";
import Header from "../ui/header/Header";
import Avatar from "../ui/avatar/Avatar";
import Item from "../ui/item/Item";
import Modal from "../ui/modal/Modal";

import { HiOutlineUserAdd } from "react-icons/hi";
import { FaRegTrashAlt } from "react-icons/fa";

export default function ListPage() {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleItemPress = () => {
    setIsEditModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsEditModalOpen(false);
  };

  return (
    <>
      <header className={styles.header}>
        <Header children="Grocery List" />

        <div className={styles.collaboratorsBar}>
          <div aria-label="Collaborators" className={styles.collaboratorsList}>
            <Avatar children="M" />
            <Avatar children="S" />
          </div>
          <Button variant="transparent">
            <HiOutlineUserAdd />
            Invite
          </Button>
        </div>
      </header>
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
        <section aria-label="Active items" className={styles.activeSection}>
          <ul className={styles.activeItems}>
            <Item
              name="Milk"
              addedBy="Added by you"
              onPress={handleItemPress}
            />
            <Item
              name="Milk"
              addedBy="Added by you"
              onPress={handleItemPress}
            />

            <Item
              name="Milk"
              addedBy="Added by you"
              onPress={handleItemPress}
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
              name="Milk"
              addedBy="Added by you"
              onPress={handleItemPress}
            />
            <Item
              name="Milk"
              addedBy="Added by you"
              onPress={handleItemPress}
            />
          </ul>
        </section>
      </main>
    </>
  );
}
