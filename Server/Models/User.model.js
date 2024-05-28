const mongoose =require('mongoose');

const { Schema } = mongoose;

const userSchema=new Schema({
    firstname:{
        type:String,
        require:true,
    },
    lastname:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
        unique:true,
    },
    password:{
        type:String,
        require:true,
    },
    aboutyourself:{
        type:String,
        require:true,
    },
    profilepic:{
        type:String,
        require:true,
    },
    instagramurl:{
        type:String,
        require:false,
    },
    twitterurl:{
        type:String, 
        require:false,   
    },
    youtubeurl:{
        type:String,
        require:false,
    },
    facebookurl:{
        type:String,
        require:false,
    },
},{
    timestamps:true
})

 module.exports=mongoose.model('User',userSchema);
        
       