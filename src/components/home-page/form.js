import { useRef, useState } from "react";

import md5 from 'md5-hash';

import LinkWindow from "./linkWindow";

import styles from "./form.module.css";

function Form() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const quantityRef = useRef(null);
  const noteRef = useRef(null);

  const [newLink, setNewLink] = useState("");

  const messageHandler = (event) => {
    event.preventDefault();

    const newHash = md5(noteRef.current.value);

    const enteredMessage = noteRef.current.value;

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

    const generatedLink = `http://localhost:3000/token/${newHash}`

    setNewLink(generatedLink);

    noteRef.current.value = "";
  }

  return (
    <>
      <section className={styles.formSection}>
        <form className={styles.form} onSubmit={messageHandler}>

          <div className={styles.control}>
            <label htmlFor="name">Your name</label>
            <input type="text" id="name" required ref={nameRef}/>
          </div>
          <div className={styles.control}>
            <label htmlFor="email">Your email</label>
            <input type="email" id="email" required ref={emailRef}/>
          </div>
          <div className={styles.control}>
            <label htmlFor="quantity">Quantity</label>
            <input type="number" id="quantity" required ref={quantityRef} />
          </div>

          <div className={styles.control}>
            <label htmlFor="message">Notes</label>
            <textarea id="message" rows="4" cols="50" required ref={noteRef} />
          </div>

          <button>Submit</button>
        </form>
        <div className={styles.formSumup}>Below you will get a link.</div>
      </section>
      {newLink && <LinkWindow newLink={newLink}/>}
    </>
  );
}
  
export default Form;