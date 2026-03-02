import styles from './Members.module.css';
import Button from '../ui/button/Button';
import Member from '../ui/member/Member';
import { FaArrowLeft } from "react-icons/fa";
import { LuSend } from "react-icons/lu";


export default function Members() {
  return (
    <div className={styles.membersPage}>
      <header className={styles.pageHeader}>
        <div className={styles.headerTopRow}>
           <Button variant="transparent">
          <FaArrowLeft />
        </Button>
          <h2>Members</h2>
        </div>
        <Button>
          <LuSend stroke='white'/>
          Invite Member
        </Button>
      </header>
      <main className={styles.mainContent}>
        <Member name='You' email='you@emial.com'></Member>
      {/*   <ul className={styles.listOfMembers}>
          <li className={styles.memberContainer}>
            <img
              src=""
              alt="John avatar"
              className={styles.memberAvatar}
            />
            <div className={styles.memberInfoContainer}>
              <h2>John</h2>
              <p>john@email.com</p>
            </div>
            <Button
              type="Button"
              className={styles.deleteBtn}
            >
              Delete
            </Button>
          </li>
        </ul> */}
      </main>
    </div>
  );
}
