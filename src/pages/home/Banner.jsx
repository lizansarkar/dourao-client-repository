import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import bannerImg1 from "../../assets/banner/banner1.png";
import bannerImg2 from "../../assets/banner/banner2.png";
import bannerImg3 from "../../assets/banner/banner3.png";
import { NavLink } from "react-router";

export default function Banner() {
  return (
    <Carousel autoPlay={false} infiniteLoop={false} showThumbs={false}>
      {/* === স্লাইড ১ === */}
      <div className="relative">
        <img src={bannerImg1} alt="Banner 1" className="w-full object-cover" />

        <div className="absolute bottom-4 left-4 right-4 flex xs:flex-row gap-3 justify-start items-start md:bottom-16 md:left-12 lg:bottom-30 lg:left-30">
          <NavLink
            to="/track-parcel"
            className="px-4 py-2 xs:px-5 xs:py-2.5 sm:px-6 sm:py-3 bg-linear-to-r from-green-300 to-[#CAEB66] text-white font-semibold text-xs xs:text-sm sm:text-base rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all flex items-center gap-1 xs:gap-2"
          >
            Track Your Parcel
            <svg
              className="w-4 h-4 xs:w-5 xs:h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </NavLink>

          <NavLink
            to="/be-a-rider"
            className="px-4 py-2 xs:px-5 xs:py-2.5 sm:px-6 sm:py-3 bg-white text-gray-800 font-semibold text-xs xs:text-sm sm:text-base rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all border border-gray-200"
          >
            Be A Rider
          </NavLink>
        </div>
      </div>

      {/* === স্লাইড ২ === */}
      <div className="relative">
        <img src={bannerImg2} alt="Banner 2" className="w-full object-cover" />

        <div className="absolute bottom-4 left-4 right-4 flex flex-col xs:flex-row gap-3 justify-start items-start sm:bottom-8 sm:left-8 sm:right-auto">
          <NavLink
            to="/track-parcel"
            className="px-4 py-2 xs:px-5 xs:py-2.5 sm:px-6 sm:py-3 bg-linear-to-r from-green-300 to-green-600 text-white font-semibold text-xs xs:text-sm sm:text-base rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all flex items-center gap-1 xs:gap-2"
          >
            Track Your Parcel
            <svg
              className="w-4 h-4 xs:w-5 xs:h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </NavLink>

          <NavLink
            to="/be-a-rider"
            className="px-4 py-2 xs:px-5 xs:py-2.5 sm:px-6 sm:py-3 bg-white text-gray-800 font-semibold text-xs xs:text-sm sm:text-base rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all border border-gray-200"
          >
            Be A Rider
          </NavLink>
        </div>
      </div>

      {/* === স্লাইড ৩ === */}
      <div className="relative">
        <img src={bannerImg3} alt="Banner 3" className="w-full object-cover" />

        <div className="absolute bottom-4 left-4 right-4 flex flex-col xs:flex-row gap-3 justify-start items-start sm:bottom-8 sm:left-8 sm:right-auto">
          <NavLink
            to="/track-parcel"
            className="px-4 py-2 xs:px-5 xs:py-2.5 sm:px-6 sm:py-3 bg-linear-to-r from-green-300 to-green-600 text-white font-semibold text-xs xs:text-sm sm:text-base rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all flex items-center gap-1 xs:gap-2"
          >
            Track Your Parcel
            <svg
              className="w-4 h-4 xs:w-5 xs:h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </NavLink>

          <NavLink
            to="/be-a-rider"
            className="px-4 py-2 xs:px-5 xs:py-2.5 sm:px-6 sm:py-3 bg-white text-gray-800 font-semibold text-xs xs:text-sm sm:text-base rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all border border-gray-200"
          >
            Be A Rider
          </NavLink>
        </div>
      </div>
    </Carousel>
  );
}
