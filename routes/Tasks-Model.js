const db = require("../db-config");

function getTasks() {
  return db("Tasks as t")
    .join("Projects as p", "p.id", "t.Project_Id")
    .select(
      "t.id",
      "t.Contents",
      "t.Notes",
      "t.Task_Completion",
      "p.Name",
      "p.Description"
    );
}

function createTask(body) {
  db("Tasks").insert(body);
  return getTasks();
}

module.exports = { getTasks, createTask };
