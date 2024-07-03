'use client';

import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import data from '../data/outcomes.json';
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
            scrub: 4,
            end: () => '+=' + horContainer.current.offsetWidth,
          },
        });
      }
    });
    return () => {
      context.revert();
    };
  }, [data]);
  const lg = window.innerWidth > 768;
  const textRefProps = lg ? { ref: text } : {};
  const horTextRefProps = !lg ? { ref: horText } : {};
  return (
    <>
      <section
        className={`flex w-screen mx-auto min-h-screen bg-gray-900 bg-opacity-90 text-gray-300 overflow-hidden my-8 pt-10 ${!lg && 'flex-col'}`}
        ref={lg ? container : horContainer}
      >
        <div
          className={`flex items-center justify-center    backdrop-blur-md text-center ${lg ? 'w-1/2 h-screen text-7xl' : 'w-screen max-h-48 pb-4 mb-8 text-4xl'}`}
          {...textRefProps}
        >
          web3ssh outcomes {<br />}
          include
        </div>
        <div
          className={`${lg ? 'w-1/2 my-[100px]' : 'flex h-full'}`}
          {...horTextRefProps}
        >
          {data.map((content, index) => (
            <div
              key={index}
              className={`${lg ? 'min-h-[30px] justify-start ' : 'flex-col min-w-full justify-evenly'} group  flex w-full items-center  gap-4 content-div py-16 px-8 text-2xl backdrop-blur-sm ${index == 0 && lg && 'mt-64'} ${index == data.length - 1 && lg && 'mb-64'}`}
            >
              {/* 6250 × 4830 */}
              {content.graphics && (
                <div className="relative inline-block overflow-hidden rounded-xl px-8 py-3 text-sm font-medium bg-gray-900/30  group-hover:bg-white/70 transition-all duration-500 delay-100 mx-8">
                  <img
                    src={content.graphics}
                    alt={content.title}
                    className=" w-[312.5px] h-[241.5px] mx-4 "
                  />
                </div>
              )}
              <div className="text-left ">
                <h2 className="text-4xl font-bold mb-4">{content.title}</h2>
                <p className="mb-4">{content.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Outcomes;
