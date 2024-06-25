'use client';

import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import data from '../data/keyComponents.json'; // Importing the JSON data directly
import { CardBody, CardContainer, CardItem } from './ui/3d-card';

gsap.registerPlugin(ScrollTrigger);

const KeyComponents = () => {
  const horContainer = useRef(null);
  const horText = useRef(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
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
    });

    return () => {
      context.revert();
    };
  }, [data]);

  return (
    <section
      ref={horContainer}
      className="flex w-screen h-screen  text-gray-300 flex-col border-b-2 my-8 "
    >
      <div className="w-screen h-[300px] flex items-center justify-center border-b-2 sm:text-7xl text-5xl font-bold backdrop-blur-md">
        Key Components
      </div>
      <div className="w-full flex h-[calc(100vh-300px)] overflow-x-hidden ">
        <div ref={horText} className="flex h-full">
          {data.map((content, index) => (
            <div
              key={index}
              className="group h-full w-screen flex flex-wrap lg:flex-nowrap overflow-hidden gap-5 items-center justify-evenly px-8 border-x text-2xl backdrop-blur-sm bg-black bg-opacity-70"
            >
              {content.graphics && (
                <CardContainer className="relative inline-block overflow-hidden rounded-xl px-8 py-3 text-sm font-medium bg-gray-900/30 group-hover:bg-white/70 transition-all duration-500 delay-100">
                  <span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-white/70 transition-all duration-200 group-hover:w-full"></span>
                  <span className="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-white/70 transition-all duration-200 group-hover:h-full"></span>
                  <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-white/70 transition-all duration-200 group-hover:w-full"></span>
                  <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-white/70 transition-all duration-200 group-hover:h-full"></span>

                  <CardItem translateZ={100} translateX={10} translateY={10}>
                    <img
                      src={content.graphics}
                      alt={content.title}
                      className="  lg:w-[325px] lg:h-[283px] w-[150px] h-[150px]"
                    />
                  </CardItem>
                </CardContainer>
              )}
              <div className=" text-left">
                <h2 className="sm:text-6xl font-bold lg:mb-16 mb-2">
                  {content.title}
                </h2>
                <p className="mb-4 sm:text-4xl">{content.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyComponents;
