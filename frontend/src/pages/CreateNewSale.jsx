import React, { useState } from "react";
import "../styles/sales/createsale.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { NavigationBar } from "../components/NavigationBar";

const CreateNewSale = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const token = localStorage.getItem("token");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `http://localhost:8060/api/sales/add`,
        formData
      );
      console.log(formData);
      swal("Good job!", "Supplier Added Successfully!", "success");
      console.log(res);
      navigate("/dash");
    } catch (err) {
      console.error("Error adding supplier:", err);
    }
  };

  const navigate = useNavigate();
  return (
    <div className="dashboard w-full">
      <NavigationBar />
      <div className=" w-full">
        <div className="itm-conte pt-40">
          <div className="form-back">
            <form onSubmit={handleSubmit}>
              <div className="set" style={{ backgroundColor: "#092143" }}>
                <h3 className="set-title">
                  Customer Details <hr />
                </h3>
                <label className="label required"> Customer Name </label> <br />
                <input
                  type="text"
                  className="p-name"
                  placeholder="Customer Name"
                  name="cname"
                  onChange={handleChange}
                  required
                />
                <br /> <br />
                <label className="label required"> Customer Code </label> <br />
                <input
                  type="text"
                  className="p-code"
                  placeholder="Customer Code"
                  name="ccode"
                  onChange={handleChange}
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
                    placeholder="Route Code"
                    name="rcode"
                    onChange={handleChange}
                    required
                  />
                  <label className="label required">Order Date </label> <br />
                  <input
                    type="date"
                    className="i-date"
                    placeholder="SKU"
                    name="odate"
                    onChange={handleChange}
                    required
                  />
                  <label className="label required">Status </label> <br />
                  <input
                    type="text"
                    className="p-code"
                    placeholder="Route Code"
                    name="status"
                    onChange={handleChange}
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
                  placeholder="Tolal Amount"
                  name="tamount"
                  onChange={handleChange}
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
export default CreateNewSale;
