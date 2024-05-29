import { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Allpost = () => {
    const params = useParams();
    const [posts, setPosts] = useState([]);
    const [visibleCount, setVisibleCount] = useState(6);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        setLoading(true);
        
        setTimeout(() => {
            const allPosts = Array.from({ length: 15 }, (_, index) => ({
                id: index + 1,
                title: `In usu laoreet repudiare legendo`,
                date: `January ${index + 1}, 2021`,
                description: `Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.`,
                imageUrl: "/src/assets/Colorful Modern Concept Free B Logo (1).png",
            }));
            setPosts(allPosts);
            setLoading(false);
        }, 1000);
    };

    const loadMorePosts = () => {
        setVisibleCount(prevCount => prevCount + 3);
    };

    return (
        <>
            <Navbar />
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

            <section className="dark:bg-[#031000] dark:text-gray-800">
                <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                    {loading ? (
                        <div className="text-center text-gray-400">Loading...</div>
                    ) : (
                        <>
                            <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                {posts.slice(0, visibleCount).map(post => (
                                    <Link
                                        key={post.id}
                                        rel="noopener noreferrer"
                                        to={`/blog/${post.id}`}
                                        className="max-w-sm mx-auto rounded-md group hover:no-underline focus:no-underline dark:bg-gray-50 bg-[#031000] text-gray-400 hover:shadow-lg"
                                    >
                                        <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={post.imageUrl} alt="" />
                                        <div className="p-6 space-y-2 ">
                                            <div className='flex gap-5'>
                                                <img src={post.imageUrl} className=' w-10 rounded-full'></img>
                                                <p>anurag</p>
                                            </div>
                                            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline text-[#FFB340]">{post.title}</h3>
                                            <span className="text-xs dark:text-gray-600">{post.date}</span>
                                            <p className="text-gray-400">{post.description}</p>
                                        </div>
                                    </Link>
                                    
                                ))}
                            </div>
                            {visibleCount < posts.length && (
                                <div className="flex items-center justify-center">
                                    <button onClick={loadMorePosts} className="bg-[#FFB340] hover:bg-[#ffb340e7] text-black font-bold py-3 px-6 rounded-md">
                                        Load More...
                                    </button>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Allpost;
