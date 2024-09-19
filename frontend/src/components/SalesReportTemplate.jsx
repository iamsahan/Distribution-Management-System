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
  headerSection: {
    marginBottom: 30,
    textAlign: "center",
  },
  companyName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  reportTitle: {
    fontSize: 18,
    marginBottom: 3,
  },
  dateTime: {
    fontSize: 12,
    color: "gray",
  },
  section: {
    marginBottom: 20,
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
    fontSize: 10,
  },
  tableHeader: {
    backgroundColor: "#f0f0f0",
    fontWeight: "bold",
    fontSize: 12,
  },
  footer: {
    marginTop: 30,
    fontSize: 10,
    textAlign: "center",
    color: "gray",
  },
});

// Function to generate current date and time
const getCurrentDateTime = () => {
  const now = new Date();
  return now.toLocaleString();
};

const SalesReportTemplate = ({ salesList }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header Section */}
      <View style={styles.headerSection}>
        <Text style={styles.companyName}>Wijesinghe Distributors</Text>
        <Text style={styles.reportTitle}>Sales Report</Text>
        <Text style={styles.dateTime}>
          Generated on: {getCurrentDateTime()}
        </Text>
      </View>

      {/* Sales Data Table */}
      <View style={styles.section}>
        <Text style={styles.header}>Sales Details</Text>
        <View style={styles.table}>
          {/* Table Header */}
          <View style={[styles.tableRow, styles.tableHeader]}>
            <Text style={styles.tableCol}>Sales ID</Text>
            <Text style={styles.tableCol}>Distributor</Text>
            <Text style={styles.tableCol}>Customer</Text>
            <Text style={styles.tableCol}>Status</Text>
            <Text style={styles.tableCol}>Route Code</Text>
            <Text style={styles.tableCol}>Amount</Text>
          </View>

          {/* Table Rows - Sales Data */}
          {salesList.map((item, index) => (
            <View key={index} style={styles.tableRow}>
              <Text style={styles.tableCol}>{item._id}</Text>
              <Text style={styles.tableCol}>{item.distibutor}</Text>
              <Text style={styles.tableCol}>{item.cname}</Text>
              <Text style={styles.tableCol}>{item.status}</Text>
              <Text style={styles.tableCol}>{item.rcode}</Text>
              <Text style={styles.tableCol}>{item.tamount}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Footer Section */}
      <View style={styles.footer}>
        <Text>
          © {new Date().getFullYear()} Wijesinghe Distributors. All rights
          reserved.
        </Text>
      </View>
    </Page>
  </Document>
);

export default SalesReportTemplate;
