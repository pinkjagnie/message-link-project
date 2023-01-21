import { useState } from "react";
import Link from "next/link";

import { AiOutlineCopy } from "react-icons/ai";

import styles from "./linkWindow.module.css";

function LinkWindow(props) {
  const [copied, setCopied] = useState(false);

  const copyHandler = () => {
    navigator.clipboard.writeText(`${props.newLink}`);
    setCopied(true);
 
    const timer = setTimeout(() => {setCopied(false)}, 2000);
    return () => clearTimeout(timer);
  };

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
        <button onClick={copyHandler}><AiOutlineCopy /> {!copied && "Copy"} {copied && "Copied"}</button>
      </div>
      <div className={styles.linkThanks}>Thanks for using. See you again!</div>
    </section>
  );
}
  
export default LinkWindow;