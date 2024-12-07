import Hero from "../../Components/Hero/Hero";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import Aboutus from "../../Components/AboutUs/Aboutus";
import Featurpost from "../../Components/Featurepost/Featurepost";
import Categories from "../../Components/Categories/Categories";
import PopularBlogger from "../../Components/PopularBlogger/PopularBlogger";
import Stats from "../../Components/Stats/Stats";
import Cta from "../../Components/CTA/Cta";
const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <div className=" h-[300px]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#031000"
            fillOpacity="1"
            d="M0,64L12,90.7C24,117,48,171,72,186.7C96,203,120,181,144,165.3C168,149,192,139,216,154.7C240,171,264,213,288,240C312,267,336,277,360,266.7C384,256,408,224,432,197.3C456,171,480,149,504,165.3C528,181,552,235,576,224C600,213,624,139,648,112C672,85,696,107,720,101.3C744,96,768,64,792,69.3C816,75,840,117,864,165.3C888,213,912,267,936,245.3C960,224,984,128,1008,117.3C1032,107,1056,181,1080,186.7C1104,192,1128,128,1152,96C1176,64,1200,64,1224,85.3C1248,107,1272,149,1296,170.7C1320,192,1344,192,1368,208C1392,224,1416,256,1428,272L1440,288L1440,0L1428,0C1416,0,1392,0,1368,0C1344,0,1320,0,1296,0C1272,0,1248,0,1224,0C1200,0,1176,0,1152,0C1128,0,1104,0,1080,0C1056,0,1032,0,1008,0C984,0,960,0,936,0C912,0,888,0,864,0C840,0,816,0,792,0C768,0,744,0,720,0C696,0,672,0,648,0C624,0,600,0,576,0C552,0,528,0,504,0C480,0,456,0,432,0C408,0,384,0,360,0C336,0,312,0,288,0C264,0,240,0,216,0C192,0,168,0,144,0C120,0,96,0,72,0C48,0,24,0,12,0L0,0Z"
          ></path>
        </svg>
      </div>
      <Featurpost></Featurpost>
      <div className=" h-[300px]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#031000"
            fillOpacity="1"
            d="M0,64L12,90.7C24,117,48,171,72,186.7C96,203,120,181,144,165.3C168,149,192,139,216,154.7C240,171,264,213,288,240C312,267,336,277,360,266.7C384,256,408,224,432,197.3C456,171,480,149,504,165.3C528,181,552,235,576,224C600,213,624,139,648,112C672,85,696,107,720,101.3C744,96,768,64,792,69.3C816,75,840,117,864,165.3C888,213,912,267,936,245.3C960,224,984,128,1008,117.3C1032,107,1056,181,1080,186.7C1104,192,1128,128,1152,96C1176,64,1200,64,1224,85.3C1248,107,1272,149,1296,170.7C1320,192,1344,192,1368,208C1392,224,1416,256,1428,272L1440,288L1440,320L1428,320C1416,320,1392,320,1368,320C1344,320,1320,320,1296,320C1272,320,1248,320,1224,320C1200,320,1176,320,1152,320C1128,320,1104,320,1080,320C1056,320,1032,320,1008,320C984,320,960,320,936,320C912,320,888,320,864,320C840,320,816,320,792,320C768,320,744,320,720,320C696,320,672,320,648,320C624,320,600,320,576,320C552,320,528,320,504,320C480,320,456,320,432,320C408,320,384,320,360,320C336,320,312,320,288,320C264,320,240,320,216,320C192,320,168,320,144,320C120,320,96,320,72,320C48,320,24,320,12,320L0,320Z"
          ></path>
        </svg>
      </div>
      <Aboutus></Aboutus>
      <div className=" h-[200px]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#031000"
            fillOpacity="1"
            d="M0,128L24,138.7C48,149,96,171,144,181.3C192,192,240,192,288,181.3C336,171,384,149,432,138.7C480,128,528,128,576,144C624,160,672,192,720,192C768,192,816,160,864,170.7C912,181,960,235,1008,229.3C1056,224,1104,160,1152,133.3C1200,107,1248,117,1296,154.7C1344,192,1392,256,1416,288L1440,320L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"
          ></path>
        </svg>
      </div>

      <Categories></Categories>

      <div className="">
        <PopularBlogger></PopularBlogger>
        <Stats></Stats>
        {/* <img src="/src/assets/blob.svg" alt="" width={'600px'} className=" absolute left-[-100px] top-[200px] -z-10 overflow-hidden" /> */}
        {/* <img src="/src/assets/blob.svg" alt="" width={'600px'} className=" absolute  right-[0px] top-[200px] bottom-0 -z-10 overflow-hidden" /> */}
      </div>
      <div className=" h-[300px]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#031000"
            fillOpacity="1"
            d="M0,64L12,90.7C24,117,48,171,72,186.7C96,203,120,181,144,165.3C168,149,192,139,216,154.7C240,171,264,213,288,240C312,267,336,277,360,266.7C384,256,408,224,432,197.3C456,171,480,149,504,165.3C528,181,552,235,576,224C600,213,624,139,648,112C672,85,696,107,720,101.3C744,96,768,64,792,69.3C816,75,840,117,864,165.3C888,213,912,267,936,245.3C960,224,984,128,1008,117.3C1032,107,1056,181,1080,186.7C1104,192,1128,128,1152,96C1176,64,1200,64,1224,85.3C1248,107,1272,149,1296,170.7C1320,192,1344,192,1368,208C1392,224,1416,256,1428,272L1440,288L1440,320L1428,320C1416,320,1392,320,1368,320C1344,320,1320,320,1296,320C1272,320,1248,320,1224,320C1200,320,1176,320,1152,320C1128,320,1104,320,1080,320C1056,320,1032,320,1008,320C984,320,960,320,936,320C912,320,888,320,864,320C840,320,816,320,792,320C768,320,744,320,720,320C696,320,672,320,648,320C624,320,600,320,576,320C552,320,528,320,504,320C480,320,456,320,432,320C408,320,384,320,360,320C336,320,312,320,288,320C264,320,240,320,216,320C192,320,168,320,144,320C120,320,96,320,72,320C48,320,24,320,12,320L0,320Z"
          ></path>
        </svg>
      </div>
      <Cta></Cta>
      <Footer></Footer>
    </>
  );
};
export default Home;
