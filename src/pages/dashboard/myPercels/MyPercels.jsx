import { useQuery } from "@tanstack/react-query";
import React from "react";
import UseAuth from "../../../hooks/UseAuth";
import useAxiosSicure from "../../../hooks/useAxiosSicure";
import { TbEdit, TbEyeBolt, TbTrash } from "react-icons/tb";
import Swal from "sweetalert2";
import { Link } from "react-router";

export default function MyPercels() {
  const { user } = UseAuth();
  const axiosSicure = useAxiosSicure();

  const { data: parcels = [], refetch } = useQuery({
    queryKey: ["myParcels", user?.email],
    queryFn: async () => {
      const res = await axiosSicure.get(`/parcels?email=${user.email}`);
      return res.data;
    },
  });

  // parcel delete function for percel delete
  const handleDelteParcel = (id) => {
    console.log(id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSicure.delete(`/parcels/${id}`).then((res) => {
          console.log("from delete data function", res.data);

          if (res.data.deletedCount) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            //refresh the data on time in the ui
            refetch();
          }
        });
      }
    });
  };
  return (
    <div>
      <h1>All My Percels : {parcels.length}</h1>
      {/* show table here */}
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Sl No:</th>
                <th>Name</th>
                <th>Cost</th>
                <th>Payment</th>
                <th>Delivery Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {parcels.map((parcel, index) => {
                return (
                  <tr key={parcel._id}>
                    <th>{index + 1}</th>
                    <td>{parcel.parcelName}</td>
                    <td>{parcel.cost}</td>
                    <td>
                      {
                        parcel.paymentStatus === 'paid' ? <span className="text-green-500">paid</span> : <Link to={`/dashboard/payment/${parcel._id}`}><span className="btn btn-square hover:bg-primary text-red-500">pay</span></Link>
                      }
                    </td>
                    <td>{parcel.deliveryStatus}</td>
                    <td>{parcel.createdAt}</td>
                    <td>
                      <button className="btn btn-square hover:bg-primary">
                        <TbEyeBolt></TbEyeBolt>
                      </button>
                      <button className="btn btn-square hover:bg-primary mx-2">
                        <TbEdit></TbEdit>
                      </button>
                      <button
                        onClick={() => handleDelteParcel(parcel._id)}
                        className="btn btn-square hover:bg-primary"
                      >
                        <TbTrash></TbTrash>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
