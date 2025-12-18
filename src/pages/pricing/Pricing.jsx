import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ChevronDown } from "lucide-react";

const Pricing = () => {
  const [totalCost, setTotalCost] = useState(0);

  const { register, handleSubmit, reset, watch } = useForm({
    defaultValues: {
      parcelType: "",
      destination: "",
      weight: "",
    },
  });

  // এই ফাংশনটি আপনার ক্যালকুলেশন লজিক হ্যান্ডেল করবে
  const onSubmit = (data) => {
    console.log(data);
    // উদাহরণস্বরূপ একটি সিম্পল ক্যালকুলেশন (আপনি আপনার প্রয়োজন মত পরিবর্তন করতে পারেন)
    const basePrice = 50;
    const weightCharge = parseFloat(data.weight || 0) * 10;
    setTotalCost(basePrice + weightCharge);
  };

  const handleReset = () => {
    reset();
    setTotalCost(0);
  };

  return (
    <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto font-sans">
      {/* Header Section */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[#003d3d] mb-4">
          Pricing Calculator
        </h1>
        <p className="text-gray-600 max-w-2xl leading-relaxed">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>
      </div>

      <hr className="border-gray-100 mb-16" />

      {/* Calculator Section */}
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#003d3d] mb-12">
          Calculate Your Cost
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24">
          {/* Form Container */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full max-w-md space-y-5 text-left"
          >
            {/* Parcel Type */}
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-gray-700">
                Parcel type
              </label>
              <div className="relative">
                <select
                  {...register("parcelType")}
                  className="w-full p-3 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-[#c2e96d] text-gray-500"
                >
                  <option value="">Select Parcel type</option>
                  <option value="standard">Standard</option>
                  <option value="fragile">Fragile</option>
                  <option value="document">Document</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
              </div>
            </div>

            {/* Delivery Destination */}
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-gray-700">
                Delivery Destination
              </label>
              <div className="relative">
                <select
                  {...register("destination")}
                  className="w-full p-3 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-[#c2e96d] text-gray-500"
                >
                  <option value="">Select Delivery Destination</option>
                  <option value="inside-dhaka">Inside Dhaka</option>
                  <option value="outside-dhaka">Outside Dhaka</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
              </div>
            </div>

            {/* Weight Input */}
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-gray-700">
                Weight (KG)
              </label>
              <input
                type="number"
                step="0.1"
                placeholder="Contact"
                {...register("weight")}
                className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c2e96d] placeholder-gray-400"
              />
            </div>

            {/* Buttons */}
            <div className="flex gap-4 pt-2">
              <button
                type="button"
                onClick={handleReset}
                className="flex-1 py-3 px-6 border border-[#c2e96d] text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                Reset
              </button>
              <button
                type="submit"
                className="flex-[2] py-3 px-6 bg-[#c2e96d] text-[#003d3d] rounded-lg font-bold hover:bg-[#b1d85c] transition-colors"
              >
                Calculate
              </button>
            </div>
          </form>

          {/* Result Display */}
          <div className="flex items-center justify-center">
            <h3 className="text-7xl md:text-9xl font-black text-black tracking-tighter">
              {totalCost} <span className="text-6xl md:text-8xl">Tk</span>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
