import React, { useRef, useState, useLayoutEffect, useMemo } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import data from '../data/keyComponents.json'; // Importing the JSON data directly

gsap.registerPlugin(ScrollTrigger);

const KeyComponents = () => {
    const horContainer = useRef(null);
    const horText = useRef(null);

    useLayoutEffect(() => {
        const context = gsap.context(() => {
            let sections = gsap.utils.toArray(horText.current.children);

            gsap.to(sections, {
                xPercent: -100 * (sections.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: horContainer.current,
                    pin: true,
                    scrub: 1,
                    end: () => "+=" + horContainer.current.offsetWidth
                }
            });
        });

        return () => {
            context.revert();
        };
    }, [data]);

    return (
        <section ref={horContainer} className="flex w-screen min-h-screen bg-gray-950/40 text-gray-300 flex-col border-b-2">
            <div className='w-screen h-[300px] flex items-center justify-center border-b-2 text-7xl backdrop-blur-md'>
                Key Components
            </div>
            <div className='w-full  flex h-[calc(100vh-300px)] overflow-x-hidden '>
                <div ref={horText} className='flex h-full'>
                    {data.map((content, index) => (
                        <div key={index} className="h-full w-screen flex items-center justify-center px-8 border-x text-2xl backdrop-blur-sm">
                            <div>
                                <h2 className="text-4xl mb-4">{content.title}</h2>
                                <p>{content.text}</p>
                                {content.logoUrl && <img src={content.logoUrl} alt={content.title} className="mt-4" />}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default KeyComponents;
