const express = require("express");
const teamsControllers = require("../../controllers/teams.controller");

const router = express.Router();


router
  .route("/")
  .get(teamsControllers.getAllTeams)
  .post(teamsControllers.saveATeam);

router
  .route("/invite")
  .get(teamsControllers.getAllInvitedTeams);

router
  .route("/taskInfo/:id")
  .get(teamsControllers.getTaskInfoDetail)
  .patch(teamsControllers.updateTaskInfo);

// router
//   .route("/progress/:id")
//   .patch(teamsControllers.updateTeamProgress);

router
  .route("/:id")
  .get(teamsControllers.getTeamDetail)
  .patch(teamsControllers.updateATeam)
// .delete(toolsControllers.deleteTool);

module.exports = router;