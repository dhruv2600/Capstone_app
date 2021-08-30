var express = require('express');
var router = express.Router();

// Require controller modules.
var course_controller = require('../controller/coursecontroller');



/// COURSE ROUTES ///

router.get('/',course_controller.course_index);

// GET request for creating Author. NOTE This must come before route for id (i.e. display author).
router.get('/course/create', course_controller.course_create_get);

// POST request for creating Author.
router.post('/course/create', course_controller.course_create_post);

// GET request to delete Author.
router.get('/course/:id/delete', course_controller.course_delete_get);

// POST request to delete Author.
router.post('/course/:id/delete',course_controller.course_delete_post);

// GET request to update Author.
router.get('/course/:id/update', course_controller.course_update_get);

// POST request to update Author.
router.post('/course/:id/update', course_controller.course_update_post);

// GET request for one Author.
router.get('/course/:id', course_controller.course_detail);

// GET request for list of all Authors.
router.get('/courses', course_controller.course_list);



module.exports = router;