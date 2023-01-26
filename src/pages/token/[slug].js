// import { useEffect } from "react";

import { PDFViewer, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// import styles from "../../styles/singleToken.module.css";

export default function Hash(props) {

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
      <PDFViewer style={styles.pdf}>
        <Document title={props.bills.name}>
          <Page size="A4" style={styles.page}>
            <View>
              <Text style={styles.title}>Bill</Text>
            </View>

            <View style={styles.section}>
              <Text style={styles.subtitle}>Name:</Text>
              <Text>{props.bills.name}</Text>
            </View>
            <View style={styles.section}>
              <Text style={styles.subtitle}>Email:</Text>
              <Text>{props.bills.email}</Text>
            </View>

            <View style={styles.sectionProducts}>
              <Text style={styles.subtitle}>Ordered products:</Text>
              <Text>Atom bomb</Text>
              <Text>Quantity: {props.bills.quantity}</Text>
            </View>

            <View style={styles.sectionNotes}>
              <Text style={styles.subtitle}>Notes:</Text>
              <Text>{props.bills.note}</Text>
            </View>

          </Page>
        </Document>
      </PDFViewer>
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

const styles = StyleSheet.create({
  generatedPdfSection: {
    height: '99vh',
    width: '100%',
    margin: 0,
    padding: 0,
  },
  pdf: {
    height: '100%',
    width: '100%'
  },
  page: {
    backgroundColor: '#E4E4E4'
  },
  title: {
    paddingTop: 40,
    paddingBottom: 40,
    textAlign: 'center',
    fontSize: 36,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textDecoration: 'underline'
  },
  subtitle: {
    marginBottom: 8,
    textDecoration: 'underline',
    fontWeight: 'bold'
  },
  section: {
    margin: 5,
    padding: 5,
    paddingLeft: 30,
  },
  sectionProducts: {
    margin: 20,
    padding: 10,
    paddingLeft: 100,
  },
  sectionNotes: {
    margin: 30,
    padding: 20,
    border: '1px solid black'
  }
});