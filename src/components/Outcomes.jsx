import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import data from '../data/outcomes.json'; // Importing the JSON data directly

gsap.registerPlugin(ScrollTrigger);

const Outcomes = () => {
  const container = useRef(null);
  const text = useRef(null);
  const horContainer = useRef(null);
  const horText = useRef(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      // Pin the text element
      gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
          pin: text.current,
        },
      });

      // Pin the horizontal container
      if (window.innerWidth < 768) {
        let sections = gsap.utils.toArray(horText.current.children);

        gsap.to(sections, {
          xPercent: -100 * (sections.length - 1),
          ease: 'none',
          scrollTrigger: {
            trigger: horContainer.current,
            pin: true,
            scrub: 1,
            end: () => '+=' + horContainer.current.offsetWidth,
          },
        });
      }
    });

    return () => {
      context.revert();
    };
  }, [data]);

  return (
    <>
      {window.innerWidth >= 768 && (
        <section
          className="flex w-screen mx-auto min-h-screen bg-gray-950/40 text-gray-300 overflow-hidden my-8"
          ref={container}
        >
          <div
            className="w-1/3 h-screen flex items-center justify-center border-r-2 text-7xl backdrop-blur-md"
            ref={text}
          >
            Outcomes
          </div>
          <div className="w-2/3 my-[100px]">
            {data.map((content, index) => (
              <div
                key={index}
                className="group min-h-[300px] flex w-full items-center justify-start gap-4 content-div py-48 px-8 border-y text-2xl backdrop-blur-sm"
              >
                {/* 6250 × 4830 */}
                {content.graphics && (
                  <div className="relative inline-block overflow-hidden rounded-xl px-8 py-3 text-sm font-medium bg-gray-900/30  group-hover:bg-white/70 transition-all duration-500 delay-100 mx-8">
                    <span className="ease absolute left-0 top-0 h-0 w-0 transition-all duration-200 group-hover:w-full"></span>
                    <span className="ease absolute right-0 top-0 h-0 w-0 transition-all duration-200 group-hover:h-full"></span>
                    <span className="ease absolute bottom-0 right-0 h-0 w-0 transition-all duration-200 group-hover:w-full"></span>
                    <span className="ease absolute bottom-0 left-0 h-0 w-0  transition-all duration-200 group-hover:h-full"></span>
                    <img
                      src={content.graphics}
                      alt={content.title}
                      className=" w-[312.5px] h-[241.5px] mx-4 "
                    />
                  </div>
                )}
                <div className=" text-left max-w-[630px]">
                  <h2 className="text-4xl font-bold mb-4">{content.title}</h2>
                  <p className="mb-4">{content.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
      {window.innerWidth < 768 && (
        <section
          ref={horContainer}
          className="flex w-screen min-h-screen bg-gray-950/40 text-gray-300 flex-col border-b-2"
        >
          <div className="w-screen h-[200px] flex items-center justify-center border-b-2 text-7xl backdrop-blur-md">
            Outcomes
          </div>
          <div className="w-full px-[100px] flex h-[calc(100vh-200px)] overflow-x-hidden">
            <div ref={horText} className="flex h-full">
              {data.map((content, index) => (
                <div
                  key={index}
                  className="group h-full min-w-[300px] flex flex-col items-center justify-evenly px-8 border-x text-2xl backdrop-blur-sm"
                >
                  {content.graphics && (
                    <div className="relative inline-block overflow-hidden rounded-xl px-8 py-3 text-sm font-medium bg-gray-900/30 transition-all duration-500 delay-100">
                      <span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-white/70 transition-all duration-200 group-hover:w-full"></span>
                      <span className="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-white/70 transition-all duration-200 group-hover:h-full"></span>
                      <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-white/70 transition-all duration-200 group-hover:w-full"></span>
                      <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-white/70 transition-all duration-200 group-hover:h-full"></span>
                      <img
                        src={content.graphics}
                        alt={content.title}
                        className=" w-[150px] h-[150px] "
                      />
                    </div>
                  )}
                  <div className=" text-left max-w-[630px]">
                    <h2 className="text-4xl font-bold mb-4">{content.title}</h2>
                    <p className="mb-4">{content.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Outcomes;
