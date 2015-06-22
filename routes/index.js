var express = require('express');
var router = express.Router();
var cheerio = require('cheerio');
var md2resume = require('markdown-resume');

/* GET home page. */
router.get('/', function(req, res, next) {

    md2resume.generate('resume.md', function(err, out) {
        res.setHeader('Content-Type', 'text/html');

        var $ = cheerio.load(out);
        $('style').remove();
        $('head').append('<link rel="stylesheet" type="text/css" href="stylesheets/resume.css">');
        res.send($.html());
    });
});

module.exports = router;
