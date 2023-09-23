const express = require("express");
const router = express.Router();
const cors = require('cors');

const userRoutes = require("./../domains/user");
const OTPRoutes = require("./../domains/otp")
const EmailVerificationRoutes = require("./../domains/email_verification");
const ForgotPasswordRoutes = require("./../domains/forgot_password");
const gameRoutes = require("./../domains/game");

router.use("/user", userRoutes);
router.use("/otp", OTPRoutes);
router.use("/email_verification", EmailVerificationRoutes);
router.use("/forgot_password", ForgotPasswordRoutes);
router.use("/game", gameRoutes);

router.use(express.json());
router.use(cors({
  origin: "http://localhost",
  credentials: true,
  allowedHeaders: [
    "set-cookie",
    "Content-Type",
    "Access-Control-Allow-Origin",
    "Access-Control-Allow-Credentials",
  ],
}));

module.exports = router;