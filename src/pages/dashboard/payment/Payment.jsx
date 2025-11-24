import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router";
import useAxiosSicure from "../../../hooks/useAxiosSicure";
import Loading from "../../../components/common/Loading";

export default function Payment() {
  const { parcelId } = useParams();
  const axiosSicure = useAxiosSicure();

  const { isLoading, data: parcel } = useQuery({
    queryKey: ["parcels", parcelId],
    queryFn: async () => {
      const res = await axiosSicure.get(`/parcels/${parcelId}`);
      return res.data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  // const handlePayment = async () => {
  //   const paymentInfo = {
  //     cost: parcel.cost,
  //     parcelId: parcel._id,
  //     senderEmail: parcel.senderEmail,
  //     parcelName: parcel.parcelName,
  //   }

  //   const res = await axiosSicure.post('/create-checkout-session', paymentInfo);
  //   console.log(res.data);
  // window.location.href = res.data.url;
  // }

  const handlePayment = async () => {
    try {
      const paymentInfo = {
        cost: parseFloat(parcel.cost) || 0, // ✅ Ensure it's a number
        parcelId: parcel._id,
        senderEmail: parcel.senderEmail,
        parcelName: parcel.parcelName,
      };

      // Debug
      console.log("Sending payment info:", paymentInfo);

      // Validate before sending
      if (!paymentInfo.cost || paymentInfo.cost <= 0) {
        alert("Invalid parcel cost");
        return;
      }

      const res = await axiosSicure.post(
        "/create-checkout-session",
        paymentInfo
      );
      console.log("Response:", res.data);

      if (res.data.url) {
        window.location.href = res.data.url;
      }
    } catch (error) {
      console.error("Payment error:", error.response?.data || error.message);
      alert(
        "Payment failed: " + (error.response?.data?.error || "Unknown error")
      );
    }
  };

  return (
    <div>
      <h2>
        please pay for "{parcel.parcelName}" this parcel your cost $
        {parcel.cost}
      </h2>
      <button onClick={handlePayment} className="btn btn-primary text-black">
        Pay
      </button>
    </div>
  );
}
