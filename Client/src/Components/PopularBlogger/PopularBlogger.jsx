import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const PopularBlogger = () => {
    const [articles, setArticles] = useState([]);
    const item = '?search=3';
    const getarticles = async () => {
        try {
            const res = await axios.get(`http://localhost:5000/article${item}`)
            setArticles(res.data.articles);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        
        getarticles();
    }, []);
    return (<>
        <div className="px-48">
            <h1 className="text-5xl font-bold items-center flex justify-center bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-sm my-5 py-2">Articles</h1>
            <div>
                {articles.map(article => (
                    <div key={article.id} className="bg-[#031000] text-gray-300 p-10 rounded-md mb-10">
                        <h1 className="font-bold text-2xl mb-2">{article.title}</h1>
                        <p className="my-7">{article.content}</p>
                        <Link to={`/article/${article._id}`} className="bg-[#FFB340] hover:bg-[#ffb340e7] text-black font-bold py-3 px-6 rounded-md">
                            Read More...
                        </Link>
                    </div>
                ))}
                
            </div>
        </div>
    </>)
}
export default PopularBlogger;