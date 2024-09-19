import express from "express";
import {
  newsalesController,
  getSalesById,
  deleteSale,
  getallSale,
  upsale,
} from "../controllers/salesController.js";

const router = express.Router();

router.post("/add", newsalesController);
router.get("/sale", getallSale);
router.get("/getsale/:id", getSalesById);
router.put("/updte/:id", upsale);
router.get("/del/:ssid", deleteSale);

export default router;
