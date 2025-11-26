import { useQuery } from '@tanstack/react-query'
import React from 'react'
import useAxiosSicure from '../../hooks/useAxiosSicure'

export default function ApproveRider() {
    const axiosSicure = useAxiosSicure();
    const {data: riders = []} = useQuery({
        queryKey: ['riders', 'pending'],
        queryFn: async () => {
         const res = await axiosSicure.get('/riders');
         return res.data;
        }
    })
  return (
    <div>
        <h2>Riders Pending Aproval: {riders.length}</h2>
    </div>
  )
}
