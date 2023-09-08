const app = require("./app");
const connectDB = require("./db/db");
const cloudinary = require("cloudinary");
const dotenv = require("dotenv");



// handle exception
process.on("uncaughtException", (err) => {
  console.log(`shutting down the server for ${err.message}`);
});

// config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "backend/config/.env",
  });
}

connectDB();

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET
// })

// create a server
const server = app.listen(process.env.PORT, () => {
  console.log(`server running on http://localhost:${process.env.PORT}`);
});

// unhandled rejection of promise
process.on("unhandledRejection", (err) => {
  console.log(`shutting down the server for ${err.message}`);
  server.close(() => {
    process.exit(1);
  });
});
