import { useRef } from "react";

import { generateHash } from "random-hash";

import styles from "./form.module.css";

function Form() {
  const messageRef = useRef(null);

  const messageHandler = (event) => {
    event.preventDefault();

    let hash = generateHash({ length: 8 });

    console.log(messageRef.current.value)
    console.log(hash)
  }

  return (
    <section className={styles.formSection}>
      <form className={styles.form} onSubmit={messageHandler}>
        <div className={styles.control}>
          <label htmlFor="message">Your message</label>
          <textarea id="message" rows="8" cols="50" required ref={messageRef} />
        </div>
        <button>Submit</button>
      </form>
      <div className={styles.formSumup}>Below you will get a link.</div>
    </section>
  );
}
  
export default Form;