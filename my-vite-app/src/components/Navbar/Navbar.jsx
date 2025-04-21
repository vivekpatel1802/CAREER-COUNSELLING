import React from "react";
import Logo from "../../assets/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
// inline-block py-4 px-4 hover:text-primary duration-300
// const Menu = [
//   {
//     id: 1,
//     name: "About",
//     link: "/#about",
//   },
//   {
//     id: 2,
//     name: "Counselling",
//     link: "/#counselling",
//   },
//   {
//     id: 3,
//     name: "Courses",
//     link: "/#courses",
//   },
//   {
//     id: 4,
//     name: "Contact Us",
//     link: "/#contact",
//   },
//   {
//     id:5,
//     name: "Login",
//     link: "/#login",
//   }
// ];
const Navbar = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="shadow-xl border border-solid border-black">
        <div className="container py-3 sm:py-0">
          <div className="flex justify-between items-center">
            <div>
              <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
                <img src={Logo} alt="Logo" className="w-16" /><p className="mt-4 font-protest">Aspire foundations</p>
              </a>
            </div>
            <div className="flex justify-between items-center gap-4">
              <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full" onClick={() => { navigate('/home') }}>
                Home
              </button>
              <ul className="hidden sm:flex items-center gap-4">

                <li>
                  <NavLink to='/counselling' className='inline-block py-4 px-4 hover:text-primary duration-300'>Counselling</NavLink>
                </li>
                <li>
                  <NavLink to='/courses' className='inline-block py-4 px-4 hover:text-primary duration-300'>Courses</NavLink>
                </li>
                <li>
                  <NavLink to='/contact' className='inline-block py-4 px-4 hover:text-primary duration-300'>Contact Us</NavLink>
                </li>
                <li>
                  <NavLink to='/login' className='inline-block py-4 px-4 hover:text-primary duration-300'>Login</NavLink>
                </li>
                <li>
                  <NavLink to='/crud' className='inline-block py-4 px-4 hover:text-primary duration-300'>CRUD</NavLink>
                </li>

              </ul>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;