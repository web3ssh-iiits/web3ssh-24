import 'index.css';

import type { Metadata } from 'next';
import Navbar from '@components/Navbar';
// import { BackgroundGradientAnimation } from '@components/ui/background-gradient-animation';
// it seems that Aceternity ui background gradient makes the page unresponsive to scroll, and no content other than the front page is visible
import GradientBackground from '@components/GradientBackground';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from '@components/Footer';

import { GeistSans } from 'geist/font/sans';




export const metadata: Metadata = {
  title: 'web3ssh',
  description: 'Web 3.0 Summer School & Hackathon',
};

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <head>
        {/* <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        /> */}
      </head>

      <body>
          <div style={{width: "100vw", height: "100vh", position: 'fixed', zIndex: '-10'}}>
          <GradientBackground/>
          </div>
          <div className="relative z-10">
            <Navbar />
            <div id="root">{children}</div>
            <Footer />
        </div>
      </body>
    </html>
  );
}
