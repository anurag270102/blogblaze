import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { format, parseISO } from 'date-fns';

const Myprofile = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [data, setData] = useState(null);
    const [userpost, setuserpost] = useState([]);
    const [userarticel, setuserarticle] = useState([]);
    const [getComments, setGetComments] = useState([]);
    const [deletemessage, setdeletemessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [visibleCount, setVisibleCount] = useState(3);

    const navigate = useNavigate();
    useEffect(() => {
        const user = localStorage.getItem('currentuser');
        if (user) {
            setIsAuthenticated(true);
            setData(JSON.parse(user));
        }
    }, []);
    const { id } = useParams();
    const fetchblogOfUser = async () => {
        try {
            const res = await axios.get(`http://localhost:5000/myprofile/${id}`)
            // console.log(res);
            setuserpost(res.data.allblog)
        } catch (error) {
            console.log(error);
        }
    }
    const fetcharticleOfUser = async () => {
        try {
            setLoading(true);
            const res = await axios.get(`http://localhost:5000/myarticle/${id}`)
            setuserarticle(res.data.allarticle)
            console.log(userarticel)
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    }
    const fetchCommentOfUser = async () => {
        try {
            const res = await axios.get(`http://localhost:5000/mycomment/${id}`)
            setGetComments(res.data.comments);
        } catch (error) {
            console.log(error);
        }
    }

    const handleDelete = async (postId) => {
        try {
            const res = await axios.delete(`http://localhost:5000/deletepost/${postId}`)
            if (res) setdeletemessage(res.data.message);
        } catch (error) {
            console.log(error);
        }
        setTimeout(() => {
            setdeletemessage(null);
        }, 3000);
    };
    useEffect(() => {
        fetchblogOfUser();
        fetchCommentOfUser();
        fetcharticleOfUser();
        // handleDelete();
    }, [deletemessage]);

    // console.log(data);
    if (!data) {
        return <div>Loading...</div>; // Add a loading state
    }


    const formatDateTime = (dateTime) => {
        const date = parseISO(dateTime);
        return format(date, "do MMMM, h:mm ");
    };

    const loadMoreArticles = () => {
        setVisibleCount(prevCount => prevCount + 3);
    };

    const truncateText = (text, maxLength) => {
        return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
    };

    return (
        <>
            <Navbar />
            <section className="w-full overflow-hidden dark:bg-gray-900">
                <div className="w-full mx-auto">
                    {/* User Cover IMAGE */}
                    <img
                        src={isAuthenticated ? data[0].coverpic : "https://images.unsplash.com/photo-1560697529-7236591c0066?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMHx8Y292ZXJ8ZW58MHwwfHx8MTcxMDQ4MTEwNnww&ixlib=rb-4.0.3&q=80&w=1080"}
                        alt="User Cover"
                        className="w-full xl:h-[20rem] lg:h-[22rem] md:h-[16rem] sm:h-[13rem] xs:h-[9.5rem]"
                    />

                    {/* User Profile Image */}
                    <div className="w-full mx-auto flex justify-center">
                        <img
                            src={isAuthenticated ? data[0].profilepic : "https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"}
                            alt="User Profile"
                            className="rounded-full object-cover xl:w-[16rem] xl:h-[16rem] lg:w-[16rem] lg:h-[16rem] md:w-[12rem] md:h-[12rem] sm:w-[10rem] sm:h-[10rem] xs:w-[8rem] xs:h-[8rem] outline outline-2 outline-offset-2 outline-yellow-500 shadow-xl relative xl:bottom-[7rem] lg:bottom-[8rem] md:bottom-[6rem] sm:bottom-[5rem] xs:bottom-[4.3rem]"
                        />
                    </div>

                    <div className="xl:w-[80%] lg:w-[90%] md:w-[94%] sm:w-[96%] xs:w-[92%] mx-auto flex flex-col gap-4 justify-center items-center relative xl:-top-[6rem] lg:-top-[6rem] md:-top-[4rem] sm:-top-[3rem] xs:-top-[2.2rem]">
                        {/* FullName */}
                        <h1 className="text-center bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent dark:text-white text-4xl font-serif">
                            {data[0].firstname ? `${data[0].firstname} ${data[0].lastname}` : 'John Doe'}
                        </h1>

                        {/* About */}
                        <p className="max-w-6xl p-6 mx-auto text-gray-700 dark:text-gray-400 text-[15px] text-pretty text-justify">
                            {isAuthenticated ? data[0].aboutyourself : 'Lorem ipsum dolor sit amet...'}
                        </p>

                        {/* Social Links */}
                        <div className="px-2 flex rounded-sm bg-gray-200 text-gray-500 dark:bg-gray-700 dark:bg-opacity-30 dark:text-gray-700 hover:text-gray-600 hover:dark:text-gray-400">
                            <Link to={isAuthenticated ? data[0].instagramurl : '/'} target='_blank'>
                                <div className="p-2 hover:text-primary hover:dark:text-primary">
                                    <svg className="w-8 h-8 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" fill="#FFB340" viewBox="0 0 24 24">
                                        <path fillRule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clipRule="evenodd" />
                                        <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                                    </svg>
                                </div>
                            </Link>
                            <Link to={isAuthenticated ? data[0].twitterurl : '/'} target='_blank'>
                                <div className="p-2 hover:text-primary hover:dark:text-primary">
                                    <svg className="w-8 h-8 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" fill="#FFB340" viewBox="0 0 24 24">
                                        <path d="M13.795 10.533L20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z" />
                                    </svg>
                                </div>
                            </Link>
                            <Link to={isAuthenticated ? data[0].facebookurl : '/'} target='_blank'>
                                <div className="p-2 hover:text-blue-500 hover:dark:text-blue-500">
                                    <svg className="w-8 h-8 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" fill="#FFB340" viewBox="0 0 24 24">
                                        <path fillRule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </Link>
                            <Link to={isAuthenticated ? data[0].youtubeurl : '/'} target='_blank'>
                                <div className="p-2 hover:text-primary hover:dark:text-primary">
                                    <svg className="w-8 h-8 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" fill="#FFB340" viewBox="0 0 24 24">
                                        <path fillRule="evenodd" d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.158 0 6.927-.2a2.84 2.84 0 0 0 1.983-.848 4.24 4.24 0 0 0 .79-1.972c.133-1.058.198-2.124.2-3.19V11.24a29.49 29.49 0 0 0-.213-3.204ZM9.943 14.993V9.007l4.857 2.993-4.857 2.993Z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='flex w-full justify-between px-52'>
                    <h1 className="text-3xl py-2 font-bold  items-center flex justify-start bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-sm ">Post</h1>
                    <button className="block  bg-[#FFB340] hover:bg-[#FFB340e5]  text-black rounded-lg px-6 py-3 font-semibold" onClick={() => navigate('/addblog')}>Add Blog</button>
                </div>
                <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">

                    <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            deletemessage ? <div className='text-red-600 text-xl'>
                                {deletemessage}
                            </div> : null
                        }
                        {
                            userpost.map((post) => {
                                return (
                                    <div key={post._doc._id} className="relative">
                                        <Link
                                            rel="noopener noreferrer"
                                            to={`/blog/${post._doc._id}`}
                                            className="max-w-sm mx-auto rounded-md group hover:no-underline focus:no-underline dark:bg-gray-50 bg-[#031000] text-gray-400 hover:shadow-lg"
                                        >
                                            <img
                                                role="presentation"
                                                className="object-cover w-full rounded h-44 dark:bg-gray-500"
                                                src={post._doc.coverpic}
                                                loading="lazy"
                                            />
                                            <div className="p-6 space-y-2">
                                                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline text-[#FFB340]">
                                                    {post._doc.title}
                                                </h3>
                                                <span className="text-xs dark:text-gray-600">
                                                    {formatDateTime(post.createdAt)}
                                                </span>
                                                <p className="text-gray-400">
                                                    {truncateText(post._doc.aboutblog, 100)}
                                                </p>
                                            </div>
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(post._doc._id)}
                                            className="absolute top-0 right-0 m-2 p-2 bg-[#FFB340] text-white rounded-full hover:bg-[#ffb340be] focus:bg-[#f2b458]"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                                                <path d="M9 3V4H4V6H5V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V6H20V4H15V3H9ZM7 6H17V19H7V6ZM9 8V17H11V8H9ZM13 8V17H15V8H13Z" />
                                            </svg>

                                        </button>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
                <div className='flex w-full justify-between px-52'>
                    <h1 className="text-3xl py-2 font-bold  items-center flex justify-start bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-sm ">Article</h1>
                    <button className="block  bg-[#FFB340] hover:bg-[#FFB340e5]  text-black rounded-lg px-6 py-3 font-semibold" onClick={() => navigate('/addarticle')}>Add Article</button>
                </div>
                <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">

                    
                        
                        
                          {loading ? (
                            <div className="text-center text-gray-400">Loading...</div>
                        ) : (
                            <>
                                {
                                userarticel.length>=1?userarticel.slice(0, visibleCount).map(article => (
                                    <div key={article._doc.id} className="bg-[#031000] text-gray-300 p-10 rounded-md mb-10">
                                        <h1 className="font-bold text-2xl mb-2">{article._doc.title}</h1>
                                        <p className="my-7">{article._doc.content}</p>
                                        <Link to={`/article/${article._doc._id}`} className="bg-[#FFB340] hover:bg-[#ffb340e7] text-black font-bold py-3 px-6 rounded-md">
                                            Read More...
                                        </Link>
                                    </div>
                                )):null}

                                {visibleCount < userarticel.length && (
                                    <div className="flex items-center justify-center">
                                        <button onClick={loadMoreArticles} className="bg-[#FFB340] hover:bg-[#ffb340e7] text-black font-bold py-3 px-6 rounded-md">
                                            Load More...
                                        </button>
                                    </div>
                                )}
                            </>
                        )} 
                        
                    
                </div>
                <h1 className="text-3xl py-2 pl-52 font-bold  items-center flex justify-start bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-sm ">My Comments</h1>
                <div className='flex justify-cetnter items-center  gap-10 my-10 flex-wrap px-52 ' >
                    {getComments.map((comment, index) => (
                        <div className="flex  shadow-md" key={index}>
                            <div className="flex-shrink-0 p-2 mr-3">
                                <img className="mt-2 rounded-full  w-8 h-8 sm:w-10 sm:h-10" src={comment.profilepic} alt="" />
                            </div>
                            <div className="flex-1  rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
                                <strong>{comment.firstname}</strong> <span className="text-xs text-gray-400">{formatDateTime(comment.updatedAt)}</span>
                                <p className="text-sm">
                                    {
                                        comment.message
                                    }
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Myprofile;

