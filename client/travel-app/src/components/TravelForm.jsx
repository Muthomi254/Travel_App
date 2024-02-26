import React from 'react';

const TravelForm = () => {
  return (
    <section id='navbg' className="flex flex-wrap items-center justify-center gap-3 mt-16 w-full sm:w-[80%] md:w-[60%] lg:w-[50%] py-3 px-3">
      <select className="mr-4 px-2 py-1 border rounded-md">
        <option value="destination1">Destination 1</option>
        <option value="destination2">Destination 2</option>
        <option value="destination3">Destination 3</option>
      </select>
      <select className="mr-4 px-2 py-1 border rounded-md">
        <option value="travelType1">Travel Type 1</option>
        <option value="travelType2">Travel Type 2</option>
        <option value="travelType3">Travel Type 3</option>
      </select>
      <select className="mr-4 px-2 py-1 border rounded-md">
        <option value="duration1">Duration 1</option>
        <option value="duration2">Duration 2</option>
        <option value="duration3">Duration 3</option>
      </select>
      <button className="px-4 py-2 bg-[#DF6951] text-white rounded-md">Submit</button>
    </section>
  );
};

export default TravelForm;
