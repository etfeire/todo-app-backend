const serverless = require('serverless-http');
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

app.get('/tasks', function (request, response) {

  // const username = request.query.username;

  // const todoList = request.query.tasks;

  // const tasks = [
  //   {task: "Attend TechReturners course", completed: true, id: uuid()}, 
  //   {task: "Practise!", completed: false, id: uuid()}, 
  //   {task:"Do your homework", completed:false, id: uuid()}, 
  //   {task:"Build final project", completed: true, id: uuid()}, 
  //   {task:"Drink coffee", completed: false, id: uuid()},
  //   {task: "Apply to tech companies", completed: false, id: uuid()}
  // ];

  const someJson = {
    tasks: [
      {task: "Attend TechReturners course", completed: true, id: 1}, 
      {task: "Practise!", completed: false, id: 2}, 
      {task:"Do your homework", completed:false, id: 3}, 
      {task:"Build final project", completed: true, id: 4}, 
      {task:"Drink coffee", completed: false, id: 5},
      {task: "Apply to tech companies", completed: false, id: 6}
    ]
  };
  // const someJson = {
  //   message: "Hello " + username + ", how are you? You have the following tasks to complete today: "
  // };
  // const someJson = {
  //   tasks: "Hello " + username + ", here are your tasks: " + tasks;
  // }
  response.json(someJson);
})

module.exports.handler = serverless(app);