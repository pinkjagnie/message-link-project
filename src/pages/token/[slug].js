export default function Hash(props) {
 
  return(
    <section>
      <div>
        <h1>Hi!</h1>
        <p>You are on this page because someone sent you a link to read a special message that is just for you. You can only read it once, then the message will disappear because the link can only be used once</p>
      </div>
      <div>
        <p>Message number: {props.message.hash}</p>
        <p>Here is your message:</p>
        <p>{props.message.message}</p>
      </div>
    </section>
  )
}

export async function getServerSideProps(context) {

  const { params } = context;
  const { slug } = params;

  let res = await fetch(`http://localhost:3000/api/token/${slug}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  let messages = await res.json();
  
   return {
    props: {
      message: messages,
    }
  };
}