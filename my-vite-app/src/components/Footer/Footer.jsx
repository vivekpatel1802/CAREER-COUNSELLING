import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import footerLogo from "../../assets/logo.png";


const Footer = () => {
  return (
    <div data-aos="fade-up" className="bg-gray-100">
      <section className="max-w-[1200px] mx-auto">
        <div className=" grid md:grid-cols-3 py-5">
          {/* company details */}
          <div className=" py-8 px-4 ">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3 font-protest">
              <img src={footerLogo} alt="Logo" className="w-16" />
              Aspire Foundations
            </h1>
            <p className="text-justify">
              Shivaji Nagar, Block C-4, Near Hanuman Mandir,
              Karol Bagh,
              New Delhi - 110005,
              India{" "}
            </p>
            <br />
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>New Delhi, Delhi</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <p>+91 7887858923</p>
            </div>
            {/* Social Handle */}
            <div className="flex items-center gap-3 mt-6">
              <a href="#">
                <FaInstagram className="text-3xl" />
              </a>
              <a href="#">
                <FaFacebook className="text-3xl" />
              </a>
              <a href="#">
                <FaLinkedin className="text-3xl" />
              </a>
              <a href="#">
                <FaSquareXTwitter className="text-3xl" />
              </a>
            </div>
          </div>
          {/* footer links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 ">
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Other Branch
                </h1>
                <p className="text-justify">
                  Sarkhej Road, Near Prahlad Nagar Garden,
                  Sector 17, Vastrapur,
                  Ahmedabad - 380015,
                  Gujarat, India{" "}
                </p>
                <br />
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>Ahmedabad, Gujarat</p>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <FaMobileAlt />
                  <p>+91 9898985858</p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Links
                </h1>
                <ul className="flex flex-col gap-3">
                  <li className="cursor-pointer">Home</li>
                  <li className="cursor-pointer">About</li>
                  <li className="cursor-pointer">Services</li>
                  <li className="cursor-pointer">Login</li>
                </ul>
              </div>
            </div>
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  <li className="cursor-pointer">Home</li>
                  <li className="cursor-pointer">About</li>
                  <li className="cursor-pointer">Services</li>
                  <li className="cursor-pointer">Login</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Aspire Foundations. All Rights Reserved.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Footer;