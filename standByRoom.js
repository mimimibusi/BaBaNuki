const express = require("express");
const router = express.Router();
const mysql = require("mysql");

const mysql_setting = {
  host: "localhost",
  user: "root",
  password: "",
  database: "babanuki",
};

import { getAllRooms } from "./infrastructure/repositories/room";

router.get("/", (req, res) => {
  const rooms = getAllRooms();
});

module.exports = router;
