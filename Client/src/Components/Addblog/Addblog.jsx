import { useEffect, useState } from "react";
import axios from "axios";
import { Vortex } from "react-loader-spinner";
import { Errormessage } from "../Errormessage/Errormessage";
import { useNavigate } from "react-router-dom";

const AddBlog = () => {
  const [errormessage, setErrormessage] = useState("");
  const [onecat, setOnecat] = useState("");
  const [temp, setTemp] = useState([]);
  const [ImgCover, setImgCover] = useState("");
  const [loading, setLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [data, setData] = useState(null);
  const [form, setForm] = useState({
    title: "",
    aboutblog: "",
    coverpic: "",
    categories: [],
  });
  const naviate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("currentuser");
    if (user) {
      setIsAuthenticated(true);
      setData(JSON.parse(user));
    }
  }, []);

  const UploadFile = async (file) => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "images_preset");
    try {
      const cloudName = import.meta.env.VITE_CLOUDINARY;
      const resourceType = "image";
      const api = `https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload`;
      const res = await axios.post(api, data);
      const { secure_url } = res.data;
      return secure_url;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const addCatToTemp = (e) => {
    e.preventDefault();
    if (onecat.trim()) {
      setTemp([...temp, onecat.trim()]);
      setOnecat("");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const CoverUrl = await UploadFile(ImgCover);
    if (!CoverUrl) {
      setErrormessage("Failed to upload images.");
      setLoading(false);
      return;
    }

    const newForm = {
      ...form,
      coverpic: CoverUrl,
      categories: temp,
      firstname: data?.[0]?.firstname,
      profilepic: data?.[0]?.profilepic,
      userid: data?.[0]?._id,
    };

    try {
      const res = await axios.post("http://localhost:5000/addBlog", newForm);
      if (res.status === 201) naviate("/blog");
      // Clear form and temporary state
      setForm({ title: "", aboutblog: "", coverpic: "", categories: [] });
      setTemp([]);
      setImgCover("");
    } catch (error) {
      console.error(error);
      setErrormessage("Failed to submit blog.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {isAuthenticated ? (
        <div className="mx-auto w-[80%] m-[50px] pb-3 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold text-center font-sans py-5">
            Add Blog
          </h1>
          <form className="" onSubmit={handleSubmit}>
            <div className="flex items-center justify-center gap-10 px-[100px] pb-20">
              {/* left */}
              <div className="w-[50%] flex flex-col gap-10 pb-5">
                <div className="w-full h-12">
                  <label htmlFor="title" className="text-xl font-sans px-1">
                    Title
                  </label>
                  <div className="flex">
                    <input
                      type="text"
                      name="title"
                      value={form.title}
                      className="w-full pl-2 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-[#FFB340]"
                      placeholder="Title"
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="w-full h-12">
                  <label htmlFor="aboutblog" className="text-xl font-sans px-1">
                    About Blog
                  </label>
                  <div className="flex">
                    <textarea
                      type="text"
                      name="aboutblog"
                      value={form.aboutblog}
                      onChange={handleChange}
                      className="w-full pl-2 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-[#FFB340]"
                      placeholder="About blog"
                      required
                    />
                  </div>
                </div>
                <label className="w-64 flex flex-col items-center mt-5 px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer">
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                  </svg>
                  <span className="mt-2 text-base leading-normal">
                    Select a cover Picture
                  </span>
                  <input
                    name="coverpic"
                    type="file"
                    className="hidden"
                    onChange={(e) => setImgCover(e.target.files[0])}
                    required
                  />
                </label>
                {loading && (
                  <Vortex
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="vortex-loading"
                    wrapperStyle={{}}
                    wrapperClass="vortex-wrapper"
                    colors={[
                      "red",
                      "green",
                      "blue",
                      "yellow",
                      "orange",
                      "purple",
                    ]}
                  />
                )}
                <div className="w-full h-12">
                  <label
                    htmlFor="Categories"
                    className="text-xl font-sans px-1"
                  >
                    Categories
                  </label>
                  <div className="flex">
                    <input
                      type="text"
                      name="Categories"
                      className="w-full pl-2 pr-3 py-2 rounded border-2 border-gray-200 outline-none focus:border-[#FFB340]"
                      placeholder="Categories"
                      value={onecat}
                      onChange={(e) => setOnecat(e.target.value)}
                    />
                    <button
                      className="bg-[#031000] border border-t-0 rounded px-4 py-2 text-white"
                      onClick={addCatToTemp}
                    >
                      Add
                    </button>
                  </div>
                </div>
                <ul className="flex justify-start gap-10 flex-wrap">
                  {temp.map((item, index) => (
                    <li
                      key={index}
                      className="px-3 py-1 rounded-[4px] hover:bg-gray-800 bg-[#031000] text-[#FFB340]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {errormessage && <Errormessage message={errormessage} />}
            <div className="flex justify-center items-center">
              <button
                type="submit"
                className="bg-[#FFB340] hover:bg-[#ffb340e7] text-black font-bold py-3 px-6 rounded-md"
              >
                Add Blog
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div>
          <h2 className="text-2xl font-bold mb-6 text-center">
            Register Your Account
          </h2>
        </div>
      )}
    </>
  );
};

export default AddBlog;
