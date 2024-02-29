import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Servicessection from "./components/Servicessection";
import Showcase from "./components/Showcase";
import Testimonials from "./components/Testimonials";
import Topsection from "./components/Topsection";
import ServiceCard from "./components/servicecard";
import SuperUser from "./pages/superuser";
import TransportPage from "./pages/TransportPage";
import AboutUsPage from "./pages/AboutUsPage";
import BookWithUs from "./pages/BookWithUs";

import "./index.css";

function App() {
  return (
    <div className="App">
      <Topsection />
      <Servicessection />
      <Testimonials />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/superuser" element={<SuperUser />} />
        <Route path="/transport" element={<TransportPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/book" element={<BookWithUs/>} />
      </Routes>
      
      <Footer />
    </div>
  );
}

function Home() {
  return (
    <>
      <Showcase />
      <BookWithUs/>
      <Newsletter />
      <ServiceCard />
    </>
  );
}

export default App;

