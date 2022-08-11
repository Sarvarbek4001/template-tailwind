import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Aniamations = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <div className=" max-w-[1280px] mx-auto text-center mt-[700px] mb-[500px]">
      <h1>Welcome to React animation</h1>
      <h1>Fade</h1>
      <div className=" w-full flex flex-wrap">
        <div
          className="w-[400px] bg-gray-900 text-white text-center py-10 mb-5 mr-5"
          data-aos="fade-up"
        >
          1
        </div>
        <div
          className="w-[400px] bg-gray-900 text-white text-center py-10 mb-5 mr-5"
          data-aos="fade-up"
        >
          2
        </div>
        <div
          className="w-[400px] bg-gray-900 text-white text-center py-10 mb-5 mr-5"
          data-aos="fade-up"
        >
          2
        </div>
        <div
          className="w-[400px] bg-gray-900 text-white text-center py-10 mb-5 mr-5"
          data-aos="fade-up"
        >
          2
        </div>
        <div
          className="w-[400px] bg-gray-900 text-white text-center py-10 mb-5 mr-5"
          data-aos="fade-up"
        >
          2
        </div>
        <div
          className="w-[400px] bg-gray-900 text-white text-center py-10 mb-5 mr-5"
          data-aos="fade-up"
        >
          2
        </div>
        <div
          className="w-[400px] bg-gray-900 text-white text-center py-10 mb-5 mr-5"
          data-aos="fade-up"
        >
          2
        </div>
        <div
          className="w-[400px] bg-gray-900 text-white text-center py-10 mb-5 mr-5"
          data-aos="fade-up"
        >
          2
        </div>
        <div
          className="w-[400px] bg-gray-900 text-white text-center py-10 mb-5 mr-5"
          data-aos="fade-up"
        >
          2
        </div>
        <div
          className="w-[400px] bg-gray-900 text-white text-center py-10 mb-5 mr-5"
          data-aos="fade-up"
        >
          2
        </div>
        <div
          className="w-[400px] bg-gray-900 text-white text-center py-10 mb-5 mr-5"
          data-aos="fade-up"
        >
          2
        </div>
        <div
          className="w-[400px] bg-gray-900 text-white text-center py-10 mb-5 mr-5"
          data-aos="fade-up"
        >
          2
        </div>
        <div
          className="w-[400px] bg-gray-900 text-white text-center py-10 mb-5 mr-5"
          data-aos="fade-up"
        >
          2
        </div>
        <div
          className="w-[400px] bg-gray-900 text-white text-center py-10 mb-5 mr-5"
          data-aos="fade-up"
        >
          2
        </div>
        <div
          className="w-[400px] bg-gray-900 text-white text-center py-10 mb-5 mr-5"
          data-aos="fade-up"
        >
          2
        </div>
        <div
          className="w-[400px] bg-gray-900 text-white text-center py-10 mb-5 mr-5"
          data-aos="fade-up"
        >
          2
        </div>
        <div
          className="w-[400px] bg-gray-900 text-white text-center py-10 mb-5 mr-5"
          data-aos="fade-up"
        >
          2
        </div>
      </div>
    </div>
  );
};

export default Aniamations;
