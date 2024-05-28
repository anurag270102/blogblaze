import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';
import { Errormessage } from "../Errormessage/Errormessage";
import setlocastorage from '../../Utils/SetLocalstorage';
import { Vortex } from 'react-loader-spinner';

const Register = () => {
    const [form, setform] = useState({
        firstname: '',
        lastname: '',
        password: '',
        email: '',
        aboutyourself: '',
        profilepic: '',
        coverpic: '',
        instagramurl: '',
        facebookurl: '',
        youtubeurl: '',
        twitterurl: ''
    });
    const [errormessage, setErrormessage] = useState('');
    const navigate = useNavigate();
    const [ImgProfile, setImgProfile] = useState('');
    const [ImgCover, setImgCover] = useState('');
    const [loading, setLoading] = useState(false);

    const handlechange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setform({
            ...form,
            [name]: value
        });
    };

    const UploadFile = async (file) => {
        const data = new FormData();
        data.append("file", file);
        data.append('upload_preset', 'images_preset');
        try {
            const cloudName = import.meta.env.VITE_CLOUDINARY;
            console.log(import.meta.env.VITE_CLOUDINARY);
            const resourceType = 'image';
            const api = `https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload`;
            const res = await axios.post(api, data);
            const { secure_url } = res.data;
            return secure_url;
        } catch (error) {
            console.error(error);
        }
    };

    const handlesubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const ProfileUrl = await UploadFile(ImgProfile);
        const CoverUrl = await UploadFile(ImgCover);
        if (!ProfileUrl || !CoverUrl) {
            setErrormessage('Failed to upload images.');
            return;
        }
        setImgCover('');
        setImgProfile('');
        setLoading(false);
        try {
            const status = await axios.post('http://localhost:5000/register', {
                ...form,
                profilepic: ProfileUrl,
                coverpic:CoverUrl,
            });
            setlocastorage(status.data.user._id, status.data.user);
            if(status.status===201) navigate('/');
        } catch (error) {
            if (error.response) {
                setErrormessage(error.response.data.message);
            }
        }
    };
    return (
        <>
            <div className="mx-auto w-full m-[50px] pb-3 rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold text-center font-sans py-5">Register Form</h1>
                <form onSubmit={handlesubmit}>
                    <div className="flex items-center justify-center gap-10 px-[100px] pb-20">
                        <div className="w-[50%] flex flex-col gap-10 pb-5">
                            <div className="w-full h-12">
                                <label className="text-xl font-sans px-1">First Name</label>
                                <div className="flex">
                                    <input
                                        type="text"
                                        name="firstname"
                                        value={form.firstname}
                                        className="w-full pl-2 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-[#FFB340]"
                                        placeholder="First Name"
                                        onChange={handlechange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="w-full h-12">
                                <label className="text-xl font-sans px-1">Last Name</label>
                                <div className="flex">
                                    <input
                                        type="text"
                                        name="lastname"
                                        value={form.lastname}
                                        onChange={handlechange}
                                        className="w-full pl-2 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-[#FFB340]"
                                        placeholder="Last Name"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="w-full h-12">
                                <label className="text-xl font-sans px-1">Email</label>
                                <div className="flex">
                                    <input
                                        type="email"
                                        name="email"
                                        value={form.email}
                                        onChange={handlechange}
                                        className="w-full pl-2 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-[#FFB340]"
                                        placeholder="Email"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="w-full h-12">
                                <label className="text-xl font-sans px-1">Password</label>
                                <div className="flex">
                                    <input
                                        name="password"
                                        value={form.password}
                                        onChange={handlechange}
                                        type="password"
                                        className="w-full pl-2 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-[#FFB340]"
                                        placeholder="Password"
                                        required
                                    />
                                </div>
                                <p className="flex items-center gap-1 mt-2 font-sans text-sm antialiased font-normal leading-normal text-gray-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 -mt-px">
                                        <path fillRule="evenodd"
                                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                                            clipRule="evenodd"></path>
                                    </svg>
                                    Use at least 8 characters, one uppercase, one lowercase and one number.
                                </p>
                            </div>
                            <div className="w-full mt-4 h-12">
                                <label className="text-xl font-sans px-1">Instagram</label>
                                <div className="flex">
                                    <input
                                        type="text"
                                        name="instagramurl"
                                        value={form.instagramurl}
                                        onChange={handlechange}
                                        className="w-full pl-2 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-[#FFB340]"
                                        placeholder="https://instagram.com/yourprofile" />
                                </div>
                            </div>
                            <div className="w-full h-12">
                                <label className="text-xl font-sans px-1">You Tube</label>
                                <div className="flex">
                                    <input
                                        type="text"
                                        name="youtubeurl"
                                        value={form.youtubeurl}
                                        onChange={handlechange}
                                        className="w-full pl-2 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-[#FFB340]"
                                        placeholder="https://youtube.com/channel/yourchannel" />
                                </div>
                            </div>
                        </div>
                        <div className="w-[50%] flex flex-col gap-10 pb-5">
                            <div className="flex gap-10">
                                <div className="w-full h-12">
                                    <label className="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer">
                                        <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                                        </svg>
                                        <span className="mt-2 text-base leading-normal">Select a Profile Picture</span>
                                        <input
                                            name="profilepic"
                                            onChange={(e) => setImgProfile(e.target.files[0])}
                                            type='file'
                                            className="hidden"
                                            required
                                        />
                                    </label>
                                </div>
                                <div className="w-full h-12">
                                    <label className="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer">
                                        <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                                        </svg>
                                        <span className="mt-2 text-base leading-normal">Select a Cover Picture</span>
                                        <input
                                            type='file'
                                            name="coverpic"
                                            onChange={(e) => setImgCover(e.target.files[0])}
                                            className="hidden"
                                            required
                                        />
                                    </label>
                                </div>
                                {loading && <Vortex
                                    visible={true}
                                    height="80"
                                    width="80"
                                    ariaLabel="vortex-loading"
                                    wrapperStyle={{}}
                                    wrapperClass="vortex-wrapper"
                                    colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
                                />}
                            </div>
                            <div className="w-full mt-10 h-12">
                                <label className="text-xl font-sans px-1">About Yourself</label>
                                <div className="flex">
                                    <textarea
                                        type="text"
                                        name="aboutyourself"
                                        value={form.aboutyourself}
                                        onChange={handlechange}
                                        className="w-full h-[200px] pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-[#FFB340]"
                                        placeholder="About Yourself"
                                        spellCheck={true}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="w-full mt-[154px] h-12">
                                <label className="text-xl font-sans px-1">Facebook</label>
                                <div className="flex">
                                    <input
                                        type="text"
                                        name="facebookurl"
                                        value={form.facebookurl}
                                        onChange={handlechange}
                                        className="w-full pl-2 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-[#FFB340]"
                                        placeholder="https://facebook.com/yourprofile" />
                                </div>
                            </div>
                            <div className="w-full h-12">
                                <label className="text-xl font-sans px-1">Twitter</label>
                                <div className="flex">
                                    <input
                                        type="text"
                                        name="twitterurl"
                                        value={form.twitterurl}
                                        onChange={handlechange}
                                        className="w-full pl-2 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-[#FFB340]"
                                        placeholder="https://twitter.com/yourprofile" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {errormessage && <Errormessage message={errormessage} />}
                    <div className="flex justify-center items-center">
                        <button type="submit" className="bg-[#FFB340] hover:bg-[#ffb340e7] text-black font-bold py-3 px-6 rounded-md">
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Register;
