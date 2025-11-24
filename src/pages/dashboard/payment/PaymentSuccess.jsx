import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router';
import useAxiosSicure from '../../../hooks/useAxiosSicure';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

export default function PaymentSuccess() {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_Id');
  const axiosSicure = useAxiosSicure();

  console.log(sessionId);

  useEffect(() => {
    if (sessionId) {
      axiosSicure.patch(`/payment-success?session_id=${sessionId}`).then((res) => {
        console.log(res.data);
      });
    }
  }, [sessionId, axiosSicure]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 p-4">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8"
      >
        {/* Success Icon with Animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="flex justify-center mb-6"
        >
          <FaCheckCircle className="text-green-500 text-8xl" />
        </motion.div>

        {/* Success Message */}
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-green-500 text-4xl text-center font-bold"
        >
          Payment successfull
        </motion.h2>

        {/* Additional Message */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center text-gray-600 mt-4"
        >
          Your payment has been processed successfully!
        </motion.p>
      </motion.div>
    </div>
  );
}