const express = require("express");
const router = express.Router();
const resourcesModel = require("./Resources-Model");

router.get(`/`, async (req, res, next) => {
  try {
    let resources = await resourcesModel.getResources();
    res.status(200).json(resources);
  } catch (err) {
    next(err);
  }
});

router.post(`/`, async (req, res, next) => {
  try {
    let resources = await resourcesModel.createResource(req.body);
    res.status(201).json(resources);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
