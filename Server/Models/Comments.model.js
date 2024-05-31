const mongoose=require('mongoose');

const {Schema}=mongoose;

const CommentSchema=new Schema({
    profilepic:{
        type:String,
        require:true,
    },
    firstname:{
        type:String,
        require:true,
    },
    message:{
        type:String,
        require:true,
    },
    blogid:{
        type:String,
        require:true,
    },
    userid:{
        type:String,
        require:true,
    }
},{
    timestamps:true,
})

module.exports=mongoose.model('Comments',CommentSchema);