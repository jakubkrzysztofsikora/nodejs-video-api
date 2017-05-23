var database = require('../database/db.config');
var Video = require('../models/video')(database);
var express = require('express');
var router = express.Router();

router.route('/videos').get((request, response) => {
    Video.findAll().then((videos) => {
        response.json(videos);
    });
});

router.route('/videos').post((request, response) => {
	

    Video.create({
		path: ""
	})
});

module.exports = router;