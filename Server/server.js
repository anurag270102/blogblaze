const express = require('express');
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const dotenv = require('dotenv');
const app = express();
const {Createuser}=require('./Controllers/Register/CreateUser')



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
app.listen(5000, () => {
    connect();
    console.log('backend running');
})