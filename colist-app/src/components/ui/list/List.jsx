import styles from './List.module.css';
import { FaRegTrashAlt } from 'react-icons/fa';
import Button from '../button/Button';
import { Link } from 'react-router-dom';

export default function List({ name, creator }) {
  return (
    <Link
      to="/list"
      className={styles.listContainer}
    >
      <div className={styles.listNameContainer}>
        <h3>{name}</h3>
        <p>Created by {creator}</p>
      </div>
      <Button
        variant="transparent"
        aria-label="Delete list"
      >
        <FaRegTrashAlt fill="red" />
      </Button>
    </Link>
  );
}
