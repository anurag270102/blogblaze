
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 4
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
const Featurepost = () => {
    return (
        <>
            <div className=''>
                <h1 className="text-5xl font-bold items-center flex justify-center bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-sm ">Featured Posts</h1>
                <Carousel responsive={responsive}
                    swipeable={true}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={2000}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    customLeftArrow={<button className=" hidden"></button>}
                    customRightArrow={<button className="hidden"></button>}
                >
                    
                    <div>
                        <div className="p-10">
                            {/* <!--Card 1--> */}
                            <div className="rounded overflow-hidden shadow-lg flex flex-col">
                                <a href="#"></a>
                                <div className="relative"><a href="#">
                                    <img className="w-full"
                                        src="https://images.pexels.com/photos/61180/pexels-photo-61180.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
                                        alt="Sunset in the mountains" />
                                    <div
                                        className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                                    </div>
                                </a>
                                    <a href="#!">
                                        <div
                                            className="text-xs absolute top-0 right-0 font-bold bg-white  px-4 py-2 text-black mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                            Cooking
                                        </div>
                                    </a>
                                </div>
                                <div className="px-6 py-4 mb-auto">
                                    <a href="#"
                                        className="font-medium text-lg  hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">Simplest
                                        Salad Recipe ever</a>
                                    <p className="text-gray-500 text-sm">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </p>
                                </div>
                                <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
                                    <span href="#" className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
                                        <svg height="13px" width="13px" version="1.1" id="Layer_1"
                                            xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px"
                                            y="0px" viewBox="0 0 512 512" style={{ enableBackground: 'new 0 0 512 512' }}
                                            xmlSpace="preserve">
                                            {/* Your SVG paths and elements go here */}

                                            <g>
                                                <g>
                                                    <path
                                                        d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256 c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128 c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z">
                                                    </path>
                                                </g>
                                            </g>
                                        </svg>
                                        <span className="ml-1">6 mins ago</span>
                                    </span>

                                    <span href="#" className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
                                        <svg className="h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z">
                                            </path>
                                        </svg>
                                        <span className="ml-1">39 Comments</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="p-10">
                            {/* <!--Card 1--> */}
                            <div className="rounded overflow-hidden shadow-lg flex flex-col">
                                <a href="#"></a>
                                <div className="relative"><a href="#">
                                    <img className="w-full"
                                        src="https://images.pexels.com/photos/61180/pexels-photo-61180.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
                                        alt="Sunset in the mountains" />
                                    <div
                                        className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                                    </div>
                                </a>
                                    <a href="#!">
                                        <div
                                            className="text-xs absolute top-0 right-0 font-bold bg-white  px-4 py-2 text-black mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                            Cooking
                                        </div>
                                    </a>
                                </div>
                                <div className="px-6 py-4 mb-auto">
                                    <a href="#"
                                        className="font-medium text-lg  hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">Simplest
                                        Salad Recipe ever</a>
                                    <p className="text-gray-500 text-sm">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </p>
                                </div>
                                <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
                                    <span href="#" className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
                                        <svg height="13px" width="13px" version="1.1" id="Layer_1"
                                            xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px"
                                            y="0px" viewBox="0 0 512 512" style={{ enableBackground: 'new 0 0 512 512' }}
                                            xmlSpace="preserve">
                                            {/* Your SVG paths and elements go here */}

                                            <g>
                                                <g>
                                                    <path
                                                        d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256 c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128 c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z">
                                                    </path>
                                                </g>
                                            </g>
                                        </svg>
                                        <span className="ml-1">6 mins ago</span>
                                    </span>

                                    <span href="#" className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
                                        <svg className="h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z">
                                            </path>
                                        </svg>
                                        <span className="ml-1">39 Comments</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="p-10">
                            {/* <!--Card 1--> */}
                            <div className="rounded overflow-hidden shadow-lg flex flex-col">
                                <a href="#"></a>
                                <div className="relative"><a href="#">
                                    <img className="w-full"
                                        src="https://images.pexels.com/photos/61180/pexels-photo-61180.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
                                        alt="Sunset in the mountains" />
                                    <div
                                        className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                                    </div>
                                </a>
                                    <a href="#!">
                                        <div
                                            className="text-xs absolute top-0 right-0 font-bold bg-white  px-4 py-2 text-black mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                            Cooking
                                        </div>
                                    </a>
                                </div>
                                <div className="px-6 py-4 mb-auto">
                                    <a href="#"
                                        className="font-medium text-lg  hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">Simplest
                                        Salad Recipe ever</a>
                                    <p className="text-gray-500 text-sm">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </p>
                                </div>
                                <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
                                    <span href="#" className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
                                        <svg height="13px" width="13px" version="1.1" id="Layer_1"
                                            xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px"
                                            y="0px" viewBox="0 0 512 512" style={{ enableBackground: 'new 0 0 512 512' }}
                                            xmlSpace="preserve">
                                            {/* Your SVG paths and elements go here */}

                                            <g>
                                                <g>
                                                    <path
                                                        d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256 c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128 c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z">
                                                    </path>
                                                </g>
                                            </g>
                                        </svg>
                                        <span className="ml-1">6 mins ago</span>
                                    </span>

                                    <span href="#" className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
                                        <svg className="h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z">
                                            </path>
                                        </svg>
                                        <span className="ml-1">39 Comments</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="p-10">
                            {/* <!--Card 1--> */}
                            <div className="rounded overflow-hidden shadow-lg flex flex-col">
                                <a href="#"></a>
                                <div className="relative"><a href="#">
                                    <img className="w-full"
                                        src="https://images.pexels.com/photos/61180/pexels-photo-61180.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
                                        alt="Sunset in the mountains" />
                                    <div
                                        className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                                    </div>
                                </a>
                                    <a href="#!">
                                        <div
                                            className="text-xs absolute top-0 right-0 font-bold bg-white  px-4 py-2 text-black mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                            Cooking
                                        </div>
                                    </a>
                                </div>
                                <div className="px-6 py-4 mb-auto">
                                    <a href="#"
                                        className="font-medium text-lg  hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">Simplest
                                        Salad Recipe ever</a>
                                    <p className="text-gray-500 text-sm">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </p>
                                </div>
                                <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
                                    <span href="#" className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
                                        <svg height="13px" width="13px" version="1.1" id="Layer_1"
                                            xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px"
                                            y="0px" viewBox="0 0 512 512" style={{ enableBackground: 'new 0 0 512 512' }}
                                            xmlSpace="preserve">
                                            {/* Your SVG paths and elements go here */}

                                            <g>
                                                <g>
                                                    <path
                                                        d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256 c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128 c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z">
                                                    </path>
                                                </g>
                                            </g>
                                        </svg>
                                        <span className="ml-1">6 mins ago</span>
                                    </span>

                                    <span href="#" className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
                                        <svg className="h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z">
                                            </path>
                                        </svg>
                                        <span className="ml-1">39 Comments</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="p-10">
                            {/* <!--Card 1--> */}
                            <div className="rounded overflow-hidden shadow-lg flex flex-col">
                                <a href="#"></a>
                                <div className="relative"><a href="#">
                                    <img className="w-full"
                                        src="https://images.pexels.com/photos/61180/pexels-photo-61180.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
                                        alt="Sunset in the mountains" />
                                    <div
                                        className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                                    </div>
                                </a>
                                    <a href="#!">
                                        <div
                                            className="text-xs absolute top-0 right-0 font-bold bg-white  px-4 py-2 text-black mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                            Cooking
                                        </div>
                                    </a>
                                </div>
                                <div className="px-6 py-4 mb-auto">
                                    <a href="#"
                                        className="font-medium text-lg  hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">Simplest
                                        Salad Recipe ever</a>
                                    <p className="text-gray-500 text-sm">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </p>
                                </div>
                                <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
                                    <span href="#" className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
                                        <svg height="13px" width="13px" version="1.1" id="Layer_1"
                                            xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px"
                                            y="0px" viewBox="0 0 512 512" style={{ enableBackground: 'new 0 0 512 512' }}
                                            xmlSpace="preserve">
                                            {/* Your SVG paths and elements go here */}

                                            <g>
                                                <g>
                                                    <path
                                                        d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256 c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128 c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z">
                                                    </path>
                                                </g>
                                            </g>
                                        </svg>
                                        <span className="ml-1">6 mins ago</span>
                                    </span>

                                    <span href="#" className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
                                        <svg className="h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z">
                                            </path>
                                        </svg>
                                        <span className="ml-1">39 Comments</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="p-10">
                            {/* <!--Card 1--> */}
                            <div className="rounded overflow-hidden shadow-lg flex flex-col">
                                <a href="#"></a>
                                <div className="relative"><a href="#">
                                    <img className="w-full"
                                        src="https://images.pexels.com/photos/61180/pexels-photo-61180.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
                                        alt="Sunset in the mountains" />
                                    <div
                                        className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                                    </div>
                                </a>
                                    <a href="#!">
                                        <div
                                            className="text-xs absolute top-0 right-0 font-bold bg-white  px-4 py-2 text-black mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                            Cooking
                                        </div>
                                    </a>
                                </div>
                                <div className="px-6 py-4 mb-auto">
                                    <a href="#"
                                        className="font-medium text-lg  hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">Simplest
                                        Salad Recipe ever</a>
                                    <p className="text-gray-500 text-sm">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </p>
                                </div>
                                <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
                                    <span href="#" className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
                                        <svg height="13px" width="13px" version="1.1" id="Layer_1"
                                            xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px"
                                            y="0px" viewBox="0 0 512 512" style={{ enableBackground: 'new 0 0 512 512' }}
                                            xmlSpace="preserve">
                                            {/* Your SVG paths and elements go here */}

                                            <g>
                                                <g>
                                                    <path
                                                        d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256 c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128 c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z">
                                                    </path>
                                                </g>
                                            </g>
                                        </svg>
                                        <span className="ml-1">6 mins ago</span>
                                    </span>

                                    <span href="#" className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
                                        <svg className="h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z">
                                            </path>
                                        </svg>
                                        <span className="ml-1">39 Comments</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                </Carousel>
            </div>
        </>

    )
}
export default Featurepost