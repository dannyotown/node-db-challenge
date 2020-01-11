const express = require("express");
const router = express.Router();
const tasksModel = require("./Tasks-Model");

router.get("/", async (req, res, next) => {
  try {
    let Tasks = await tasksModel.getTasks();
    Tasks.forEach(task => {
      if (task.Task_Completion == 0) {
        task.Task_Completion = false;
      } else {
        task.Task_Completion = true;
      }
    });
    res.status(200).json(Tasks);
  } catch (err) {
    next(err);
  }
});

router.post(`/`, async (req, res, next) => {
  try {
    let Tasks = await tasksModel.createTask(req.body);
    Tasks.forEach(task => {
      if (task.Task_Completion == 0) {
        task.Task_Completion = false;
      } else {
        task.Task_Completion = true;
      }
    });
    res.status(201).json(Tasks);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
