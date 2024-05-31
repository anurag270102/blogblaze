import { useEffect, useState } from "react";
import axios from "axios";
const Stats = () => {
    const [Users,setUsers]=useState(0);
    const [Blog,setBlogs]=useState(0);
    const [Articles,setArticles]=useState(0);
    const [Comments,setComments]=useState(0);

    const searcharticle='?search=1';
    const searchblog='?search=1';
    const searchuser='?search=1';
    const searchComments='?search=1';

    const fetchArticles = async () => {
        // Mock API call
       try {
       
            const allArticles = await axios.get(`http://localhost:5000/article${searcharticle}`); 
            setArticles(allArticles.data.number);
            const allBlogs = await axios.get(`http://localhost:5000/blog${searchblog}`); 
            setBlogs(allBlogs.data.number);
            const allUsers = await axios.get(`http://localhost:5000/user${searchuser}`); 
            setUsers(allUsers.data.number);
            const allComments= await axios.get(`http://localhost:5000/comments${searchComments}`); 
            setComments(allComments.data.number);
       } catch (error) {
        console.log(error);
       }
    };
    useEffect(()=>{
        fetchArticles();
    },[])
    return (
        <>
            <div className=" relative -z-10">
                <h1 className="text-5xl  font-bold items-center flex justify-center  bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-sm mt-[50px] ">Stats</h1>
                <ul className="flex flex-col md:grid grid-cols-4 gap-20 text-redis-neutral-800 max-w-5xl mx-auto p-10 mt-10">
                    <li
                        className="w-full text-sm font-semibold text-slate-900 p-6 bg-white border border-slate-900/10 bg-clip-padding shadow-md shadow-slate-900/5 rounded-lg flex flex-col  items-center justify-center">
                        <span className="mb-1  bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent  font-bold  font-display text-5xl">{Users}+</span>
                        Users
                    </li>
                    <li
                        className="w-full text-sm font-semibold text-slate-900 p-6 bg-white border border-slate-900/10 bg-clip-padding shadow-md shadow-slate-900/5 rounded-lg flex flex-col  items-center justify-center">
                        <span className="mb-1  bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent  font-bold  font-display text-5xl">{Blog}+</span>
                        Blogs
                    </li>
                    <li
                        className="w-full text-sm font-semibold text-slate-900 p-6 bg-white border border-slate-900/10 bg-clip-padding shadow-md shadow-slate-900/5 rounded-lg flex flex-col items-center justify-center">
                        <span className="mb-1  bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent  font-bold  font-display text-5xl">{Articles}+</span>
                        Articles
                    </li>
                    <li
                        className="w-full text-sm font-semibold text-slate-900 p-6 bg-white border border-slate-900/10 bg-clip-padding shadow-md shadow-slate-900/5 rounded-lg flex flex-col items-center justify-center">
                        <span className="mb-1  bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent  font-bold  font-display text-5xl">{Comments}+</span>
                        Comments
                    </li>
                </ul>
            </div>
        </>
    )
}
export default Stats;