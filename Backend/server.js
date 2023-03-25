const express = require("express");
require('dotenv').config({path:'./config.env'});
      
const app = express();

// set port, listen for requests
const PORT = process.env.BACKEND_PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

app.get('/hello_world',(req,res) => {
  return res.json({ "Hello": "World" });
});

