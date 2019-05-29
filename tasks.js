const serverless = require('serverless-http');
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

app.get('/tasks', function (request, response) {

  const username = request.query.username;

  const todoList = request.query.tasks;

  // const someJson = {
  //   message: "Hello " + username + ", how are you? You have the following tasks to complete today: "
  // };
  // const someJson = {
  //   tasks: "Hello " + username + ", here are your tasks: " + tasks;
  // }
  const someJson = [tasks];
  response.json(someJson);
})

module.exports.handler = serverless(app);