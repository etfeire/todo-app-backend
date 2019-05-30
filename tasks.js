const serverless = require('serverless-http');
const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql');
app.use(cors());

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: "tasks_new_instance"
});

app.get("/tasks", function(request, response) {
  // const username = request.query.username;
  let queryToExecute = "SELECT * FROM Task";
  // if (username) {
  //   query =
  //     "SELECT * FROM Task JOIN User on Task.UserId = User.UserId WHERE User.Username = " +
  //     connection.escape(username);
  // }
  connection.query(queryToExecute, (err, queryResults) => {
    if (err) {
      console.log("Error fetching tasks", err);
      response.status(500).json({
        error: err
      });
    } else {
      response.json({
        tasks: queryResults
      });
    }
  });
});

// app.get('/tasks', function (request, response) {

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

  // const someJson = {
  //   message: "Hello " + username + ", how are you? You have the following tasks to complete today: "
  // };
  // const someJson = {
  //   tasks: "Hello " + username + ", here are your tasks: " + tasks;
  // }
//   const someJson = {
//     tasks: [
//       {task: "Attend TechReturners course", completed: true, id: 1}, 
//       {task: "Practise!", completed: false, id: 2}, 
//       {task:"Do your homework", completed:false, id: 3}, 
//       {task:"Build final project", completed: true, id: 4}, 
//       {task:"Drink coffee", completed: false, id: 5},
//       {task: "Apply to tech companies", completed: false, id: 6}
//     ]
//   };
//   response.json(someJson);
// })

module.exports.handler = serverless(app);