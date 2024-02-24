const express = require("express");
const fs = require("fs");
const path = require("path");
const route = express.Router();
const filePath = "../data.txt";
route.get("/", (req, res, next) => {
  res.send(
    "<html><body><form onsubmit='localStorage.setItem(`username`, document.getElementById(`username`).value)' action ='/login' method='POST'><input type='text' id ='username' name='title' /><button type='submit'>Submit</button></form></body></html>"
  );
});
route.post("/", (req, res, next) => {
  const filePath = path.join(__dirname, "../Message.txt");
  const data = req.body.title;
  fs.writeFile(filePath, data, (err) => {
    if (err) {
      console.error("Error writing to file:", err);
    } else {
      console.log("Data written to file successfully.");
    }
    res.redirect("/");
  });
});
module.exports = route;
