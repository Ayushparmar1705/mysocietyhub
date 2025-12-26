const express = require("express");

const router = express.Router();
const SocietyController = require("./society.controller");
const sc = new SocietyController();
router.post("/create-society",sc.create.bind(sc));
router.get("/view-society",sc.view.bind(sc));
router.get("/search-society/:society_name",sc.search.bind(sc));

module.exports = router
