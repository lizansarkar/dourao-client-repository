import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSicure from "../../hooks/useAxiosSicure";
import { FaCheckCircle } from "react-icons/fa";
import { format } from "date-fns";
import Swal from "sweetalert2";

const ACCENT_COLOR = "text-[#008953]";

// --- Main Component: ApproveRider ---
export default function ApproveRider() {
  const axiosSicure = useAxiosSicure();

  const {
    data: riders = [],
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["riders", "pending"],
    queryFn: async () => {
      const res = await axiosSicure.get("/riders");
      return res.data;
    },
  });

  const handleApprove = (riderId, riderName) => {
    const updateInfo = { status: "approve" };
    axiosSicure.patch(`/riders/${riderId}`, updateInfo).then((res) => {
      if (res.data.modifiedCount) {
        Swal.fire({
          title: "রাইডার অনুমোদিত!",
          text: `রাইডার ${riderName}-কে সফলভাবে অনুমোদন দেওয়া হয়েছে।`,
          icon: "success",
          confirmButtonColor: "#51CC79",
          confirmButtonText: "ঠিক আছে!",
        }).then(() => {
          refetch()
        });
      }
    });
    console.log(`Attempting to approve Rider: ${riderName} (ID: ${riderId})`);
  };

  const handleReject = (riderId, riderName) => {
    console.log(`Attempting to approve Rider: ${riderName} (ID: ${riderId})`);

    Swal.fire({
      title: "রাইডার Batil!",
      text: `রাইডার ${riderName}-কে সফলভাবে অনুমোদন দেওয়া hoyni`,
      icon: "error",
      confirmButtonColor: "#6e0000",
      confirmButtonText: "ঠিক আছে!",
    }).then(() => {});
  };

  if (isLoading) {
    return (
      <div className="p-10 text-center text-xl text-gray-600">
        Loading pending riders...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="p-10 text-center text-xl text-red-500">
        Error loading data.
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-8 bg-gray-50 min-h-screen">
      <h1 className={`text-3xl font-bold ${ACCENT_COLOR} mb-2 border-b pb-2`}>
        Rider Approval Dashboard
      </h1>
      <h2 className="text-xl font-semibold text-gray-700 mb-6">
        Riders Pending Approval:{" "}
        <span className="text-red-500">{riders.length}</span>
      </h2>

      {/* --- Riders Table --- */}
      <div className="overflow-x-auto bg-white shadow-xl rounded-lg border border-gray-100">
        <table className="min-w-full divide-y divide-gray-200">
          {/* Table Header */}
          <thead className="bg-[#51CC79] text-white">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">
                #
              </th>
              <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">
                Rider Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">
                District
              </th>
              <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">
                Contact
              </th>
              <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">
                Applied On
              </th>
              <th className="px-6 py-3 text-center text-xs font-bold uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="bg-white divide-y divide-gray-200">
            {riders.length === 0 ? (
              <tr>
                <td
                  colSpan="6"
                  className="px-6 py-4 text-center text-gray-500 text-sm italic"
                >
                  No riders pending approval at this time.
                </td>
              </tr>
            ) : (
              riders.map((rider, index) => (
                <tr
                  key={rider._id}
                  className="hover:bg-gray-50 transition duration-150"
                >
                  {/* Index */}
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {index + 1}
                  </td>

                  {/* Name */}
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {rider.yourName}
                  </td>

                  {/* District */}
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {rider.yourDistrict}
                  </td>

                  {/* Contact */}
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {rider.contact}
                  </td>

                  {/* Applied On (status) */}
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {rider.status}
                  </td>
                  {/* Applied On (Formatted Date) */}
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {/* Using date-fns for clean date display */}
                    {rider.createdAt
                      ? format(
                          new Date(rider.createdAt),
                          "dd MMM yyyy (h:mm a)"
                        )
                      : "N/A"}
                  </td>

                  {/* Action Button */}
                  <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                    <button
                      onClick={() => handleApprove(rider._id, rider.yourName)}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#008953] hover:bg-[#006e42] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#51CC79] transition-colors cursor-pointer"
                      title="Approve Rider Application"
                    >
                      <FaCheckCircle className="mr-2 h-4 w-4" />
                      Approve
                    </button>

                    <button
                      onClick={() => handleReject(rider._id, rider.yourName)}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#890000] hover:bg-[#6e0000] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#cc5151] transition-colors cursor-pointer ml-4"
                      title="Reject Rider Application"
                    >
                      <FaCheckCircle className="mr-2 h-4 w-4" />
                      Reject
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
