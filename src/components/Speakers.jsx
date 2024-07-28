import React from 'react';
import SpeakerCard from './daywiseoverview/SpeakerCard';
import speakers from '../data/speakers.json';

export default function SpeakersPanel() {
  return (
    <section id="speakers" className="w-full mb-[120px] px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center">
      <div
        className="text-white text-4xl md:text-6xl mb-10 lg:mb-20 font-sans font-medium text-center"
      >
        <h1>Speakers</h1>
      </div>
      <div className="max-w-[1200px] w-[80%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {speakers.map((speaker) => (
          <SpeakerCard
            key={speaker.name}
            title={speaker.name}
            experience={speaker.experience}
            imgSrc={speaker.imageUrl}
            data={speaker.details}
          />
        ))}
      </div>
    </section>
  );
}