import React, { useState, useMemo, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
// Assume useLoaderData is available from react-router-dom or similar environment
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";
import useAxiosSicure from "../../hooks/useAxiosSicure";
import UseAuth from "../../hooks/UseAuth";

// Styling Constants
const INPUT_CLASS =
  "w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#51CC79] focus:border-transparent transition-all duration-300";
const LABEL_CLASS = "block text-sm font-medium text-gray-700 mb-1";
const ACCENT_COLOR = "text-[#008953]"; // Dark green for titles and accents

// --- Inline SVG Icon: Check Circle (FaCheckCircle replacement) ---
const CheckCircleIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    className="w-5 h-5 fill-current" // Tailwind class for size and color
  >
    {/* Font Awesome Check-Circle Path */}
    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
  </svg>
);

// --- Inline SVG Icon: Regular Circle (FaRegCircle replacement) ---
const RegCircleIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    className="w-5 h-5 fill-current" // Tailwind class for size and color
  >
    {/* Font Awesome Regular Circle Path */}
    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416z" />
  </svg>
);

// --- Custom Component: Form Input ---
const FormInput = ({
  label,
  name,
  type = "text",
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
        required: isRequiredField ? "এই ঘরটি পূরণ করা আবশ্যক" : false,
      })}
      className={INPUT_CLASS}
    />
    {error && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
  </div>
);

// --- Custom Component: Text Area ---
const FormTextarea = ({
  label,
  name,
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
    <textarea
      id={name}
      rows="3"
      placeholder={placeholder}
      {...register(name, {
        required: isRequiredField ? "এই ঘরটি পূরণ করা আবশ্যক" : false,
      })}
      className={`${INPUT_CLASS} resize-none`}
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
      {...register(name, { required: "একটি বিভাগ/জেলা নির্বাচন করা আবশ্যক" })}
      className={`${INPUT_CLASS} SendPercelearance-none ${
        disabled ? "bg-gray-100 text-gray-500 cursor-not-allowed" : ""
      }`}
      disabled={disabled}
    >
      {options.map((option, index) => (
        <option
          key={index}
          value={index === 0 ? "" : option}
          disabled={index === 0}
        >
          {option}
        </option>
      ))}
    </select>
    {error && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
  </div>
);

// --- Main Component: SendParcel ---
export default function SendParcel() {
  // Get data from loader
  // serviceCenterData structure: [{ region, district, ... }, ...]
  const serviceCenterData = useLoaderData() || [];

  const [selectedSenderRegion, setSelectedSenderRegion] = useState("");
  const [selectedReceiverRegion, setSelectedReceiverRegion] = useState("");

  const navigate = useNavigate();

  // React-hook-form setup
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    watch,
    setValue, // Used to reset District dropdowns
  } = useForm({
    defaultValues: {
      parcelType: "Document", // Default value
      senderRegion: "",
      receiverRegion: "",
      parcelName: "",
      parcelWeight: "",
      senderName: "",
      senderAddress: "",
      senderPhone: "",
      senderDistrict: "",
      pickupInstruction: "",
      receiverName: "",
      receiverAddress: "",
      receiverContactNo: "",
      receiverDistrict: "",
      deliveryInstruction: "",
    },
  });

  //axios sicure all work here
  const { user } = UseAuth();
  const axiosSicure = useAxiosSicure();

  // Local state for parcel type radio button display
  const [currentParcelType, setCurrentParcelType] = useState("Document");

  // Watch region values from the form
  const watchedSenderRegion = watch("senderRegion");
  const watchedReceiverRegion = watch("receiverRegion");

  // --- 1. Create Region list (Memoized) ---
  const regions = useMemo(() => {
    // Default value if no data is loaded
    if (serviceCenterData.length === 0) return ["বিভাগ খুঁজে পাওয়া যায়নি"];

    const uniqueRegions = new Set(serviceCenterData.map((item) => item.region));
    return ["আপনার বিভাগ নির্বাচন করুন", ...Array.from(uniqueRegions)];
  }, [serviceCenterData]);

  // --- 2. Filter Sender Districts (Memoized) ---
  const filteredSenderDistricts = useMemo(() => {
    if (!selectedSenderRegion) {
      return ["আপনার জেলা নির্বাচন করুন"];
    }
    // Filter data based on selected Region
    const districts = serviceCenterData
      .filter((item) => item.region === selectedSenderRegion)
      .map((item) => item.district);

    // Ensure districts are unique
    const uniqueDistricts = new Set(districts);

    return ["আপনার জেলা নির্বাচন করুন", ...Array.from(uniqueDistricts)];
  }, [serviceCenterData, selectedSenderRegion]);

  // --- 3. Filter Receiver Districts (Memoized) ---
  const filteredReceiverDistricts = useMemo(() => {
    if (!selectedReceiverRegion) {
      return ["আপনার জেলা নির্বাচন করুন"];
    }
    const districts = serviceCenterData
      .filter((item) => item.region === selectedReceiverRegion)
      .map((item) => item.district);
    const uniqueDistricts = new Set(districts);

    return ["আপনার জেলা নির্বাচন করুন", ...Array.from(uniqueDistricts)];
  }, [serviceCenterData, selectedReceiverRegion]);

  // --- 4. Update State and Reset District when Region changes ---
  // Effect for Sender Region change
  useEffect(() => {
    // Update local state
    setSelectedSenderRegion(watchedSenderRegion);
    // Reset District dropdown
    setValue("senderDistrict", "");
  }, [watchedSenderRegion, setValue]);

  // Effect for Receiver Region change
  useEffect(() => {
    // Update local state
    setSelectedReceiverRegion(watchedReceiverRegion);
    // Reset District dropdown
    setValue("receiverDistrict", "");
  }, [watchedReceiverRegion, setValue]);

  // Form Submission Handler
  const onSubmit = (data) => {
    console.log("পার্সেল বুকিং ডেটা:", data);

    const isDocument = data.parcelType === "Document";
    const isSameDistrict = data.senderDistrict === data.receiverDistrict;
    const parcelWeight = parseFloat(data.parcelWeight);
    console.log(isDocument, isSameDistrict, parcelWeight);

    let cost = 0;

    if (isDocument) {
      cost = isSameDistrict ? 60 : 80;
      console.log("same district cost", cost);
    } else {
      if (parcelWeight < 3) {
        cost = isSameDistrict ? 110 : 150;
        console.log("parcel weight cost", cost);
      } else {
        const minCharge = isSameDistrict ? 110 : 150;
        const extraWeight = parcelWeight - 3;
        const extraCharge = isSameDistrict
          ? extraWeight * 40
          : extraWeight * 40 + 40;
        cost = minCharge + extraCharge;
      }
    }

    //show sweet alert
    Swal.fire({
      title: "Are you sure for confirm the cost?",
      text: `You will be chaged ${cost} taka!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, i agree",
    }).then((result) => {

      if (result.isConfirmed) {
        axiosSicure.post("/parcels", data).then((res) => {
          console.log("after saving parcel", res.data);
          if (res.data.insertedId) {
            navigate('/dashboard/my-parcels');
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });

        // Swal.fire({
        //   title: "Deleted!",
        //   text: "Your file has been deleted.",
        //   icon: "success",
        // });
      }
    });

    console.log("final cost", cost);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8 flex justify-center font-[Inter]">
      <div className="w-full max-w-5xl bg-white p-6 sm:p-10 rounded-xl shadow-2xl">
        {/* Headline Section */}
        <h1 className={`text-4xl font-extrabold ${ACCENT_COLOR} mb-2`}>
          Send A Parcel
        </h1>
        <p className="text-xl font-semibold text-gray-800 mb-8 border-b pb-4">
          Enter your parcel details
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
          {/* Parcel Type (Document/Not-Document) Radio Buttons */}
          <Controller
            name="parcelType"
            control={control}
            render={({ field }) => (
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8">
                {["Document", "Not-Document"].map((type) => (
                  <label
                    key={type}
                    className="flex items-center space-x-2 cursor-pointer"
                    onClick={() => {
                      field.onChange(type);
                      setCurrentParcelType(type);
                    }}
                  >
                    <div
                      className={`text-xl ${
                        currentParcelType === type
                          ? ACCENT_COLOR
                          : "text-gray-400"
                      }`}
                    >
                      {currentParcelType === type ? (
                        <CheckCircleIcon />
                      ) : (
                        <RegCircleIcon />
                      )}
                    </div>
                    <span className="text-gray-700 font-medium">{type}</span>
                  </label>
                ))}
              </div>
            )}
          />

          {/* Parcel Details Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormInput
              label="Parcel Name"
              name="parcelName"
              placeholder="Parcel Name"
              register={register}
              error={errors.parcelName}
            />
            <FormInput
              label="Parcel Weight (KG)"
              name="parcelWeight"
              type="number"
              placeholder="Parcel Weight (KG)"
              register={register}
              error={errors.parcelWeight}
              isRequiredField={false}
            />
          </div>

          {/* Sender and Receiver Details - 2 Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-10">
            {/* Left Column: Sender Details */}
            <div className="space-y-6 p-4 rounded-xl border border-gray-100 bg-white shadow-sm">
              <h2 className={`text-lg font-bold ${ACCENT_COLOR} border-b pb-2`}>
                Sender Details
              </h2>
              {/* sender name */}
              <FormInput
                label="Sender Name"
                name="senderName"
                placeholder="Sender Name"
                register={register}
                error={errors.senderName}
              />
              {/* sender address */}
              <FormInput
                label="Address"
                name="senderAddress"
                placeholder="Address"
                register={register}
                error={errors.senderAddress}
              />
              {/* sender email address */}
              <FormInput
                label="Sender Email"
                name="senderEmail"
                placeholder="Enter your email"
                register={register}
                error={errors.senderEmail}
              />
              <FormInput
                label="Sender Phone No"
                name="senderPhone"
                type="tel"
                placeholder="Sender Phone No"
                register={register}
                error={errors.senderPhone}
              />
              {/* Sender Region Dropdown: Uses loaded Regions data */}
              <FormSelect
                label="Your Region (বিভাগ)"
                name="senderRegion"
                options={regions}
                register={register}
                error={errors.senderRegion}
              />
              {/* Sender District Dropdown: Filters Districts based on selected Region */}
              <FormSelect
                label="Your District (জেলা)"
                name="senderDistrict"
                options={filteredSenderDistricts}
                register={register}
                error={errors.senderDistrict}
                // Disable District until Region is selected
                disabled={
                  !watchedSenderRegion || filteredSenderDistricts.length === 1
                }
              />
              <FormTextarea
                label="Pickup Instruction"
                name="pickupInstruction"
                placeholder="Pickup Instruction"
                register={register}
                error={errors.pickupInstruction}
                isRequiredField={false}
              />
            </div>

            {/* Right Column: Receiver Details */}
            <div className="space-y-6 p-4 rounded-xl border border-gray-100 bg-white shadow-sm">
              <h2 className={`text-lg font-bold ${ACCENT_COLOR} border-b pb-2`}>
                Receiver Details
              </h2>
              <FormInput
                label="Receiver Name"
                name="receiverName"
                placeholder="Receiver Name"
                register={register}
                error={errors.receiverName}
              />
              <FormInput
                label="Receiver Address"
                name="receiverAddress"
                placeholder="Receiver Address"
                register={register}
                error={errors.receiverAddress}
              />
              <FormInput
                label="Receiver Contact No"
                name="receiverContactNo"
                type="tel"
                placeholder="Receiver Contact No"
                register={register}
                error={errors.receiverContactNo}
              />
              {/* Receiver Region Dropdown: Uses loaded Regions data */}
              <FormSelect
                label="Receiver Region (বিভাগ)"
                name="receiverRegion"
                options={regions}
                register={register}
                error={errors.receiverRegion}
              />
              {/* Receiver District Dropdown: Filters Districts based on selected Region */}
              <FormSelect
                label="Receiver District (জেলা)"
                name="receiverDistrict"
                options={filteredReceiverDistricts}
                register={register}
                error={errors.receiverDistrict}
                // Disable District until Region is selected
                disabled={
                  !watchedReceiverRegion ||
                  filteredReceiverDistricts.length === 1
                }
              />
              <FormTextarea
                label="Delivery Instruction"
                name="deliveryInstruction"
                placeholder="Delivery Instruction"
                register={register}
                error={errors.deliveryInstruction}
                isRequiredField={false}
              />
            </div>
          </div>

          {/* Footer and Submit Button */}
          <div className="mt-8">
            <p className="text-sm text-gray-500 mb-4">
              *Pickup Time 4pm-7pm SendPercelrox. (আনুমানিক)
            </p>
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3 bg-[#9FE870] text-gray-800 font-bold rounded-lg shadow-md hover:bg-[#86d45e] transition-colors duration-300 transform hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-[#9FE870]/50"
            >
              Proceed to Confirm Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
