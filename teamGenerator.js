// fs is a Node standard library package for reading and writing files
const fs = require("fs");


const inquirer = require("inquirer");
const axios = require("axios");


// Data
// ===========================================================
inquirer
  .prompt([
    {
      type: "input",
      message: "What is your  GitHub user name?",
      name: "username"
    },
    {
      type: "input",
      message: "What is your email?",
      name: "email"
    },
    
  ])
  .then(function(response) {

   console.log(response);
  });

  axios.get(queryUrl).then(function(res) {
   
    });



// Routes
// ===========================================================




//============================================================
// return the contents of 'data.csv' as a string in the variable "data"
// "utf8" encodes the raw buffer data in human-readable format
fs.readFile("", "utf8", function(error, data) {

  if (error) {
    return console.log(error);
  }

  console.log(data);

});

fs.writeFile("", process.argv[2], function(err) {

  if (err) {
    return console.log(err);
  }

  console.log("Success!");

});






  