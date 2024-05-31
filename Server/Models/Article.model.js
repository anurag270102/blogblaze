const mongoose=require('mongoose');

const {Schema}=mongoose;

const ArticleSchema=new Schema({
    title:{
        type:String,
        require:true,
    },
    aboutarticle: {
        type:String,
        require:true,
    },
    categories: {
        type:Array,
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
},{
    timestamps:true,
})

module.exports=mongoose.model('Article',ArticleSchema);