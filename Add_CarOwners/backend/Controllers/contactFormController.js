import Contact_form from "../models/ContactFormModel";

export async function addCommentscontroller(req, res) {
    try {
        const { comment, name} = req.body;
        const newComment = new Contact_form({ comment, name });
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