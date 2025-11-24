import React from "react";
import { Link } from "react-router";

export default function PaymentCancelled() {
  return (
    <div className="p-5">
      <h2 className="text-red-500 text-3xl">Payment Cancelled Please Try Again!!!</h2>
      <Link to='/dashboard/my-parcels'><button className="btn text-red-500 hover:bg-primary mt-7">Try Again</button></Link>
    </div>
  );
}
