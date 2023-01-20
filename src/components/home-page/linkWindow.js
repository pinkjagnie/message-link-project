import { AiOutlineCopy } from "react-icons/ai";

function LinkWindow() {
  return (
    <section>
      <div>
        <p>Here is your link.</p>
        <p>Remeber - if you copy the link, the person who receives it will only be able to open it once!</p>
      </div>
      <div>
        <div>
          <a href="www.google.pl">Your link: www.google.pl/token/12345</a>
        </div>
        <button><AiOutlineCopy /> Copy</button>
      </div>
      <div>Thanks for using. See you again!</div>
    </section>
  );
}
  
export default LinkWindow;