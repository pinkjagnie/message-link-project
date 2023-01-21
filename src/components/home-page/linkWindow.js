import Link from "next/link";

import { AiOutlineCopy } from "react-icons/ai";

import styles from "./linkWindow.module.css";

function LinkWindow(props) {
  return (
    <section className={styles.linkWindowSection}>
      <div className={styles.linkWindowSumup}>
        <p>Here is your link.</p>
        <p>Remeber - if you copy the link, the person who receives it will only be able to open it once!</p>
      </div>
      <div className={styles.linkBox}>
        <div className={styles.link}>
          <span>Your link:</span>
          <Link href={props.newLink} className={styles.linkHref}>{props.newLink}</Link>
        </div>
        <button><AiOutlineCopy /> Copy</button>
      </div>
      <div className={styles.linkThanks}>Thanks for using. See you again!</div>
    </section>
  );
}
  
export default LinkWindow;