import { Link } from "react-router-dom";
import { useState } from "react";
// import axios from 'axios';
const AddBlog = () => {
    const [onecat, setonecat] = useState('');
    const [temp, settemp] = useState([]);
    const [form, setform] = useState({
        title: '',
        aboutblog: '',
        coverpic: '',
        categories: []
    });

    const addcatTotemp = (e) => {
        e.preventDefault();
        settemp(
            [...temp, onecat]
        )
        handlechange(e);
    }
    const handlecat=(e)=>{
        e.preventDefault();
        setform({
            ...form,
            categories: temp
        })
        console.log(form);
    }
    const handlechange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setform({
            ...form,
            [name]: value
        })
    }
    const handlesubmit = async () => {
        // try {
        //      await axios.post('http://localhost:5000/AddBlog', form,
        //         {
        //             headers: {
        //                 'content-type': 'application/json'
        //             }
        //         }
        //     );
        //    console.log('success');
        // } catch (error) {
        //     console.log(error);
        // }
    }
    return (
        <>
            {/* <!-- component --> */}
            <div className=" mx-auto  w-[80%] m-[50px] pb-3 rounded-lg  shadow-lg ">
                <h1 className="text-4xl font-bold  text-center font-sans py-5">Add Blog</h1>
                <form className="">
                    <div className="flex items-center justify-center gap-10 px-[100px] pb-20">
                        {/* left */}
                        <div className=" w-[50%] flex flex-col gap-10 pb-5">
                            <div className="w-full h-12">
                                <label htmlFor="" className="text-xl font-sans px-1">Title</label>
                                <div className="flex">
                                    <input type="text"
                                        name="title"
                                        value={form.title}
                                        className="w-full  pl-2 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-[#FFB340]"
                                        placeholder="First Name"
                                        onChange={handlechange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="w-full  h-12">
                                <label htmlFor="" className="text-xl font-sans px-1">About Blog</label>
                                <div className="flex">
                                    <textarea
                                        type="text"
                                        name="aboutblog"
                                        value={form.aboutblog}
                                        onChange={handlechange}
                                        className="w-full  pl-2 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-[#FFB340]"
                                        placeholder="about blog"
                                        required
                                    />
                                </div>
                            </div>
                            <label className="w-64 flex flex-col items-center mt-5 px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer">
                                <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                                </svg>
                                <span className="mt-2 text-base leading-normal">Select a cover Picture</span>
                                <input
                                    name="coverpic"
                                    value={form.coverpic}
                                    onChange={handlechange}
                                    type='file'
                                    className="hidden"
                                    required
                                />
                            </label>
                            <div className="w-full h-12">
                                <label htmlFor="" className="text-xl font-sans px-1">Categories</label>
                                <div className="flex">
                                    <input type="text"
                                        name="Categories"
                                        className="w-full  pl-2 pr-3 py-2 rounded border-2 border-gray-200 outline-none focus:border-[#FFB340]"
                                        placeholder="Categories"
                                        required
                                        value={onecat}
                                        onChange={(e) => setonecat(e.target.value)}
                                    />
                                    <button className="bg-[#031000] border  border-t-0 rounded px-4 py-2 text-white" onClick={addcatTotemp}>Add</button>
                                <Link className="bg-[#FFB340] hover:bg-[#ffb340e7] text-black font-bold ml-2 py-3 px-6 rounded-md" onClick={handlecat} >
                                Done
                            </Link>
                            </div>    
                            </div>
                            <ul className="flex justify-start gap-10 flex-wrap">
                                {
                                    temp.map((item, index) => {
                                        return <li key={index} className="px-3 py-1 rounded-[4px] hover:bg-gray-800 bg-[#031000] text-[#FFB340]">{item}</li>
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <Link className="bg-[#FFB340] hover:bg-[#ffb340e7] text-black font-bold py-3 px-6 rounded-md" onClick={handlesubmit} >
                            Add Blog
                        </Link>
                    </div>
                </form>
            </div>
        </>
    )
}
export default AddBlog;