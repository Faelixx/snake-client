const hostPort = {
  host: 'localhost',
  port: 50541
}

const cmdLineName = process.argv.slice(2);

const keyCommands = {
  'w': "Move: up",
  'a': "Move: left",
  's': "Move: down",
  'd': "Move: right",
  'f': "Say: 2 ez cuz",
  'v': "Say: pog",
  'x': 'Say: lol',
  'r': "Say: (o′┏▽┓｀o)"
};

  



module.exports = { 
  hostPort,
  cmdLineName,
  keyCommands
};