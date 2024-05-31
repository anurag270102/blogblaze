import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";


const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [active, setactive] = useState(false);
    const navigator = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [data, setData] = useState(null);
    const {pathname}=useLocation();
    useEffect(() => {
        const user = localStorage.getItem('currentuser');
        if (user) {
            setIsAuthenticated(true);
            setData(JSON.parse(user));
        }    
    }, []);

    // const { pathname } = useLocation();
    const isActive = () => {
        window.scrollY > 0 ? setactive(true) : setactive(false);
    }
    useEffect(() => {
        window.addEventListener('scroll', isActive);
        return () => {
            window.removeEventListener('scroll', isActive);
        }
    }, []);
    
    const getSearchItem = () => {
        navigator(`/blog?search=${searchValue}`);
        setSearchValue('');
    }

    const handleLogout = () => {
        localStorage.removeItem('currentuser');
        setIsAuthenticated(false);
        navigator('/login');
    };
    return (
        <>
            <div className={active ? "px-10 bg-[#FFB340] text-black font-normal flex flex-wrap justify-between sticky top-0 z-50 transition-all duration-150 ease-in-out" : 'z-50 px-10 bg-[#031000] text-white flex flex-wrap justify-between  sticky top-0'}>
                {/* left */}
                <div className="flex gap-16">
                    {/* logo */}
                    <div>
                        <Link to={'/'} className=" cursor-pointer transition-all duration-150 ease-in-out"><img src={active ? "/src/assets/Colorful Modern Concept Free B Logo_new.svg" : '/src/assets/Colorful Modern Concept Free B Logo.svg'} width={'100px'}></img></Link>
                    </div>

                    {/* content */}
                    <div className=" list-none flex items-center gap-10 font-medium">
                        <Link to={'/blog'} className="text-[22px] font-normal font-sans">Blog</Link>
                        <Link to={'/article'} className="text-[22px] font-normal font-sans">Article</Link>
                        <Link to={'/contact'} className="text-[22px] font-normal font-sans">Contact</Link>
                    </div>
                </div>
                {/* searchbar */}
                {pathname==='/'?
                <div className="flex items-center">
                    <div className='max-w-[10/12] mx-auto'>
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
                </div>:<></>}
                {/* right */}
                <div className="flex items-center gap-5">
                    {/* buttons */}
                    {isAuthenticated ? <div>
                        <img
                            src= {isAuthenticated?data[0].profilepic:"https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"}
                            className="mt-2 rounded-full w-12 h-12 "
                            alt="Avatar"
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        />
                    </div>
                        :
                        <div className="flex gap-8">
                            <Link to={'/login'}>
                                <button
                                    type="button"
                                    data-twe-ripple-init
                                    data-twe-ripple-color="light"
                                    className={active ? '"inline-block rounded bg-[#031000] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[#031000] transition duration-150 ease-in-out hover:bg-[#031000] hover:shadow-[#031000] focus:bg-[#031000] focus:shadow-[#031000] focus:outline-none focus:ring-0 active:bg-[#031000] active:shadow-[#031000] motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong' : '"inline-block rounded bg-[#FFB340] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[#FFB340] transition duration-150 ease-in-out hover:bg-[#FFB340] hover:shadow-[#FFB340] focus:bg-[#FFB340] focus:shadow-[#FFB340] focus:outline-none focus:ring-0 active:bg-[#FFB340] active:shadow-[#FFB340] motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong'}>
                                    Login
                                </button>
                            </Link>
                        </div>}
                </div>
            </div>
            {isDropdownOpen ?
                <div id="dropdown" className="z-10  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute right-3">
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                        <li>
                            <Link to={`/myprofile/${data[0]._id}`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Profile</Link>
                        </li>
                        
                        <li>
                            <Link to={'/addblog'} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Add Blog</Link>
                        </li>
                        <li>
                            <Link to={'/addarticle'} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Add Article</Link>
                        </li>
                        <li>
                            <Link className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={handleLogout}>Logout</Link>
                        </li>
                    </ul>
                </div> :
                <></>
            }
        </>
    );
}

export default Navbar;