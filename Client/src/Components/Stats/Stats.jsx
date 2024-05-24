const Stats = () => {
    return (
        <>
            <div className=" relative -z-10">
                <h1 className="text-5xl  font-bold items-center flex justify-center  bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-sm mt-[50px] ">Stats</h1>
                <ul className="flex flex-col md:grid grid-cols-4 gap-20 text-redis-neutral-800 max-w-5xl mx-auto p-10 mt-10">
                    <li
                        className="w-full text-sm font-semibold text-slate-900 p-6 bg-white border border-slate-900/10 bg-clip-padding shadow-md shadow-slate-900/5 rounded-lg flex flex-col  items-center justify-center">
                        <span className="mb-1  bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent  font-bold  font-display text-5xl">45K+</span>
                        Users
                    </li>
                    <li
                        className="w-full text-sm font-semibold text-slate-900 p-6 bg-white border border-slate-900/10 bg-clip-padding shadow-md shadow-slate-900/5 rounded-lg flex flex-col  items-center justify-center">
                        <span className="mb-1  bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent  font-bold  font-display text-5xl">45K+</span>
                        Blogs
                    </li>
                    <li
                        className="w-full text-sm font-semibold text-slate-900 p-6 bg-white border border-slate-900/10 bg-clip-padding shadow-md shadow-slate-900/5 rounded-lg flex flex-col items-center justify-center">
                        <span className="mb-1  bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent  font-bold  font-display text-5xl">78K+</span>
                        Posts
                    </li>
                    <li
                        className="w-full text-sm font-semibold text-slate-900 p-6 bg-white border border-slate-900/10 bg-clip-padding shadow-md shadow-slate-900/5 rounded-lg flex flex-col items-center justify-center">
                        <span className="mb-1  bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent  font-bold  font-display text-5xl">50+</span>
                        Comments
                    </li>
                </ul>
            </div>
        </>
    )
}
export default Stats;