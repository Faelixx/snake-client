const constants = require('./constants.js');

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

const handleUserInput = (key) => {
  if (key === '\u0003') process.exit();
  if (constants.keyCommands.hasOwnProperty(key)) connection.write(constants.keyCommands[key]);
};


module.exports = { setupInput };