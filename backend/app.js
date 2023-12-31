const express = require("express");
const ErrorHandler = require("./middleware/errorHandler");
const app = express();
const cors = require("cors");
const path = require("path")

// app.use((req,res,next) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");  
//     res.setHeader(  
//         "Access-Control-Allow-Headers",  
//         "Origin, X-Requested-With, Content-Type, Accept");
// });
// madeatory for a parsing cookie
const cookieParser = require("cookie-parser");

// body parser
const bodyParser = require("body-parser");

app.use(express.json())
app.use(cookieParser())

app.use(cors({
    origin: ["http://localhost:3000", "https://localhost:3000"],
    credentials: true
}));

app.use("/", express.static(path.join(__dirname,"./uploads")))
app.use("/test", (req,res) => {
    res.send("Hello World!")
})
app.use(bodyParser.urlencoded({extended: true}));

// config
if(process.env.NODE_ENV !== "PRODUCTION"){
    require("dotenv").config({
        path: "config/.env"
    })
}

const user = require("./controller/user");
const seller = require("./controller/shop");

app.use("/api/v2/user", user);
app.use("/api/v2/seller", seller);

// adding error handler
app.use(ErrorHandler)

module.exports = app;