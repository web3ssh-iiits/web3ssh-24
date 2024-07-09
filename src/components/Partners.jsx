import { AnimatedTooltip } from './ui/animated-tooltip';
import iiitLogo from '@public/iiits.webp';
import web3sshLogo from '@public/web3ssh.webp';
import gdscLogo from '@public/partners/gdsc-iiitsc-logo.webp';
import iiitiansNetworkLogo from '@public/partners/iiitians-network-logo.webp';
import blockChainedLogo from '@public/partners/blockchained-logo.webp';
import fileCoinLogo from '@public/partners/filecoin-logo.webp';

export default function Partners() {
  return (
    <section className="mt-[50px] mb-[100px] bg-white bg-opacity-0 w-full flex justify-center items-center p-2 font-sans font-medium">
      <div className="max-w-screen-xl px-0  mx-auto  lg:pb-0">

        <div className="h-fit grid grid-cols-1 gap-14 sm:grid-cols-2 sm:gap-5 md:grid-cols-3 text-gray-400">

          <div className='h-fit m-5'>
            <h1 className="text-white text-4xl  text-center mb-5">Organizer</h1>
            <div className="flex w-full h-fit justify-center items-center">
              <a
                className="flex items-center justify-center transform transition duration-300 hover:scale-105 hover:translate-y-2 "
                target="_blank"
              >
                <img src={iiitLogo.src} alt="IIIT Sri City" className="w-[200px] sm:w-[100px] md:w-[150px]" />
              </a>
            </div>
          </div>

          <div className='h-fit m-5'>
            <h1 className="text-white text-4xl text-center mb-5">Sponsors</h1>
            <div className="flex w-full h-fit justify-center items-center">
              <a
                className="flex items-center justify-center transform transition duration-300 hover:scale-105 hover:translate-y-2 "
                target="_blank"
              >
                <img src={fileCoinLogo.src} alt="filecoin" className="w-[250px] lg:w-[250px]" />
              </a>
            </div>
          </div>

          <div className='h-fit m-5'>
            <h1 className="text-white text-4xl text-center  mb-5">Partners</h1>
            <div className="flex flex-wrap w-full h-fit justify-center items-center">
              <a
                className="flex items-center justify-center transform transition duration-300 hover:scale-105 hover:translate-y-2"
                target="_blank"
              >
                <img
                  src={blockChainedLogo.src}
                  alt="Blockchained India"
                  className="w-[250px] lg:w-[250px] fill-gray-400 hover:fill-current"
                />
              </a>
              <a
                className="flex items-center justify-center transform transition duration-300 hover:scale-105 hover:translate-y-2 "
                target="_blank"
              >
                <img src={gdscLogo.src} alt="GDSC" className="w-[300px] lg:w-[200px]" />
              </a>

              <a
                className="flex items-center justify-center transform transition duration-300 hover:scale-105 hover:translate-y-2"
                target="_blank"
              >
                <img
                  src={iiitiansNetworkLogo.src}
                  alt="IIITians Network"
                  className="w-[200px] lg:w-[120px] fill-gray-400 hover:fill-current"
                />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
