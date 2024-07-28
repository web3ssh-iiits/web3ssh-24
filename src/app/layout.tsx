import 'index.css';
import './global.css';

import type { Metadata } from 'next';
import GradientBackground from '@components/GradientBackground';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from '@components/Footer';
import dynamic from 'next/dynamic';
import { GeistSans } from 'geist/font/sans';

import defaultLinkPreview from '@public/link_preview.png';

const Navbar = dynamic(() => import('@components/Navbar'), { ssr: false });

export const metadata: Metadata = {
  title: 'web3ssh',
  description:
    'Web 3.0 Summer School & Hackathon. Organized by IIIT SriCity. Learn Web3.0 technologies and build decentralized applications.',
  metadataBase: new URL('https://web3ssh.dev/'),
  openGraph: {
    title: 'web3ssh',
    description:
      'Web 3.0 Summer School & Hackathon. Organized by IIIT SriCity. Learn Web 3.0 technologies and build decentralized applications.',
    type: 'website',
    url: 'https://web3ssh.dev/',
    images: [
      {
        url: defaultLinkPreview.src,
        width: 2425,
        height: 1365,
        alt: 'web3ssh',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'web3ssh',
    description:
      'Web 3.0 Summer School & Hackathon. Organized by IIIT SriCity. Learn Web 3.0 technologies and build decentralized applications.',
    images: [defaultLinkPreview.src],
  },
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Exo:ital,wght@0,100..900;1,100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/icons/favicon.ico" type="image/x-icon" />
        <script src="https://cdn.tailwindcss.com"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"></script>
      </head>

      <body>
        <GradientBackground />
        <div className="relative z-10">
          <Navbar />
          <div id="root">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
