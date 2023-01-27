// import { useEffect } from "react";
import { useState, useEffect } from "react";

import {StyleSheet} from "@react-pdf/renderer"
// import { PDFViewer, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

import GeneratedPdf from "../../components/GeneratedPdf";

// import styles from "../../styles/singleToken.module.css";

export default function Hash(props) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [quantity, setQuantity] = useState("");
  const [note, setNote] = useState("");
  const [pdf, setPdf] = useState(false);

  const clickHandler = () => {
    setName(props.bills.name);
    setEmail(props.bills.email);
    setQuantity(props.bills.quantity);
    setNote(props.bills.note)

    setPdf(true)
  }

  // useEffect(() => {
  //   let url = `/api/token/${props.slug}`

  //   fetch(url, {
  //     method: "DELETE",
  //     body: JSON.stringify({
  //       note: props.bills,
  //       hash: props.slug
  //     }),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  // }, [props.bills, props.slug])

  return(
    <div style={styles.generatedPdfSection}>
      <button onClick={clickHandler}>Generate pdf</button>
      {pdf && <GeneratedPdf name={name} email={email} quantity={quantity} note={note}/>}
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
  // pdf: {
  //   height: '100%',
  //   width: '100%'
  // },
  // page: {
  //   backgroundColor: '#E4E4E4'
  // },
  // title: {
  //   paddingTop: 40,
  //   paddingBottom: 40,
  //   textAlign: 'center',
  //   fontSize: 36,
  //   fontWeight: 'bold',
  //   textTransform: 'uppercase',
  //   textDecoration: 'underline'
  // },
  // subtitle: {
  //   marginBottom: 8,
  //   textDecoration: 'underline',
  //   fontWeight: 'bold'
  // },
  // section: {
  //   margin: 5,
  //   padding: 5,
  //   paddingLeft: 30,
  // },
  // sectionProducts: {
  //   margin: 20,
  //   padding: 10,
  //   paddingLeft: 100,
  // },
  // sectionNotes: {
  //   margin: 30,
  //   padding: 20,
  //   border: '1px solid black'
  // }
});