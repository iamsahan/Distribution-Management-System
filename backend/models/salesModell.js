import mongoose from "mongoose";

const salesSchema = new mongoose.Schema(
  {
    distibutor: {
      type: String,
    },
    cname: {
      type: String,
      required: [true, "Transaction ID is Required!"],
    },
    ccode: {
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
