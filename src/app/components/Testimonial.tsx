"use client";

import { FunctionComponent } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

import userImage from "@/public/assets/images/user.webp";
import Image from "next/image";

interface TestimonialProps {}

const Testimonial: FunctionComponent<TestimonialProps> = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const testimonials = Array.from({ length: 5 }, (_, index) => (
    <div aria-hidden="true" key={index}>
      <div className="flex flex-col items-center">
        <div className="w-fit relative rounded shadow dark:shadow-gray-800 m-2 p-6 bg-white dark:bg-slate-900 flex flex-col items-center">
          <FaQuoteLeft className="text-red-500 text-2xl" />
          <p className="text-slate-800">
            "It seems that only fragments of the original text remain in the
            Lorem Ipsum texts used today."
          </p>
          <ul className="list-none flex mb-0 text-amber-400 mt-3">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </ul>
        </div>

        <div className="text-center mt-5">
          <Image
            src={userImage}
            className="h-14 w-14 rounded-full shadow-md mx-auto object-cover border-2 border-red-500"
            alt="user image"
          />
          <h6 className="mt-2 font-semibold">Senor Tequilla</h6>
          <span className="text-slate-400 text-sm">Manager</span>
        </div>
      </div>
    </div>
  ));

  return (
    <section className="container p-8 mx-auto">
      {/* Testimonials */}
      <div className="text-center p-4">
        <h2 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold text-slate-50">
          Testimonial
        </h2>

        <p className="text-slate-400 max-w-xl mx-auto">
          Push your fitness further with our mix of facilities and we&apos;ll
          support you with advice on new and better ways to train.
        </p>
      </div>

      <Slider {...settings}>{testimonials}</Slider>
    </section>
  );
};

export default Testimonial;
