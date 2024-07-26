import React from 'react';
import SpeakerCard from './daywiseoverview/SpeakerCardV3';
import guests from '../data/guests.json';
import facultyCoordinators from '../data/facultyCoordinators.json';

export default function DignitariesPanel() {
    return (
        <>
            <div className="w-full mb-[120px] px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center">
                <div
                    id="dignitaries"
                    className="text-white text-4xl md:text-6xl mb-10 lg:mb-20 font-sans font-medium text-center"
                >
                    <h1>Event Dignitaries</h1>
                </div>
                <div className="max-w-[1300px] w-[80%] mb-10 lg:mb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {guests.map((guest) => (
                        <SpeakerCard
                            key={guest.name}
                            title={guest.name}
                            experience={guest.experience}
                            imgSrc={guest.imageUrl}
                            position={guest.position}
                        />
                    ))}
                </div>
                <div className="max-w-[850px] w-[80%] mb-10 lg:mb-20 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-10">
                    {facultyCoordinators.map((coordinators) => (
                        <SpeakerCard
                            key={coordinators.name}
                            title={coordinators.name}
                            experience={coordinators.experience}
                            imgSrc={coordinators.imageUrl}
                            position={coordinators.position}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}