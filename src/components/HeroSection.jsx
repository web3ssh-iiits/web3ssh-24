import LogoImg from '@public/web3ssh.png';
import iiitSricityLogo from '@public/iiits.png';
import clsx from 'clsx';
import { TypewriterEffect } from './ui/typewriter-effect';
import Partners from './Partners';
import { AnimatedTooltip } from './ui/animated-tooltip';

const HeroSection = () => {
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

  const logos = [
    {
      id: 1,
      name: 'IIIT Sri City',
      designation: 'Organized by Dept. of CSE',
      image: '/iiits.png',
    },
    {
      id: 2,
      name: 'web3ssh',
      designation: 'Web 3.0 Summer School & Hackathon',
      image: '/web3ssh.png',
    },
  ];
  return (
    <div
      className={clsx(
        'flex flex-col items-center justify-center h-[100vh] z-10 text-white',
        'pt-28',
      )}
    >
      <div className="flex flex-row items-center justify-center mb-10 w-full">
        {/* <img
          src={iiitSricityLogo.src}
          alt="IIIT Sri City"
          className="h-24 w-24 "
        />
        <img src={LogoImg.src} alt="Web 3 Event Logo" className="h-24 w-24" /> */}
        <AnimatedTooltip items={logos} />
      </div>
      <TypewriterEffect words={words} />
      <div className="2xl:text-lg 2xl:w-2/5  xl:w-2/5 lg:w-1/2 md:text-sm  mt-4 sm:w-3/5 max-[450px]:text-xs max-[375px]:w-4/5 w-3/4 text-white text-lg ">
        The Web 3.0 Summer School initiative aims to offer a comprehensive
        curriculum designed to introduce participants to the fundamentals of Web
        3.0 and empower them to explore its practical applications.
      </div>
      <div className="my-4">
        <div className="mt-16 flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 ">
          <button className="transform hover:-translate-y-1 transition duration-400 relative inline-flex sm:h-16 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 pl-12  pr-8 py-4 text-xl sm:text-4xl font-bold text-white backdrop-blur-3xl">
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
          <button className="transform hover:-translate-y-1 transition duration-400 w-64 h-16 rounded-full bg-white text-black text-xl sm:text-4xl font-bold bg-opacity-50 flex items-center justify-center">
            <span className="material-symbols-outlined px-2">download</span>
            Brochure
          </button>
        </div>
      </div>
      <Partners />
    </div>
  );
};

export default HeroSection;
