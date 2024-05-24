import { Link, useParams } from "react-router-dom";
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer'

const Allpost = () => {
    const params = useParams();
    console.log(params.search);
  
    return (
        <>
            <Navbar></Navbar>


            <div className="flex items-center  justify-center mt-5">
                <div className="flex  w-[30%] ">
                    <input
                        type="text"
                        className="block w-full px-4 py-2 rounded-l-md text-[#FFB340] bg-[#031000] border-[2px] border-black  focus:border-[#FFB340] focus:border-[2px] focus:border-r-0 focus:outline-none"
                        placeholder="Search..."
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
            <section className="dark:bg-[#031000] dark:text-gray-800">
                <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                    <Link rel="noopener noreferrer" to={'blogId'} className="block max-w-sm gap-3 mx-auto rounded sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50 bg-[#031000] text-gray-500 group-focus:shadow-lg">
                        <img src="https://source.unsplash.com/random/480x360" alt="" className="object-fill w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500 " />
                        <div className="p-6 space-y-2 lg:col-span-5">
                            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline text-[#FFB340]">Noster tincidunt reprimique ad pro</h3>
                            <span className="text-xs dark:text-gray-600 mt-3">February 19, 2021</span>
                            <p className="text-gray-400">Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in graece fuisset, eos affert putent doctus id.</p>
                        </div>
                    </Link>
                    <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

                        <Link rel="noopener noreferrer" to={'/blog/blodId'} className="max-w-sm mx-auto  rounded-md group hover:no-underline focus:no-underline dark:bg-gray-50 bg-[#031000] text-gray-400 hover:shadow-lg">
                            <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://source.unsplash.com/random/480x360?1" />
                            <div className="p-6 space-y-2">
                                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline text-[#FFB340]">In usu laoreet repudiare legendos</h3>
                                <span className="text-xs dark:text-gray-600">January 21, 2021</span>
                                <p className="text-gray-400">Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>
                            </div>
                        </Link>
                        <Link rel="noopener noreferrer" to={'/blog/blodId'} className="max-w-sm mx-auto  rounded-md group hover:no-underline focus:no-underline dark:bg-gray-50 bg-[#031000] text-gray-400 hover:shadow-lg">
                            <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://source.unsplash.com/random/480x360?1" />
                            <div className="p-6 space-y-2">
                                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline text-[#FFB340]">In usu laoreet repudiare legendos</h3>
                                <span className="text-xs dark:text-gray-600">January 21, 2021</span>
                                <p className="text-gray-400">Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>
                            </div>
                        </Link>
                        <Link rel="noopener noreferrer" to={'/blog/blodId'} className="max-w-sm mx-auto  rounded-md group hover:no-underline focus:no-underline dark:bg-gray-50 bg-[#031000] text-gray-400 hover:shadow-lg">
                            <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://source.unsplash.com/random/480x360?1" />
                            <div className="p-6 space-y-2">
                                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline text-[#FFB340]">In usu laoreet repudiare legendos</h3>
                                <span className="text-xs dark:text-gray-600">January 21, 2021</span>
                                <p className="text-gray-400">Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>
                            </div>
                        </Link>
                        <Link rel="noopener noreferrer" to={'/blog/blodId'} className="max-w-sm mx-auto  rounded-md group hover:no-underline focus:no-underline dark:bg-gray-50 bg-[#031000] text-gray-400 hover:shadow-lg">
                            <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://source.unsplash.com/random/480x360?1" />
                            <div className="p-6 space-y-2">
                                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline text-[#FFB340]">In usu laoreet repudiare legendos</h3>
                                <span className="text-xs dark:text-gray-600">January 21, 2021</span>
                                <p className="text-gray-400">Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>
                            </div>
                        </Link>
                        <Link rel="noopener noreferrer" to={'/blog/blodId'} className="max-w-sm mx-auto  rounded-md group hover:no-underline focus:no-underline dark:bg-gray-50 bg-[#031000] text-gray-400 hover:shadow-lg">
                            <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://source.unsplash.com/random/480x360?1" />
                            <div className="p-6 space-y-2">
                                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline text-[#FFB340]">In usu laoreet repudiare legendos</h3>
                                <span className="text-xs dark:text-gray-600">January 21, 2021</span>
                                <p className="text-gray-400">Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>
                            </div>
                        </Link>

                    </div>
                    <div className="flex items-center justify-center">
                        <Link to={'/loadmore'} className="bg-[#FFB340] hover:bg-[#ffb340e7] text-black font-bold py-3 px-6 rounded-md">
                            Load More...
                        </Link>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </>
    )
}
export default Allpost;