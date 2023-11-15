const net = require("net");
const hostPort = require('./constants.js');


const connect = () => {
  const conn = net.createConnection(
    hostPort
  );
  
  conn.setEncoding("utf8");
  conn.on('connect', () =>{
    console.log("Successfully connected to game server.");
    conn.write("Name: FLXX");
  });

  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });
  return conn;

};

module.exports = { connect };