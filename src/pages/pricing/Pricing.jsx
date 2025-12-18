import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { ChevronDown, Mic, MicOff, Zap } from "lucide-react";

const Pricing = () => {
  const [totalCost, setTotalCost] = useState(0);
  const [isListening, setIsListening] = useState(false);
  const [aiMessage, setAiMessage] = useState(
    "আবহাওয়া চমৎকার! দ্রুত ডেলিভারি আশা করা যাচ্ছে।"
  );

  const { register, handleSubmit, reset, setValue } = useForm({
    defaultValues: {
      parcelType: "",
      destination: "",
      weight: "",
    },
  });

  // সিম্পল এআই প্রেডিকশন লজিক (আপনি চাইলে এখানে API কল করতে পারেন)
  useEffect(() => {
    const hours = new Date().getHours();
    if (hours >= 17 && hours <= 20) {
      setAiMessage(
        "🤖 AI: এখন পিক-আওয়ার, ট্রাফিকের কারণে ১০-১৫ মিনিট দেরি হতে পারে।"
      );
    }
  }, []);

  const onSubmit = (data) => {
    const basePrice = data.destination === "inside-dhaka" ? 60 : 120;
    const weightCharge = parseFloat(data.weight || 0) * 20;
    setTotalCost(basePrice + weightCharge);
  };

  const handleReset = () => {
    reset();
    setTotalCost(0);
  };

  const handleVoiceCommand = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("আপনার ব্রাউজারে ভয়েস সাপোর্ট নেই। গুগল ক্রোম ব্যবহার করুন।");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "bn-BD";

    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript.toLowerCase();
      console.log("User said:", transcript);

      // স্মার্ট ভয়েস লজিক: "ঢাকা" বললে ডেস্টিনেশন সেট হবে, "ডকুমেন্ট" বললে টাইপ সেট হবে
      if (transcript.includes("ঢাকা")) setValue("destination", "inside-dhaka");
      if (transcript.includes("বাইরে"))
        setValue("destination", "outside-dhaka");
      if (transcript.includes("ডকুমেন্ট")) setValue("parcelType", "document");
      if (transcript.includes("স্ট্যান্ডার্ড"))
        setValue("parcelType", "standard");

      // ওজন বের করার চেষ্টা (যেমন: "৫ কেজি")
      const weightMatch = transcript.match(/\d+/);
      if (weightMatch) setValue("weight", weightMatch[0]);
    };

    recognition.start();
  };

  return (
    <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto font-sans">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[#003d3d] mb-4">
          Pricing Calculator
        </h1>
        <p className="text-gray-600 max-w-2xl leading-relaxed">
          Enjoy fast, reliable parcel delivery with real-time tracking.
        </p>
      </div>

      <hr className="border-gray-100 mb-16" />

      <div className="text-center">
        <div className="flex items-center justify-center gap-3 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#003d3d]">
            Calculate Your Cost
          </h2>
          {/* ভয়েস বাটন */}
          <button
            onClick={handleVoiceCommand}
            className={`p-3 rounded-full transition-all ${
              isListening
                ? "bg-red-500 animate-pulse text-white"
                : "bg-[#c2e96d] text-[#003d3d] hover:scale-110"
            }`}
            title="ভয়েস দিয়ে ফর্ম পূরণ করুন"
          >
            {isListening ? <MicOff size={20} /> : <Mic size={20} />}
          </button>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full max-w-md space-y-5 text-left"
          >
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-gray-700">
                Parcel type
              </label>
              <div className="relative">
                <select
                  {...register("parcelType")}
                  className="w-full p-3 bg-white border border-gray-300 rounded-lg appearance-none focus:ring-2 focus:ring-[#c2e96d] text-gray-500"
                >
                  <option value="">Select Parcel type</option>
                  <option value="standard">Standard</option>
                  <option value="fragile">Fragile</option>
                  <option value="document">Document</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-gray-700">
                Delivery Destination
              </label>
              <div className="relative">
                <select
                  {...register("destination")}
                  className="w-full p-3 bg-white border border-gray-300 rounded-lg appearance-none focus:ring-2 focus:ring-[#c2e96d] text-gray-500"
                >
                  <option value="">Select Delivery Destination</option>
                  <option value="inside-dhaka">Inside Dhaka</option>
                  <option value="outside-dhaka">Outside Dhaka</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-gray-700">
                Weight (KG)
              </label>
              <input
                type="number"
                step="0.1"
                placeholder="Enter Weight"
                {...register("weight")}
                className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c2e96d]"
              />
            </div>

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
                className="flex-[2] py-3 px-6 bg-[#c2e96d] text-[#003d3d] rounded-lg font-bold hover:bg-[#b1d85c] transition-colors shadow-lg"
              >
                Calculate
              </button>
            </div>
          </form>

          {/* Result Display with AI Message */}
          <div className="flex flex-col items-center justify-center space-y-6">
            <h3 className="text-7xl md:text-9xl font-black text-black tracking-tighter">
              {totalCost} <span className="text-6xl md:text-8xl">Tk</span>
            </h3>

            {/* AI Prediction Box */}
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-200 max-w-sm">
              <Zap
                className="text-yellow-500 fill-yellow-500 flex-shrink-0"
                size={20}
              />
              <p className="text-xs text-gray-600 text-left italic leading-relaxed">
                {aiMessage}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
