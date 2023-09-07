const express = require("express");
const path = require("path");
const router = express.Router();
const { upload } = require("../multer");
const Shop = require("../model/shopModel");
const fs = require("fs");
const jwt = require("jsonwebtoken");
const sendMail = require("../utils/sendMail");
const catchAsyncError = require("../middleware/catchAsyncError");
const sendShopToken = require("../utils/sendShopToken");
const { isAuthenticated, isSeller } = require("../middleware/auth");
const ErrorHandler = require("../utils/ErrorHandler");

// create a shop
router.post("/create-shop", upload.single("file"), async (req, res, next) => {
  try {
    const { email } = req.body;
    const sellerEmail = await Shop.findOne({ email });

    if (sellerEmail) {
      const filename = req.file.filename;
      const filepath = `uploads/${filename}`;
      // Unlink - delete that image from the path
      fs.unlink(filepath, (err) => {
        if (err) {
          console.log(err);
          return res.status(500).json({ message: "Error in file deleting" });
        }
      });

      // Return error response instead of throwing an error
      return next(new ErrorHandler("Seller already exists", 400));
    }

    const filename = req.file.filename;
    const fileUrl = path.join(filename);

    const seller = {
      name: req.body.name,
      email: email,
      password: req.body.password,
      avatar: fileUrl,
      address: req.body.address,
      phoneNumber: req.body.phoneNumber,
      zipCode: req.body.zipCode,
    };

    const activationToken = createActivationToken(seller);
    // const activationUrl = `http://localhost:3000/seller/activation/${activationToken}`;
    const activationUrl = `https://spark-frontend-6k513b9z5-prachi-2001.vercel.app/seller/activation/${activationToken}`;
  
    try {
      await sendMail({
        email: seller.email,
        subject: "Activate your Shop",
        message: `Hello ${seller.name}, please click on the link to activate your shop: ${activationUrl}`,
      });
      res.status(201).json({
        success: true,
        message: `please check your email:- ${seller.email} to activate your shop!`,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }

  } catch (error) {
    return next(new ErrorHandler(error.message, 400));
  }
});


const createActivationToken = (seller) => {
    return jwt.sign(seller, process.env.ACTIVATION_SECRET, {
      expiresIn: "20m",
    });
};
  


// activate seller
router.post(
    "/activation",
    catchAsyncError(async (req, res, next) => {
      try {
        const { activation_token } = req.body;
  
        const newSeller = jwt.verify(
          activation_token,
          process.env.ACTIVATION_SECRET
        );
  
        if (!newSeller) {
          return next(new ErrorHandler("Invalid token", 400));
        }
  
        const { name, email, password, avatar, zipCode, address, phoneNumber } = newSeller;
  
        let seller = await Shop.findOne({ email });
  
        if (seller) {
          return next(new ErrorHandler("Seller already exists", 400));
        }
  
        seller = await Shop.create({
          name,
          email,
          avatar,
          password,
          zipCode,
          address,
          phoneNumber,
        });

        console.log(seller);

        sendShopToken(seller, 201, res);
  
      } catch (error) {
        return next(new ErrorHandler(error.message, 500));
      }
    })
  );

  // login as a seller 
  router.post(
    "/login-shop",
    catchAsyncError(async (req, res, next) => {
      try {
        const { email, password } = req.body;
  
        if (!email || !password) {
          return next(new ErrorHandler("Please provide the all fields!", 400));
        }
  
        const user = await Shop.findOne({ email }).select("+password");

        console.log(user);
  
        if (!user) {
          return next(new ErrorHandler("User doesn't exists!", 400));
        }
  
        const isPasswordValid = await user.comparePassword(password);
  
        if (!isPasswordValid) {
          return next(
            new ErrorHandler("Please provide the correct information", 400)
          );
        }
        sendShopToken(user, 201, res);
      } catch (error) {
        return next(new ErrorHandler(error.message, 500));
      }
    })
  );


  
// load seller
router.get(
    "/getseller",
    isSeller,
    catchAsyncError(async (req, res, next) => {
      try {
        console.log(req.seller);
        const user = await Shop.findById(req.seller.id);
  
        if (!user) {
          return next(new ErrorHandler("User doesn't exists", 400));
        }
  
        res.status(200).json({
          success: true,
          user,
        });
      } catch (error) {
        return next(new ErrorHandler(error.message, 500));
      }
    })
  );
  
  

module.exports = router;
