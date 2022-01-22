const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");

const UsersController = require("../controllers/sales");

// router
//   .post("/:o_id/addsales", auth, UsersController.addsales)
//   .get("/:o_id/getallsales", auth, UsersController.allsales);
// // .put("/:o_id/:id/update", auth, UsersController.updatesales);

router
  .post("/:o_id/addsales", UsersController.addsales)
  .get("/:o_id/getallsales", UsersController.allsales)
  .post("/:o_id/getonesales", UsersController.getonesales);

module.exports = router;
