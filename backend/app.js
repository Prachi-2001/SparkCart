const express = require("express");
const ErrorHandler = require("./middleware/errorHandler");
const app = express();
const cors = require("cors");

// madeatory for a parsing cookie
const cookieParser = require("cookie-parser");

// body parser
const bodyParser = require("body-parser")

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: "https://spark-frontend-6k513b9z5-prachi-2001.vercel.app/",
    credentials: true
}));
app.use("/", express.static("uploads"))
app.use(bodyParser.urlencoded({extended: true}));



// config
if(process.env.NODE_ENV !== "PRODUCTION"){
    require("dotenv").config({
        path: "./config/.env"
    })
}

const user = require("./controller/user");
const seller = require("./controller/shop");

app.use("/api/v2/user", user);
app.use("/api/v2/seller", seller);

// adding error handler
app.use(ErrorHandler)

module.exports = app;

