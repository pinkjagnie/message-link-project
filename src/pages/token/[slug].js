import { useEffect } from "react";

import styles from "../../styles/singleToken.module.css";

export default function Hash(props) {

  useEffect(() => {
    let url = `/api/token/${props.slug}`

    fetch(url, {
      method: "DELETE",
      body: JSON.stringify({
        note: props.bills,
        hash: props.slug
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }, [props.bills, props.slug])

  return(
    <section className={styles.singleTokenSection}>
      <div className={styles.singleMessageDescription}>
        <h1>Hi!</h1>
        <p>You are on this page because someone sent you a link to read a special message that is just for you. You can only read it once, then the message will disappear because the link can only be used once</p>
      </div>
      <div className={styles.singleMessageBox}>
        <p>Message number: {props.bills.hash}</p>
        <p>Here is your message:</p>
        <p className={styles.singleMessage}>{props.bills.note}</p>
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

  let bills = await res.json();

  await fetch(`http://localhost:3000/api/token/${slug}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      clicks: 1
    })
  });
  
   return {
    props: {
      bills: bills,
      slug: slug,
    }
  };
}