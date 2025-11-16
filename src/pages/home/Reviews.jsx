import React, { use } from "react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewCard from "./ReviewCard";

export default function Reviews({ reviewPromise }) {
  const reviews = use(reviewPromise);
  console.log(reviews);
  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-heading">What Our Customers Say</h2>
        <p className="text-sub">
          Hear from our satisfied customers about their experiences with
          ZapShift's reliable and efficient delivery services.
        </p>

        <>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id}>
                <ReviewCard review={review}></ReviewCard>
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      </div>
    </div>
  );
}
