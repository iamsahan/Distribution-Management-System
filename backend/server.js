
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import salesRoute from './routes/salesRoute.js';


const app = express();
const PORT = process.env.PORT || 8060;

app.use(cors()); 

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/sales", salesRoute);

app.get("/", (req, res) => {
  res.send("Home Page");
});

const mongoUri = 'mongodb+srv://iamsahan:sew123@inventory.axqereu.mongodb.net';

const mainDbUri = `${mongoUri}/salesManagement25?retryWrites=true&w=majority`;

mongoose.connect(mainDbUri)
  .then(() => {
    console.log("DB Connection Successful!");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));