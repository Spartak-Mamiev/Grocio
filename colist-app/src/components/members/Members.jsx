import styles from "./Members.module.css";

export default function Members() {
  return (
    <>
      <header>
        <div>
          <button>Back</button>
          <h1>Members</h1>
        </div>
        <button>
          <img src="" alt="" />
          <p>Invite Member</p>
        </button>
      </header>
      <main>
        <ul>
          <li className={styles.memberContainer}>
            <img src="" alt="members avatar" className={styles.memberAvatar} />
            <div>
              <h2>John</h2>
              <p>john@email.com</p>
            </div>
            <button>Delete</button>
          </li>
        </ul>
      </main>
    </>
  );
}
