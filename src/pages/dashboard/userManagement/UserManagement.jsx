import { useQuery } from '@tanstack/react-query'
import React from 'react'
import useAxiosSicure from '../../../hooks/useAxiosSicure'

export default function UserManagement() {
    const axiosSecure = useAxiosSicure();


    const {data: users = []} = useQuery({
        queryKey: [''],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users`);
            return res.data;
        }
    })

  return (
    <div>
        <h2 className='text-4xl'>Manage Users : {users.length}</h2>
    </div>
  )
}
