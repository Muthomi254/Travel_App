import React from 'react';
import { Link } from 'react-router-dom';
const Showcase = () => {
  const videoUrl1 = 'https://player.vimeo.com/external/484732151.sd.mp4?s=920e951e2eb3ff30c108209d9bf1f4a95c80918f&profile_id=165&oauth2_token_id=57447761';
  const videoUrl2 = 'https://player.vimeo.com/external/445711808.sd.mp4?s=ad72c24de09d496ccf6742b6a245eb131948a9ee&profile_id=165&oauth2_token_id=57447761';

  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 gap-0 py-4 mx-4">
      <div className="relative">
        <video autoPlay muted loop className="w-full h-[300px] md:h-[500px] object-cover">
          <source src={videoUrl1} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
          <h2 className="text-orange-400 text-2xl font-bold">promotion</h2>
          <h1 className='text-4xl md:text-6xl text-slate-100 py-4 font-thin'>Travel the World</h1>
          <Link to="/transport" >
 <button className='my-4 border border-slate-500 text-white px-4 py-2 rounded-md hover:bg-blue-500 hover:text-white'>Travel Booking</button>Buses</Link>
        </div>
      </div>
      <div className="relative">
        <video autoPlay muted loop className="w-full h-[300px] md:h-[500px] object-cover">
          <source src={videoUrl2} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-blue-900 bg-opacity-50 flex flex-col items-center justify-center">
          <h2 className="text-orange-400 text-2xl font-bold">promotion</h2>
          <h1 className='text-4xl md:text-6xl text-slate-100 py-4 font-thin'>Explore Kenya</h1>
          <button className='my-4 border border-slate-100 text-white px-4 py-2 rounded-md hover:bg-blue-500 hover:text-white'>Explore Restaurants</button>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
