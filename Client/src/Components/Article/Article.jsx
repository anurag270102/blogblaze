import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
const Article = () => {

    return (
        <>
            <Navbar></Navbar>
            <div className="flex flex-col p-5 lg:px-48 lg:py-11">
                <div className="bg-[#031000] text-gray-300 p-10 rounded-md mb-10 ">
                    <h1 className="font-bold text-2xl mb-2">Tailwind Rocks!</h1>
                    <p className="my-7">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius eaque a ipsam aliquid omnis,
                        beatae possimus recusandae illum rem. Minima sequi voluptas repudiandae id? Quae, facere quam suscipit sed,
                        aperiam sapiente pariatur soluta enim perferendis illum veniam excepturi doloribus ducimus voluptatibus
                        numquam officiis expedita culpa hic sequi quasi reprehenderit iste obcaecati nostrum. Consequuntur aliquam,
                        assumenda architecto animi veniam dolore dolor?</p>
                    <Link to={'articleId'} className="bg-[#FFB340] hover:bg-[#ffb340e7] text-black font-bold py-3 px-6 rounded-md">Get
                        Read More...
                    </Link>
                </div>
                <div className="bg-[#031000] text-gray-300 p-10 rounded-md mb-10 ">
                    <h1 className="font-bold text-2xl mb-2">Tailwind Rocks!</h1>
                    <p className="my-7  justify-normal">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius eaque a ipsam aliquid omnis,
                        beatae possimus recusandae illum rem. Minima sequi voluptas repudiandae id? Quae, facere quam suscipit sed,
                        aperiam sapiente pariatur soluta enim perferendis illum veniam excepturi doloribus ducimus voluptatibus
                        numquam officiis expedita culpa hic sequi quasi reprehenderit iste obcaecati nostrum. Consequuntur aliquam,
                        assumenda architecto animi veniam dolore dolor?</p>
                    <Link to={'articleId'} className="bg-[#FFB340] hover:bg-[#ffb340e7] text-black font-bold py-3 px-6 rounded-md">Get
                        Read More...
                    </Link>
                </div>
                <div className="bg-[#031000] text-gray-300 p-10 rounded-md mb-10 ">
                    <h1 className="font-bold text-2xl mb-2">Tailwind Rocks!</h1>
                    <p className="my-7">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius eaque a ipsam aliquid omnis,
                        beatae possimus recusandae illum rem. Minima sequi voluptas repudiandae id? Quae, facere quam suscipit sed,
                        aperiam sapiente pariatur soluta enim perferendis illum veniam excepturi doloribus ducimus voluptatibus
                        numquam officiis expedita culpa hic sequi quasi reprehenderit iste obcaecati nostrum. Consequuntur aliquam,
                        assumenda architecto animi veniam dolore dolor?</p>
                    <Link to={'articleId'} className="bg-[#FFB340] hover:bg-[#ffb340e7] text-black font-bold py-3 px-6 rounded-md">Get
                        Read More...
                    </Link>
                </div>
            </div>
        </>
    )
}
export default Article;