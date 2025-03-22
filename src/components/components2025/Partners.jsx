import { AnimatedTooltip } from '../ui/animated-tooltip';

export default function Partners() {
  return (
    <section className="mt-[50px] mb-[100px] bg-white bg-opacity-0 w-full flex justify-center items-center p-2 font-sans font-medium">
      <div className="w-full lg:pb-0">
        <div className="w-full h-fit grid grid-cols-1 gap-14 sm:grid-cols-2 sm:gap-5 md:grid-cols-2 text-gray-400">
          {/* Sponsors Section */}
          <div className="w-full h-fit space-y-6">
            <h1 className="text-white text-4xl text-center mb-5">Sponsors</h1>
            <div className="flex w-full h-fit justify-center items-center flex-wrap">
              <div className="text-white text-2xl p-4">Coming Soon</div>
            </div>
          </div>

          {/* Partners Section */}
          <div className="w-full h-fit space-y-6">
            <h1 className="text-white text-4xl text-center mb-5">Partners</h1>
            <div className="flex w-full h-fit justify-center items-center flex-wrap">
              <div className="text-white text-2xl p-4">Coming Soon</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
