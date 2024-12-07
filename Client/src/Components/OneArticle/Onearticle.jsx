import { useParams, Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import axios from "axios";
import { useEffect, useState } from "react";
import { format, parseISO } from "date-fns";

const Onearticle = () => {
  const { articleId } = useParams();
  const [Data, SetData] = useState({});
  const [loading, Setloading] = useState(true);
  const fetchArticle = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/article/${articleId}`);
      SetData(res.data.article);
      Setloading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchArticle();
  }, []);

  const formatDateTime = (dateTime) => {
    const date = parseISO(dateTime);
    return format(date, "do MMMM, h:mm ");
  };

  return (
    <>
      <Navbar></Navbar>
      {loading ? (
        <div className=" w-6 h-6">Loading</div>
      ) : (
        <div className=" p-4">
          <div className="max-w-3xl mx-auto ">
            <div className="mt-3  rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
              <div className="">
                <h1 className="text-gray-900 font-bold text-4xl">
                  {Data.title}
                </h1>
                <div className="py-5 text-sm font-regular text-gray-900 flex">
                  <span className="mr-3 flex flex-row items-center">
                    <svg
                      className="text-[#FFB340]"
                      fill="currentColor"
                      height="13px"
                      width="13px"
                      version="1.1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 512 512"
                      style={{ enableBackground: "new 0 0 512 512" }}
                      xmlSpace="preserve"
                    >
                      <g>
                        <g>
                          <path
                            d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256
			                                    c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128
		                   	                    c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z"
                          ></path>
                        </g>
                      </g>
                    </svg>
                    <span className="ml-1">
                      {formatDateTime(Data.updatedAt)}
                    </span>
                  </span>
                  <a
                    href="#"
                    className="flex flex-row items-center hover:text-[#FFB340]  mr-3"
                  >
                    <svg
                      className="text-[#FFB340]"
                      fill="currentColor"
                      height="16px"
                      aria-hidden="true"
                      role="img"
                      focusable="false"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="currentColor"
                        d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                      ></path>
                      <path d="M0 0h24v24H0z" fill="none"></path>
                    </svg>
                    <span className="ml-1">{Data.firstname}</span>
                  </a>
                </div>
                <hr />
                <p className="text-base  text-justify leading-8 my-5">
                  {Data.aboutarticle}
                </p>
              </div>
              <div className="flex gap-10">
                {Data.categories.map((category) => (
                  <Link
                    key={category}
                    to={`/article?search=${category}`}
                    className="px-3 w-fit py-1 rounded-[4px] hover:bg-gray-800 bg-[#031000] text-[#FFB340]"
                  >
                    {category}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer></Footer>
    </>
  );
};
export default Onearticle;
