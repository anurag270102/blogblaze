import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Article from '../Article/Article';
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
                <Article></Article>
            </div>
            <Footer></Footer>
        </>
    )
}
export default Onearticle;