const CommentSchema = require('../../Models/Comments.model');
const createCommnet = async (req, res) => {
    try {
        const data = await CommentSchema(req.body);
        const comments = await data.save();
        res.status(201).json({ comments: comments });
    } catch (error) {
        console.log(error);
    }
}

//get Comments by Blog
const getCommnet = async (req, res) => {

    console.log(req.params.blogId);
    try {
        const data = await CommentSchema.find({
            blogid: req.params.blogId
        });
        //console.log(data);
        res.status(201).json({ comments: data });
    } catch (error) {
        console.log(error);
    }
}
const getCommnetNumber = async (req, res) => {
    // console.log(req.query);
    try {
            const data = (await CommentSchema.find({})).length;
            // console.log(data);
            return res.status(201).json({ number: data });  
    } catch (error) {
        console.log(error);
    }
}

//get Comments by User
const getCommnetByUser = async (req, res) => {
    console.log(req.params.id);
    try {
        const data = await CommentSchema.find({
            userid: req.params.id
        });
        //console.log(data);
        res.status(201).json({ comments: data });
    } catch (error) {
        console.log(error);
    }
}
module.exports = { createCommnet, getCommnet, getCommnetByUser, getCommnetNumber };