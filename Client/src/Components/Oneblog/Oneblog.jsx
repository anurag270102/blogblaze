import { Link } from "react-router-dom";
const Oneblog = () => {
    return (
        <>

            <main className="container mx-auto mt-8">
                <div className="flex flex-wrap justify-center">
                    <div className="w-full md:w-8/12 px-4 mb-8">
                        <img src="https://via.placeholder.com/1200x600" alt="Featured Image" className="w-full h-64 object-cover rounded" />
                        <h2 className="text-4xl font-bold mt-4 mb-2 text-justify">My First Blog Post</h2>
                        <div className="flex items-center">
                            <div className="flex-shrink-0 mr-3">
                                <img className="mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10" src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp" alt="" />
                            </div>
                            <h4>John Due</h4>
                        </div>
                        <p className="text-gray-700 mb-4 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.</p>

                    </div>

                    {/* <!-- component --> */}
                    <div className="antialiased max-w-screen-sm flex-1">
                        <h3 className="text-2xl font-bold mt-4 mb-2 text-justify">Comments</h3>
                        <div className="space-y-4 bg-[#031000] rounded-md mr-5 text-gray-400">
                            <div className="flex justify-start">
                                <div className="flex-shrink-0 p-2 mr-3">
                                    <img className="mt-2 rounded-full  w-8 h-8 sm:w-10 sm:h-10" src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp" alt="" />
                                </div>
                                <div className="flex-1  rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
                                    <strong>Sarah</strong> <span className="text-xs text-gray-400">3:34 PM</span>
                                    <p className="text-sm">
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                        sed diam nonumy eirmod tempor invidunt ut labore et dolore
                                        magna aliquyam erat, sed diam voluptua.
                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-start">
                                <div className="flex-shrink-0 p-2 mr-3">
                                    <img className="mt-2 rounded-full  w-8 h-8 sm:w-10 sm:h-10" src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp" alt="" />
                                </div>
                                <div className="flex-1  rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
                                    <strong>Sarah</strong> <span className="text-xs text-gray-400">3:34 PM</span>
                                    <p className="text-sm">
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                        sed diam nonumy eirmod tempor invidunt ut labore et dolore
                                        magna aliquyam erat, sed diam voluptua.
                                    </p>
                                </div>
                            </div>
                            <div className="w-full h-12">
                                <label htmlFor="" className="text-xl font-sans px-1">Comment</label>
                                <div className="flex">
                                    <input type="text"
                                        name="comment"
                                        className="w-full  pl-2 pr-3 py-2 rounded border-2 border-gray-200 outline-none focus:border-[#FFB340]"
                                        placeholder="Great"
                                        required
                                    />
                                    <button className="bg-[#031000] border  border-t-0 rounded px-4 py-2 text-[#FFB340]">Send</button>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="w-full flex justify-start pl-3 mb-8">
                        <div className=" py-6 rounded">
                            <h3 className="text-2xl font-bold mt-4 mb-2 text-justify">Categories</h3>
                            <div className="flex flex-wrap py-3 gap-2 item-start  justify-start ">
                                <Link to={`/search/Fashion`} className="px-3 py-1 rounded-[4px] hover:bg-gray-800 bg-[#031000] text-[#FFB340]" >Fashion</Link>
                                <Link to={`/search/food`} className="px-3 py-1 rounded-[4px] hover:bg-gray-800 bg-[#031000] text-[#FFB340]" >Food</Link>
                                <Link to={`/search/travel`} className="px-3 py-1 rounded-[4px] hover:bg-gray-800 bg-[#031000] text-[#FFB340]" >Travel</Link>
                                <Link to={`/search/blog`} className="px-3 py-1 rounded-[4px] hover:bg-gray-800 bg-[#031000] text-[#FFB340]" >Blog</Link>
                                <Link to={`/search/health`} className="px-3 py-1 rounded-[4px] hover:bg-gray-800 bg-[#031000] text-[#FFB340]" >Health</Link>
                                <Link to={`/search/eduction`} className="px-3 py-1 rounded-[4px] hover:bg-gray-800 bg-[#031000] text-[#FFB340]" >Eduction</Link>
                                <Link to={`/search/c++`} className="px-3 py-1 rounded-[4px] hover:bg-gray-800 bg-[#031000] text-[#FFB340]" >C++</Link>
                                <Link to={`/search/web development`} className="px-3 py-1 rounded-[4px] hover:bg-gray-800 bg-[#031000] text-[#FFB340]" >Web Development</Link>
                                <Link to={`/search/cloth`} className="px-3 py-1 rounded-[4px] hover:bg-gray-800 bg-[#031000] text-[#FFB340]" >Cloth</Link>
                                <Link to={`/search/india`} className="px-3 py-1 rounded-[4px] hover:bg-gray-800 bg-[#031000] text-[#FFB340]" >India</Link>
                                <Link to={`/search/cooking`} className="px-3 py-1 rounded-[4px] hover:bg-gray-800 bg-[#031000] text-[#FFB340]" >Cooking</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </>
    )
}
export default Oneblog;