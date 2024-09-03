import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavigationBar } from "../components/NavigationBar";
import { useNavigate, useParams } from "react-router-dom";

const SalesUpdate = () => {
  const [salesData, setSalesData] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchSales = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8060/api/sales/getsale/${id}`
        );
        setSalesData(response.data.data || []);
        console.log(salesData);
      } catch (error) {
        console.error("Error fetching sales:", error);
      }
    };

    fetchSales();
  }, []);

  const handleOnChange = async (e) => {
    setSalesData({ ...salesData, [e.target.name]: e.target.value });
    console.log(salesData);
  };

  const handleUpdate = () => {};
  return (
    <div className="dashboard w-full">
      <NavigationBar />
      <div className=" w-full">
        <div className="itm-conte pt-40">
          <div className="form-back">
            <form>
              <div className="set" style={{ backgroundColor: "#092143" }}>
                <h3 className="set-title">
                  Customer Details <hr />
                </h3>
                <label className="label required"> Customer Name </label> <br />
                <input
                  type="text"
                  className="p-name"
                  name="cname"
                  value={salesData.cname}
                  onChange={handleOnChange}
                  required
                />
                <br /> <br />
                <label className="label required"> Customer Code </label> <br />
                <input
                  type="text"
                  className="p-code"
                  name="ccode"
                  value={salesData.ccode}
                  onChange={handleOnChange}
                  required
                />
              </div>
              <div className="set" style={{ backgroundColor: "#092143" }}>
                <h3 className="set-title">
                  Genaral Details <hr />
                </h3>

                <div className="same-row">
                  <label className="label required">Route Code </label> <br />
                  <input
                    type="text"
                    className="p-code"
                    name="rcode"
                    value={salesData.rcode}
                    onChange={handleOnChange}
                    required
                  />
                  <label className="label required">Order Date </label> <br />
                  <input
                    type="date"
                    className="i-date"
                    name="odate"
                    value={salesData.odate}
                    onChange={handleOnChange}
                    required
                  />
                  <label className="label required">Status </label> <br />
                  <input
                    type="text"
                    className="p-code"
                    name="status"
                    value={salesData.status}
                    onChange={handleOnChange}
                    required
                  />
                </div>
              </div>
              <div className="set" style={{ backgroundColor: "#092143" }}>
                <h3 className="set-title">
                  Pricing <hr />
                </h3>
                <label className="label required"> Total Amount </label> <br />
                <input
                  type="text"
                  className="p-code"
                  name="tamount"
                  value={salesData.tamount}
                  onChange={handleOnChange}
                  required
                />
              </div>

              <button type="submit" className="btn btn-prd">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesUpdate;
