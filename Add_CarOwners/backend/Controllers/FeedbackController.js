import Customer_fb from "../models/Customer_fb.js";

export async function addCommentcontroller(req, res) {
    try {
        const { comment,name,carNo } = req.body;
        const newComment = new Customer_fb({ comment,name,carNo });
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
        
        const foundComments = await Customer_fb.find();

        if (!foundComments || foundComments.length === 0) {
            return res.status(404).json({
                message: "No comments found",
                error: true,
                success: false
            });
        }
        
        res.status(200).json({
            message: "Comments retrieved successfully",
            error: false,
            success: true,
            data: foundComments
        });
    } catch (err) {
        res.status(500).json({
            message: err.message || err,
            error: true,
            success: false
        });
    }
}



export async function updateCommentcontroller(req, res) {
    try {
        const { _id, comment,name,carNo} = req.body;

        const updatedComment = await Customer_fb.findByIdAndUpdate(
            _id,
            { comment,name,carNo },
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



