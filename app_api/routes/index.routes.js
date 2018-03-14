const express = require("express");
const router = express.Router();
const authRoutes = require("./auth/auth.routes");
const apiRoutes = require("./api/api.routes");
const jwt = require("express-jwt");
router.use("/auth", authRoutes);
// here goes my routes where you must be logged in to use
router.use(jwt({ secret: process.env.JWT_SECRET}));

router.use("/api", apiRoutes);

module.exports = router;