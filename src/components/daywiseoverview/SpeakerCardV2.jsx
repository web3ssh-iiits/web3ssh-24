import { useState } from "react";
import { createPortal } from "react-dom";
import { Modal } from "./Modal";
import { AnimatePresence } from "framer-motion";
import clsx from "clsx";

export default function SpeakerCardV2({ title, experience, imgSrc, className }) {

  const [modalOpen, setModalOpen] = useState(false);


  const handleClick = () => {
    setModalOpen((val) => !val)
  };


  return (
    <div
      className={clsx("w-96 aspect-[3/4] overflow-hidden rounded-2xl relative group bg-none cursor-pointer", className)}
      onClick={() =>
        handleClick()
      }
    >
      <AnimatePresence>
        {
          modalOpen &&
          <Modal >
            <h1>HOW THE FUCK DO MODALS WORK</h1>
            <br />
            <p>THIS IS A TEST MODAL </p>
          </Modal>
        }
      </AnimatePresence>
      <div className="absolute bg-[url(/bg/we.avif)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out w-full h-full" />
      <p className="absolute font-mono text-xl w-full h-[50%] bg-gradient-to-b from-gray-600/35 to-transparent py-[20px] font-bold text-center text-white z-20 transition-all delay-100 duration-500 group-hover:opacity-0 group-hover:-translate-y-[calc(100%_+_30px)]">
        {title}
      </p>
      <div className="mb-[16px] flex px-4 absolute bottom-0 justify-center items-center w-full ">
        <p className="mt-[20px] font-mono text-center z-20 text-white bg-gray-600/60 p-1 rounded-md transition-transform delay-100 duration-500 group-hover:translate-y-[calc(100%_+_80px)]">
          👤 {experience}
        </p>
      </div>
      <img
        className="absolute w-full h-full grayscale group-hover:filter-none group-hover:scale-105 object-cover object-center transition-all duration-300"
        src={imgSrc}
      />
      <span className="absolute bottom-auto left-auto right-3 top-3 z-10 flex h-10 w-10 flex-col items-center justify-center rounded-xl bg-white opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 sm:right-4 sm:top-4">
        <svg
          className="h-6 w-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.5251 5.49512L10.5205 7.49512L15.0781 7.50578L5.47461 17.0899L6.8874 18.5056L16.5172 8.89516L16.5064 13.5091L18.5064 13.5138L18.5251 5.51383L10.5251 5.49512Z"
            fill="black"
          />
        </svg>
      </span>
    </div>
  );
}
