const db = require("../db-config");

function getResources() {
  return db("Resources");
}
async function createResource(body) {
  await db("Resources").insert(body);
  return getResources();
}

module.exports = { getResources, createResource };
