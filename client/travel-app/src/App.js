import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";
import Servicessection from "./components/Servicessection";
import Showcase from "./components/Showcase";
import Testimonials from "./components/Testimonials";
import Topsection from "./components/Topsection";
import ServiceCard from "./components/servicecard";
import './index.css';

function App() {
  return (
    <div className="App">
   <Topsection />
   <Servicessection/>
   <Testimonials/>

   <Showcase/>
   <Newsletter/>

   <ServiceCard/>
   <Footer/>
    </div>
  );
}

export default App;
