import React from "react";
import Burger1 from "../../assets/burger/burger1.png";
import career5 from "../../assets/burger/career5.png";
import { useNavigate } from "react-router-dom";
const AppStore = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="bg-gray-100 py-14">
        <div className="container">
          <div className="grid items-center">
            <div className="space-y-6 max-w-xl mx-auto">
              <h1
                data-aos="zoom-in"
                className="text-xl sm:text-4xl font-semibold text-center text-gray-700"
              >
                Book your first appointment for absolutely free!
              </h1>
              <div className="flex flex-wrap justify-center items-center">
                <a href="#" className="mr-20">
                  <img
                    data-aos="fade-up"
                    src={Burger1}
                    alt="Play store"
                    className="max-w-[100px] sm:max-w-[200px]"
                  />
                </a>
                <a href="#">
                  <img
                    data-aos="fade-up"
                    data-aos-delay="200"
                    src={career5}
                    alt="App store"
                    className="max-w-[100px] sm:max-w-[200px]"
                  />
                </a>
              </div>
              <div className="flex justify-center">
                <button onClick={() => { navigate('/contact') }} className="bg-gradient-to-r from-primary to-secondary text-white py-2 px-4 rounded-full shadow-xl hover:shadow-md">
                  Contact Us
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppStore;