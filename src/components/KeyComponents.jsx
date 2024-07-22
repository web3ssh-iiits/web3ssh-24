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
      let totalWidth = horContainer.current.scrollWidth - horContainer.current.clientWidth;

      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: horContainer.current,
          pin: true,
          scrub: 5,
          end: () => '+=' + (totalWidth + window.innerWidth / 2), // Extend the scroll duration
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
      className="flex w-screen h-screen text-gray-300 flex-col mb-[120px] pt-24"
    >
      <div className="w-screen h-fit mb-40 flex items-center justify-center text-4xl md:text-6xl font-sans font-medium">
        Key Components
      </div>
      <div className="w-full flex h-[calc(100vh-300px)] overflow-x-hidden">
        <div ref={horText} className="flex h-full">
          {data.map((content, index) => (
            <div
              key={index}
              className="group h-[400px] w-screen lg:w-[420px] mx-2 flex flex-col flex-nowrap overflow-hidden gap-5 items-center justify-evenly px-8 pt-4 text-2xl backdrop-blur-sm bg-black bg-opacity-20"
              style={{ borderRadius: '20px'}}
            >
              {content.graphics && (
                <CardContainer className="relative inline-block overflow-hidden rounded-xl text-sm font-medium  transition-all">
                  <CardItem translateZ={100} translateX={10} translateY={10}>
                    <img
                      src={content.graphics}
                      alt={content.title}
                      className="w-[300px] h-[200px] lg:w-[200px] lg:h-[200px] object-cover rounded-xl"
                    />
                  </CardItem>
                </CardContainer>
              )}
              <div className="h-full text-left">
                <h2 className="text-3xl lg:text-4xl font-sans font-semibold lg:mb-4 mb-5">
                  {content.title}
                </h2>
                <p className="mb-4 text-xl font-sans font-normal">{content.text}</p>
              </div>
            </div>
          ))}
          {/* Buffer section to extend the horizontal scroll */}
          {/* <div className="h-full w-screen lg:w-[600px] flex items-center justify-center px-8 border-x text-2xl backdrop-blur-sm bg-black bg-opacity-70">
            <div className="text-left">
              <h2 className="sm:text-6xl font-bold lg:mb-16 mb-2">End of Cards</h2>
              <p className="mb-4 sm:text-4xl">This is the end buffer section.</p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default KeyComponents;