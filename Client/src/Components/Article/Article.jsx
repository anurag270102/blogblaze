import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useParams } from "react-router-dom";
const Article = () => {
    const params=useParams();
    return (
        <>
            <Navbar></Navbar>
            <div className="flex items-center  justify-center mt-5">
                <div className="flex  w-[30%] ">
                    <input
                        type="text"
                        className="block w-full px-4 py-2 rounded-l-md text-[#FFB340] bg-[#031000] border-[2px] border-black  focus:border-[#FFB340] focus:border-[2px] focus:border-r-0 focus:outline-none"
                        placeholder="Explore World..."
                    />
                    <button className="px-4 text-white  rounded-r-md bg-[#FFB340] focus:border-[2px] focus:border-black">
                        Search
                    </button>
                </div>
            </div>

            <h2 className=" text-xl px-52 py-3 font-bold text-gray-400   dark:text-white">
                Popular Searches
            </h2>
            <div>
                <div className="flex flex-wrap py-3 gap-2 item-start  justify-start px-52 dark:border-gray-600">
                    <Link  to={`/search/Fashion`} className="px-3 py-1 rounded-[4px] hover:bg-gray-800 bg-[#031000] text-[#FFB340]" >Fashion</Link>
                    <Link  to={`/search/food`} className="px-3 py-1 rounded-[4px] hover:bg-gray-800 bg-[#031000] text-[#FFB340]" >Food</Link>
                    <Link  to={`/search/travel`} className="px-3 py-1 rounded-[4px] hover:bg-gray-800 bg-[#031000] text-[#FFB340]" >Travel</Link>
                    <Link  to={`/search/blog`} className="px-3 py-1 rounded-[4px] hover:bg-gray-800 bg-[#031000] text-[#FFB340]" >Blog</Link>
                    <Link  to={`/search/health`} className="px-3 py-1 rounded-[4px] hover:bg-gray-800 bg-[#031000] text-[#FFB340]" >Health</Link>
                    <Link  to={`/search/eduction`} className="px-3 py-1 rounded-[4px] hover:bg-gray-800 bg-[#031000] text-[#FFB340]" >Eduction</Link>
                    <Link  to={`/search/c++`} className="px-3 py-1 rounded-[4px] hover:bg-gray-800 bg-[#031000] text-[#FFB340]" >C++</Link>
                    <Link  to={`/search/web development`} className="px-3 py-1 rounded-[4px] hover:bg-gray-800 bg-[#031000] text-[#FFB340]" >Web Development</Link>
                    <Link  to={`/search/cloth`} className="px-3 py-1 rounded-[4px] hover:bg-gray-800 bg-[#031000] text-[#FFB340]" >Cloth</Link>
                    <Link  to={`/search/india`} className="px-3 py-1 rounded-[4px] hover:bg-gray-800 bg-[#031000] text-[#FFB340]" >India</Link>
                    <Link  to={`/search/cooking`} className="px-3 py-1 rounded-[4px] hover:bg-gray-800 bg-[#031000] text-[#FFB340]" >Cooking</Link>
                </div>
            </div>
            <h2 className=" text-5xl px-52 py-3 font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text  text-transparent  dark:text-white">
                {params.search}
            </h2>
            <div className="flex flex-col p-5 lg:px-48 lg:py-11">
                <div className="bg-[#031000] text-gray-300 p-10 rounded-md mb-10 ">
                    <h1 className="font-bold text-2xl mb-2">Tailwind Rocks!</h1>
                    <p className="my-7">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius eaque a ipsam aliquid omnis,
                        beatae possimus recusandae illum rem. Minima sequi voluptas repudiandae id? Quae, facere quam suscipit sed,
                        aperiam sapiente pariatur soluta enim perferendis illum veniam excepturi doloribus ducimus voluptatibus
                        numquam officiis expedita culpa hic sequi quasi reprehenderit iste obcaecati nostrum. Consequuntur aliquam,
                        assumenda architecto animi veniam dolore dolor?</p>
                    <Link to={'articleId'} className="bg-[#FFB340] hover:bg-[#ffb340e7] text-black font-bold py-3 px-6 rounded-md">Get
                        Read More...
                    </Link>
                </div>
                <div className="bg-[#031000] text-gray-300 p-10 rounded-md mb-10 ">
                    <h1 className="font-bold text-2xl mb-2">Tailwind Rocks!</h1>
                    <p className="my-7  justify-normal">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius eaque a ipsam aliquid omnis,
                        beatae possimus recusandae illum rem. Minima sequi voluptas repudiandae id? Quae, facere quam suscipit sed,
                        aperiam sapiente pariatur soluta enim perferendis illum veniam excepturi doloribus ducimus voluptatibus
                        numquam officiis expedita culpa hic sequi quasi reprehenderit iste obcaecati nostrum. Consequuntur aliquam,
                        assumenda architecto animi veniam dolore dolor?</p>
                    <Link to={'articleId'} className="bg-[#FFB340] hover:bg-[#ffb340e7] text-black font-bold py-3 px-6 rounded-md">Get
                        Read More...
                    </Link>
                </div>
                <div className="bg-[#031000] text-gray-300 p-10 rounded-md mb-10 ">
                    <h1 className="font-bold text-2xl mb-2">Tailwind Rocks!</h1>
                    <p className="my-7">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius eaque a ipsam aliquid omnis,
                        beatae possimus recusandae illum rem. Minima sequi voluptas repudiandae id? Quae, facere quam suscipit sed,
                        aperiam sapiente pariatur soluta enim perferendis illum veniam excepturi doloribus ducimus voluptatibus
                        numquam officiis expedita culpa hic sequi quasi reprehenderit iste obcaecati nostrum. Consequuntur aliquam,
                        assumenda architecto animi veniam dolore dolor?</p>
                    <Link to={'articleId'} className="bg-[#FFB340] hover:bg-[#ffb340e7] text-black font-bold py-3 px-6 rounded-md">Get
                        Read More...
                    </Link>
                </div>
            </div>
        </>
    )
}
export default Article;