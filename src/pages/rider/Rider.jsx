import React, { useMemo, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';
import RiderImg from '../../assets/agent-pending.png'

// 1. Styling Constants
const INPUT_CLASS =
  'w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#51CC79] focus:border-transparent transition-all duration-300';
const LABEL_CLASS = 'block text-sm font-medium text-gray-700 mb-1';
const ACCENT_COLOR = 'text-[#008953]'; // Dark green for titles and accents

// --- Custom Component: Form Input ---
const FormInput = ({
  label,
  name,
  type = 'text',
  placeholder,
  register,
  error,
  isRequiredField = true,
}) => (
  <div className="space-y-1">
    <label htmlFor={name} className={LABEL_CLASS}>
      {label}
      {isRequiredField && <span className="text-red-500 ml-1">*</span>}
    </label>
    <input
      id={name}
      type={type}
      placeholder={placeholder}
      {...register(name, {
        required: isRequiredField ? `${label} is required` : false,
      })}
      className={INPUT_CLASS}
    />
    {error && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
  </div>
);

// --- Custom Component: Select/Dropdown ---
const FormSelect = ({
  label,
  name,
  options,
  register,
  error,
  disabled = false,
}) => (
  <div className="space-y-1">
    <label htmlFor={name} className={LABEL_CLASS}>
      {label} <span className="text-red-500 ml-1">*</span>
    </label>
    <select
      id={name}
      {...register(name, { required: `${label} is required` })}
      className={`${INPUT_CLASS} appearance-none ${
        disabled ? 'bg-gray-100 text-gray-500 cursor-not-allowed' : ''
      }`}
      disabled={disabled}
    >
      {options.map((option, index) => (
        <option
          key={index}
          value={index === 0 ? '' : option}
          disabled={index === 0}
        >
          {option}
        </option>
      ))}
    </select>
    {error && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
  </div>
);

// --- Main Component: Rider ---
export default function Rider() {
  // Load data from react-router loader
  // serviceCenterData structure: [{ region, district, ... }, ...]
  const serviceCenterData = useLoaderData() || [];

  const [selectedWireHouse, setSelectedWireHouse] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm({
    defaultValues: {
      yourName: '',
      yourAge: '',
      yourEmail: '',
      yourDistrict: '',
      nidNo: '',
      contact: '',
      wireHouse: '',
    },
  });

  // Watch wireHouse value from the form
  const watchedWireHouse = watch("wireHouse");

  // --- 1. Create District list (Memoized) ---
  const districts = useMemo(() => {
    // Default value if no data is loaded
    if (serviceCenterData.length === 0) return ["জেলা খুঁজে পাওয়া যায়নি"];

    // Get unique district names
    const uniqueDistricts = new Set(serviceCenterData.map((item) => item.district));
    return ["Select your District", ...Array.from(uniqueDistricts)];
  }, [serviceCenterData]);

  // --- 2. Create Wire-House list (Memoized) ---
  const wireHouses = useMemo(() => {
    // Default value if no data is loaded
    if (serviceCenterData.length === 0) return ["Wire-house খুঁজে পাওয়া যায়নি"];

    // We use the 'district' property from serviceCenterData for the wire-house names for simplicity
    // In a real app, you might have a dedicated 'wireHouseName' property.
    const uniqueWireHouses = new Set(serviceCenterData.map((item) => item.district + " - " + item.region));
    return ["Select wire-house", ...Array.from(uniqueWireHouses)];
  }, [serviceCenterData]);

  // --- 3. Update State when WireHouse changes ---
  useEffect(() => {
    setSelectedWireHouse(watchedWireHouse);
  }, [watchedWireHouse]);

  const onSubmit = (data) => {
    console.log('Rider Application Data:', data);
    
    // Simulating an API call success with SweetAlert
    Swal.fire({
      title: 'Application Submitted!',
      text: 'Your rider application has been successfully submitted.',
      icon: 'success',
      confirmButtonColor: '#51CC79',
      confirmButtonText: 'Great!',
    });
  };

  return (
    // Outer container matching the original full screen layout
    <div className="min-h-screen bg-white p-4 sm:p-8 flex justify-center font-[Inter]">
      {/* Inner Container to hold the form and the image side-by-side */}
      <div className="w-full container bg-white rounded-xl flex flex-col lg:flex-row shadow-none justify-center items-center">
        
        {/* Left Section: Form Content */}
        <div className="p-6 sm:p-10 lg:w-3/5">
            {/* Header Section (Matching the image's text) */}
            <h1 className={`text-5xl font-extrabold text-secondary mb-3`}>
              Be a Rider
            </h1>
            <p className="text-gray-600 mb-8 max-w-lg">
              Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.
            </p>

            <hr className="mb-8 border-t border-gray-200" />
            
            {/* Form Title */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-8">
              Tell us about yourself
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              
              {/* Row 1: Your Name & Your Age */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormInput
                  label="Your Name"
                  name="yourName"
                  placeholder="Your Name"
                  register={register}
                  error={errors.yourName}
                />
                <FormInput
                  label="Your age"
                  name="yourAge"
                  type="number"
                  placeholder="Your age"
                  register={register}
                  error={errors.yourAge}
                />
              </div>

              {/* Row 2: Your Email & Your District (Using useLoaderData) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormInput
                  label="Your Email"
                  name="yourEmail"
                  type="email"
                  placeholder="Your Email"
                  register={register}
                  error={errors.yourEmail}
                />
                <FormSelect
                  label="Your District"
                  name="yourDistrict"
                  options={districts}
                  register={register}
                  error={errors.yourDistrict}
                />
              </div>
              
              {/* Row 3: NID No & Contact */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormInput
                  label="NID No"
                  name="nidNo"
                  placeholder="NID"
                  register={register}
                  error={errors.nidNo}
                />
                <FormInput
                  label="Contact"
                  name="contact"
                  type="tel"
                  placeholder="Contact"
                  register={register}
                  error={errors.contact}
                />
              </div>
              
              {/* Row 4: Wire-house (Using useLoaderData) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormSelect
                  label="Which wire-house you want to work?"
                  name="wireHouse"
                  options={wireHouses}
                  register={register}
                  error={errors.wireHouse}
                  // Optionally disable if data isn't loaded
                  disabled={wireHouses.length <= 1} 
                />
                {/* Empty column for alignment */}
                <div className="hidden md:block"></div> 
              </div>

              {/* Submit Button (Matching the image's style/color) */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full md:w-auto px-10 py-3 bg-primary text-gray-800 font-bold rounded-lg shadow-md hover:bg-[#86d45e] transition-colors duration-300 transform hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-[#9FE870]/50"
                >
                  Submit
                </button>
              </div>
            </form>
        </div>
        
        {/* Right Section: Image/Graphic */}
        {/* The image is placed using Tailwind to align it to the right on large screens */}
        <div className="hidden md:block w-[400px] lg:h-[400px] p-4 relative overflow-hidden">
             
            {/* The image should be styled to cover the area, similar to the original design */}
            <img 
                src={RiderImg} // Placeholder URL
                alt="Delivery Rider Graphic"
                className="w-full h-full object-contain object-bottom absolute bottom-0 right-0"
            />
        </div>

      </div>
    </div>
  );
}