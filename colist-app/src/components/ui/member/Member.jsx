import styles from './Member.module.css';
import Avatar from '../avatar/Avatar';
import Button from '../button/Button';
import { FaRegTrashAlt } from 'react-icons/fa';

export default function Member({ name, email }) {
  return (
    <div className={styles.memberContainer}>
      <div className={styles.infoContainer}>
        <Avatar>Y</Avatar>
        <div className={styles.memberInfo}>
          <p className={styles.name}>{name}</p>
          <p className={styles.email}>{email}</p>
        </div>
      </div>

      <Button
        variant="transparent"
        aria-label="Remove member"
      >
        <FaRegTrashAlt fill="red" />
      </Button>
    </div>
  );
}
