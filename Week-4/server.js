
'use strict';

const express = require('express');
const app = express();
const res = require("express/lib/response")

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';
const add = (n1, n2) => {
  return n1 + n2
}

const sub = (n1, n2) => {
  return n1 - n2
}

const mult = (n1, n2) => {
  return n1 * n2
}
const div = (n1, n2) => {
  return n1 / n2
}

app.get("/add", (req, res) => {
  try {
      const n1 = parseFloat(req.query.n1);
      const n2 = parseFloat(req.query.n2);
      if (isNaN(n1)) {
          throw new Error("n1 incorrectly defined");
      }
      if (isNaN(n2)) {
          throw new Error("n2 incorrectly defined");
      }

      const result = add(n1, n2);
      res.status(200).json({ statuscode: 200, data: result })
  } catch (error) {
      console.error(error)
      res.status(500).json({ statuscode: 500, msg: error.toString() })
  }
});

app.get("/sub", (req, res) => {
  try {
      const n1 = parseFloat(req.query.n1);
      const n2 = parseFloat(req.query.n2);
      if (isNaN(n1)) {
          throw new Error("n1 incorrectly defined");
      }
      if (isNaN(n2)) {
          throw new Error("n2 incorrectly defined");
      }

      const result = sub(n1, n2);
      res.status(200).json({ statuscode: 200, data: result })
  } catch (error) {
      console.error(error)
      res.status(500).json({ statuscode: 500, msg: error.toString() })
  }
});

app.get("/mult", (req, res) => {
  try {
      const n1 = parseFloat(req.query.n1);
      const n2 = parseFloat(req.query.n2);
      if (isNaN(n1)) {
          throw new Error("n1 incorrectly defined");
      }
      if (isNaN(n2)) {
          throw new Error("n2 incorrectly defined");
      }
      const result = sub(n1, n2);
      res.status(200).json({ statuscode: 200, data: result })
  } catch (error) {
      console.error(error)
      res.status(500).json({ statuscode: 500, msg: error.toString() })
  }
});

app.get("/div", (req, res) => {
  try {
      const n1 = parseFloat(req.query.n1);
      const n2 = parseFloat(req.query.n2);
      if (isNaN(n1)) {
          throw new Error("n1 incorrectly defined");
      }
      if (isNaN(n2)||n2==0) {
          throw new Error("n2 incorrectly defined");
      }

      const result = div(n1, n2);
      res.status(200).json({ statuscode: 200, data: result })
  } catch (error) {
      console.error(error)
      res.status(500).json({ statuscode: 500, msg: error.toString() })
  }
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});