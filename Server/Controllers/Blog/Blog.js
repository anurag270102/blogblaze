const BlogSchema = require('../../Models/Blog.model');
const Blog = async (req, res) => {
    const data = await BlogSchema(req.body);
    const Blogres = await data.save();
    return res.status(201).json({ message: 'success', Blog: Blogres })
}
module.exports = { Blog };