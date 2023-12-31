import Room from "../models/Room.js";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";

const createRoom = async (req, res, next) => {
  const hotelId = req.params.hotelid;
  try {
    const createdRoom = await Room.create(req.body);
    await Hotel.findByIdAndUpdate(hotelId, {
      $push: { rooms: createdRoom._id },
    });
    res.status(200).json(createdRoom);
  } catch (err) {
    next(err);
  }
};

const updateRoom = async (req, res, next) => {
  try {
    const updatedRoom = await Room.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedRoom);
  } catch (err) {
    next(err);
  }
};

const deleteRoom = async (req, res, next) => {
  const hotelId = req.params.hotelid;
  try {
    await Room.findByIdAndDelete(req.params.id);
    await Hotel.findByIdAndUpdate(hotelId, {
      $pull: {
        rooms: req.params.id,
      },
    });

    res.status(200).json({
      message: "Room has been deleted",
    });
  } catch (err) {
    next(err);
  }
};

const getRoom = async (req, res, next) => {
  try {
    const room = await Room.findById(req.params.id);
    res.status(200).json(room);
  } catch (err) {
    next(err);
  }
};

const getAllRoom = async (req, res, next) => {
  try {
    const rooms = await Room.find();
    res.status(200).json(rooms);
  } catch (err) {
    next(err);
  }
};

export { createRoom, getAllRoom, deleteRoom, getRoom, updateRoom };
