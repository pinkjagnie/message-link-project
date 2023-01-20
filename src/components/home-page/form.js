import { useRef } from "react";

import { generateHash } from "random-hash";

import styles from "./form.module.css";

function Form() {
  const messageRef = useRef(null);

  const messageHandler = (event) => {
    event.preventDefault();

    const newHash = generateHash({ length: 8 });

    const enteredMessage = messageRef.current.value;

    console.log(enteredMessage)
    console.log(newHash)

    fetch("/api/add", {
      method: "POST",
      body: JSON.stringify({
        message: enteredMessage,
        hash: newHash
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    messageRef.current.value = "";
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