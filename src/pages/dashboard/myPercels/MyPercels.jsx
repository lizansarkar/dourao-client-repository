import { useQuery } from "@tanstack/react-query";
import React from "react";
import UseAuth from "../../../hooks/UseAuth";
import useAxiosSicure from "../../../hooks/useAxiosSicure";
import { TbEdit } from "react-icons/tb";

export default function MyPercels() {
  const { user } = UseAuth();
  const axiosSicure = useAxiosSicure();

  const { data: parcels = [] } = useQuery({
    queryKey: ["myParcels", user?.email],
    queryFn: async () => {
      const res = await axiosSicure.get(`/parcels?email=${user.email}`);
      return res.data;
    },
  });
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
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {parcels.map((parcel, index) => {
                return <tr key={parcel._id}>
                  <th>{index + 1}</th>
                  <td>{parcel.parcelName}</td>
                  <td>{parcel.cost}</td>
                  <td>{parcel.createdAt}</td>
                  <td>
                    <button className="btn btn-square hover:bg-primary">
                      <TbEdit></TbEdit>
                    </button>
                  </td>
                </tr>
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
