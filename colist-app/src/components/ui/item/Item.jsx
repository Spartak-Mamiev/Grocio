import styles from './Item.module.css';
import Button from '../button/Button';
import { FaRegTrashAlt } from 'react-icons/fa';

export default function Item({ name, addedBy, onClick }) {
  return (
    <li
      className={styles.groceryItem}
      onClick={onClick}
    >
      <label className={styles.itemLabel}>
        <input
          type="checkbox"
          className={styles.itemCheckbox}
          onClick={(event) => event.stopPropagation()}
        />
        <div className={styles.itemText}>
          <h3 className={styles.itemName}>{name}</h3>
          <small className={styles.itemMeta}>{addedBy}</small>
        </div>
      </label>
      <Button
        variant="transparent"
        onClick={(event) => event.stopPropagation()}
        aria-label="Delete item"
      >
        <FaRegTrashAlt
          fill="red"
          className={styles.deleteBtn}
        />
      </Button>
    </li>
  );
}
