import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaArrowCircleRight } from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import bannerImg1 from "../../assets/banner/banner1.png";
import bannerImg2 from "../../assets/banner/banner2.png";
import bannerImg3 from "../../assets/banner/banner3.png";
import { NavLink } from "react-router";

export default function Banner() {
  return (
    <div className="min-h-screen">
      <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false}>
        {/* === স্লাইড ১ === */}
        <div className="relative">
          <img
            src={bannerImg1}
            alt="Banner 1"
            className="w-full object-cover"
          />

          <div className="absolute bottom-4 left-4 right-4 flex xs:flex-row gap-3 justify-start items-start md:bottom-16 md:left-12 lg:bottom-30 lg:left-30">
            <NavLink
              to="/send-percel"
              className="px-4 py-2 xs:px-5 xs:py-2.5 sm:px-6 sm:py-3 bg-linear-to-r from-green-300 to-[#CAEB66] text-white font-semibold text-xs xs:text-sm sm:text-base rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all flex items-center gap-1 xs:gap-2"
            >
              Track Your Parcel
              <FaArrowCircleRight></FaArrowCircleRight>
            </NavLink>

            <NavLink
              to="/rider"
              className="px-4 py-2 xs:px-5 xs:py-2.5 sm:px-6 sm:py-3 bg-white text-gray-800 font-semibold text-xs xs:text-sm sm:text-base rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all border border-gray-200"
            >
              Be A Rider
            </NavLink>
          </div>
        </div>

        {/* === স্লাইড ২ === */}
        <div className="relative">
          <img
            src={bannerImg2}
            alt="Banner 2"
            className="w-full object-cover"
          />

          <div className="absolute bottom-4 left-4 right-4 flex xs:flex-row gap-3 justify-start items-start md:bottom-16 md:left-12 lg:bottom-30 lg:left-30">
            <NavLink
              to="/send-percel"
              className="px-4 py-2 xs:px-5 xs:py-2.5 sm:px-6 sm:py-3 bg-linear-to-r from-green-300 to-[#CAEB66] text-white font-semibold text-xs xs:text-sm sm:text-base rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all flex items-center gap-1 xs:gap-2"
            >
              Track Your Parcel
              <FaArrowCircleRight></FaArrowCircleRight>
            </NavLink>

            <NavLink
              to="/rider"
              className="px-4 py-2 xs:px-5 xs:py-2.5 sm:px-6 sm:py-3 bg-white text-gray-800 font-semibold text-xs xs:text-sm sm:text-base rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all border border-gray-200"
            >
              Be A Rider
            </NavLink>
          </div>
        </div>

        {/* === স্লাইড ৩ === */}
        <div className="relative">
          <img
            src={bannerImg3}
            alt="Banner 3"
            className="w-full object-cover"
          />

          <div className="absolute bottom-4 left-4 right-4 flex xs:flex-row gap-3 justify-start items-start md:bottom-16 md:left-12 lg:bottom-30 lg:left-30">
            <NavLink
              to="/send-percel"
              className="px-4 py-2 xs:px-5 xs:py-2.5 sm:px-6 sm:py-3 bg-linear-to-r from-green-300 to-[#CAEB66] text-white font-semibold text-xs xs:text-sm sm:text-base rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all flex items-center gap-1 xs:gap-2"
            >
              Track Your Parcel
              <FaArrowCircleRight></FaArrowCircleRight>
            </NavLink>

            <NavLink
              to="/rider"
              className="px-4 py-2 xs:px-5 xs:py-2.5 sm:px-6 sm:py-3 bg-white text-gray-800 font-semibold text-xs xs:text-sm sm:text-base rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all border border-gray-200"
            >
              Be A Rider
            </NavLink>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
