
const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
app.use(express.json());

app.use(cors());
const broutes = require("./blocks.routes");
app.use("/superadmin",broutes);



app.listen(8001,()=>{
    console.log("Server listing at = ",8001);
});