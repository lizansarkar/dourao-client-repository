import React from "react";
// import { useLoaderData } from "react-router";
import { LuPackageOpen } from "react-icons/lu";

export default function MainService({ data }) {
  const mainService = data;

  return (
    <section className="section bg-gradient-to-b from-teal-900 to-teal-800 text-white">
      <div className="container">
        {/* হেডিং */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-teal-100 text-sm md:text-base max-w-3xl mx-auto">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to business shipments — we
            deliver on time, every time.
          </p>
        </div>

        {/* কার্ড গ্রিড */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mainService.map((service) => (
            <div
              key={service.id}
              className={`
                group relative bg-white text-gray-800 rounded-3xl p-6 md:p-8 
                shadow-lg hover:shadow-2xl transition-all duration-500 
                border border-gray-200 hover:border-transparent
                ${service.featured ? "bg-lime-100" : ""}
                hover:bg-lime-200
              `}
              style={{
                "--hover-bg": "#CAEB66",
              }}
            >
              {/* আইকন */}
              <div className="flex justify-center mb-5">
                <div className="p-4 bg-gradient-to-br from-teal-100 to-teal-200 rounded-full group-hover:from-lime-200 group-hover:to-lime-300 transition-all">
                  <LuPackageOpen className="w-10 h-10 text-teal-600 group-hover:text-teal-700" />
                </div>
              </div>

              {/* টাইটেল */}
              <h3 className="text-lg md:text-xl font-bold text-center mb-3 group-hover:text-teal-700">
                {service.title}
              </h3>

              {/* ডেসক্রিপশন */}
              <p className="text-sm md:text-base text-gray-600 text-center leading-relaxed">
                {service.desc}
              </p>

              {/* হোভার ইফেক্ট */}
              <div className="absolute inset-0 rounded-3xl bg-lime-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
