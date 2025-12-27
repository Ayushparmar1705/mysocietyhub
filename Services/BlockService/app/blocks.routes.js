const express = require("express");

const router = express.Router();
const BlockController = require("./blocks.controller");
const bc = new BlockController();
router.post("/create-block",bc.create.bind(bc));
router.get("/view-block",bc.view.bind(bc));

module.exports = router
