
'use strict';

const express = require('express');
const app = express();
const res = require("express/lib/response")
const fs = require('fs');
const winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'calculate-service' },
    transports: [
        
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' }),
    ],
});
// Constants
const PORT = 8080;
const HOST = '0.0.0.0';


//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
      format: winston.format.simple(),
  }));
}
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
          logger.error("n1 incorrectly defined");
          throw new Error("n1 incorrectly defined");
      }
      if (isNaN(n2)) {
          logger.error("n2 incorrectly defined");
          throw new Error("n2 incorrectly defined");
      }

      logger.info("Paramenters" + n1 + 'and' + n2 + 'received for addition')
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
          logger.error("n1 incorrectly defined");
          throw new Error("n1 incorrectly defined");
      }
      if (isNaN(n2)) {
          logger.error("n2 incorrectly defined");
          throw new Error("n2 incorrectly defined");
      }

      logger.info("Paramenters" + n1 + 'and' + n2 + 'received for subtraction')
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
          logger.error("n1 incorrectly defined");
          throw new Error("n1 incorrectly defined");
      }
      if (isNaN(n2)) {
          logger.error("n2 incorrectly defined");
          throw new Error("n2 incorrectly defined");
      }

      logger.info("Paramenters" + n1 + 'and' + n2 + 'received for multiplication')
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
          logger.error("n1 incorrectly defined");
          throw new Error("n1 incorrectly defined");
      }
      if (isNaN(n2)||n2==0) {
          logger.error("n2 incorrectly defined");
          throw new Error("n2 incorrectly defined");
      }

      logger.info("Paramenters" + n1 + 'and' + n2 + 'received for subtraction')
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