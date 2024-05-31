const BlogSchema = require('../../Models/Blog.model');

//create blog
const Blog = async (req, res) => {
  try {
    const data = await BlogSchema(req.body);
    const Blogres = await data.save();
    return res.status(201).json({ message: 'success', Blog: Blogres })
  } catch (error) {
    console.log(error);
  }
}

//get all blog
const GetBlog = async (req, res) => {
  try {
    if (req.query.search == 1) {
      const allBlogs = (await BlogSchema.find({})).length;
      return res.status(201).json({ number: allBlogs });
    }
    if (req.query.search) {
      const allBlogs = await BlogSchema.find({
        categories: { $regex: new RegExp(req.query.search, 'i') }
      }).sort({ createdAt: -1 });

      const formattedBlogs = allBlogs.map(blog => ({
        ...blog,
        createdAt: blog.createdAt.toISOString().split('T')[0],
        updatedAt: blog.updatedAt.toISOString().replace('T', ' ').split('.')[0]
      }));
      res.status(201).json({ allblog: formattedBlogs });
    } else {

      const allBlogs = await BlogSchema.find({}).sort({ createdAt: -1 });

      const formattedBlogs = allBlogs.map(blog => ({
        ...blog,
        createdAt: blog.createdAt.toISOString().split('T')[0],
        updatedAt: blog.updatedAt.toISOString().replace('T', ' ').split('.')[0]
      }));

      res.status(201).json({ allblog: formattedBlogs });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
}

//get blog of one user
const GetUserBlog = async (req, res) => {
  // console.log(req.params);
  try {
    const allBlogs = await BlogSchema.find({
      userid: req.params.id
    }).sort({ createdAt: -1 });
    const formattedBlogs = allBlogs.map(blog => ({
      ...blog,
      createdAt: blog.createdAt.toISOString().split('T')[0],
      updatedAt: blog.updatedAt.toISOString().replace('T', ' ').split('.')[0]
    }));
    res.status(201).json({ allblog: formattedBlogs });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
}

//get blog by blogID
const BlogByBlogID = async (req, res) => {
  // console.log(req.params);
  try {
    const Blog = await BlogSchema.findById({
      _id: req.params.blogId
    })
    res.status(201).json({ blog: Blog });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
}
module.exports = { Blog, GetBlog, GetUserBlog, BlogByBlogID };