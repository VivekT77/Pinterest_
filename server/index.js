const express=require('express')
const app=express()
require('dotenv').config()
const database = require("./config/database");
const PORT = process.env.PORT || 5000;
database.connect();

app.use(express.json());




app.get("/", (req, res) => {
    return res.json({
      success: true,
      message: "Your server is up and running....",
    });
  });
  
  app.listen(PORT, () => {
    console.log(`App is running at ${PORT}`);
  });
  