import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
const Onearticle = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className=" p-4">
                <div className="max-w-3xl mx-auto ">
                    <div
                        className="mt-3  rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
                        <div className="">

                            <Link to={'/article/:election'} className="text-[#FFB340]  hover:text-gray-700 transition duration-500 ease-in-out text-xl cursor-pointer">
                                Election
                            </Link>
                            <h1 href="#" className="text-gray-900 font-bold text-4xl">Portrait Photography In Early Days</h1>
                            <div className="py-5 text-sm font-regular text-gray-900 flex">
                                <span className="mr-3 flex flex-row items-center">
                                    <svg className="text-[#FFB340]" fill="currentColor" height="13px" width="13px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve"><g>
                                        <g>
                                            <path d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256
			                                    c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128
		                   	                    c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z"></path></g></g></svg>
                                    <span className="ml-1">6 mins ago</span>
                                </span>
                                <a href="#" className="flex flex-row items-center hover:text-[#FFB340]  mr-3">
                                    <svg className="text-[#FFB340]" fill="currentColor" height="16px" aria-hidden="true" role="img"
                                        focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="currentColor"
                                            d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z">
                                        </path>
                                        <path d="M0 0h24v24H0z" fill="none"></path>
                                    </svg>
                                    <span className="ml-1">AliSher Azimi</span></a>
                            </div>
                            <hr />
                            <p className="text-base leading-8 my-5">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                                and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                                leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                                with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                                publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>

                            <h3 className="text-2xl font-bold my-5">#1. What is Lorem Ipsum?</h3>

                            <p className="text-base leading-8 my-5">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                                and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                                leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                                with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                                publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>

                            <blockquote className="text-md italic leading-8 my-5 p-5 text-[#FFB340] font-semibold">Lorem Ipsum is
                                simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
                                standard dummy text ever since the 1500s</blockquote>

                            <p className="text-base leading-8 my-5">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                                and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                                leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                                with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                                publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>


                            <a href="#"
                                className="text-xs text-[#FFB340] font-medium hover:text-gray-900 transition duration-500 ease-in-out">
                                #Election
                            </a>,
                            <a href="#"
                                className="text-xs text-[#FFB340] font-medium hover:text-gray-900 transition duration-500 ease-in-out">
                                #people
                            </a>,
                            <a href="#"
                                className="text-xs text-[#FFB340] font-medium hover:text-gray-900 transition duration-500 ease-in-out">
                                #Election2020
                            </a>,
                            <a href="#"
                                className="text-xs text-[#FFB340] font-medium hover:text-gray-900 transition duration-500 ease-in-out">
                                #trump
                            </a>,
                            <a href="#"
                                className="text-xs text-[#FFB340] font-medium hover:text-gray-900 transition duration-500 ease-in-out">
                                #Joe
                            </a>
                        </div>

                    </div>
                </div>
            </div>
            <div className="h-screen w-full dark:bg-gray-800">
                <section className="flex flex-col justify-center max-w-7xl px-4 py-10 mx-auto sm:px-6">
                    <h2 className="mb-6 text-2xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text  text-transparent md:text-3xl dark:text-white">
                        More Articles
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-1">
                        <div className="p-4 flex flex-col justify-between gap-2 border rounded-lg shadow-md bg-[#031000] dark:bg-gray-700 dark:border-gray-400/40">
                            <Link className="text-xl font-semibold text-[#FFB340] hover:underline two-lines dark:text-blue-100" to={'/article/articleId'}>
                                Football Legends Gerrard and Carragher Fall Prey to Fictitious Rap Song
                            </Link>

                            <div className="flex flex-wrap gap-2 text-xs text-gray-600 dark:text-gray-300">
                                <span className="px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-600">
                                    Entertainment
                                </span>
                                <span className="px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-600">
                                    Sports
                                </span>
                                <span className="px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-600">
                                    Crime
                                </span>
                            </div>

                            <p className="text-gray-400 two-lines dark:text-gray-300">
                                A disconcerting rap song about murder featuring fake voices of renowned footballers Steven Gerrard
                                and
                                Jamie
                                Carragher, created by prisoner L20 Mazza, has become a sensation online.
                            </p>

                            <div className="flex items-center justify-between text-sm">
                                <button className="text-gray-500 dark:text-gray-300">
                                    2 min read
                                </button>

                                <Link to={'/article/articleId'} className="text-[#FFB340] hover:underline dark:text-white">
                                    Read more
                                </Link>
                            </div>
                        </div>
                        <div className="p-4 flex flex-col justify-between gap-2 border rounded-lg shadow-md bg-[#031000] dark:bg-gray-700 dark:border-gray-400/40">
                            <Link className="text-xl font-semibold text-[#FFB340] hover:underline two-lines dark:text-blue-100" to={'/article/articleId'}>
                                How The Late Queen Elizabeth II Understood Meghan Markles Influence
                            </Link>

                            <div className="flex flex-wrap gap-2 text-xs text-gray-600 dark:text-gray-300">
                                <span className="px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-600">
                                    Entertainment
                                </span>
                                <span className="px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-600">
                                    Lifestyle
                                </span>
                            </div>

                            <p className="text-gray-400 two-lines dark:text-gray-300">
                                The late Queen Elizabeth II saw potential in Meghan Markles presence in the Royal Family. She even
                                offered
                                Meghan the opportunity to continue her acting career while serving as a royal. Nevertheless, Meghan
                                chose to
                                dedicate herself to her royal duties.
                            </p>

                            <div className="flex items-center justify-between text-sm">
                                <button className="text-gray-500 dark:text-gray-300">
                                    2 min read
                                </button>

                                <Link to={'/article/articleId'} className="text-[#FFB340] hover:underline dark:text-white">
                                    Read more
                                </Link>
                            </div>
                        </div>
                        <div className="p-4 flex flex-col justify-between gap-2 border rounded-lg shadow-md bg-[#031000] dark:bg-gray-700 dark:border-gray-400/40">
                            <Link className="text-xl font-semibold text-[#FFB340] hover:underline two-lines dark:text-blue-100" to={'/article/articleId'}>
                                Gaby Roslin Shares Rays of Hope in her New Book: Spread The Joy
                            </Link>

                            <div className="flex flex-wrap gap-2 text-xs text-gray-600 dark:text-gray-300">
                                <span className="px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-600">
                                    Entertainment
                                </span>
                                <span className="px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-600">
                                    Lifestyle
                                </span>
                                <span className="px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-600">
                                    Health
                                </span>
                            </div>

                            <p className="text-gray-400 two-lines dark:text-gray-300">
                                Renowned TV presenter Gaby Roslin is out to spread positivity and resilience through her upcoming
                                book
                                Spread
                                the Joy, sharing her own journey through grief, success, and the belief in a positive outlook on
                                life.
                            </p>

                            <div className="flex items-center justify-between text-sm">
                                <button className="text-gray-500 dark:text-gray-300">
                                    2 min read
                                </button>

                                <Link to={'/article/articleId'} className="text-[#FFB340] hover:underline dark:text-white">
                                    Read more
                                </Link>
                            </div>
                        </div>
                        
                    </div>
                </section>
            </div>
            <Footer></Footer>
        </>
    )
}
export default Onearticle;