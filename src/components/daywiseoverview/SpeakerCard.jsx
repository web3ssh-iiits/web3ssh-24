'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const SpeakerCard = ({ title, experience, imgSrc, data }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <>
      <motion.div
        className="w-auto h-[400px] overflow-hidden rounded-2xl shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300 ease-in-out"
        whileHover={{ scale: 1.05 }}
        onClick={toggleModal}
      >
        <div className="relative h-full">
          <img src={imgSrc} alt={title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
            <div className="p-4 text-white">
              <h2 className="text-2xl font-bold">{title}</h2>
              <p className="text-sm">{experience}</p>
            </div>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-lg shadow-xl overflow-hidden max-w-4xl w-full"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 flex justify-center">
                  <img src={imgSrc} alt={title} className="w-[360px] h-[360px] object-cover m-5 sm:m-0" />
                </div>
                <div className="md:w-2/3 p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h2 className="text-3xl font-bold">{title}</h2>
                      <p className="text-gray-600">{experience}</p>
                    </div>
                    <button onClick={toggleModal} className="text-gray-500 hover:text-gray-700">
                      <X size={24} />
                    </button>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{data}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SpeakerCard;