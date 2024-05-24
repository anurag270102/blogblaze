import { Link } from "react-router-dom";
const Cta = () => {
    return (
        <>
            <div className="relative mt-1 max-w-5xl ">
                <div className=" p-1 w-[1519px] bg-[#031000]">
                    <div className="rounded-lg bg-black/80 backdrop-blur">
                        <div className="flex w-full flex-wrap items-center justify-center  gap-20 px-8 py-10 sm:px-16 lg:flex-nowrap">
                            <div className="lg:max-w-xl">
                                <h2
                                    className="block w-full pb-2 bg-gradient-to-b from-white to-gray-400 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl">
                                    Enhancing Productivity with
                                    <h1 className="text-6xl font-extrabold -z-11 bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent leading-70 py-2">BlogBlaze</h1>
                                </h2>
                                <p className="my-4 bg-transparent font-medium leading-relaxed tracking-wide text-gray-400">
                                    Stories for Every Curiosity
                                </p>
                            </div>
                            <div className="flex flex-wrap items-center justify-center gap-6 ">
                                <Link to={'/'} className="bg-[#FFB340] hover:bg-[#ffb340e7] text-black font-bold py-3 px-6 rounded-md">Get
                                    Started
                                </Link>
                                <Link to={'/'} className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-md">Learn
                                    More
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Cta;