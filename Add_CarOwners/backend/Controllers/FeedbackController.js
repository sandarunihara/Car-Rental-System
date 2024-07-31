import Customer_fb from "../models/Customer_fb.js";

export async function addCommentcontroller(req, res) {
    try {
        const { comment } = req.body;
        const newComment = new Customer_fb({ comment });
        await newComment.save();

        res.status(200).json({
            message: "Comment Added",
            error: false,
            success: true,
            data: newComment
        });
    } catch (err) {
        res.status(400).json({
            message: err.message || err,
            error: true,
            success: false
        });
    }
}

export async function displayCommentcontroller(req, res) {
    try {
        const { comment } = req.body;
        const foundComment = await Customer_fb.findOne({ comment });

        if (!foundComment) {
            return res.status(404).json({
                message: "Comment not found",
                error: true,
                success: false
            });
        }
        res.status(200).json({
            message: "Display Comment",
            error: false,
            success: true,
            data: foundComment
        });
    } catch (err) {
        res.status(400).json({
            message: err.message || err,
            error: true,
            success: false
        });
    }
}

export async function updateCommentcontroller(req, res) {
    try {
        const { id, comment } = req.body;

        const updatedComment = await Customer_fb.findByIdAndUpdate(
            id,
            { comment },
            { new: true, runValidators: true }
        );
        if (!updatedComment) {
            return res.status(404).json({
                message: "Comment not found",
                error: true,
                success: false,
            });
        }
        res.status(200).json({
            message: "Comment Updated",
            error: false,
            success: true,
            data: updatedComment
        });
    } catch (err) {
        res.status(400).json({
            message: err.message || err,
            error: true,
            success: false,
        });
    }
}

export async function deleteCommentcontroller(req, res) {
    try {
        const { id } = req.body;
        const deletedComment = await Customer_fb.findByIdAndDelete(id);

        if (!deletedComment) {
            return res.status(404).json({
                message: "Comment not found",
                error: true,
                success: false,
            });
        }
        res.status(200).json({
            message: "Comment Deleted",
            error: false,
            success: true,
            data: deletedComment,
        });
    } catch (err) {
        res.status(400).json({
            message: err.message || err,
            error: true,
            success: false,
        });
    }
}








// const Customer_fb = require("../models/Customer_fb");

// async function addCommentcontroller(req,res){
//     try{
//         const { comment } = req.body;
//         const newComment = new Customer_fb({ comment });
//         await newComment.save();

//         res.status(200).json({
//             message:"Comment Added",
//             error: false,
//             success: true,
//             data: newComment
//         })
//     }catch (err) {
//         res.status(400).json({
//             message:err.message || err,
//             error: true,
//             success: false
//         })
//     }
// }


// async function displayCommentcontroller(req,res){
//     try{
//         const { comment } =req.body;
//         const foundComment = await Customer_fb.findOne({ comment });

//         if (!foundComment) {
//             return res.status(404).json({
//                 message: "Comment not found",
//                 error: true,
//                 success: false
//             });
//         }
//         res.status(200).json({
//             message: "Display Comment",
//             error: false,
//             success: true,
//             data: foundComment
//         });

//     }catch (err) {
//         res.status(400).json({
//             message: err.message || err,
//             error: true,
//             success: false
//         });
//     }
// }


// async function updateCommentcontroller(req,res){
//     try{
//         const { id,comment } = req.body;

//         const updatedComment = await Customer_fb.findByIdAndUpdate(
//             id,
//             { comment },
//             { new: true, runValidators: true }
//         );
//         if (!updatedComment) {
//             return res.status(404).json({
//                 message: "Comment not found",
//                 error: true,
//                 success: false,
//             });
//         }
//         res.status(200).json({
//             message: "Comment Updated",
//             error: false,
//             success: true,
//             data: updatedComment
//         });
//     } catch (err) {
//         res.status(400).json({
//             message: err.message || err,
//             error: true,
//             success: false,
//         });
//     }
// }

// async function deleteCommentcontroller(req,res) {
//     try{
//         const { id } = req.body;
//         const deletedComment = await Customer_fb.findByIdAndDelete(id);

//         if (!deletedComment) {
//             return res.status(404).json({
//                 message: "Comment not found",
//                 error: true,
//                 success: false,
//             });
//         }
//         res.status(200).json({
//             message: "Comment Deleted",
//             error: false,
//             success: true,
//             data: deletedComment,
//         });
//     } catch (err) {
//         res.status(400).json({
//             message: err.message || err,
//             error: true,
//             success: false,
//         });
//     }
// }

// module.exports = addCommentcontroller
// module.exports = displayCommentcontroller;
// module.exports = updateCommentcontroller;
// module.exports = deleteCommentcontroller;