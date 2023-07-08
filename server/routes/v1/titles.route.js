const express = require("express");
const titlesControllers = require("../../controllers/titles.controller");

const router = express.Router();


router
  .route("/")
  .get(titlesControllers.getAllTitles)
  .post(titlesControllers.saveATitle);
 


  module.exports = router;