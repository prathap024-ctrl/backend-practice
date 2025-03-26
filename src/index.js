//require('dotenv').config({path: "./env"})
import dotenv from "dotenv";
import connectDB from "./db/db.js";
import { app } from "./app.js";

dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server is running at port: ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection Failed!!");
  });

// import express from "express"
// const app = express()

// (async()=>{
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//     app.on("error", (error)=>{
//       console.log("ERR: ", error);
//       throw error
//     })

//     app.listen(process.env.PORT, ()=>{
//       console.log(`APP is listening on Port ${process.env.PORT}`);
//     })
//   } catch (error) {
//     console.error("ERROR: ", error)
//   }
// })()
