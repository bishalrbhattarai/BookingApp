import express from "express";
const router = express.Router();
import {
  updateUser,
  deleteUser,
  getAllUser,
  getUser,
} from "../controllers/user.js";
import { verifyToken, verifyUser, verifyAdmin } from "../utils/verify.js";

// app.get("/checkauthentication", verifyToken, (req, res) => {
//   res.json(req.user);
// });

// router.get("/checkuser/:id", verifyToken, verifyUser, (req, res) => {
//   res.send("hello user you are logged in and you can delete your account");
// });

// router.get("/checkadmin/:id", verifyToken, verifyAdmin, (req, res) => {
//   res.send("hello admin you are logged in and you can delete all account");
// });

router.put("/:id", verifyToken, verifyUser, updateUser);
router.delete("/:id", verifyToken, verifyUser, deleteUser);
router.get("/:id", verifyToken, verifyUser, getUser);
router.get("/", verifyToken, verifyAdmin, getAllUser);
export default router;
