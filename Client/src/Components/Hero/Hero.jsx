import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [, setData] = useState(null);
    const [searchValue, setSearchValue] = useState('');
    const images = [
        'src/assets/family-enjoying-their-trip-paris.png',
        '/src/assets/Colorful Modern Concept Free B Logo (1).png',
        'src/assets/side-view-woman-working-her-laptop-coffee-shop.png'
    ];
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length]);

    useEffect(() => {
        const user = localStorage.getItem('currentuser');
        if (user) {
            setIsAuthenticated(true);
            setData(JSON.parse(user));
        }
    }, []);

    const getSearchItem = () => {
        navigator(`/blog?search=${searchValue}`);
        setSearchValue('');
    }
    return (
        <>
            <div className=" bg-[#031000] px-28 pb-5">
                <div className=" container mx-auto px-6 md:px-12">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 lg:w-2/3 flex flex-col gap-2">
                            <h1 className=" text-4xl md:text-4xl lg:text-4xl text-white font-bold mb-6 leading-relaxed">
                                Fuel Your Mind with
                                <br></br>
                                <h1 className="text-6xl font-extrabold -z-11 bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent leading-70 py-2">BlogBlaze</h1>
                                Ultimate Source for Insightful Blogging
                            </h1>
                            {isAuthenticated ?
                                <div className="flex items-center">
                                    <div className='max-w-[10/12]'>
                                        <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg  overflow-hidden">
                                            <input
                                                className="peer h-full w-full outline-none text-sm text-gray-700 p-2 focus:bg-white focus-within:bg-white"
                                                type="text"
                                                id="search"
                                                value={searchValue}
                                                onChange={(e) => setSearchValue(e.target.value)}
                                                placeholder="Explore World . . ." />
                                            <div className="grid place-items-center h-full w-12 text-gray-300 bg-white cursor-pointer">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                                    onClick={getSearchItem}
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                : <div className="flex gap-2">
                                    <Link to={'/register'} className="bg-[#FFB340] hover:bg-[#ffb340e7] text-black font-bold py-3 px-6 rounded-md">Get
                                        Started
                                    </Link>
                                    <Link to={'/'} className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-md">Learn
                                        More
                                    </Link>
                                </div>}
                        </div>
                        <div className="md:w-1/2 lg:w-1/3 mt-8 md:mt-0">
                            <img src={images[currentIndex]} alt="Hero Image" className="rounded-[100px] shadow-lg" />
                        </div>

                    </div>
                </div>

            </div>

        </>
    )
}
export default Hero;