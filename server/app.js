const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());



app.listen(3000 , ()=>{
    console.log("The port is running at 3000");
});