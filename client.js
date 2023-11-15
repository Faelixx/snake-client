const net = require("net");
const constants = require('./constants.js');


const connect = () => {
  const conn = net.createConnection(
    constants.hostPort
  );
  
  conn.setEncoding("utf8");
  conn.on('connect', () =>{
    console.log("Successfully connected to game server.");
    conn.write(`Name: ${constants.cmdLineName}`);
  });

  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });
  return conn;

};

module.exports = { connect };