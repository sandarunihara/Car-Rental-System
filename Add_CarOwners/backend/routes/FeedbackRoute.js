const express=require("express");
const router = express.Router();

const addCommentcontroller = require("../Controllers/FeedbackController.js");
const displayCommentcontroller = require("../Controllers/FeedbackController.js");
const updateCommentcontroller = require("../Controllers/FeedbackController.js");
const deleteCommentcontroller = require("../Controllers/FeedbackController.js");

//feedback
router.post('/addfeedback',addCommentcontroller);
router.post('/displayfeedback',displayCommentcontroller);
router.put('/updatefeedback',updateCommentcontroller);
router.delete('/deletefeedback',deleteCommentcontroller);



export default router;