const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());



app.get("/intern-data", (req, res) => {
  res.json({
    name: "Hemant Sharma",
    referral: "hemant2025",
    donations: 4720,
  });
});


app.listen(3000 , ()=>{
    console.log("The port is running at 3000");
});