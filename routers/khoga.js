const express = require('express');
const router = express.Router();
const controllerkhoga = require('../controllers/khoga');

router.get("", controllerkhoga.khoga);
router.get("/khogalachanh", controllerkhoga.khogalachanh);
router.get("/khogabotoi", controllerkhoga.khogabotoi);
router.get("/khogacay", controllerkhoga.khogacay);


module.exports = router;