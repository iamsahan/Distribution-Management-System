import mongoose from 'mongoose';

const { Schema } = mongoose;

const salesSchema = new Schema({
  cname: {
    type: String,
    required: [true, "Transaction ID is Required!"],
  },
  ccode: {
    type: String,
  },
  
  // product: [{
  //   name: {
  //     type: String,
  //     required: [true, "Product Name Required"],
  //   },
  //   price: {
  //     type: Number,
  //     required: [true, "Product Price Required"],
  //   },
  //   qty: {
  //     type: Number,
  //     required: [true, "Product Quantity Required"],
  //     default: 1,
  //   },
  // }],
  rcode: {
    type: String,
  },
  odate: {
    type: Date,
    required: [true, "Transaction Date is Required!"],
    default: Date.now(),
  },
  status: {
    type: String,
    default: "Open",
    required: [true, "Transaction Status is Required"],
    // enum: ["completed", "returned", "pending"],
  },
  tamount: {
    type: Number,
    required: [true, "Transaction Amount is Required"],
  },
  
}, {
  timestamps: true,
});

const Sales = mongoose.model("Sales", salesSchema);
export default Sales;
