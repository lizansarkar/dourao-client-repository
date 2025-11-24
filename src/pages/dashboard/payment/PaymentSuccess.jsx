import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router'
import useAxiosSicure from '../../../hooks/useAxiosSicure';

export default function PaymentSuccess() {
    const [searchParams] = useSearchParams();
    const sessionId = searchParams.get('session_Id');
    const axiosSicure = useAxiosSicure();

    console.log(sessionId);

    useEffect(() => {
        if(sessionId) {
            axiosSicure.patch(`/payment-success?session_id=${sessionId}`)
            .then(res => {
                console.log(res.data)
            })
        }
    },[sessionId, axiosSicure])

  return (
    <div>
        <h2 className="text-green-500 text-4xl">Payment successfull</h2>
    </div>
  )
}
