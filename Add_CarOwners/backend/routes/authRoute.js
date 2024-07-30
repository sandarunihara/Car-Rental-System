import express from 'express';
import { signin, signup } from '../Controllers/authController.js';

const router = express.Router();

router.post("/signup",signup);
router.post("/signin",signin);


//customer feedback
const addCommentcontroller = require("../Controllers/FeedbackController.js");
const displayCommentcontroller = require("../Controllers/FeedbackController.js");
const updateCommentcontroller = require("../Controllers/FeedbackController.js");
const deleteCommentcontroller = require("../Controllers/FeedbackController.js");

router.post('/add',addCommentcontroller);
router.post('/display',displayCommentcontroller);
router.put('/update',updateCommentcontroller);
router.delete('/delete',deleteCommentcontroller);

export default router;