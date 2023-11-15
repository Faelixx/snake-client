let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  stdin.on("data", send);
  return stdin;
};

const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === 'w') connection.write("Move: up");
  if (key === 'a') connection.write("Move: left");
  if (key === 's') connection.write("Move: down");
  if (key === 'd') connection.write("Move: right");
};

const send = (msg) => {
  if (msg === 'f') connection.write("Say: 2 ez cuz");
  if (msg === 'v') connection.write("Say: pog");
  if (msg === 'x') connection.write('Say: lol');
  if (msg === 'r') connection.write("Say: (o′┏▽┓｀o)");
};

module.exports = { setupInput };