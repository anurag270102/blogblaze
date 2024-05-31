const express = require('express');
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const dotenv = require('dotenv');
const app = express();
const {Createuser,getUserNumber}=require('./Controllers/Register/CreateUser')
const {Loginuser}=require('./Controllers/Login/Login');
const {Contactuser}=require('./Controllers/Contact/Contact');
const { Blog,GetBlog,GetUserBlog,BlogByBlogID } = require('./Controllers/Blog/Blog');
const {createCommnet,getCommnet,getCommnetByUser,getCommnetNumber}=require('./Controllers/Comment/Comment');
const {CreateArticle,GetAllArticle,GetArticleById}=require('./Controllers/Article/Article');
app.use(cors());
app.use(express.json());
dotenv.config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.DBURL)
        console.log('Database connect');
    } catch (error) {
        console.log(error);
    }
}
app.post('/register', Createuser)
app.post('/login', Loginuser)
app.get('/user',getUserNumber);
app.post('/contact', Contactuser)
app.post('/addblog',Blog);
app.get('/blog/:blogId',BlogByBlogID);
app.get('/blog',GetBlog);
app.get('/myprofile/:id',GetUserBlog);
app.post('/comment',createCommnet);
app.get('/comments',getCommnetNumber);
app.get('/comment/:blogId',getCommnet);
app.get('/mycomment/:id',getCommnetByUser);
app.post('/addarticle',CreateArticle);
app.get('/article',GetAllArticle);
app.get('/article/:articleId',GetArticleById);
app.listen(5000, () => {
    connect();
    console.log('backend running');
})