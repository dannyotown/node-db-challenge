const express = require("express");
const projectsModel = require("./Projects-Model");
const router = express.Router();

router.get(`/`, async (req, res, next) => {
  try {
    let projects = await projectsModel.getProjects();
    projects.forEach(project => {
      if (project.Completed == 0) {
        project.Completed = false;
      } else {
        project.Completed = true;
      }
    });
    res.status(200).json(projects);
  } catch (err) {
    next(err);
  }
});

router.post(`/`, async (req, res, next) => {
  try {
    let projects = await projectsModel.createProject(req.body);
    projects.forEach(project => {
      if (project.Completed == 0) {
        project.Completed = false;
      } else {
        project.Completed = true;
      }
    });
    res.status(201).json(projects);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
