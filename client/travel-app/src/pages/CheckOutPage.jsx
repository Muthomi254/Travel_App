import React from 'react';
import accommodationImage from '../images/heropic.jpeg';
import imageUnderForm from '../images/formpic.png';


class CheckoutPage extends React.Component {
 render() {
   // Sample price calculation
   const totalPrice = 1000; // Replace with your actual calculation
  
   return (
     <div className="hotel-details-page">
       {/* Hero Section with background image */}
       <div className="bg-gray-900 text-white py-48 px-4 relative">
         {/* Background Image */}
         <div className="absolute inset-0 z-0">
           <img src={accommodationImage} alt="Hotel Hero" className="object-cover w-full h-full" />
         </div>
         {/* Content */}
         <div className="max-w-4xl mx-auto text-center relative z-10"></div>
       </div>


       {/* Rectangle Container */}
       <div className="relative max-w-4xl mx-auto py-8 px-4 bg-white rounded-lg shadow-lg -mt-6">
         {/* Main Content */}
         <div className="flex justify-center">
           {/* Booking Form */}
           <div className="w-2/3">
             <div className="bg-gray-100 p-6 rounded-lg">
               <h2 className="font-playfair-display text-2xl font-bold text-blue-900 text-center mb-4">Check Out</h2>
               <form className="text-center">
                 <label className="block mb-4">
                   Name:
                   <input type="text" className="block w-full border-gray-300 rounded-md py-2 pl-2" placeholder="Enter your name" />
                 </label>
                 <label className="block mb-4">
                   Email:
                   <input type="email" className="block w-full border-gray-300 rounded-md py-2 pl-2" placeholder="Enter your email" />
                 </label>
                 <label className="block mb-4">
                   Credit Card Number:
                   <input type="text" className="block w-full border-gray-300 rounded-md py-2 pl-2" placeholder="Enter your credit card number" />
                 </label>
                 <label className="block mb-4">
                   Expiry Date:
                   <input type="text" className="block w-full border-gray-300 rounded-md py-2 pl-2" placeholder="Enter expiry date" />
                 </label>
                 <label className="block mb-4">
                   CVV:
                   <input type="text" className="block w-full border-gray-300 rounded-md py-2 pl-2" placeholder="Enter CVV" />
                 </label>
                 <div className="mb-4">
                   Total Price: ${totalPrice}
                 </div>
                 <button type="submit" className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600">Check Out</button>
               </form>
             </div>
           </div>
         </div>
         <div className="mt-8">
 <img src={imageUnderForm} alt="form" className="w-full h-auto rounded-lg" style={{ maxHeight: '400px' }} />
</div>


       </div>
     </div>
   );
 }
}


export default CheckoutPage;



