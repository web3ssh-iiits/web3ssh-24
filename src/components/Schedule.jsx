'use client';
import { BookIcon, ClipboardIcon, Clock, HammerIcon, UsersIcon } from 'lucide-react';
import React, { useState } from 'react';
import scheduleData from '../data/schedule.json';

const sessionTypes = {
  keynote: {
    icon: <BookIcon className="h-5 w-5" />,
    title: 'Keynote Session',
  },
  theory: {
    icon: <ClipboardIcon className="h-5 w-5" />,
    title: 'Fundamental Theory',
  },
  workshop: {
    icon: <HammerIcon className="h-5 w-5" />,
    title: 'Hands-on Workshop',
  },
  panel: {
    icon: <UsersIcon className="h-5 w-5" />,
    title: 'Panel Discussion',
  },
};

export const Schedule = () => {

  const [activeDate, setActiveDate] = useState('July 29');

  return (
    <section id="schedule" className="mx-auto px-4 md:px-8 max-w-screen-xl py-2 md:py-16 pt-20">
      <div>
        <h1 className="text-center md:text-left font-bold text-4xl md:text-6xl tracking-wide leading-tight">
          <span className="text-white">Schedule</span>
        </h1>
      </div>
      <div className="flex gap-4 md:gap-8 mt-8 justify-start md:justify-around max-w-[90vw] overflow-auto">
        {Object.keys(scheduleData).map((date, index) => (
          <div key={date} onClick={() => setActiveDate(date)}>
            <div className={`ml-2 text-gray-200 text-base md:text-xl font-bold py-2 px-4 bg-gradient-to-l from-gray-900 to-cyan-900 rounded-tl-xl ${activeDate === date ? 'bg-cyan-700' : ''}`}>
              Day {index + 1}
            </div>
            <a href={`#schedule-${date.replace(/ /g, '-')}`} className={`py-3 px-4 w-[170px] text-base md:text-lg tracking-wide inline-block font-semibold text-white ${activeDate === date ? 'bg-[#222]' : ' backdrop-blur-sm bg-black bg-opacity-20'} rounded-tl-lg rounded-bl-lg border-white transition-all duration-300`}>
              <span className="flex items-center justify-center">{date}</span>
            </a>
          </div>
        ))}
      </div>
      <div className="mt-10">
        {scheduleData[activeDate].map((event, index) => (
          <div key={index} className="flex">
            <div className={`flex border-r-2 border-white border-opacity-50 ${event.first ? '' : 'pt-3'} ${event.last ? '' : 'pb-3'}`}>
              <div className="w-32 md:w-48 items-center justify-between flex rounded-l-lg bg-gradient-to-r backdrop-blur-sm bg-black bg-opacity-20">
                <div className="ml-2 md:ml-4">
                  <div className="text-white font-bold text-base md:text-xl">{event.time}</div>
                  <div className="text-gray-100 text-sm md:text-base">{event.date}</div>
                </div>
                <div className="w-2 md:w-4 border-t-2 border-white border-opacity-40"></div>
              </div>
            </div>
            <div className={`backdrop-blur-sm bg-black bg-opacity-20 flex-1 rounded-r-lg ${event.first ? '' : 'mt-3'} ${event.last ? '' : 'mb-3'}`}>
              <div className="flex py-2 md:py-2 px-1 md:px-2 items-center gap-2 md:gap-4 my-4">
                <div className="flex flex-col mx-3 md:mx-0 items-center md:items-start text-center md:text-start">
                  <div className="text-white font-bold text-lg md:text-2xl md:mx-4 my-3">{event.title}</div>
                  <div className="flex flex-wrap w-full items-center md:items-start justify-center md:justify-start gap-3">
                    {event.speakers && event.speakers.map((speaker, idx) => (
                      <div key={idx} className="mt-1 md:mt-2 flex flex-col md:flex-row items-center">
                        <div className="flex items-center justify-center border-2 rounded-full border-white border-opacity-50 w-20 h-20 mx-4 overflow-hidden">
                          <img src={speaker.image} alt="img" className="text-5xl" />
                        </div>
                        <div className=' flex flex-col items-center md:items-start justify-center'>
                          <div className="text-white font-semibold text-base md:text-xl">{speaker.name}</div>
                          <div className="text-gray-100 text-sm md:text-base">{speaker.company}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className=' flex'>
                    {event.sessionType && (<div className='text-white flex items-center gap-1 bg-gray-800 bg-opacity-60 backdrop-blur-sm w-fit p-2 rounded-2xl ml-4 mt-3 border border-white border-opacity-50 '>
                      {sessionTypes[event.sessionType].icon} <h3>{sessionTypes[event.sessionType].title}</h3>
                    </div>)}
                    {event.duration && (<div className='text-white flex items-center gap-1 bg-gray-800 bg-opacity-60 backdrop-blur-sm w-fit p-2 rounded-2xl ml-4 mt-3 border border-white border-opacity-50 '>
                      <Clock /> <h3>{event.duration}</h3>
                    </div>)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
