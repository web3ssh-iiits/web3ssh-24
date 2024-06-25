'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap/gsap-core';
import { Linkedin, X, Instagram } from 'lucide-react';
import navData from '@data/nav.json';
import Image from 'next/image';
import web3sshLogo from '@public/web3ssh.png';

export default function Navbar() {
  useGSAP(() => {
    let mm = gsap.matchMedia();
    mm.add('(min-width: 800px)', () => {
      gsap.to('.disappear', {
        scrollTrigger: {
          trigger: '.disappear',
          start: 'top top',
          end: 'top+=1 top',
          scrub: 1,
          // markers: true,
        },
        margin: '20 90',
        backgroundColor: 'rgba(0, 0, 0, 0.61)',
        borderRadius: '20px',
        backdropFilter: 'blur(5px)',
      });
    });
  });
  return (
    <div className="w-full fixed top-0 flex z-50 text-2xl">
      <div className="disappear w-full right-0 z-10 text-white h-20 border-none flex p-3 justify-between items-center">
        <div className="h-full pl-8 w-full">
          <Image
            src={web3sshLogo.src}
            alt="Web3SSH logo"
            width={70}
            height={20}
            className="max-h-full h-full"
          />
        </div>
        <div className="hidden sm:flex justify-between gap-6 items-center">
          <ul className="flex gap-6">
            {navData.map((item, index) => (
              <li key={index}>
                <a
                  href={item.url}
                  className=" transition-colors duration-300 px-3 py-1 rounded-md cursor-pointer hover:font-semibold hover:scale-125 hover:-translate-y-1"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-end items-center gap-6 w-full">
          <ul className="hidden lg:flex gap-6">
            <li>
              <a
                href="https://www.linkedin.com/company/web3ssh/"
                target="_blank"
              >
                <Linkedin />
              </a>
            </li>
            <li>
              <a href="https://x.com/web3ssh" target="_blank">
                <X />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/web3ssh/" target="_blank">
                <Instagram />
              </a>
            </li>
          </ul>
          <a href="/register">
            <button
              type="button"
              className="hidden lg:block text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg  sm:text-xl px-5 py-2.5 text-center me-2"
            >
              Register Now
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
