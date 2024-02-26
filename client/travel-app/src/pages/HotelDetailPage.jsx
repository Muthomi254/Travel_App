import React from 'react';
import accommodationImage from '../images/heroimages.jpeg';
import gallery2 from '../images/image222.png';
import gallery3 from '../images/image222.png';
import gallery4 from '../images/image222.png';
import imageUnderForm from '../images/formpic.png';


class HotelDetailPage extends React.Component {
 render() {
   return (
     <div className="hotel-details-page">
       {/* Hero Section with background image */}
       <div className="bg-gray-900 text-white py-48 px-4 relative">
         {/* Background Image */}
         <div className="absolute inset-0 z-0">
           <img src={accommodationImage} alt="Hotel Hero" className="object-cover w-full h-full" />
         </div>
         {/* Content */}
         <div className="max-w-4xl mx-auto text-center relative z-10">
         </div>
       </div>


       {/* Rectangle Container */}
       <div className="relative max-w-4xl mx-auto py-8 px-4 bg-white rounded-lg shadow-lg -mt-6">
         {/* Main Content */}
         <div className="flex">
           {/* Hotel Details */}
           <div className="w-2/3 pr-8">
             <div className="mb-8">
               {/* Hotel Name with Playfair Display font */}
               <div className="flex items-center justify-between">
                 <h1 className="font-playfair-display text-3xl font-bold text-blue-900">Four Seasons</h1>
                 <div className="flex items-center">
                   <span className="text-orange-300 font-semibold">$1,000</span>
                   <span className="text-gray-300 text-sm ml-1"> /Per Night</span>
                 </div>
               </div>
               {/* Star Ratings */}
               <div className="flex items-center">
                 <svg className="w-4 h-4 text-yellow-400 fill-current mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.696 0L6.91 6.539H0l5.147 4.793-2.785 6.734L10 13.271l6.638 4.795-2.785-6.734L20 6.539h-6.91L10 0z"/></svg>
                 <svg className="w-4 h-4 text-yellow-400 fill-current mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.696 0L6.91 6.539H0l5.147 4.793-2.785 6.734L10 13.271l6.638 4.795-2.785-6.734L20 6.539h-6.91L10 0z"/></svg>
                 <svg className="w-4 h-4 text-yellow-400 fill-current mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.696 0L6.91 6.539H0l5.147 4.793-2.785 6.734L10 13.271l6.638 4.795-2.785-6.734L20 6.539h-6.91L10 0z"/></svg>
                 <svg className="w-4 h-4 text-yellow-400 fill-current mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.696 0L6.91 6.539H0l5.147 4.793-2.785 6.734L10 13.271l6.638 4.795-2.785-6.734L20 6.539h-6.91L10 0z"/></svg>
                 <svg className="w-4 h-4 text-gray-400 fill-current mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.696 0L6.91 6.539H0l5.147 4.793-2.785 6.734L10 13.271l6.638 4.795-2.785-6.734L20 6.539h-6.91L10 0z"/></svg>
                 <span className="text-gray-500 text-sm ml-1"> (2.3k reviews) </span>
               </div>
               {/* Description */}
               <p className="text-lg">The Four Seasons is a renowned luxury hotel chain known for its impeccable service, elegant accommodations, and exceptional amenities. With locations around the world, each Four Seasons property offers a unique experience tailored to its destination. Whether nestled in a bustling city center or perched on a pristine beachfront, guests can expect unparalleled hospitality and attention to detail.</p>
               {/* Specialties */}
               <div className="text-lg">
                 <p className="font-semibold text-orange-400">Destination:</p>
                 <p>Manhattan , NY</p>
                 <p className="font-semibold text-orange-400">Check-in and Check-out Available:</p>
                 <p> 04/25/2024 to 12/31/2024</p>
                 <p className="font-semibold text-orange-400">Rooms Available:</p>
                 <p>Deluxe rooms, Premium suites</p>
                 <p className="font-semibold text-orange-400">Inclusive:</p>
                 <p> fine dining, spa treatments, fitness facilities, and personalized concierge services.</p>
                 <p className="font-semibold text-orange-400">Special Amenities:</p>
                 <p>Opulent swimming pools, tranquil gardens, exclusive club lounges, and private beaches.</p>
               </div>
             </div>
             {/* Image Gallery */}
             <div className="flex flex-wrap items-center">
               <h2 className="font-playfair-display text-3xl font-bold text-blue-900">From Our Gallery</h2>
               <img src={gallery2} alt="Gallery 2" className="w-1/3 mx-auto mb-4" />
               <img src={gallery3} alt="Gallery 3" className="w-1/3 mx-auto mb-4" />
               <img src={gallery4} alt="Gallery 4" className="w-1/3 mx-auto mb-4" />
             </div>
           </div>


           {/* Booking Form */}
           <div className="w-1/3 pl-8">
             <div className="bg-gray-100 p-6 rounded-lg">
               <h2 className="font-playfair-display text-2xl font-bold text-blue-900">Book The Hotel</h2>
               <form>
                 <label className="block mb-4">
                   <svg className="w-6 h-6 fill-current text-gray-400 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5 2.5A2.5 2.5 0 0 1 7.5 0h5A2.5 2.5 0 0 1 15 2.5V7H5V2.5zm0 10v-5h10v5H5zM2.5 8h15a2.5 2.5 0 0 1 2.5 2.5V17.5a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 0 17.5V10.5A2.5 2.5 0 0 1 2.5 8zM18 10v5H2v-5h16z"/></svg>
                   <input type="text" name="name" placeholder="Name" className="block w-full border-gray-300 rounded-md py-2 pl-2" />
                 </label>
                 <label className="block mb-4">
                   <svg className="w-6 h-6 fill-current text-gray-400 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5 2.5A2.5 2.5 0 0 1 7.5 0h5A2.5 2.5 0 0 1 15 2.5V7H5V2.5zm0 10v-5h10v5H5zM2.5 8h15a2.5 2.5 0 0 1 2.5 2.5V17.5a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 0 17.5V10.5A2.5 2.5 0 0 1 2.5 8zM18 10v5H2v-5h16z"/></svg>
                   <input type="email" name="email" placeholder="Email" className="block w-full border-gray-300 rounded-md py-2 pl-2" />
                 </label>
                 <label className="block mb-4">
                   <svg className="w-6 h-6 fill-current text-gray-400 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5 2.5A2.5 2.5 0 0 1 7.5 0h5A2.5 2.5 0 0 1 15 2.5V7H5V2.5zm0 10v-5h10v5H5zM2.5 8h15a2.5 2.5 0 0 1 2.5 2.5V17.5a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 0 17.5V10.5A2.5 2.5 0 0 1 2.5 8zM18 10v5H2v-5h16z"/></svg>
                   <input type="email" name="confirmEmail" placeholder="Confirm Email" className="block w-full border-gray-300 rounded-md py-2 pl-2" />
                 </label>
                 <label className="block mb-4">
                   <svg className="w-6 h-6 fill-current text-gray-400 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5 2.5A2.5 2.5 0 0 1 7.5 0h5A2.5 2.5 0 0 1 15 2.5V7H5V2.5zm0 10v-5h10v5H5zM2.5 8h15a2.5 2.5 0 0 1 2.5 2.5V17.5a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 0 17.5V10.5A2.5 2.5 0 0 1 2.5 8zM18 10v5H2v-5h16z"/></svg>
                   <input type="tel" name="phoneNumber" placeholder="Phone Number" className="block w-full border-gray-300 rounded-md py-2 pl-2" />
                 </label>
                 <label className="block mb-4">
                   <svg className="w-6 h-6 fill-current text-gray-400 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5 2.5A2.5 2.5 0 0 1 7.5 0h5A2.5 2.5 0 0 1 15 2.5V7H5V2.5zm0 10v-5h10v5H5zM2.5 8h15a2.5 2.5 0 0 1 2.5 2.5V17.5a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 0 17.5V10.5A2.5 2.5 0 0 1 2.5 8zM18 10v5H2v-5h16z"/></svg>
                   <input type="date" name="checkInDate" placeholder="Check-in Date" className="block w-full border-gray-300 rounded-md py-2 pl-2" />
                 </label>
                 <label className="block mb-4">
                   <svg className="w-6 h-6 fill-current text-gray-400 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5 2.5A2.5 2.5 0 0 1 7.5 0h5A2.5 2.5 0 0 1 15 2.5V7H5V2.5zm0 10v-5h10v5H5zM2.5 8h15a2.5 2.5 0 0 1 2.5 2.5V17.5a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 0 17.5V10.5A2.5 2.5 0 0 1 2.5 8zM18 10v5H2v-5h16z"/></svg>
                   <input type="number" name="numOfPeople" placeholder="Number of People" className="block w-full border-gray-300 rounded-md py-2 pl-2" />
                 </label>
                 <label className="block mb-4">
                   <svg className="w-6 h-6 fill-current text-gray-400 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5 2.5A2.5 2.5 0 0 1 7.5 0h5A2.5 2.5 0 0 1 15 2.5V7H5V2.5zm0 10v-5h10v5H5zM2.5 8h15a2.5 2.5 0 0 1 2.5 2.5V17.5a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 0 17.5V10.5A2.5 2.5 0 0 1 2.5 8zM18 10v5H2v-5h16z"/></svg>
                   <textarea name="message" placeholder="Message" className="block w-full border-gray-300 rounded-md py-2 pl-2"></textarea>
                 </label>
                
                 {/* Add more input fields for booking details */}
                 <button type="submit" className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600">Book Now</button>
               </form>
             </div>
             <div className="mt-8">
               <img src={imageUnderForm} alt="form" className="w-full h-auto rounded-lg" style={{ maxHeight: '400px' }} />
             </div>
           </div>
         </div>
       </div>
     </div>
   );
 }
}


export default HotelDetailPage;



