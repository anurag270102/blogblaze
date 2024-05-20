import { useState, useEffect } from "react";
const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
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
                            <div className="flex gap-2">
                                <a href="#" className="bg-[#FFB340] hover:bg-[#ffb340e7] text-black font-bold py-3 px-6 rounded-md">Get
                                    Started
                                </a>
                                <a href="#" className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-md">Learn
                                    More
                                </a>
                            </div>
                        </div>
                        <div className="md:w-1/2 lg:w-1/3 mt-8 md:mt-0">
                            <img src={images[currentIndex]}  alt="Hero Image" className="rounded-[100px] shadow-lg" />
                        </div>

                    </div>
                </div>

            </div>

        </>
    )
}
export default Hero;