import React from 'react';
import BeachImage from '../images/Ellipse 626.png';
import AdventurePackageImage from '../images/Group 1000001757.png';
import HoneymoonPackageImage from '../images/Group 1000001755.png';
import VacationPackageImage from '../images/Group 1000001756.png';
import France from '../images/type-entertainment-complex-popular-resort-with-pools-water-parks-turkey-with-more-than-5-million-visitors-year-amara-dolce-vita-luxury-hotel-resort-tekirova-kemer.jpg';
import Korea from '../images/nature-water-beautiful-blue-house.jpg';
import Kenya from '../images/outdoor-shot-atrractive-trendy-looking-dark-skinned-tourist-studying-paper-map-his-hands-wearing-shades-hat-standing-sightseeing-platform.jpg';
import Japan from '../images/maldives-island.jpg';
import Canada from '../images/hammock.jpg';
import Australia from '../images/cityscape-paris-sunlight-blue-sky-fra.jpg';
import ClientAvatarImage from '../images/front-view-smiley-man-outdoors.jpg';

const AboutUsPage = () => {
  return (
    <div className="about-us-container flex flex-col items-center justify-center text-black bg-white">
      
      <section className="hero-section text-center py-16" style={{ backgroundImage: `url(${require('../images/maldives-island.jpg')})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg mb-6">Discover amazing destinations with our carefully curated packages. Whether you're seeking adventure, romance, or relaxation, we have the perfect getaway for you.</p>
        </div>
      </section>

      <section id="accommodation" className="promotion-section flex flex-col md:flex-row items-center justify-center">
  <div className="section-container max-w-md mx-auto md:mx-0 md:max-w-lg md:mr-16">
    <div className="promotion-content text-center">
      <h2 className="text-3xl mb-4">Explore our packages</h2>
      <p className="mb-6">Discover amazing destinations with our carefully curated packages. Whether you're seeking adventure, romance, or relaxation, we have the perfect getaway for you.</p>
      <button className="bg-orange-500 text-black p-4 rounded-full">View Packages</button>
    </div>
  </div>
  <div className="beach-image-container mt-6 md:mt-0">
    <img src={BeachImage} alt="Beach with mountains in the background" />
  </div>
</section>

      <section className="trend-section max-w-4xl mx-auto mt-12">
  <h2 className="text-3xl mb-8">Our Best Packages</h2>
  <style>
    {`
      .package h3 {
        font-weight: bold;
      }
    `}
  </style>
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


      <section className="video-section text-center max-w-4xl mx-auto mt-12">
        <h2 className="text-3xl mb-8">Explore Tourist Destinations</h2>
        <div className="video-container">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/Xj4E0Zry6K4" title="Exploring Tourist Destinations" frameBorder="0" allowFullScreen></iframe>
        </div>
      </section>
      <section className="explore-more-section max-w-4xl mx-auto mt-12">
  <h2 className="text-3xl mb-8">Explore More</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div className="package-list">
      <div className="package-item rounded-lg shadow-md" style={{ marginBottom: '2rem' }}>
        <img src={France} alt="Travel destination 1" className="rounded-lg" style={{ maxWidth: '90%', maxHeight: '200px' }} />
        <div className="package-info">
          <h3>$500 - International</h3>
          <p>Destination: Paris, France</p>
        </div>
      </div>
      <div className="package-item rounded-lg shadow-md" style={{ marginBottom: '2rem' }}>
        <img src={Kenya} alt="Travel destination 1" className="rounded-lg" style={{ maxWidth: '90%', maxHeight: '200px' }} />
        <div className="package-info">
          <h3>$500 - local</h3>
          <p>Destination: Maasai Mara, Kenya</p>
        </div>
      </div>
      <div className="package-item rounded-lg shadow-md">
        <img src={Canada} alt="Travel destination 1" className="rounded-lg" style={{ maxWidth: '90%', maxHeight: '200px' }} />
        <div className="package-info">
          <h3>$500 - International</h3>
          <p>Destination: Ottawa, Canada</p>
        </div>
      </div>
    </div>
    <div className="package-list">
      <div className="package-item rounded-lg shadow-md" style={{ marginBottom: '2rem' }}>
        <img src={Korea} alt="Travel destination 1" className="rounded-lg" style={{ maxWidth: '90%', maxHeight: '200px' }} />
        <div className="package-info">
          <h3>$750 - International</h3>
          <p>Destination: Seoul, South Korea</p>
        </div>
      </div>
      <div className="package-item rounded-lg shadow-md" style={{ marginBottom: '2rem' }}>
        <img src={Japan} alt="Travel destination 1" className="rounded-lg" style={{ maxWidth: '90%', maxHeight: '200px' }} />
        <div className="package-info">
          <h3>$650 - International</h3>
          <p>Destination: Tokyo, Japan</p>
        </div>
      </div>
      <div className="package-item rounded-lg shadow-md" style={{ marginBottom: '2rem' }}>
        <img src={Australia} alt="Travel destination 1" className="rounded-lg" style={{ maxWidth: '90%', maxHeight: '200px' }} />
        <div className="package-info">
          <h3>$500 - International</h3>
          <p>Destination: Sydney, Australia</p>
        </div>
      </div>
    </div>
  </div>
  <button className="bg-orange-500 text-black py-3 px-8 rounded-full uppercase mt-8">Explore More</button>
</section>


      <section className="client-review-section max-w-4xl mx-auto mt-12">
        <h2 className="text-3xl mb-8">What Our Clients Say</h2>
        <div className="client-review flex items-center mb-8">
          <img src={ClientAvatarImage} alt="Client Avatar" className="rounded-full w-16 h-16 mr-4" />
          <div className="client-info">
            <h3 className="text-lg font-bold">John Doe</h3>
            <p className="text-gray-600">"Excellent website with good Packages, definitely recommendable. Offers unique places and activities."</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUsPage;
