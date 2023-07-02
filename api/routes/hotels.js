import express from "express";
const router = express.Router();
import {
  createHotel,
  updateHotel,
  deleteHotel,
  getAllHotel,
  getHotel,
} from "../controllers/hotel.js";
import { verifyToken, verifyAdmin } from "../utils/verify.js";

router.post("/", verifyToken, verifyAdmin, createHotel);

router.put("/:id", verifyToken, verifyAdmin, updateHotel);

router.delete("/:id", verifyToken, verifyAdmin, deleteHotel);

router.get("/", getAllHotel);

router.get("/:id", getHotel);

export default router;
