
const ArticleSchema = require('../../Models/Article.model');

const CreateArticle = async (req, res) => {
    try {
        const data = await ArticleSchema(req.body);
        const Article = await data.save();
        res.status(201).json({ article: Article });
    } catch (error) {
        console.log(error);
    }
}

const GetAllArticle = async (req, res) => {
    if (req.query.search == 1) {
        try {
            const Allarticle = (await ArticleSchema.find({})).length;
            return res.status(201).json({ number: Allarticle });
        } catch (error) {
            console.log(error);
        }
    }
    if (req.query.search == 3) {
        try {
            const Allarticle = await ArticleSchema.find({}).sort({ createdAt: -1 });
            const sendData = Allarticle.slice(0, 2);
            return res.status(201).json({ articles: sendData });
        } catch (error) {
            console.log(error);
        }
    }
    if (req.query.search) {
        try {
            const Allarticle = await ArticleSchema.find({
                categories: { $regex: new RegExp(req.query.search, 'i') }
            }).sort({ createdAt: -1 });
            res.status(201).json({ articles: Allarticle });
        } catch (error) {
            console.log(error);
        }
    }
    else {
        try {
            const Allarticle = await ArticleSchema.find({}).sort({ createdAt: -1 });
            res.status(201).json({ articles: Allarticle });
        } catch (error) {
            console.log(error);
        }
    }
}

const GetArticleById = async (req, res) => {
    try {
        const OneArticle = await ArticleSchema.findById(
            { _id: req.params.articleId }
        )
        res.status(201).json({ article: OneArticle });
    } catch (error) {
        console.log(error);
    }
}
module.exports = { CreateArticle, GetAllArticle, GetArticleById };