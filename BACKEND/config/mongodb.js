import mongoose from 'mongoose';

export const connectDB = () => {
  mongoose
    .connect(process.env.MONGODB_URL, {
      dbName: "TRAVELMINGLE",
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log(`Some error occured while connecing to database: ${err}`);
    });
};

export default connectDB;

