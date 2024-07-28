import { AnimatedTooltip } from './ui/animated-tooltip';
import iiitLogo from '@public/iiits.webp';
import web3sshLogo from '@public/web3ssh.webp';
import fileCoinLogo from '@public/partners/filecoin-logo.webp';
import polygonLogo from '@public/partners/polygon_logo.svg';
import ethIndiaLogo from '@public/partners/ethindia_logo.png';

import quillAuditsLogo from '@public/partners/quillaudits_logo.webp';
import blockChainedLogo from '@public/partners/blockchained_logo.webp';
import gdscLogo from '@public/partners/gdsc_iiitsc_logo.webp';
import iiitiansNetworkLogo from '@public/partners/iiitans_network_logo.webp';


export default function Partners() {
  const sponsors = [
    // {
    //   name: 'Filecoin',
    //   logo: fileCoinLogo,
    //   link: 'https://filecoin.io/',
    // },
    {
      name: 'Polygon',
      logo: polygonLogo,
      link: 'https://polygon.technology/',
    },
    {
      name: 'Ethereum India',
      logo: ethIndiaLogo,
      link: 'https://ethereumindia.org/',
    },
  ]

  const partners = [
    {
      name: 'Blockchained India',
      logo: blockChainedLogo,
      link: 'https://blockchainedindia.com/',
      type: 'Ecosystem Partner'
    },

    {
      name: 'QuillAudits',
      logo: quillAuditsLogo,
      link: 'https://quillaudits.com/',
      type: 'Security Partner'
    },
    {
      name: 'IIITians Network',
      logo: iiitiansNetworkLogo,
      link: 'https://iiitiansnetwork.com/',
      type: 'Community Partner'
    },
    {
      name: 'GDSC IIIT Sri City',
      logo: gdscLogo,
      link: 'https://gdsc.community.dev/iiit-sri-city/',
      type: 'Event Partner'
    },
  ];
  return (
    <section className="mt-[50px] mb-[100px] bg-white bg-opacity-0 w-full flex justify-center items-center p-2 font-sans font-medium">
      <div className="w-full max-w-[1800px] lg:pb-0">

        <div className="w-full h-fit grid grid-cols-1 gap-14 sm:grid-cols-2 sm:gap-5 md:grid-cols-2 text-gray-400">

          {/* <div className='h-fit m-5'>
            <h1 className="text-white text-4xl  text-center mb-5">Organizer</h1>
            <div className="flex w-full h-fit justify-center items-center">
              <a
                className="flex items-center justify-center transform transition duration-300 hover:scale-105 hover:translate-y-2 "
                target="_blank"
              >
                <img src={iiitLogo.src} alt="IIIT Sri City" className="w-[200px] sm:w-[100px] md:w-[150px]" />
              </a>
            </div>
          </div> */}

          <div className='w-full h-fit space-y-6'>
            <h1 className="text-white text-4xl text-center mb-5">Sponsors</h1>
            <a
              className="p-4 flex items-center justify-center transform transition duration-300 hover:scale-105 hover:translate-y-2"
              target="_blank"
              href="https://filecoin.io/"
            >
              <img src={fileCoinLogo.src} alt='Filecoin' className="w-[160px] h-[auto] sm:h-[50px] md:w-[160px] md:h-[auto]" />
            </a>
            <div className="flex w-full h-fit justify-center items-center flex-wrap" >
              {sponsors.map((sponsor, index) => (
                <a
                  key={index}
                  className="p-4 flex items-center justify-center transform transition duration-300 hover:scale-105 hover:translate-y-2"
                  target="_blank"
                  href={sponsor.link}
                >
                  <img src={sponsor.logo.src} alt={sponsor.name} className="w-[160px] h-[auto] sm:h-[50px] md:w-[160px] md:h-[auto]" />
                </a>
              )
              )}
            </div>
          </div>

          <div className='w-full h-fit space-y-6'>
            <h1 className="text-white text-4xl text-center mb-5">Partners</h1>
            <div className="flex w-full h-fit justify-center items-stretch flex-wrap" >
              {partners.map((sponsor, index) => (
                <a
                  key={index}
                  className="p-4 flex flex-col items-center justify-center transform transition duration-300 hover:scale-105 hover:translate-y-2 cursor-pointer"
                  target="_blank"
                >
                  <div className='h-[120px] flex justify-center items-center'>
                    <img src={sponsor.logo.src} alt={sponsor.name} className="w-[160px] h-[auto] sm:h-[50px] md:w-[160px] md:h-[auto]" />
                  </div>
                  <div className='text-white text-xl'>{sponsor.type}</div>
                </a>
              )
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
