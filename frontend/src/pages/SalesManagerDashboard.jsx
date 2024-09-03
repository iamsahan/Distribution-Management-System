import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { NavigationBar } from "../components/NavigationBar";

const SalesDashboard = () => {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    const fetchSales = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8060/api/sales/sale`
        );
        setSales(response.data || []);
        console.log(sales);
      } catch (error) {
        console.error("Error fetching sales:", error);
      }
    };

    fetchSales();
  }, []);

  const handleDelete = async (id) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You will not be able to recover this item!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      if (result.isConfirmed) {
        await axios.get(`http://localhost:8060/api/sales/del/${id}`);
        setSales(sales.filter((sales) => sales._id !== id));
        Swal.fire("Deleted!", "The item has been deleted.", "success");
      }
    } catch (error) {
      console.error("Error deleting sales:", error);
      Swal.fire("Error", "An error occurred while deleting the item.", "error");
    }
  };

  return (
    <div
      className="min-h-screen bg-black text-white w-full"
      style={{ backgroundColor: "#6b94b2" }}
    >
      <NavigationBar />
      <div className="flex w-full">
        <main className="w-full mt-40">
          <div
            className=" p-6 rounded-lg mb-6 ml-10 mr-10"
            style={{ backgroundColor: "#092143" }}
          >
            <h2 className="text-lg font-semibold mb-4">Sales/Order Search</h2>
            <div className="grid grid-cols-2 gap-4 mb-4 w-full">
              <div>
                <label>Distributor:</label>
                <input type="text" className="w-full p-2 text-black" />
              </div>
              <div>
                <label>Sales Date from:</label>
                <input type="date" className="w-full p-2 text-black" />
              </div>
              <div>
                <label>Route:</label>
                <select className="w-full p-2 text-black">
                  <option value="">Select Route</option>
                </select>
              </div>
              <div>
                <label>Sales Date to:</label>
                <input type="date" className="w-full p-2 text-black" />
              </div>
              <div>
                <label>Customer:</label>
                <input type="text" className="w-full p-2 text-black" />
              </div>
              <div>
                <label>Sales No:</label>
                <input type="text" className="w-full p-2 text-black" />
              </div>
              <div>
                <label>Status:</label>
                <input type="text" className="w-full p-2 text-black" />
              </div>
            </div>
            <button className="bg-gray-500 p-2 rounded-lg">Search</button>
          </div>

          <div
            className="rounded-lg m-10"
            style={{ backgroundColor: "#092143" }}
          >
            <h2 className="text-lg font-semibold mb-4 p-5">Order List</h2>
            <table className="text-left w-full">
              <thead>
                <tr className="bg-blue-600 w-fit mr-20">
                  <th className="p-2">Order No</th>
                  <th className="p-2">Order Date</th>
                  <th className="p-2">Customer Code</th>
                  <th className="p-2">Customer Name</th>
                  <th className="p-2">Route Code</th>
                  <th className="p-2">Total Net Amount</th>
                  <th className="p-2">Status</th>
                  <th className="p-2">Update</th>
                  <th className="p-2">Update</th>
                </tr>
              </thead>
              <tbody>
                {sales.map((sales) => (
                  <tr key={sales._id} className=" w-fit">
                    <td className="p-4">{sales._id}</td>
                    <td className="p-4">{sales.odate}</td>
                    <td className="p-4">{sales.ccode}</td>
                    <td className="p-4">{sales.cname}</td>
                    <td className="p-4">{sales.rcode}</td>
                    <td className="p-4">{sales.tamount}</td>
                    <td className="p-4">{sales.status}</td>

                    <td>
                      <a
                        className="bg-gray-500 p-1 m-1 rounded-lg"
                        href={`/upd/${sales._id}`}
                      >
                        Process Order
                      </a>
                    </td>
                    <td>
                      <button
                        className="bg-gray-500 p-1 m-1 rounded-lg"
                        onClick={() => handleDelete(sales._id)}
                      >
                        Cancel Order
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex space-x-4 mt-4">
              <a className="bg-gray-500 p-2 rounded-lg" href="/addSale">
                Add Order
              </a>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SalesDashboard;
