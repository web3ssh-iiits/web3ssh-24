import gdscLogo from '@public/partners/gdsc_iiitsc.webp';
import iiitiansNetworkLogo from '@public/partners/iiitians_network.webp';
import { AnimatedTooltip } from './ui/animated-tooltip';
import iiitLogo from '@public/iiits.webp';
import web3sshLogo from '@public/web3ssh.webp';
import blockChainedLogo from '@public/partners/blockchained.webp';

export default function Partners() {
  return (
    <section className="mb-[120px] bg-white bg-opacity-0 w-full flex justify-center items-center p-2 lg:mb-[200px] font-sans font-medium">
      <div className="max-w-screen-xl px-0  mx-auto  lg:pb-0">
        {/* <AnimatedTooltip items={logos} /> */}
        <div className="grid grid-cols-1 gap-14 sm:gap-5 sm:grid-cols-1 text-gray-400">
          <h1 className="text-white text-4xl md:text-6xl mb-0  text-center">Organizer</h1>
          <div className="grid grid-cols-1 gap-5 sm:gap-5 sm:grid-cols-1 text-gray-400">
            <a
              className="flex items-center justify-center transform transition duration-300 hover:scale-105 hover:translate-y-2 "
              target="_blank"
            >
              <img src={iiitLogo.src} alt="IIIT Sri City" className="w-[40%] lg:w-[20%]" />
            </a>
            {/* <a
              className="flex items-center justify-center transform transition duration-300 hover:scale-105 hover:translate-y-2 "
              target="_blank"
            >
              <img src={web3sshLogo.src} alt="Web3ssh" className="w-[80%] lg:w-[30%]" />
            </a> */}
          </div>
          <h1 className="text-white text-4xl md:text-6xl text-center lg:mt-20">Partners</h1>
          <div className="grid grid-cols-1 gap-5 sm:gap-5 sm:grid-cols-2 text-gray-400">
            <a
              className="flex items-center justify-center transform transition duration-300 hover:scale-105 hover:translate-y-2"
              target="_blank"
            >
              <img
                src={blockChainedLogo.src}
                alt="Blockchained India"
                className="w-[60%] lg:w-[80%] fill-gray-400 hover:fill-current"
              />
              </a>
            <a
              className="flex items-center justify-center transform transition duration-300 hover:scale-105 hover:translate-y-2 "
              target="_blank"
            >
              <img src={gdscLogo.src} alt="GDSC" className="w-[100%] lg:w-[100%]" />
            </a>

            <a
              className="flex items-center justify-center transform transition duration-300 hover:scale-105 hover:translate-y-2"
              target="_blank"
            >
              <img
                src={iiitiansNetworkLogo.src}
                alt="IIITians Network"
                className="w-[60%] lg:w-[40%] fill-gray-400 hover:fill-current"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
