const express = require('express');
const path = require('path');
// const cors = require('cors');
const bodyParser = require('body-parser');


const gitController = require('./controller/gitController');

const PORT = 3000;
const app = express();

// app.use(express.json());
// app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extened: true
}));

app.use(express.static(path.resolve(__dirname, '../build')));

app.get('/', (req, res) => {
  return res.sendFile(path.resolve(__dirname, '../client/index.html'));
});

app.get('/connected', gitController.sayConnected, (req, res) => {
  console.log(req)
  return res.status(200).send(res.locals.say);

});

app.put('/users/:id', gitController.getUser, gitController.getRepos, (req, res) => {
  console.log(req.body)
  // deconstruct login, userUrl and repos_url properties from the res.locals object
  const {
    login,
    userUrl,

  } = res.locals
  return res.status(200).json({
    login,
    userUrl,

  });

});

const server = app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});

module.exports = app;