const db = require("../db-config");

function getProjects() {
  return db("Projects");
}

async function createProject(body) {
  await db("Projects").insert(body);
  return db("Projects");
}

module.exports = { getProjects, createProject };
