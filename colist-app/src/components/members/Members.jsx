import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Members.module.css';
import Button from '../ui/button/Button';
import Member from '../ui/member/Member';
import Modal from '../ui/modal/Modal';
import { FaArrowLeft } from 'react-icons/fa';
import { LuSend } from 'react-icons/lu';

export default function Members() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className={styles.membersPage}>
      <header className={styles.pageHeader}>
        <div className={styles.headerTopRow}>
          <Button
            variant="transparent"
            aria-label="Go back"
            onClick={() => navigate('/list')}
          >
            <FaArrowLeft />
          </Button>
          <h1>Members</h1>
        </div>
        <Button onClick={() => setIsModalOpen(true)}>
          <LuSend stroke="white" />
          Invite Member
        </Button>
      </header>
      <main className={styles.mainContent}>
        {isModalOpen && (
          <Modal
            listName="Invite Member"
            cta="Send an invitation to collaborate on this list"
            variant="enabled"
            type="email"
            mainBtnName={
              <>
                <LuSend stroke="white" />
                Send Invite
              </>
            }
            onClose={() => setIsModalOpen(false)}
          ></Modal>
        )}
        <Member
          name="You"
          email="you@email.com"
        ></Member>
      </main>
    </div>
  );
}
