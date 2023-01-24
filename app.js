const dotenv = require("dotenv");
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const path = require('path')

app.use(cookieParser());

dotenv.config({ path: "./config.env" });
require("./db/conn");
// const User = require('./model/userSchema')

app.use(express.json());

// link the router files to make our route easy
app.use(require("./router/auth"));

const PORT = process.env.PORT || 5000;


// if(process.env.NODE_ENV == "production"){
  // app.use(express.static("client/build"));
  // const path = require ("path");
  // app.get("*",(req,res)=>{
  //   res.sendFile(path.resolve(__dirname,'client','build','index.html')
  //   );
  // })
// }

app.use(express.static(path.join(__dirname, './client/build')));
app.get("*",function(req,res){
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});

app.listen(PORT, () => {
  console.log(`server is running at port no ${PORT}`);
});
