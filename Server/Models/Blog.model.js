const mongoose=require('mongoose');

const {Schema}=mongoose;

const BlogSchema=new Schema({
    title:{
        type:String,
        require:true,
    },
    aboutblog: {
        type:String,
        require:true,
    },
    coverpic: {
        type:String,
        require:true,
    },
    categories: {
        type:Array,
        require:true,
    },
    profilepic:{
        type:String,
        require:true,
    },
    firstname:{
        type:String,
        require:true,
    },
    userid:{
        type:String,
        require:true,
    },
    likes:{
        type:Number,
        require:false,
    }

},{
    timestamps:true,
})

module.exports=mongoose.model('Blog',BlogSchema);