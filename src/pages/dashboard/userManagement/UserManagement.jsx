import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSicure from "../../../hooks/useAxiosSicure";
import { FaUserShield } from "react-icons/fa";
import { FiShieldOff } from "react-icons/fi";
import Swal from "sweetalert2";

export default function UserManagement() {
  const axiosSecure = useAxiosSicure();

  const {
    refetch,
    data: users = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

const handleMakeAdmin = (user) => {
  Swal.fire({
    title: 'Are you sure?',
    text: `You are about to grant ADMIN role to ${user.displayName}.`,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, make admin!',
    cancelButtonText: 'Cancel'
  }).then((result) => {
    if (result.isConfirmed) {
      const roleInfo = { role: 'admin' };
      axiosSecure
        .patch(`/users/${user._id}/role`, roleInfo)
        .then((res) => {
          if (res.data.modifiedCount) {
            refetch();
            Swal.fire({
              icon: 'success',
              title: 'Success!',
              text: `${user.displayName} is now an admin.`,
              confirmButtonText: 'OK'
            });
          }
        })
        .catch(() => {
          Swal.fire({
            icon: 'error',
            title: 'Failed!',
            text: 'Could not grant admin access.',
            confirmButtonText: 'OK'
          });
        });
    }
  });
};

const handleRemoveAdmin = (user) => {
  Swal.fire({
    title: 'Are you sure?',
    text: `You are about to REMOVE admin role from ${user.displayName}.`,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, remove!',
    cancelButtonText: 'Cancel'
  }).then((result) => {
    if (result.isConfirmed) {
      const roleInfo = { role: 'user' };
      axiosSecure
        .patch(`/users/${user._id}/role`, roleInfo)
        .then((res) => {
          if (res.data.modifiedCount) {
            refetch();
            Swal.fire({
              icon: 'success',
              title: 'Success!',
              text: `${user.displayName} is no longer an admin.`,
              confirmButtonText: 'OK'
            });
          }
        })
        .catch(() => {
          Swal.fire({
            icon: 'error',
            title: 'Failed!',
            text: 'Could not remove admin access.',
            confirmButtonText: 'OK'
          });
        });
    }
  });
};

  if (isLoading) return <p className="text-center mt-10">Loading users…</p>;
  if (error)
    return (
      <p className="text-center mt-10 text-red-600">Failed to load users.</p>
    );

  return (
    <div className="section mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold mb-6">
        Manage Users : {users.length}
      </h2>

      <div className="overflow-x-auto shadow rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Photo
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Role
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Admin Action
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Other Action
              </th>
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user._id ?? user.email}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <img
                    className="h-10 w-10 rounded-full object-cover"
                    src={
                      user.photoURL ||
                      "https://i.pravatar.cc/40?u=" + user.email
                    }
                    alt={user.displayName}
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {user.displayName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {user.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {user.role}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {user.role === "admin" ? (
                    <button className="btn btn-square bg-secondary"
                    onClick={() => handleRemoveAdmin(user)}>
                      <FiShieldOff className="text-white"></FiShieldOff>
                    </button>
                  ) : (
                    <button
                      className="btn btn-square bg-primary"
                      onClick={() => handleMakeAdmin(user)}
                    >
                      <FaUserShield></FaUserShield>
                    </button>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {user.role}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
