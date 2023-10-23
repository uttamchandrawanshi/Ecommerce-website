import mongoose from "mongoose";
import colors from "colors";
import dotenv from "dotenv";

const PORT = process.env.PORT || 8080;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    app.listen(PORT, () => {
   console.log(
    `Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan
      .white
  );
});

    console.log(
      `connect to mongodb database ${conn.connection.host}`.bgMagenta.white
    );
  } catch (error) {
    console.log(`error in mongodb ${error}`.bgRed.white);
  }
};

export default connectDB;
