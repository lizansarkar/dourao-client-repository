import React, { use } from 'react'
import useAuth from '../../../hooks/useAuth'
import useAxiosSicure from '../../../hooks/useAxiosSicure'

export default function PaymentHistory() {
    const {user} = useAuth();
    const axiosSicure = useAxiosSicure();
  return (
    <div>PaymentHistory</div>
  )
}
