import gdscLogo from '@public/partners/gdsc_iiitsc.svg';
import iiitiansNetworkLogo from '@public/partners/iiitians_network.svg';

export default function Partners() {
  return (
    <section className=" bg-white bg-opacity-0 w-full flex justify-center items-center p-8">
      <div className="max-w-screen-xl px-4  mx-auto pb-48 sm:pb-0">
        <div className="grid grid-cols-1 gap-1 sm:gap-12 sm:grid-cols-2 text-gray-400">
          <a
            className="flex items-center justify-center transform transition duration-300 hover:scale-105 hover:translate-y-2 grayscale hover:grayscale-0"
            target="_blank"
          >
            <img src={gdscLogo.src} alt="GDSC" className="w-[950px] " />
          </a>
          <a
            className="flex items-center justify-center transform transition duration-300 hover:scale-105 hover:translate-y-2 grayscale hover:grayscale-0"
            target="_blank"
          >
            <img
              src={iiitiansNetworkLogo.src}
              alt="IIITians Network"
              className="w-[260px] fill-gray-400 hover:fill-current"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
