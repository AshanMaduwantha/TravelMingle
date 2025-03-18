import ErrorHandler from "../middlewares/error.js";
import { Reservation } from "../models/reservation.js";

export const send_reservation = async (req, res, next) => {

  const { firstName, lastName, email, date, time, phone } = req.body;
  if (!firstName || !lastName || !email || !date || !time || !phone) {
    return next(new ErrorHandler("Please Fill Full Reservation Form!", 400));
  }

  try {
    await Reservation.create({ firstName, lastName, email, date, time, phone });
    res.status(201).json({
      success: true,
      message: "Reservation Sent Successfully!",
    });
  } catch (error) {
    // Handle Mongoose validation errors
    if (error.name === 'ValidationError') {
      const validationErrors = Object.values(error.errors).map(err => err.message);
      return next(new ErrorHandler(validationErrors.join(', '), 400));
    }

    // Handle other errors
    return next(error);
  }
}

export const fetch_reservations = async (req, res, next) => {
  try {
    const reservations = await Reservation.find();
    res.status(200).json({
      success: true,
      count: reservations.length,
      data: reservations,
    });
  } catch (error) {
    next(error);
  }
};

export const updateReservationStatus = async (req, res, next) => {
    const { id } = req.params;
    let reservation = await Reservation.findById(id);
    if (!reservation) {
      return next(new ErrorHandler("Reservation not found!", 404));
    }
    reservation = await Reservation.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });
    res.status(200).json({
      success: true,
      message: "Reservation Status Updated!",
    });
}

export const updateArrivalStatus = async (req, res, next) => {
  const { id } = req.params;
  const { isCome } = req.body;
  try {
    const reservation = await Reservation.findById(id);

    if (!reservation) {
      return next(new ErrorHandler("Reservation not found", 404));
    }

    reservation.isCome = isCome;
    reservation.arrivedTime = isCome ? new Date().toISOString() : null;
    await reservation.save();

    res.status(200).json({
      success: true,
      message: "Arrival status updated successfully",
      data: reservation,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteReservation = async (req, res, next) => {
  const { id } = req.params;
  const reservation = await Reservation.findById(id);
  if (!reservation) {
    return next(new ErrorHandler("Reservation Not Found!", 404));
  }
  await reservation.deleteOne();
  res.status(200).json({
    success: true,
    message: "Reservation Deleted!",
  });
};
