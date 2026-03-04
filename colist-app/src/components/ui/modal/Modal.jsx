import styles from "./Modal.module.css";
import Input from "../input/Input";
import Button from "../button/Button";

import { IoClose } from "react-icons/io5";

export default function Modal({
  listName,
  cta,
  type,
  value,
  variant,
  mainBtnName,
  onClose,
}) {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.modal}
        onClick={(event) => event.stopPropagation()}
      >
        <div className={styles.modalTop}>
          <h3 className={styles.modalName}>{listName}</h3>
          <Button variant="transparent" onClick={onClose}>
            <IoClose />
          </Button>
        </div>
        <p className={styles[variant]}>{cta}</p>
        <form action="submit" className={styles.form}>
          <Input type={type} value={value}></Input>
          <div className={styles.buttons}>
            <Button variant="secondary" onClick={onClose}>
              Cancel
            </Button>
            <Button variant="modalBtn">{mainBtnName}</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
