import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";

// Define styles for the PDF document
const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: "Helvetica",
  },
  section: {
    marginBottom: 20,
  },
  header: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: "bold",
  },
  table: {
    display: "table",
    width: "auto",
    margin: "10px 0",
  },
  tableRow: {
    flexDirection: "row",
  },
  tableCol: {
    width: "25%",
    border: "1px solid black",
    padding: 5,
  },
  tableHeader: {
    backgroundColor: "#f0f0f0",
    fontWeight: "bold",
  },
});

const SalesReportTemplate = ({ salesList }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Estimate Table Section */}
      <View style={styles.section}>
        <Text style={styles.header}>Estimate Details</Text>
        <View style={styles.table}>
          {/* Table Header */}
          <View style={[styles.tableRow, styles.tableHeader]}>
            <Text style={styles.tableCol}>OrderId</Text>
            <Text style={styles.tableCol}>Distributor</Text>
            <Text style={styles.tableCol}>Customer</Text>
            <Text style={styles.tableCol}>Amount</Text>
          </View>
          {/* Table Body */}
          {salesList.map((item, index) => (
            <View key={index} style={styles.tableRow}>
              <Text style={styles.tableCol}>{item._id}</Text>
              <Text style={styles.tableCol}>{item.cname}</Text>
              <Text style={styles.tableCol}>{item.cname}</Text>
              <Text style={styles.tableCol}>{item.cname}</Text>
            </View>
          ))}
          {/* Subtotal Row */}
          <View style={styles.tableRow}>
            <Text style={styles.tableCol}>Subtotal:</Text>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

export default SalesReportTemplate;
