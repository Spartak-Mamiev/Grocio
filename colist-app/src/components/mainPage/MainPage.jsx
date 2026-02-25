import { Link } from 'react-router-dom';
import styles from './MainPage.module.css';

export default function MainPage() {
  return (
    <main>
      <header>
        <h1>Your Lists</h1>
        <Link
          to="/settings"
          className={styles.settingsBtn}
        >
          Settings
        </Link>
      </header>
      <section
        className={styles.listsSection}
        aria-label="Your lists"
      >
        <ul>
          <li>
            <button type="button">Dinner</button>
          </li>
          <li>
            <button type="button">Home</button>
          </li>
        </ul>
      </section>
      <button
        className={styles.addListBtn}
        aria-label="Add new list"
      >
        +
      </button>
    </main>
  );
}
