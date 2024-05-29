import { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";


const Article = () => {
    const params = useParams();
    const [articles, setArticles] = useState([]);
    const [visibleCount, setVisibleCount] = useState(3);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // Fetch initial articles
        fetchArticles();
    }, []);

    const fetchArticles = async () => {
        setLoading(true);
        // Mock API call
        setTimeout(() => {
            const allArticles = Array.from({ length: 9 }, (_, index) => ({
                id: index + 1,
                title: `Article ${index + 1}`,
                content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel sapien et massa dapibus semper...`,
            }));
            setArticles(allArticles);
            setLoading(false);
        }, 1000);
    };

    const loadMoreArticles = () => {
        setVisibleCount(prevCount => prevCount + 3);
    };

    return (
        <>
            
            <div className="flex items-center justify-center mt-5">
                <div className="flex w-[30%]">
                    <input
                        type="text"
                        className="block w-full px-4 py-2 rounded-l-md text-[#FFB340] bg-[#031000] border-[2px] border-black focus:border-[#FFB340] focus:border-[2px] focus:border-r-0 focus:outline-none"
                        placeholder="Explore World..."
                    />
                    <button className="px-4 text-white rounded-r-md bg-[#FFB340] focus:border-[2px] focus:border-black">
                        Search
                    </button>
                </div>
            </div>

            <h2 className="text-xl px-52 py-3 font-bold text-gray-400 dark:text-white">
                Popular Searches
            </h2>
            <div>
                <div className="flex flex-wrap py-3 gap-2 item-start justify-start px-52 dark:border-gray-600">
                    {["Fashion", "Food", "Travel", "Blog", "Health", "Education", "C++", "Web Development", "Cloth", "India", "Cooking"].map(category => (
                        <Link
                            key={category}
                            to={`/search/${category}`}
                            className="px-3 py-1 rounded-[4px] hover:bg-gray-800 bg-[#031000] text-[#FFB340]"
                        >
                            {category}
                        </Link>
                    ))}
                </div>
            </div>

            <h2 className="text-5xl px-52 py-3 font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent dark:text-white">
                {params.search}
            </h2>

            <div className="flex flex-col p-5 lg:px-48 lg:py-11">
                {loading ? (
                    <div className="text-center text-gray-400">Loading...</div>
                ) : (
                    <>
                        {articles.slice(0, visibleCount).map(article => (
                            <div key={article.id} className="bg-[#031000] text-gray-300 p-10 rounded-md mb-10">
                                <h1 className="font-bold text-2xl mb-2">{article.title}</h1>
                                <p className="my-7">{article.content}</p>
                                <Link to={`/article/${article.id}`} className="bg-[#FFB340] hover:bg-[#ffb340e7] text-black font-bold py-3 px-6 rounded-md">
                                    Read More...
                                </Link>
                            </div>
                        ))}
                        {visibleCount < articles.length && (
                            <div className="flex items-center justify-center">
                                <button onClick={loadMoreArticles} className="bg-[#FFB340] hover:bg-[#ffb340e7] text-black font-bold py-3 px-6 rounded-md">
                                    Load More...
                                </button>
                            </div>
                        )}
                    </>
                )}
            </div>
        </>
    );
};

export default Article;
