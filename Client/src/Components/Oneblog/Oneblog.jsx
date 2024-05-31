import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { format, parseISO } from 'date-fns';

const Oneblog = () => {
    const { blogId } = useParams();


    const [data, setData] = useState({});
    const [comment, setComment] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [datauser, setDatauser] = useState(null);
    const [getComments, setGetComments] = useState([]);
    useEffect(() => {
        const user = localStorage.getItem('currentuser');
        if (user) {
            setIsAuthenticated(true);
            setDatauser(JSON.parse(user));
        }

    }, []);

    useEffect(() => {
        fetchdata();
    }, []); // Add blogId to the dependency array

    useEffect(()=>{
        fechcomments();
    },[comment])

    const fetchdata = async () => {
        try {
            const res = await axios.get(`http://localhost:5000/blog/${blogId}`);
            setData(res.data.blog);

        } catch (error) {
            console.log(error);
        }
    }
    const fechcomments = async () => {
        try {
            const res = await axios.get(`http://localhost:5000/comment/${blogId}`);
            setGetComments(res.data.comments);
            // console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    const formatDateTime = (dateTime) => {
        const date = parseISO(dateTime);
        return format(date, "do MMMM, h:mm ");
    };
    
    const handleSubmit = async () => {
        try {
            const res = await axios.post(`http://localhost:5000/comment`, {
                message: comment,
                userid: datauser[0]._id,
                blogid: blogId,
                firstname: datauser[0].firstname,
                profilepic: datauser[0].profilepic,
            })
            if(res) setComment('More..');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <main className="container mx-auto mt-8">
                <div className="flex flex-wrap justify-center">
                    <div className="w-full md:w-8/12 px-4 mb-8">
                        <img src={data.coverpic} alt="Featured Image" className="w-full h-64 object-cover rounded" />
                        <h2 className="text-4xl font-bold mt-4 mb-2 text-justify">{data.title}</h2>
                        <div className="flex items-center">
                            <div className="flex-shrink-0 mr-3">
                                <img className="mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10" src={data.profilepic} alt="" />
                            </div>
                            <h4 className="font-bold">{data.firstname}</h4>
                        </div>
                        <p className="text-gray-700 mb-4 text-justify">{data.aboutblog}</p>
                    </div>

                    {/* comments */}
                    <div className="antialiased max-w-screen-sm flex-1">
                        <h3 className="text-2xl font-bold mt-4 mb-2 text-justify">Comments</h3>
                        <div className="space-y-4 bg-[#031000] rounded-md mr-5 text-gray-400">

                            {
                                getComments.map((comment,index) => (
                                    <div className="flex justify-start" key={index}>
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
                                ))
                            }
                            {isAuthenticated && <div className="w-full h-12">
                                <label htmlFor="" className="text-xl font-sans px-1">Comment</label>
                                <div className="flex">
                                    <input type="text"
                                        name="comment"
                                        className="w-full  pl-2 pr-3 py-2 rounded border-2 border-gray-200 outline-none focus:border-[#FFB340]"
                                        placeholder="Great"
                                        onChange={(e) => setComment(e.target.value)}
                                        required
                                    />
                                    <button className="bg-[#031000] border border-t-0 rounded px-4 py-2 text-[#FFB340]" onClick={handleSubmit}>Send</button>
                                </div>
                            </div>}
                        </div>
                    </div>

                    <div className="w-full flex justify-start pl-3 mb-8">
                        <div className="py-6 rounded">
                            <h3 className="text-2xl font-bold mt-4 mb-2 text-justify">Categories</h3>
                            <div className="flex flex-wrap py-3 gap-2 item-start justify-start">
                                {data.categories && data.categories.map((item, index) => (
                                    <Link to={`/blog/?search=${item}`} className="px-3 py-1 rounded-[4px] hover:bg-gray-800 bg-[#031000] text-[#FFB340]" key={index}>{item}</Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Oneblog;
