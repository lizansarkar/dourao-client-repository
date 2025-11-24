import React from "react";
import { Link } from "react-router";
import { motion } from 'framer-motion';
import { FaTimesCircle, FaRedo } from 'react-icons/fa';

export default function PaymentCancelled() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-orange-50 p-4">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8"
      >
        {/* Error Icon with Animation */}
        <motion.div
          initial={{ scale: 0, rotate: 180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="flex justify-center mb-6"
        >
          <FaTimesCircle className="text-red-500 text-8xl" />
        </motion.div>

        {/* Error Message */}
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-red-500 text-3xl text-center font-bold"
        >
          Payment Cancelled
        </motion.h2>

        {/* Additional Message */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center text-gray-600 mt-4 mb-8"
        >
          Your payment was cancelled. Please try again to complete your order.
        </motion.p>

        {/* Try Again Button */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <Link to='/dashboard/my-parcels'>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
            >
              <FaRedo />
              Try Again
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}