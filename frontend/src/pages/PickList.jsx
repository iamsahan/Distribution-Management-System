import React, { useEffect, useState } from "react";
import { NavigationBar } from "../components/NavigationBar";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import PDFTemplate from "../components/PDFTemplate";
import { PDFDownloadLink } from "@react-pdf/renderer";

const PickList = () => {
  const [item, setItem] = useState({
    name: "",
    unitPrice: "",
    quantity: "",
  });
  const [pickList, setPickList] = useState([]);
  const [salesData, setSalesData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchSales = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8060/api/sales/getsale/${id}`
        );
        setSalesData(response.data.data || {});
        console.log("Fetched Sales Data:", response.data.data);
      } catch (error) {
        console.error("Error fetching sales:", error);
      }
    };
    fetchSales();
  }, [id]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setItem((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const calculateSubtotal = () => {
    return pickList
      .reduce(
        (total, item) =>
          total + parseFloat(item.unitPrice * item.quantity || 0),
        0
      )
      .toFixed(2);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      setPickList((preList) => [...preList, item]);
      setItem({ name: "", quantity: "", unitPrice: "" });
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div
      className="min-h-screen bg-black text-white w-full"
      style={{ backgroundColor: "#6b94b2" }}
    >
      <NavigationBar />
      <div className="fixed mt-20 min-w-full">
        <nav
          className="p-4 flex justify-between items-center"
          style={{ backgroundColor: "#10538a" }}
        >
          <ul className="flex space-x-4">
            <li>Dashboard</li>
            <li>Customer</li>
            <li>Promotion</li>
            <li>Order</li>
            <li>Inventory</li>
            <li>Sales</li>
            <li>Return</li>
            <li>Complain</li>
          </ul>
        </nav>
      </div>

      <div className="pl-20 pr-20 pt-20">
        <form onSubmit={handleOnSubmit}>
          <div className="mt-20 bg-slate-200 p-6 text-black rounded-2xl shadow-sm">
            <h1 className="text-3xl font-bold mb-4">Picklist Generator</h1>
            <div className="flex items-center justify-between mb-4">
              <div className="flex flex-col mb-4 w-1/2">
                <label className="block text-gray-700 required">
                  Item Name:
                </label>
                <input
                  type="text"
                  className="border border-gray-300 text-black rounded-md p-2"
                  placeholder="Item Name"
                  name="name"
                  value={item.name}
                  onChange={handleOnChange}
                  required
                />
              </div>
              <div className="flex flex-col mb-4">
                <label className="block text-gray-700 required">
                  Unit Price:
                </label>
                <input
                  type="number"
                  className="border border-gray-300 text-black rounded-md p-2 w-2/3"
                  placeholder="Unit Price"
                  name="unitPrice"
                  value={item.unitPrice}
                  onChange={handleOnChange}
                  required
                />
              </div>

              <div className="flex flex-col mb-4">
                <label className="block text-gray-700 required">
                  Quantity:
                </label>
                <input
                  type="number"
                  className="border border-gray-300 text-black rounded-md p-2 w-2/3"
                  placeholder="Quantity"
                  name="quantity"
                  value={item.quantity}
                  onChange={handleOnChange}
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="bg-black text-white px-4 py-2 rounded-md"
            >
              Add To Picklist
            </button>
          </div>
        </form>

        {/* Picklist Table */}
        <div className="mt-4">
          {pickList.length <= 0 ? (
            <p>No items added yet</p>
          ) : (
            <table className="min-w-full text-black bg-white border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 px-4 border-b">Name</th>
                  <th className="py-2 px-4 border-b">Unit Price</th>
                  <th className="py-2 px-4 border-b">Quantity</th>
                  <th className="py-2 px-4 border-b">Total</th>
                </tr>
              </thead>
              <tbody>
                {pickList.map((item, index) => (
                  <tr key={index} className="border-b text-center">
                    <td className="py-2 px-4">{item.name}</td>
                    <td className="py-2 px-4">{item.unitPrice}</td>
                    <td className="py-2 px-4">{item.quantity}</td>
                    <td className="py-2 px-4">
                      {(item.quantity * item.unitPrice).toFixed(2)}
                    </td>
                  </tr>
                ))}
                <tr className="bg-gray-100">
                  <td colSpan="3" className="py-2 px-4 text-center font-bold">
                    Subtotal:
                  </td>
                  <td className="py-2 px-4 font-bold">{calculateSubtotal()}</td>
                </tr>
              </tbody>
            </table>
          )}
        </div>

        {/* Generate PDF Button */}
        <div className="mt-4">
          <PDFDownloadLink
            document={<PDFTemplate salesData={salesData} pickList={pickList} />}
            fileName="picklist.pdf"
            className="bg-lime-500 text-black text-xl px-4 py-2 rounded-md mt-5 mb-10"
          >
            {({ loading }) => (loading ? "Generating PDF..." : "Download PDF")}
          </PDFDownloadLink>
        </div>
      </div>
    </div>
  );
};

export default PickList;
