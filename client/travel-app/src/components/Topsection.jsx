import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import LoggedIn from "../pages/LoggedIn.jsx";

const Topsection = () => {
  const isLoggedIn = true;
  return (
    <div id="top" className="h-[100%] ">
      <Navbar />
{/* <LoggedIn/> */}
      <Hero />
    </div>
  );
};

export default Topsection;
