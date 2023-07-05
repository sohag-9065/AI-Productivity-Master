const express = require("express");
const teamsControllers = require("../../controllers/teams.controller");

const router = express.Router();



router
  .route("/")
  /**
   * @api {get} /teams All teams
   * @apiDescription Get all the teams
   * @apiPermission admin
   *
   * @apiHeader {String} Authorization   User's access token
   *
   * @apiParam  {Number{1-}}         [page=1]     List page
   * @apiParam  {Number{1-100}}      [limit=10]  Users per page
   *
   * @apiSuccess {Object[]} all the teams.
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
   */
  .get(teamsControllers.getAllTeams)

  /**
   * @api {post} /teams save a tool
   * @apiDescription Get all the teams
   * @apiPermission admin
   *
   * @apiHeader {String} Authorization   User's access token
   *
   * @apiParam  {Number{1-}}         [page=1]     List page
   * @apiParam  {Number{1-100}}      [limit=10]  Users per page
   *
   * @apiSuccess {Object[]} all the teams.
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
   */
  .post(teamsControllers.saveATeam);
 

  // router
  // .route("/:id")
  // .get(teamsControllers.getATeam);

  module.exports = router;