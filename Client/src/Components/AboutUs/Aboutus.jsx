import { Link } from "react-router-dom";
const Aboutus = () => {
    return (
        <>
            <div className="px-20  absloute -z-10  flex gap-16 text-white bg-[#031000]">
                <div className="w-[60%] pt-10 ">
                {/* <h1 className="text-5xl font-bold items-center  flex justify-center bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-sm ">About Us</h1> */}
                    <div className="text-xl mt-8">
                        <h2>Welcome to <span className=" bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent text-4xl leading-3 italic px-1">Blog Blaze</span>, where innovation meets user-generated content!</h2>
                        <ul className=" list-inside mt-8">
                            <div className="flex gap-4 items-center">
                                <div className=" rounded-full border border-[#FFB340] w-[20px] h-[20px]"></div>
                                <li className="mb-3">Our cutting-edge platform covers diverse topics such as fashion, education, food, and lifestyle.</li>
                            </div>
                            <div className="flex gap-4 items-center">
                                <div className=" rounded-full border border-[#FFB340] w-[20px] h-[20px]"></div>
                                <li className="mb-3">Join our community to network with like-minded individuals and explore a world of endless possibilities.</li>
                            </div>
                            <div className="flex gap-4 items-center">
                                <div className=" rounded-full border border-[#FFB340] w-[20px] h-[20px]"></div>
                                <li className="mb-3">Start your blogging journey with us today.</li>
                            </div>
                        </ul>
                    </div>
                    <div className="mt-8 cursor-pointer">
                        <Link to={'/'} className="bg-[#FFB340]  hover:bg-[#ffb340e7] text-black font-bold py-3 px-6 rounded-md cursor-pointer">Get
                            Started
                        </Link>
                    </div>
                </div>
                <div>
                    <img src="src/assets/4660600_2467152.png" alt="" width={'500px'} />
                </div>
            </div>
        </>
    )
}
export default Aboutus;