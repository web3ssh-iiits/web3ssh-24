import React from 'react';
import LogoImg from '/web3ssh.png';
const LandingPage = () => {
  return (
    <div className="flex flex-col items-center h-96 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-violet-200 via-violet-200 to-violet-600 text-white">
        <div className="mt-2">
        <img src={LogoImg} alt="Web 3 Event Logo" className='h-24 w-24'/>
      </div>
      <div className="2xl:text-6xl md:text-5xl sm:text-4xl text-4xl max-[510px]:text-3xl max-[414px]:text-2xl max-[340px]:text-xl font-bold mt-8 bg-gradient-to-r  from-rose-400 via-fuchsia-500 to-indigo-500 inline-block text-transparent bg-clip-text">Swift Blockchain Revolution</div>
      <div className="2xl:text-lg 2xl:w-2/5 xl:text-base xl:w-2/5 lg:w-1/2 md:text-sm  mt-4 sm:w-3/5 max-[450px]:text-xs max-[375px]:w-4/5 w-3/4 text-violet-800">
        Ready to energize your life and turn it into earnings? With Move to
        Earn, your steps hold real value. Simply walk, run, or exercise to earn.
        Each step matters.
      </div>
      <div className="flex space-x-4 mt-8">
        <button className="bg-purple-500 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded mx-2">
          Register
        </button>
        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mx-2">
          Brochure
        </button>
      </div>
    </div>
  );
};

export default LandingPage;