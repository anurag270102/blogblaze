import { Errormessage } from "../Errormessage/Errormessage";
import { useState, useEffect } from "react";
import { Vortex } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddArticle = () => {
  const [errormessage, setErrormessage] = useState("");
  const [data, setData] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [onecat, setOnecat] = useState("");
  const [temp, setTemp] = useState([]);
  const [loading, setLoading] = useState(false);
  const naviate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    aboutarticle: "",
    categories: [],
  });

  useEffect(() => {
    const user = localStorage.getItem("currentuser");
    if (user) {
      setIsAuthenticated(true);
      setData(JSON.parse(user));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const addCatToTemp = (e) => {
    e.preventDefault();
    if (onecat.trim()) {
      setTemp([...temp, onecat.trim()]);
      setOnecat("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const newForm = {
      ...form,
      categories: temp,
      firstname: data?.[0]?.firstname,
      userid: data?.[0]?._id,
    };

    console.log(newForm);
    try {
      const res = await axios.post("http://localhost:5000/addarticle", newForm);
      if (res.status === 201) naviate("/article");
      // Clear form and temporary state
      setForm({ title: "", aboutarticle: "", categories: [] });
      setTemp([]);
    } catch (error) {
      console.error(error);
      setErrormessage("Failed to submit article.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      {isAuthenticated ? (
        <div className="mx-auto w-[80%] m-[50px] pb-3 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold text-center font-sans py-5">
            Add Article
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
                  <label
                    htmlFor="aboutarticle"
                    className="text-xl font-sans px-1"
                  >
                    About Article
                  </label>
                  <div className="flex">
                    <textarea
                      type="text"
                      name="aboutarticle"
                      value={form.aboutblog}
                      onChange={handleChange}
                      className="w-full pl-2 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-[#FFB340]"
                      placeholder="About Article"
                      required
                    />
                  </div>
                </div>
                <div className="w-full mt-5 h-12">
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
            {loading && (
              <Vortex
                visible={true}
                height="80"
                width="80"
                ariaLabel="vortex-loading"
                wrapperStyle={{}}
                wrapperClass="vortex-wrapper"
                colors={["red", "green", "blue", "yellow", "orange", "purple"]}
              />
            )}
            <div className="flex justify-center items-center">
              <button
                type="submit"
                className="bg-[#FFB340] hover:bg-[#ffb340e7] text-black font-bold py-3 px-6 rounded-md"
              >
                Add Article
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
export default AddArticle;
