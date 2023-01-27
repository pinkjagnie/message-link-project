import { useState } from "react";

import {StyleSheet} from "@react-pdf/renderer"

import GeneratedPdf from "../../components/GeneratedPdf";

// import styles from "../../styles/singleToken.module.css";

export default function Hash(props) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [quantity, setQuantity] = useState("");
  const [note, setNote] = useState("");
  const [isPdfVisible, setIsPdfVisible] = useState(false);

  const clickHandler = () => {
    setName(props.bills.name);
    setEmail(props.bills.email);
    setQuantity(props.bills.quantity);
    setNote(props.bills.note)

    setIsPdfVisible(true)
  }

  return(
    <div style={styles.generatedPdfSection}>
      {!isPdfVisible && <button style={styles.button} onClick={clickHandler}>Generate pdf</button>}
      {isPdfVisible && <GeneratedPdf name={name} email={email} quantity={quantity} note={note}/>}
    </div>
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

  // await fetch(`http://localhost:3000/api/token/${slug}`, {
  //   method: "PATCH",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     clicks: 1
  //   })
  // });
  
   return {
    props: {
      bills: bills,
      slug: slug,
    }
  };
}

const styles = StyleSheet.create({
  generatedPdfSection: {
    height: '99vh',
    width: '100%',
    margin: 0,
    padding: 0,
  },
  button: {
    display: 'block',
    width: '50%',
    margin: '1.2rem auto 0 auto',
    padding: '0.5rem 2rem',
    border: '1.5px solid whitesmoke',
    borderRadius: '25px',
    backgroundColor: '#656565',
    color: 'whitesmoke',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
});