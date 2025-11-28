import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSicure from '../../../hooks/useAxiosSicure';

export default function UserManagement() {
  const axiosSecure = useAxiosSicure();

  const { data: users = [], isLoading, error } = useQuery({
    queryKey: ['users'],          // queryKey ফাঁকা রাখা ঠিক না, একটা নাম দিলাম
    queryFn: async () => {
      const res = await axiosSecure.get('/users');
      return res.data;
    }
  });

  if (isLoading) return <p className="text-center mt-10">Loading users…</p>;
  if (error) return <p className="text-center mt-10 text-red-600">Failed to load users.</p>;

  return (
    <div className="section mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold mb-6">Manage Users : {users.length}</h2>

      <div className="overflow-x-auto shadow rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Photo</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              {/* চাইলে আরও কলাম যোগ করো */}
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user._id ?? user.email}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <img
                    className="h-10 w-10 rounded-full object-cover"
                    src={user.photoURL || 'https://i.pravatar.cc/40?u=' + user.email}
                    alt={user.name}
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}