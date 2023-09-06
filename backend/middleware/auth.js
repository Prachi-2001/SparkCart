// chceking and filtering role of the user and seller
// this auth file is for handling auth of routes and if there is any wrong show error 

const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncError = require("./catchAsyncError");
const jwt = require("jsonwebtoken");
const User = require("../model/userModel");
const Shop = require("../model/shopModel");

exports.isAuthenticated = catchAsyncError(async(req,res,next) => {
    const {token} = req.cookies;

    if(!token){
        return next(new ErrorHandler("Please login to continue", 401));
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await User.findById(decoded.id);

    next();
});


exports.isSeller = catchAsyncError(async(req,res,next) => {
    const {seller_token} = req.cookies;

    if(!seller_token){
        return next(new ErrorHandler("Please login to continue", 401));
    }

    const decoded = jwt.verify(seller_token, process.env.JWT_SECRET);

    req.seller = await Shop.findById(decoded.id);

    console.log(req.seller);

    next();
});