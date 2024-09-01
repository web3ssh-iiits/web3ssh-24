'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const TeamMemberCard = ({ name, role, profilePic, link, linkTitle, bio }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <>
      <motion.div
        className="max-w-[1200px] w-full h-[400px] overflow-hidden rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300 ease-in-out"
        whileHover={{ scale: 1.05 }}
        onClick={toggleModal}
      >
        <div className="relative h-full">
          <img src={profilePic} alt={name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
            <div className="p-4 text-white">
              <h2 className="text-2xl font-bold">{name}</h2>
              <p className="text-sm">{role}</p>
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
                <div className="md:w-1/3">
                  <img src={profilePic} alt={name} className="w-full h-full object-cover" />
                </div>
                <div className="md:w-2/3 p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h2 className="text-3xl font-bold">{name}</h2>
                      <p className="text-gray-600">{role}</p>
                      {link !== '#' && (
                        <a
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:text-blue-700 transition-colors"
                        >
                          {linkTitle}
                        </a>
                      )}
                    </div>
                    <button onClick={toggleModal} className="text-gray-500 hover:text-gray-700">
                      <X size={24} />
                    </button>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{bio}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default function TeamSection({ teamData }) {
  return (
    <section className="w-full mb-[120px] px-4 sm:px-6 lg:px-8">
      {teamData.map((role, index) => (
        <div key={index} className="mb-16">
          <h1 className="text-white text-4xl md:text-6xl mb-10 lg:mb-20 font-sans font-medium text-center">
            {role.role}
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {role.members.map((member, idx) => (
              <TeamMemberCard
                key={`${member.name}-${idx}`}
                name={member.name}
                role={role.role}
                profilePic={member.profilePic}
                link={member.link}
                linkTitle={member.link_title}
                bio={member.bio || "No bio available."} 
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}