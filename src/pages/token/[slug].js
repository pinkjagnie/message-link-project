import { useRouter } from "next/router";

export default function Hash() {
  const router = useRouter();

  const { slug } = router.query;

  return(
    <section>
      <div>
        <h1>Hi {slug}</h1>
        <p>You are on this page because someone sent you a link to read a special message that is just for you. You can only read it once, then the message will disappear because the link can only be used once</p>
      </div>
      <div>
        <p>Message number: {slug}</p>
        <p>Here is your message:</p>
        <p>Lorem ipsum dolor sit amet</p>
      </div>
    </section>
  )
}