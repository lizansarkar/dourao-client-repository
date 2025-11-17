import React, { use } from "react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewCard from "./ReviewCard";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

export default function Reviews({ reviewPromise }) {
  const reviews = use(reviewPromise);

  return (
    <section className="section bg-gray-50 py-16">
      <div className="container">
        {/* হেডিং */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from our satisfied customers about their experiences with ZapShift's reliable and efficient delivery services.
          </p>
        </div>

        {/* স্লাইডার */}
        <div className="relative">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 200,
              modifier: 1.5,
              slideShadows: true,
            }}
            pagination={{ clickable: true }}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="pb-12"
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id} className="px-4">
                <ReviewCard review={review} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* নেভিগেশন বাটন */}
          <button className="swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-teal-50 transition">
            <BiChevronLeft className="w-6 h-6 text-teal-600" />
          </button>
          <button className="swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-teal-50 transition">
            <BiChevronRight className="w-6 h-6 text-teal-600" />
          </button>
        </div>
      </div>
    </section>
  );
}