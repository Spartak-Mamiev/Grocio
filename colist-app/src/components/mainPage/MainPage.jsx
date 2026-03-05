import { Link } from 'react-router-dom';
import styles from './MainPage.module.css';
import Button from '../ui/button/Button';
import Input from '../ui/input/Input';
import Header from '../ui/header/Header';
import List from '../ui/list/List';

export default function MainPage() {
  return (
    <main className={styles.mainPage}>
      <Header showMenu={false}>Your Lists</Header>
      <section
        className={styles.listsSection}
        aria-label="Your lists"
      >
        <div className={styles.listGrid}>
          <List
            name="Dinner"
            creator="You"
          ></List>
          <List
            name="Weekend"
            creator="You"
          ></List>
        </div>
      </section>
      <div
        className={styles.footer}
        role="toolbar"
      >
        <Input
          type="search"
          placeholder="Add an item..."
        ></Input>
        <Button aria-label="Add list">+</Button>
      </div>
    </main>
  );
}
