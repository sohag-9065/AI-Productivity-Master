const express = require("express");
const usersControllers = require("../../controllers/users.controller");

const router = express.Router();
 
router
  .route("/")
  .get(usersControllers.getAllUsers)
  .post(usersControllers.saveAUser)
  .patch(usersControllers.updateAUser)

router
  .route("/name")
  .get(usersControllers.getAllUsersName);


module.exports = router;