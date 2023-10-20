"use client"
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TestimonialSlider = () => {
  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      name: 'Jane Smith',
      content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    // Add more testimonials here
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="bg-blue-500 py-16">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-8">Testimonials</h2>
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="p-4">
              <div className="bg-blue-200 p-6 rounded-lg shadow-md">
                <p className="text-gray-600 mb-4">{testimonial.content}</p>
                <p className="text-gray-800 font-semibold">{testimonial.name}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialSlider;
