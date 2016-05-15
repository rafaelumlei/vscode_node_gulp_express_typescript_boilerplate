/// <reference path="../typings/main.d.ts"/>
import {Request, Response} from "express";
var express = require('express');
var util = require('util');
var router = express.Router();

/* GET home page. */
router.get('/', function(req: Request, res: Response, next: Function) {
  res.render('index', { title: 'Express' });
});

module.exports = router;