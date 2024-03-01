import React from 'react';
import Navbar from "../components/Navbar";
import { Link } from 'react-router-dom';

const BeachImage = 'https://source.unsplash.com/random/800x600?beach';
const AdventurePackageImage = 'https://source.unsplash.com/random/800x600?adventure';
const HoneymoonPackageImage = 'https://source.unsplash.com/random/800x600?honeymoon';
const VacationPackageImage = 'https://source.unsplash.com/random/800x600?vacation';
const FranceImage = 'https://source.unsplash.com/random/800x600?france';
const KoreaImage = 'https://source.unsplash.com/random/800x600?korea';
const KenyaImage = 'https://source.unsplash.com/random/800x600?kenya';
const JapanImage = 'https://source.unsplash.com/random/800x600?japan';
const CanadaImage = 'https://source.unsplash.com/random/800x600?canada';
const AustraliaImage = 'https://source.unsplash.com/random/800x600?australia';
const ClientAvatarImage = 'https://source.unsplash.com/random/800x600?avatar';

const AboutUsPage = () => {
  return (
    <div className="about-us-container flex flex-col items-center justify-center text-black bg-white">
      {/* Hero Section */}
      <section className="hero-section text-center py-16" style={{ backgroundImage: `url(${require('../images/maldives-island.jpg')})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg mb-6">Discover amazing destinations with our carefully curated packages. Whether you're seeking adventure, romance, or relaxation, we have the perfect getaway for you.</p>
        </div>
      </section>

      {/* Promotion Section */}
      <section id="accommodation" className="promotion-section flex flex-col md:flex-row items-center justify-center">
        <div className="section-container max-w-md mx-auto md:mx-0 md:max-w-lg md:mr-16">
          <div className="promotion-content text-center">
            <h2 className="text-3xl mb-4">Explore our packages</h2>
            <p className="mb-6">Discover amazing destinations with our carefully curated packages. Whether you're seeking adventure, romance, or relaxation, we have the perfect getaway for you.</p>
          </div>
        </div>
        <div className="beach-image-container mt-6 md:mt-0">
          <img src={BeachImage} alt="Beach with mountains in the background" />
        </div>
      </section>

      {/* Trend Section */}
      <section className="trend-section max-w-4xl mx-auto mt-12">
        <h2 className="text-3xl mb-8">Our Best Packages</h2>
        <style>{`
          .package h3 {
            font-weight: bold;
          }
        `}</style>
        <div className="trend-packages grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="package">
            <h3>Adventure</h3>
            <p>Embark on thrilling adventures with our adrenaline-pumping packages.</p>
            <img src={AdventurePackageImage} alt="Adventure Package" />
            <div className="visual-percentage">30%</div>
          </div>
          <div className="package">
            <h3>Honeymoon</h3>
            <p>Romantic getaways for newlyweds to celebrate love in picturesque locations.</p>
            <img src={HoneymoonPackageImage} alt="Honeymoon Package" />
            <div className="visual-percentage">78%</div>
          </div>
          <div className="package">
            <h3>Vacations</h3>
            <p>Relax and unwind in exotic destinations with our vacation packages.</p>
            <img src={VacationPackageImage} alt="Vacation Package" />
            <div className="visual-percentage">55%</div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="bg-cover bg-center h-screen" style={{ backgroundImage: `url(${BeachImage})` }}>
        <Navbar />
        <div className="flex flex-col justify-center items-center h-full text-white">
          <h1 className="text-6xl font-bold text-center">Discover Your Next Adventure</h1>
          <p className="text-xl text-center mt-4">Explore our curated packages for the ultimate getaway experience</p>
          <Link to="/booking">
            <button className="bg-blue-500 text-white px-8 py-3 mt-8 rounded hover:bg-blue-700">
              View Packages
            </button>
          </Link>
        </div>
      </section>

      {/* Accommodation Section */}
      <section id="accommodation" className="py-8">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 p-4">
            <h2 className="text-3xl font-bold">Explore our packages</h2>
            <p>Discover amazing destinations with our carefully curated packages. Whether you're seeking adventure, romance, or relaxation, we have the perfect getaway for you.</p>
            <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-700">View Packages</button>
          </div>
          <div className="md:w-1/2">
            <img className="w-full h-auto" src={BeachImage} alt="Beach with mountains in the background" />
          </div>
        </div>
      </section>

      {/* Our Best Packages Section */}
      <section className="py-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold">Our Best Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-200 p-4">
              <h3 className="text-xl font-bold">Adventure</h3>
              <p>Embark on thrilling adventures with our adrenaline-pumping packages.</p>
              <img className="w-full h-auto mt-4" src={AdventurePackageImage} alt="Adventure Package" />
              <div className="bg-blue-500 text-white px-2 py-1 rounded mt-2">30%</div>
            </div>
            <div className="bg-gray-200 p-4">
              <h3 className="text-xl font-bold">Honeymoon</h3>
              <p>Romantic getaways for newlyweds to celebrate love in picturesque locations.</p>
              <img className="w-full h-auto mt-4" src={HoneymoonPackageImage} alt="Honeymoon Package" />
              <div className="bg-blue-500 text-white px-2 py-1 rounded mt-2">78%</div>
            </div>
            <div className="bg-gray-200 p-4">
              <h3 className="text-xl font-bold">Vacations</h3>
              <p>Relax and unwind in exotic destinations with our vacation packages.</p>
              <img className="w-full h-auto mt-4" src={VacationPackageImage} alt="Vacation Package" />
              <div className="bg-blue-500 text-white px-2 py-1 rounded mt-2">55%</div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore More Section */}
      <section className="py-8 bg-gray-200">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold">Explore More</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <div className="bg-white p-4 shadow-md">
              <img className="w-full h-auto" src={FranceImage} alt="France" />
              <div className="mt-2">
                <h3 className="text-lg font-bold">$500 - International</h3>
                <p>Destination: Paris, France</p>
              </div>
            </div>
            <div className="bg-white p-4 shadow-md">
              <img className="w-full h-auto" src={KenyaImage} alt="Kenya" />
              <div className="mt-2">
                <h3 className="text-lg font-bold">$500 - Local</h3>
                <p>Destination: Maasai Mara, Kenya</p>
              </div>
            </div>
            <div className="bg-white p-4 shadow-md">
              <img className="w-full h-auto" src={CanadaImage} alt="Canada" />
              <div className="mt-2">
                <h3 className="text-lg font-bold">$500 - International</h3>
                <p>Destination: Ottawa, Canada</p>
              </div>
            </div>
            <div className="bg-white p-4 shadow-md">
              <img className="w-full h-auto" src={KoreaImage} alt="Korea" />
              <div className="mt-2">
                <h3 className="text-lg font-bold">$750 - International</h3>
                <p>Destination: Seoul, South Korea</p>
              </div>
            </div>
            <div className="bg-white p-4 shadow-md">
              <img className="w-full h-auto" src={JapanImage} alt="Japan" />
              <div className="mt-2">
                <h3 className="text-lg font-bold">$650 - International</h3>
                <p>Destination: Tokyo, Japan</p>
              </div>
            </div>
            <div className="bg-white p-4 shadow-md">
              <img className="w-full h-auto" src={AustraliaImage} alt="Australia" />
              <div className="mt-2">
                <h3 className="text-lg font-bold">$500 - International</h3>
                <p>Destination: Sydney, Australia</p>
              </div>
            </div>
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-700">Explore More</button>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="py-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-4 shadow-md">
              <img className="w-12 h-12 rounded-full" src={ClientAvatarImage} alt="Client Avatar" />
              <div className="mt-2">
                <h3 className="text-lg font-bold">John Doe</h3>
                <p className="italic">"Excellent website with good Packages, definitely recommendable. Offers unique places and activities."</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUsPage;
