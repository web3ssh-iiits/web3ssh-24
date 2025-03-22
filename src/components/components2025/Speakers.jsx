import React from 'react';

export default function SpeakersPanel() {
  return (
    <div className="w-full mb-[120px] px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center">
      <div
        id="speakers"
        className="text-white text-4xl md:text-6xl mb-10 lg:mb-20 font-sans font-medium text-center"
      >
        <h1>Speakers</h1>
      </div>
      <div className="max-w-[1200px] w-[80%] flex justify-center items-center">
        <div className="text-white text-2xl md:text-3xl font-sans font-medium">
          Coming Soon
        </div>
      </div>
    </div>
  );
}
