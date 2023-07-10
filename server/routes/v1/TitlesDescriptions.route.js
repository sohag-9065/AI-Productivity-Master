const express = require("express");
const titlesDescriptionControllers = require("../../controllers/titlesDescription.controller");

const router = express.Router();


router
  .route("/")
  .get(titlesDescriptionControllers.getAllTitlesDescriptions)
  .post(titlesDescriptionControllers.saveATitleDescription);
 


  module.exports = router;