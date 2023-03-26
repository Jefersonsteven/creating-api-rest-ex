const express = require('express');
const routerApi = require('../routes');

const app = express();
const port = 3012;

app.get('/', (req, res) => {
  res.json(`Hi, It's my server in express 🤩❤️`);
});

app.listen(port, () => {
  console.log(`My port is http://localhost:${port} 🚀`);
});

routerApi(app);
