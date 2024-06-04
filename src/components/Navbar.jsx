import { useGSAP } from '@gsap/react';
import gsap from 'gsap/gsap-core';
import Whatsapp from '../assets/whatsapp.jsx';
import LinkedIn from '../assets/linkedin.jsx';
import Instagram from '../assets/instagram.jsx';
import Twitter from '../assets/x.jsx';

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
    <div className="w-full fixed top-0 flex z-50">
      <div className="disappear w-full right-0 z-10 text-white h-20 border-none flex p-3 justify-between items-center">
        <div className="h-full pl-8 w-full">
          <img
            src="/web3ssh.png"
            alt="Web3SSH logo"
            className="max-h-full h-full"
          />
        </div>
        <div className="hidden sm:flex justify-between gap-6 items-center ">
          <ul className="flex gap-6">
            <li>
              <a
                href="#"
                className="hover:bg-[#AE79FF] transition-colors duration-300 px-3 py-1 rounded-md"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:bg-[#AE79FF] transition-colors duration-300 px-3 py-1 rounded-md"
              >
                Sponsors
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:bg-[#AE79FF] transition-colors duration-300 px-3 py-1 rounded-md"
              >
                Schedule
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:bg-[#AE79FF] transition-colors duration-300 px-3 py-1 rounded-md"
              >
                FAQ
              </a>
            </li>
          </ul>
        </div>
        <div className="flex justify-end items-center gap-6 w-full">
          <ul className="hidden lg:flex gap-6">
            <li>
              <a href="/whatsapp">
                <Whatsapp
                  fill="#fff"
                  width="20px"
                  height="20px"
                  className="hover:fill-[#AE79FF]"
                />
              </a>
            </li>
            {/*L<a href="" />INKED IN IS NOT WORKING FOR SOME GODFORSAKEN REASON*/}
            <li>
              <a
                href="https://www.linkedin.com/company/web3ssh/"
                target="_blank"
              >
                <LinkedIn
                  fill="#fff"
                  width="20px"
                  height="20px"
                  className="hover:fill-[#AE79FF]"
                />
              </a>
            </li>
            <li>
              <a href="https://x.com/web3ssh" target="_blank">
                <Twitter
                  fill="#fff"
                  width="20px"
                  height="20px"
                  className="hover:fill-[#AE79FF]"
                />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/web3ssh/" target="_blank">
                <Instagram
                  fill="#fff"
                  width="20px"
                  height="20px"
                  className="hover:fill-[#AE79FF]"
                />
              </a>
            </li>
          </ul>
          <a href="early-iiits">
            <button
              type="button"
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2"
            >
              Register Now
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
