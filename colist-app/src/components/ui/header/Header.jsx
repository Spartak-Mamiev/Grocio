import styles from './Header.module.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GoGear } from 'react-icons/go';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

export default function Header({
  children,
  showMenu = true,
  showSettings = true,
  showBack = false,
}) {
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      {showBack ? (
        <button
          className={styles.backBtn}
          onClick={() => navigate(-1)}
          aria-label="Go back"
        >
          <FaArrowLeft />
        </button>
      ) : showMenu ? (
        <Link
          to="/"
          aria-label="Menu"
        >
          <GiHamburgerMenu />
        </Link>
      ) : (
        <span />
      )}
      <h1 className={styles.title}>{children}</h1>
      {showSettings ? (
        <Link
          to="/settings"
          className={styles.settingsBtn}
          aria-label="Settings"
        >
          <GoGear />
        </Link>
      ) : (
        <span />
      )}
    </header>
  );
}
