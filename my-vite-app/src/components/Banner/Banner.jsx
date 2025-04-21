import React from "react";
import BurgerImg from "../../assets/burger/burger5.png";
import { FaBookOpenReader } from "react-icons/fa6";
import { ImBubbles } from "react-icons/im";
import { ImUserTie } from "react-icons/im";
const Banner = () => {
  return (
    <>
      <div className="min-h-[550px]" id="about">
        <div className="min-h-[550px] flex justify-center items-center backdrop-blur-xl py-12 sm:py-0 ">
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Image section */}
              <div data-aos="flip-up">
                <img
                  src={BurgerImg}
                  alt="biryani img"
                  className="max-w-[430px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]"
                />
              </div>
              {/* text content section */}
              <div className="flex flex-col justify-center gap-6 sm:pt-0">
                <h1
                  data-aos="fade-up"
                  className="text-3xl sm:text-4xl font-bold"
                >
                  About Us
                </h1>
                <p
                  data-aos="fade-up"
                  className="text-md text-gray-500 tracking-wide leading-5 text-justify"
                >
                  We offer AI-driven career assessments, expert advice, and tailored recommendations to help you find the right career path.Leveraging advanced algorithms and data-driven insights, we analyze your skills, interests, and goals to provide career recommendations that align with your aspirations.
                  <br />
                  <br />
                  Why Choose Us?Unlike traditional career counseling, our platform provides real-time, actionable insights that evolve with your career growth.
                </p>
                <div className="flex gap-6">
                  <div data-aos="fade-up">
                    <FaBookOpenReader className="text-4xl h-20 w-20 shadow-sm p-5 bg-violet-100" />
                  </div>
                  <div data-aos="fade-up" data-aos-delay="200">
                    <ImBubbles className="text-4xl h-20 w-20 shadow-sm p-5 bg-orange-100" />
                  </div>
                  <div data-aos="fade-up" data-aos-delay="400">
                    <ImUserTie className="text-4xl h-20 w-20 shadow-sm p-5 bg-green-100" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;