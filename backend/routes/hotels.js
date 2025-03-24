import express from "express";
import {
  countByCity,
  countByType,
  createHotel,
  deleteHotel,
  getHotel,
  getHotelRooms,
  getHotels,
  updateHotel,
} from "../controller/hotel.js";
import Hotel from "../models/Hotel.js";
//import {verifyAdmin} from "../utils/verifyToken.js"
const router = express.Router();

//CREATE
//router.post("/",  createHotel);
//router.post("/", verifyAdmin, createHotel);
router.post("/", async (req, res) => {
    
    const newHotel = new Hotel(req.body);

    try {
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);
    }catch(err){
        res.status(200).json(err);
    }    
})

//UPDATE
//router.put("/:id",  updateHotel);
//router.put("/:id", verifyAdmin, updateHotel);
router.put("/:id", async (req, res) => {

    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id,{ $set: req.body },{ new: true });
        res.status(200).json(updatedHotel);
    }catch(err){
        res.status(200).json(err);
    }    
})

//DELETE
//router.delete("/:id",  deleteHotel);
//router.delete("/:id", verifyAdmin, deleteHotel);
router.delete("/:id", async (req, res) => {

    try {
        await Hotel.findByIdDelect(req.params.id);
        res.status(200).json("Hotel has been deleted.");
    }catch(err){
        res.status(200).json(err);
    }    
})

//GET
//router.get("/find/:id", getHotel);
router.get("/:id", async (req, res) => {

    try {
        const hotel = await Hotel.findById(req.params.id);
        res.status(200).json(hotel);
    }catch(err){
        res.status(200).json(err);
    }    
})

//GET ALL
router.get("/", async (req, res) => {

    try {
        const hotels = await Hotel.find();
        res.status(200).json(hotels);
    }catch(err){
        res.status(200).json(err);
    }    
})

//router.get("/", getHotels);
//router.get("/countByCity", countByCity);
//router.get("/countByType", countByType);
//router.get("/room/:id", getHotelRooms);

export default router;
