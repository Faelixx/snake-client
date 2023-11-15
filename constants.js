const hostPort = {
  host: 'localhost',
  port: 50541
}

const cmdLineName = process.argv.slice(2);

module.exports = { 
  hostPort,
  cmdLineName
};