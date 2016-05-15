"use strict";
var express = require('express');
var util = require('util');
var router = express.Router();
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});
module.exports = router;

//# sourceMappingURL=index.js.map
