import React from 'react';
import LogoImg from '/web3ssh.png';
import clsx from 'clsx';
import { TypewriterEffect } from './ui/typewriter-effect';

const LandingPage = ({ className }) => {
  const words = [
    {
      text: 'Web',
    },
    {
      text: '3.0',
    },
    {
      text: 'Summer',
    },
    {
      text: 'School',
    },
    {
      text: '&',
    },
    {
      text: 'Hackathon',
      className: 'text-blue-500',
    },
  ];
  return (
    <div
      className={clsx(
        'flex flex-col items-center justify-center h-[100vh] z-10 text-white',
        className,
      )}
    >
      <div className="my-4">
        <img src={LogoImg} alt="Web 3 Event Logo" className="h-24 w-24" />
      </div>
      <TypewriterEffect words={words} />
      <div className="2xl:text-lg 2xl:w-2/5 xl:text-base xl:w-2/5 lg:w-1/2 md:text-sm  mt-4 sm:w-3/5 max-[450px]:text-xs max-[375px]:w-4/5 w-3/4 text-violet-800">
        Ready to energize your life and turn it into earnings? With Move to
        Earn, your steps hold real value. Simply walk, run, or exercise to earn.
        Each step matters.
      </div>
      <div className="my-4">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
          <button className="transform hover:-translate-y-1 transition duration-400 relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 pl-8  pr-6 py-1  font-medium text-white backdrop-blur-3xl">
              Join Us
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M10.75 8.75L14.25 12L10.75 15.25"
                ></path>
              </svg>
            </span>
          </button>
          <button className="transform hover:-translate-y-1 transition duration-400 w-40 h-10 rounded-xl bg-white text-black text-lg bg-opacity-50 flex items-center justify-center">
            <span className="material-symbols-outlined px-2 font-medium">
              download
            </span>
            Brochure
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
