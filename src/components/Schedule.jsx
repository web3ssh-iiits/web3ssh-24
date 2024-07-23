'use client';
import React, { useState } from 'react';

export const Schedule = () => {

  const [activeDay, setActiveDay] = useState(1);

  const scheduleData = {
    1: [
      { time: '09:00 AM IST', date: 'July 04', title: 'Welcome Note', speakers: [], first: true },
      { time: '09:30 AM IST', date: 'July 04', title: 'Designing for design: API decisions for long-term success', speakers: [{ name: 'Naman Goel', company: 'StyleX Maintainer, Meta', image: 'https://api.dicebear.com/7.x/bottts/png' }] },
      { time: '10:05 AM IST', date: 'July 04', title: 'Making sense of new React server-side features', speakers: [{ name: 'Riddhi Krishna', company: 'React Team, Meta', image: 'https://api.dicebear.com/7.x/bottts/png' }] },
      { time: '10:35 AM IST', date: 'July 04', title: 'Keynote', speakers: [{ name: 'Nate Moore', company: 'React Team, Meta', image: 'https://api.dicebear.com/7.x/bottts/png' }] },
      { time: '11:05 AM IST', date: 'July 04', title: 'Just enough React', speakers: [{ name: 'Andrew Clark', company: 'React Team, Meta', image: 'https://api.dicebear.com/7.x/bottts/png' }] },
      { time: '11:35 AM IST', date: 'July 04', title: 'Panel: UI/UX Innovations', speakers: [{ name: 'Speaker 1', company: 'Company 1', image: 'https://api.dicebear.com/7.x/bottts/png' }, { name: 'Speaker 2', company: 'Company 2', image: 'https://api.dicebear.com/7.x/bottts/png' }] },
      { time: '12:30 PM IST', date: 'July 04', title: 'Conclusion', speakers: [], last: true }
    ],
    2: [
      { time: '09:00 AM IST', date: 'July 05', title: 'Opening Keynote', speakers: [], first: true },
      { time: '09:30 AM IST', date: 'July 05', title: 'State Management in React', speakers: [{ name: 'Dan Abramov', company: 'React Team, Meta', image: 'https://api.dicebear.com/7.x/bottts/png' }] },
      { time: '10:05 AM IST', date: 'July 05', title: 'Concurrent Mode in React', speakers: [{ name: 'Sebastian Markbåge', company: 'React Team, Meta', image: 'https://api.dicebear.com/7.x/bottts/png' }] },
      { time: '10:35 AM IST', date: 'July 05', title: 'Performance Optimization', speakers: [{ name: 'Paul Irish', company: 'Google', image: 'https://api.dicebear.com/7.x/bottts/png' }] },
      { time: '11:05 AM IST', date: 'July 05', title: 'Advanced Hooks', speakers: [{ name: 'Ryan Florence', company: 'Remix', image: 'https://api.dicebear.com/7.x/bottts/png' }] },
      { time: '11:35 AM IST', date: 'July 05', title: 'Panel: Future of Web Development', speakers: [{ name: 'Speaker 1', company: 'Company 1', image: 'https://api.dicebear.com/7.x/bottts/png' }, { name: 'Speaker 2', company: 'Company 2', image: 'https://api.dicebear.com/7.x/bottts/png' }] },
      { time: '12:30 PM IST', date: 'July 05', title: 'Closing Remarks', speakers: [], last: true }
    ]
  };

  return (
    <section id="schedule" className="mx-auto px-4 md:px-8 max-w-screen-xl py-2 md:py-16 pt-20">
      <div>
        <h1 className="text-center md:text-left font-bold text-4xl md:text-6xl tracking-wide leading-tight">
          <span className="text-white">Schedule</span> <span className="text-cyan-500"></span>
        </h1>
      </div>
      <div className="flex gap-4 md:gap-8 mt-8 justify-center md:justify-start">
        {Object.keys(scheduleData).map(day => (
          <div key={day} onClick={() => setActiveDay(day)}>
            <div className={`ml-2 text-cyan-500 text-base md:text-xl font-bold py-2 px-4 bg-gradient-to-l from-gray-900 to-cyan-900 rounded-tl-xl ${activeDay == day ? 'bg-cyan-700' : ''}`}>
              Day {day}
            </div>
            <a href={`#schedule-day${day}`} className={`py-3 px-4 text-base md:text-xl tracking-wide inline-block font-semibold ${activeDay == day ? 'bg-cyan-500 text-gray-900' : 'text-cyan-500 border-2'} rounded-lg border-white`}>
              <span className="flex items-center justify-center">July 0{day}, 2024</span>
            </a>
          </div>
        ))}
      </div>
      <div className="mt-10">
        {scheduleData[activeDay].map((event, index) => (
          <div key={index} className="flex">
            <div className={`flex border-r-2 border-white border-opacity-50 ${event.first ? '' : 'pt-3'} ${event.last ? '' : 'pb-3'}`}>
              <div className="w-32 md:w-48 items-center justify-between flex rounded-l-lg bg-gradient-to-r backdrop-blur-sm bg-black bg-opacity-20">
                <div className="ml-2 md:ml-4">
                  <div className="text-cyan-500 font-bold text-base md:text-xl">{event.time}</div>
                  <div className="text-gray-100 text-sm md:text-base">{event.date}</div>
                </div>
                <div className="w-2 md:w-4 border-t-2 border-white border-opacity-40"></div>
              </div>
            </div>
            <div className={`backdrop-blur-sm bg-black bg-opacity-20 flex-1 rounded-r-lg ${event.first ? '' : 'mt-3'} ${event.last ? '' : 'mb-3'}`}>
              <div className="flex py-2 md:py-2 px-1 md:px-2 items-center gap-2 md:gap-4 my-4">

                <div className="flex-1 mx-3 md:mx-0">
                  <div className="text-white font-bold text-lg md:text-2xl md:mx-4 md:my-3">{event.title}</div>
                  <div className="flex  gap-3">
                    {event.speakers.map((speaker, idx) => (
                      <div key={idx} className="mt-1 md:mt-2 flex flex-wrap">
                        <div className="hidden md:flex items-center justify-center border-2 rounded-full border-white border-opacity-50 p-4 w-20 h-20 mx-4">

                          <img src={speaker.image} alt="img" className="text-5xl" />
                        </div>
                        <div className=' flex flex-col  justify-center' >

                          <div className="text-cyan-500 font-semibold text-base md:text-xl">{speaker.name}</div>
                          <div className="text-gray-100 text-sm md:text-base">{speaker.company}</div>
                        </div>
                      </div>
                    ))}
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
