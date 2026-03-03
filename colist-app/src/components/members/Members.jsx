import styles from "./Members.module.css";
import Button from "../ui/button/Button";
import Member from "../ui/member/Member";
import Modal from "../ui/modal/Modal";
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
          <LuSend stroke="white" />
          Invite Member
        </Button>
      </header>
      <main className={styles.mainContent}>
        <Modal
          listName="Invite Member"
          cta="Send an envitation to colaborate on this list"
          className="enabled"
          type="email"
          mainBtnName={
            <>
              <LuSend stroke="white"/>
              Send Invite
            </>
          }
        ></Modal>
        <Member name="You" email="you@emial.com"></Member>
      </main>
    </div>
  );
}
