import express from "express";
import {send_reservation, fetch_reservations, updateReservationStatus, updateArrivalStatus, deleteReservation} from "../controller/reservation.js";

const router = express.Router();

router.post("/send", send_reservation);
router.get("/fetch", fetch_reservations);
router.put("/update/:id", updateReservationStatus)
router.put("/arrival/:id", updateArrivalStatus);
router.delete("/delete/:id",  deleteReservation);


export default router;