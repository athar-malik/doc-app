const express = require("express");
const { loginControllers, registerControllers } = require("../controllers/userCtrls");

const router = express.Router();

// routes
// login || post
router.post('/login', loginControllers);
// register || post
router.post('/register', registerControllers);

// exports
module.exports = router;
