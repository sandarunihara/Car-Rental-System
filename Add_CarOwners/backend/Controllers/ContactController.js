import Contact_form from "../models/ContactFormModel.js";

export async function addcontactuscontroller(req, res) {
    try {
        const { message, name, email } = req.body;
        const newComment = new Contact_form({ message, name, email });
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



export async function displaycontactmsgcontroller(req, res) {
    try {
        
        const foundComments = await Contact_form.find();

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