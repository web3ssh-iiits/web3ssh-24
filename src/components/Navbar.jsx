'use client';
import { useState, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap/gsap-core';
import Linkedin from '@public/icons/linkedin.svg';
import XIcon from '@public/icons/x-logo.svg';
import Instagram from '@public/icons/instagram.svg';
import navData from '@data/nav.json';
import Image from 'next/image';
import web3sshLogo from '@public/web3ssh.webp';
import iiitLogo from '@public/iiits.webp';

export default function Navbar() {
  const [topbarPosition, setTopbarPosition] = useState("0");
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      let currentScrollY = window.scrollY;
      if (currentScrollY < 0) {
        currentScrollY = 0;
      }
      if (document.documentElement.scrollHeight === window.innerHeight) {
        setTopbarPosition("0");
      } else if (currentScrollY >= document.documentElement.scrollHeight - window.innerHeight) {
        setTopbarPosition("-100px");
      } else {
        setTopbarPosition(currentScrollY > lastScrollY ? "-100px" : "0");
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const containerStyle = {
    position: "fixed",
    top: topbarPosition,
    width: 'calc(100vw - 100px)',
    left: '50px',
    marginTop: '20px',
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    transition: "top 0.5s ease-in-out",
    // overflow: "hidden",
    backgroundColor: 'rgba(0, 0, 0, 0.3)', 
    borderRadius: '20px', 
    backdropFilter: 'blur(10px)',

  };

  const socialIconStyle = {
    height: '30px',
    borderRadius: '5px',
  }

  return (
    <div className="w-full h-[60px] top-0 flex z-50 text-2xl">
      
      <div style={containerStyle} className="z-50 text-white  border-none flex justify-between items-center">
        <div className="min-w-fit h-[60px] w-full pl-10 flex justify-start items-center" >
          <img src={web3sshLogo.src} alt="Web3SSH logo" style={{ height: '50px' }} onClick={()=>(window.location.href='/')}/>
        </div>
        
        <div className="hidden sm:flex justify-between gap-6 items-center">
          <ul className="flex lg:gap-6 sm:gap-2">
            {navData.map((item, index) => (
              <li key={index}>
                <a
                  href={item.url}
                  className="text-lg lg:text-2xl px-1 py-1 rounded-md cursor-pointer hover:font-semibold hover:scale-125 hover:-translate-y-1"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex w-full min-w-fit h-full mr-0 justify-center items-center" >
          <ul className=" w-fit hidden lg:flex justify-center items-center mx-5 lg:gap-5 md:gap-1 gap-6" >
            <li>
              <a
                href="https://www.linkedin.com/company/web3ssh/"
                target="_blank"
              >
                <img style={socialIconStyle} src={Linkedin.src} alt="Linkedin" />
              </a>
            </li>
            <li>
              <a href="https://x.com/web3ssh" target="_blank">
              <img style={socialIconStyle} src={XIcon.src} alt="Linkedin" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/web3ssh/" target="_blank">
              <img style={socialIconStyle} src={Instagram.src} alt="Linkedin" />
              </a>
            </li>
          </ul>

          <a href="/register" className=' sm:w-20 md:w-3/4 lg:w-fit  flex justify-center lg:justify-center'>
            <button
              type="button"
            className="text-center text-sm lg:block text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg px-5 py-2.5 "
            >
              Register Now
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
