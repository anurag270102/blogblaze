import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";

import axios from 'axios';
import { format, parseISO } from 'date-fns';

const Allpost = () => {
    const { search } = useLocation();
    const [posts, setPosts] = useState([]);
    const [visibleCount, setVisibleCount] = useState(6);
    const [loading, setLoading] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const navigator = useNavigate();
    console.log(search);

    useEffect(() => {
        fetchPosts();
    }, [search]);

    const fetchPosts = async () => {
        setLoading(true);
        setTimeout(async () => {
            try {
                const allPosts = await axios.get(`http://localhost:5000/blog${search}`);
                // console.log(allPosts.data.allblog);
                setPosts(allPosts.data.allblog);
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        }, 1000);
    };
    const loadMorePosts = () => {
        setVisibleCount(prevCount => prevCount + 3);
    };

    const formatDateTime = (dateTime) => {
        const date = parseISO(dateTime);
        return format(date, "do MMMM, h:mm ");
    };

    const getSearchItem = () => {
        navigator(`?search=${searchValue}`)
    }

    const truncateText = (text, maxLength) => {
        return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
    };
    return (
        <>

            <div className="flex items-center justify-center mt-5">
                <div className="flex w-[30%]">
                    <input
                        type="text"
                        className="block w-full px-4 py-2 rounded-l-md text-[#FFB340] bg-[#031000] border-[2px] border-black focus:border-[#FFB340] focus:border-[2px] focus:border-r-0 focus:outline-none"
                        placeholder="Explore World..."
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                    <button
                        onClick={getSearchItem}
                        className="px-4 text-white rounded-r-md bg-[#FFB340] focus:border-[2px] focus:border-black">
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
                            to={`?search=${category}`}
                            className="px-3 py-1 rounded-[4px] hover:bg-gray-800 bg-[#031000] text-[#FFB340]"
                        >
                            {category}
                        </Link>
                    ))}
                </div>
            </div>





            <section className="dark:bg-[#031000] dark:text-gray-800">
                <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                    {loading ? (
                        <div className="text-center text-gray-400">Loading...</div>
                    ) : (
                        <>
                            <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                {posts.slice(0, visibleCount).map(post => (
                                    <Link
                                        key={post._doc._id}
                                        rel="noopener noreferrer"
                                        to={`/blog/${post._doc._id}`}
                                        className="max-w-sm mx-auto rounded-md group hover:no-underline focus:no-underline dark:bg-gray-50 bg-[#031000] text-gray-400 hover:shadow-lg"
                                    >
                                        <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={post._doc.coverpic} alt="" />
                                        <div className="p-6 space-y-2 ">
                                            <div className='flex gap-5'>
                                                <img src={post._doc.profilepic} className=' w-10 rounded-full'></img>
                                                <div className='flex flex-col'>
                                                    <p className='font-semibold text-xl'>{post._doc.firstname}</p>
                                                    <span className="text-xs dark:text-gray-600">{formatDateTime(post.updatedAt)}</span>
                                                </div>
                                            </div>
                                            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline text-[#FFB340]">{post._doc.title}</h3>
                                            <p className="text-gray-400">{truncateText(post._doc.aboutblog, 100)}</p>

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

        </>
    );
};

export default Allpost;
