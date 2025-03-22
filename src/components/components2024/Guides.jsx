import React from 'react';
import SpeakerCard from './../daywiseoverview/SpeakerCardV2';
import guides from '../../data/guides.json';

export default function GuidesPanel() {
  return (
    <div className="w-full mb-[120px] px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center">
      <div
        id="guides"
        className="text-white text-4xl md:text-6xl mb-10 lg:mb-20 font-sans font-medium text-center"
      >
        <h1>Guides</h1>
      </div>
      <div className="max-w-[1200px] w-[80%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {guides.map((guide) => (
          <SpeakerCard
            key={guide.name}
            title={guide.name}
            experience={guide.experience}
            imgSrc={guide.imageUrl}
            data={guide.details}
          />
        ))}
      </div>
    </div>
  );
}
