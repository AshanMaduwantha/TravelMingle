import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { dbConnection } from "./database/dbConnection.js";
import hotelsRouter from "./routes/hotels.js"
import roomsRouter from "./routes/rooms.js"

const app = express();
dotenv.config({ path: "./config/config.env" });

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/hotels", hotelsRouter);
app.use("/api/rooms", roomsRouter);

app.get("/", (req, res) => {
  res.redirect("/login");
});

app.get("/login", (req, res, next) => {
  return res.status(200).json({
    success: true,
    message: "HELLO WORLD AGAIN"
  });
});

dbConnection();


export default app;
