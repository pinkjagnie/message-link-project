import styles from "./form.module.css";

function Form() {
  return (
    <section className={styles.formSection}>
      <form className={styles.form}>
        <div className={styles.control}>
          <label htmlFor="message">Your message</label>
          <textarea id="message" rows="8" cols="50" />
        </div>
        <button>Submit</button>
      </form>
      <div className={styles.formSumup}>Below you will get a link.</div>
    </section>
  );
}
  
export default Form;