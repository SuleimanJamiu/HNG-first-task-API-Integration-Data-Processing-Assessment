const express = require("express");
const checkGender = require("../controller/genderizeController");
const cors = require("../middleware/coreMiddleware");

const router = express.Router();

router.get('/classify', cors, checkGender);


module.exports = router;