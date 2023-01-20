function Form() {
  return (
    <section>
      <form>
        <div>
          <label htmlFor="message">Your message</label>
          <textarea id="message" rows="4" cols="50" />
        </div>
        <button>Submit</button>
      </form>
      <div>Below you will get a link.</div>
    </section>
  );
}
  
export default Form;