import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";
import Servicessection from "./components/Servicessection";
import Showcase from "./components/Showcase";
import Testimonials from "./components/Testimonials";
import Topsection from "./components/Topsection";
import ServiceCard from "./components/servicecard";
import SuperUser from "./pages/superuser";
import './index.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/superuser" element={<SuperUser />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <>
      <Topsection />
      <Servicessection />
      <Testimonials />
      <Showcase />
      <Newsletter />
      <ServiceCard />
      <Footer />
    </>
  );
}

export default App;
