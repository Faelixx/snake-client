// Constants are stored as object 
const constants = require('./constants.js');
const { clearInterval } = require('timers');

let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

// Interval ID for storing movement intervals
let intervalID;

const handleUserInput = function(key) {
  const intKey = function(key) {
    intervalID = setInterval(() => {
      connection.write(constants.keyMovements[key]);
    }, 100);
  }
  if (key === '\u0003') process.exit();
  if (constants.keyMovements.hasOwnProperty(key)) {
    clearInterval(intervalID);
    intKey(key);
    }
  if (constants.keyChat.hasOwnProperty(key)) connection.write(constants.keyChat[key]);
};






module.exports = { setupInput };