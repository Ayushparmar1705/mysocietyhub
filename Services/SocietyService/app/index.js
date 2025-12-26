
const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
app.use(express.json());

app.use(cors());
const sroutes = require("./society.routes.js");
app.use("/superadmin",sroutes);



app.listen(8000,()=>{
    console.log("Server listing at = ",8000);
});