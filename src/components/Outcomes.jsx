import React, { useRef, useState, useLayoutEffect, useMemo } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Outcomes = () => {
    const container = useRef(null);
    const text = useRef(null);
    const horContainer = useRef(null);
    const horText = useRef(null);

    const data = useMemo(() => [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ut vero eveniet! Quas impedit corrupti consectetur officia vitae placeat! Voluptas inventore nam rem est iusto sunt quibusdam, similique eum dolorem.',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis expedita numquam sequi deleniti, rem modi ut, culpa itaque dignissimos eveniet fugiat in dolores non sit dolorum. Neque in ipsum corporis.',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis expedita numquam sequi deleniti, rem modi ut, culpa itaque dignissimos eveniet fugiat in dolores non sit dolorum. Neque in ipsum corporis.',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis expedita numquam sequi deleniti, rem modi ut, culpa itaque dignissimos eveniet fugiat in dolores non sit dolorum. Neque in ipsum corporis.',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis expedita numquam sequi deleniti, rem modi ut, culpa itaque dignissimos eveniet fugiat in dolores non sit dolorum. Neque in ipsum corporis.',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis expedita numquam sequi deleniti, rem modi ut, culpa itaque dignissimos eveniet fugiat in dolores non sit dolorum. Neque in ipsum corporis.',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis expedita numquam sequi deleniti, rem modi ut, culpa itaque dignissimos eveniet fugiat in dolores non sit dolorum. Neque in ipsum corporis.',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis expedita numquam sequi deleniti, rem modi ut, culpa itaque dignissimos eveniet fugiat in dolores non sit dolorum. Neque in ipsum corporis.',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis expedita numquam sequi deleniti, rem modi ut, culpa itaque dignissimos eveniet fugiat in dolores non sit dolorum. Neque in ipsum corporis.',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis expedita numquam sequi deleniti, rem modi ut, culpa itaque dignissimos eveniet fugiat in dolores non sit dolorum. Neque in ipsum corporis.'
    ], []);

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
            if ((window.innerWidth < 768)) {

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
            }
        });

        return () => {
            context.revert();
        };
    }, [data]);


    return (
        <>
            {(window.innerWidth >= 768) && (<section className="flex w-screen min-h-screen bg-gray-950/40 text-gray-300" ref={container}>
                <div className='w-1/2 h-screen flex items-center justify-center border-r-2 text-7xl backdrop-blur-md' ref={text}>
                    Outcomes
                </div>
                <div className='w-1/2 my-[100px]'>
                    {data.map((content, index) => (
                        <div key={index} className={`min-h-[300px] flex items-center justify-center content-div py-4 px-8 border-y text-2xl backdrop-blur-sm`}>
                            {content}
                        </div>
                    ))}
                </div>
            </section>)}
            {(window.innerWidth < 768) && (<section ref={horContainer} className="flex w-screen min-h-screen bg-gray-950/40 text-gray-300 flex-col border-b-2">
                <div className='w-screen h-[200px] flex items-center justify-center border-b-2 text-7xl backdrop-blur-md'>
                    Outcomes
                </div>
                <div className='w-full px-[100px] flex h-[calc(100vh-200px)] overflow-x-hidden '>
                    <div ref={horText} className='flex h-full'>
                        {data.map((content, index) => (
                            <div key={index} className="h-full min-w-[300px] flex items-center justify-center px-8 border-x text-2xl backdrop-blur-sm">
                                {content}
                            </div>
                        ))}
                    </div>
                </div>
            </section>)}


        </>
    );
};

export default Outcomes;
