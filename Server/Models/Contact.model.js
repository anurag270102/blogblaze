const mongoose=require('mongoose');

const { Schema } = mongoose;

const Contact=new Schema({
    name:{
        require:true,
        type:String,
    },
    email:{
        require:true,
        type:String,
    },
    message:{
        require:true,
        type:String,
    }
},{
    timestamps:true,
});

module.exports=mongoose.model('Contact',Contact);