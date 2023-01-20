import styles from "./about.module.css";

function About() {
  return (
    <section className={styles.aboutSection}>
      <h1>Wanna see a magic trick?</h1>
      <h2>Make your message readable only once!</h2>
      <div className={styles.aboutDescription}>
        <p>The text you enter will be converted into a special page - you will get a link. You will be able to copy this link and share it with your friend. But remember - this link can only be used once, after which it will cease to exist.</p>
        <p>Enter your message below.</p>
      </div>
    </section>
  );
}
  
export default About;