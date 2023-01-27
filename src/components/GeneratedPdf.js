import { PDFViewer, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const GeneratedPdf = (props) => {

  return(
    <div style={styles.generatedPdfSection}>
      <PDFViewer style={styles.pdf}>
        <Document title={props.name}>
          <Page size="A4" style={styles.page}>
            <View>
              <Text style={styles.title}>Bill</Text>
            </View>

            <View style={styles.section}>
              <Text style={styles.subtitle}>Name:</Text>
              <Text>{props.name}</Text>
            </View>
            <View style={styles.section}>
              <Text style={styles.subtitle}>Email:</Text>
              <Text>{props.email}</Text>
            </View>

            <View style={styles.sectionProducts}>
              <Text style={styles.subtitle}>Ordered products:</Text>
              <Text>Atom bomb</Text>
              <Text>Quantity: {props.quantity}</Text>
            </View>

            <View style={styles.sectionNotes}>
              <Text style={styles.subtitle}>Notes:</Text>
              <Text>{props.note}</Text>
            </View>

          </Page>
        </Document>
      </PDFViewer>
    </div>
  )
}

export default GeneratedPdf;

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