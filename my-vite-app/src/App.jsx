import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";
import Courses from "./components/Courses/Courses";
import Contact from "./components/Contact/Contact";
import Login from "./components/Forms/Login";
import Signup from "./components/Forms/Signup";
import CourseList from "./components/CRUD/CourseList";



const App = () => {
  React.useEffect(() => {
    AOS.init({     //Animate On Scroll
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  });
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home></Home>} />
        <Route path="/counselling" element={<Content></Content>} />
        <Route path='/courses' element={<Courses></Courses>} />
        <Route path='/contact' element={<Contact></Contact>} />
        <Route path='/' element={<Login></Login>} />
        <Route path='/signup' element={<Signup></Signup>} />
        <Route path='/crud' element={<CourseList></CourseList>} />

      </Routes>
    </div>
  );
};

export default App;

// import SignUp from './components/SignUp/SignUp';
// import Login from './components/Login/Login';


// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>

//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home></Home>} />
//         <Route path="/counselling" element={<Content></Content>} />
//         <Route path='/courses' element={<Courses></Courses>} />
//         <Route path='/contact' element={<Contact></Contact>} />
//         <Route path='/login' element={<Login></Login>} />
//         <Route path='/signup' element={<Signup></Signup>} />
//       </Routes>

//       {/* <div>
//             <h1>Sign Up</h1>
//             <SignUp />
//             <h1>Login</h1>
//             <Login />
//         </div> */}
//     </>
//   )
// }

// export default App
