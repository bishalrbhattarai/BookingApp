import express from "express";
const router = express.Router();
import {
  createRoom,
  getRoom,
  updateRoom,
  getAllRoom,
  deleteRoom,
} from "../controllers/room.js";
import { verifyToken, verifyAdmin, verifyUser } from "../utils/verify.js";
router.post("/:hotelid", verifyToken, verifyAdmin, createRoom);
router.put("/:id", verifyToken, verifyAdmin, updateRoom);
router.delete("/:id/:hotelid", verifyToken, verifyAdmin, deleteRoom);

router.get("/", getAllRoom);
router.get("/:id", getRoom);
export default router;
