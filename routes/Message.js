const express = require("express");
const data = require("./data");
const route = express.Router();

route.get("/", (req, res, next) => {
  res.send(
    "<html ><body><form onsubmit='document.getElementById(`username`).value=localStorage.getItem(`username`)'  action='/'method='POST'><input type='text' id='message' name='message' placeHolder='message'/><input type='hidden' id='username' name='username'/><button type='submit'>Send</button></form></body></html>"
  );
});
route.post("/", (req, res, next) => {
  data.push(`${req.body.username}: ${req.body.message}`);
  console.log(`${req.body.username}: ${req.body.message}`);
  res.redirect("/");
});
module.exports = route;
