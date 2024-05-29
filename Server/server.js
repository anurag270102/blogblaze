const express = require('express');
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const dotenv = require('dotenv');
const app = express();
const {Createuser}=require('./Controllers/Register/CreateUser')
const {Loginuser}=require('./Controllers/Login/Login');
const {Contactuser}=require('./Controllers/Contact/Contact');
const { Blog } = require('./Controllers/Blog/Blog');

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
app.post('/contact', Contactuser)
app.post('/addblog',Blog);
app.listen(5000, () => {
    connect();
    console.log('backend running');
})