import React from 'react';
import Slider from 'react-slick';
import { FaQuoteLeft } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const testimonials = [
    {
      id: 1,
      name: 'Alice Johnson',
      image: 'https://source.unsplash.com/random/100x100?person1',
      comment: 'I had an amazing experience with the travel agency. The trip was well-planned and everything went smoothly. Highly recommended!',
    },
    {
      id: 2,
      name: 'Bob Smith',
      image: 'https://source.unsplash.com/random/100x100?person2',
      comment: 'The tour guides were very knowledgeable and friendly. I learned a lot about the history and culture of the places we visited.',
    },
    {
      id: 3,
      name: 'Eva Williams',
      image: 'https://source.unsplash.com/random/100x100?person3',
      comment: 'The accommodations were top-notch and the food was delicious. I would definitely book another trip with this agency.',
    },
  ];

  return (
    <div className="bg-gray-100 py-16 mx-4">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="px-4">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-center justify-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <h3 className="text-lg font-bold text-slate-600">{testimonial.name}</h3>
                </div>
                <p className="text-gray-700 mb-4"><FaQuoteLeft className="inline mr-2" />{testimonial.comment}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
