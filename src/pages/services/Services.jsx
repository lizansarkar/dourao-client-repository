import React from "react";
import {
  LuPackageOpen,
  LuTruck,
  LuShieldCheck,
  LuClock,
  LuGlobe,
  LuSmartphone,
  LuZap,
  LuUsers,
  LuMapPin,
  LuHeadset,
  LuClipboardList,
  LuCreditCard,
} from "react-icons/lu";

export default function Services() {
  // ১২টি সার্ভিসের জন্য ডাটা অ্যারে
  const servicesData = [
    {
      id: 1,
      title: "Standard Delivery",
      desc: "Reliable and cost-effective shipping for everyday parcels.",
      icon: <LuPackageOpen />,
      featured: false,
    },
    {
      id: 2,
      title: "Express Shipping",
      desc: "Super fast delivery for urgent documents and packages.",
      icon: <LuZap />,
      featured: true,
    },
    {
      id: 3,
      title: "International Delivery",
      desc: "Connecting you to customers and family across the globe.",
      icon: <LuGlobe />,
      featured: false,
    },
    {
      id: 4,
      title: "Real-time Tracking",
      desc: "Monitor your parcel journey at every step of the way.",
      icon: <LuMapPin />,
      featured: false,
    },
    {
      id: 5,
      title: "Secure Handling",
      desc: "Extra care and protection for your fragile and valuable items.",
      icon: <LuShieldCheck />,
      featured: false,
    },
    {
      id: 6,
      title: "Doorstep Pickup",
      desc: "We come to you to collect your parcels from your home.",
      icon: <LuTruck />,
      featured: false,
    },
    {
      id: 7,
      title: "Business Solutions",
      desc: "Customized logistics support for small to large businesses.",
      icon: <LuUsers />,
      featured: false,
    },
    {
      id: 8,
      title: "24/7 Support",
      desc: "Our dedicated team is always here to help you anytime.",
      icon: <LuHeadset />,
      featured: false,
    },
    {
      id: 9,
      title: "Digital Dashboard",
      desc: "Manage all your shipments through our intuitive mobile app.",
      icon: <LuSmartphone />,
      featured: false,
    },
    {
      id: 10,
      title: "Bulk Shipping",
      desc: "Special rates and management for bulk orders and cargo.",
      icon: <LuClipboardList />,
      featured: false,
    },
    {
      id: 11,
      title: "Cash on Delivery",
      desc: "Secure payment collection service for e-commerce sellers.",
      icon: <LuCreditCard />,
      featured: false,
    },
    {
      id: 12,
      title: "Scheduled Delivery",
      desc: "Choose the exact date and time you want your parcel delivered.",
      icon: <LuClock />,
      featured: false,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-[#ffffff] to-[#c9c9c9] text-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        {/* হেডিং */}
        <div className="text-center mb-16">
          <h2 className="text-secondary text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Our Premium Services
          </h2>
          <div className="w-24 h-1 bg-[#c2e96d] mx-auto mb-6 rounded-full"></div>
          <p className="text-secondary text-sm md:text-lg max-w-3xl mx-auto opacity-90">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to business shipments — we
            deliver on time, every time.
          </p>
        </div>

        {/* ১২ কার্ড গ্রিড */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className={`
                group relative bg-white text-gray-800 rounded-[2rem] p-8
                shadow-xl hover:shadow-[#c2e96d]/20 transition-all duration-500 
                border border-white/10 flex flex-col items-center
                ${service.featured ? "bg-[#f4fce3]" : "bg-white"}
                hover:-translate-y-2
              `}
            >
              {/* আইকন কন্টেইনার */}
              <div className="mb-6 relative">
                <div className="absolute inset-0 bg-[#c2e96d] blur-lg opacity-0 group-hover:opacity-40 transition-opacity"></div>
                <div className="relative p-5 bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl group-hover:from-[#c2e96d] group-hover:to-[#b1d85c] transition-all duration-300">
                  <span className="text-4xl text-teal-700 group-hover:text-[#003d3d]">
                    {service.icon}
                  </span>
                </div>
              </div>

              {/* টাইটেল */}
              <h3 className="text-xl font-bold text-center mb-4 text-[#003d3d] group-hover:text-black">
                {service.title}
              </h3>

              {/* ডেসক্রিপশন */}
              <p className="text-sm md:text-base text-gray-600 text-center leading-relaxed">
                {service.desc}
              </p>

              {/* নিচের ডেকোরেটিভ বর্ডার যা হোভারে বড় হবে */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-[#c2e96d] group-hover:w-1/2 transition-all duration-500 rounded-t-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
