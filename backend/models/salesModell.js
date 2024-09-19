import mongoose from "mongoose";

const salesSchema = new mongoose.Schema(
  {
    cname: {
      type: String,
      required: [true, "Transaction ID is Required!"],
    },
    ccode: {
      type: String,
    },
    cphone: {
      type: String,
    },
    cemail: {
      type: String,
    },
    rcode: {
      type: String,
    },
    odate: {
      type: String,
    },
    status: {
      type: String,
      default: "Pending",
    },
    distibutor: {
      type: String,
    },
    dphone: {
      type: String,
    },
    demail: {
      type: String,
    },
    tamount: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const Sales = mongoose.model("Sales", salesSchema);
export default Sales;
