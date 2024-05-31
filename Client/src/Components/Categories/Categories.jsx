import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 4
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 2
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
const Categories = () => {
    return (
        <>
            <div className=" relative  z-2">
                <h1 className="text-5xl  font-bold items-center flex justify-center bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-sm mt-[50px] py-8 ">Categories</h1>
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
                        <div className="max-w-2xl mx-auto mt-18 mb-10 cursor-pointer" >
                            <div className="flex gap-3 bg-white border border-gray-300 rounded-xl overflow-hidden items-center justify-start">
                                <div className="relative w-[200px] h-[250px] flex-shrink-0">
                                    <img loading='lazy'
                                    className="absolute left-0 top-0 w-full h-full object-cover object-center transition duration-50"  src="/src/assets/cat_1.png" />
                                </div>

                                <div className="flex flex-col gap-3 py-2">

                                    <p className="text-xl font-bold">Fashion</p>

                                    <p className="text-gray-500 content-stretch justify-normal px-1">
                                        Stay stylish with our fashion blog, where we bring you the latest trends and timeless looks. From runway inspiration to everyday wear, find your unique style here.
                                    </p>

                                    <Link to={'/blog?search=fashion'} className="bg-[#FFB340]  hover:bg-[#ffb340e7] text-black font-bold py-3 px-6 rounded-md w-fit">
                                        <div className="flex items-center justify-center">
                                        Explore
                                        <img src="src/assets/right-arrow-svgrepo-com.svg" alt="" width={'25px'} loading="lazy"/>
                                        </div>
                                    </Link>

                                </div>

                            </div>

                        </div>
                    </div>
                    <div>
                        <div className="max-w-2xl mx-auto mt-18 mb-10 cursor-pointer">
                            <div className="flex gap-3 bg-white border border-gray-300 rounded-xl overflow-hidden items-center justify-start">

                                <div className="relative w-[200px] h-[250px] flex-shrink-0">
                                    <img loading="lazy" className="absolute left-0 top-0 w-full h-full object-cover object-center transition duration-50"  src="src/assets/cat_2.png" />
                                </div>

                                <div className="flex flex-col gap-3 py-2">

                                    <p className="text-xl font-bold">Travel</p>

                                    <p className="text-gray-500">
                                        Discover hidden gems and unforgettable adventures across the globe. Join us as we share travel tips, inspiring stories, and breathtaking destinations
                                    </p>
                                    <Link to={'/blog?search=travel'} className="bg-[#FFB340]  hover:bg-[#ffb340e7] text-black font-bold py-3 px-6 rounded-md w-fit">
                                        <div className="flex items-center justify-center">
                                        Explore
                                        <img loading="lazy" src="src/assets/right-arrow-svgrepo-com.svg" alt="" width={'25px'} />
                                        </div>
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div>
                        <div className="max-w-2xl mx-auto mt-18 mb-10 cursor-pointer">
                            <div className="flex gap-3 bg-white border border-gray-300 rounded-xl overflow-hidden items-center justify-start">

                                <div className="relative w-[200px] h-[250px] flex-shrink-0">
                                    <img loading="lazy" className="absolute left-0 top-0 w-full h-full object-cover object-center transition duration-50"  src="/src/assets/cat_3.png" />
                                </div>

                                <div className="flex flex-col gap-3 py-2">

                                    <p className="text-xl font-bold">Food</p>

                                    <p className="text-gray-500 content-stretch justify-normal px-1">
                                        Indulge in culinary delights with our food blog, featuring delicious recipes and gourmet adventures. Discover flavors, cooking tips, and food stories from around the world.
                                    </p>
                                    <Link to={'/blog?search=food'} className="bg-[#FFB340]  hover:bg-[#ffb340e7] text-black font-bold py-3 px-6 rounded-md w-fit">
                                        <div className="flex items-center justify-center">
                                        Explore
                                        <img loading="lazy" src="src/assets/right-arrow-svgrepo-com.svg" alt="" width={'25px'} />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="max-w-2xl mx-auto mt-18 mb-10 cursor-pointer">
                            <div className="flex gap-3 bg-white border border-gray-300 rounded-xl overflow-hidden items-center justify-start">

                                <div className="relative w-[200px] h-[250px] flex-shrink-0">
                                    <img loading="lazy" className="absolute left-0 top-0 w-full h-full object-cover object-center transition duration-50"  src="/src/assets/cat_4.png" />
                                </div>

                                <div className="flex flex-col gap-3 py-2">

                                    <p className="text-xl font-bold">Eduction</p>

                                    <p className="text-gray-500 content-stretch justify-normal px-1">
                                        Unlock the world of knowledge with our education blog offering insightful articles, study tips, and resources for lifelong learning. Empower your mind and expand your horizons with us.
                                    </p>
                                    <Link to={'/blog?search=eduction'} className="bg-[#FFB340]  hover:bg-[#ffb340e7] text-black font-bold py-3 px-6 rounded-md w-fit">
                                        <div className="flex items-center justify-center">
                                        Explore
                                        <img loading="lazy" src="src/assets/right-arrow-svgrepo-com.svg" alt="" width={'25px'} />
                                        </div>
                                    </Link>
                                </div>

                            </div>

                        </div>
                    </div>

                </Carousel>
            </div>
        </>
    )
}
export default Categories;