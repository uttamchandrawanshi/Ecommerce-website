import mongoose from "mongoose";
import colors from "colors";
import express from "express";
import dotenv from "dotenv";
import path from "path";
import {fileURLToPath} from 'url';
const app = express();
const PORT = process.env.PORT || 8080;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
  

    console.log(
      `connect to mongodb database ${conn.connection.host}`.bgMagenta.white
    );
  } catch (error) {
    console.log(`error in mongodb ${error}`.bgRed.white);
  }
};

app.use("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("listening for requests");
    })
})

export default connectDB;
