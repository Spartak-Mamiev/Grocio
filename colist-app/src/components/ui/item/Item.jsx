import styles from "./Item.module.css";
import Button from "../button/Button";
import { FaRegTrashAlt } from "react-icons/fa";

export default function Item({ name, addedBy, onPress }) {
  return (
    <div className={styles.groceryItem} onClick={onPress}>
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
      >
        <FaRegTrashAlt fill="red" className={styles.deleteBtn} />
      </Button>
    </div>
  );
}
