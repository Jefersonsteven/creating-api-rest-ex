const express = require('express');
const routerApi = require('../routes');

const app = express();
const port = 3013;

app.use(express.json());

app.get('/', (req, res) => {
  res.json(`Hi, It's my server rest API in express 🤩 ❤️ By: Jefferson`);
});

app.listen(port, () => {
  console.log(`My port is http://localhost:${port} 🚀`);
});

routerApi(app);
