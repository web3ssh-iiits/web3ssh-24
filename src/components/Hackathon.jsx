import { WobbleCard } from './ui/wobble-card';

export function Hackathon() {
  return (
    <div
      id="hackathon"
      className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full"
    >
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-6xl font-semibold tracking-[-0.015em] text-white">
            2 Day Hackathon
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            With over 100,000 mothly active bot users, Gippity AI is the most
            popular AI platform for developers.
          </p>
        </div>
        <img
          src="/graphics/code_cup.webp"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-1 lg:-right-[10%]  filter -bottom-2 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-6xl font-semibold tracking-[-0.015em] text-white">
          Rules
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200"></p>
        <img
          src="/graphics/calendar.webp"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-1 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-6xl font-semibold tracking-[-0.015em] text-white">
            Day 0
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            announcement
          </p>
        </div>
        <img
          src="/graphics/thinking.webp"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-1 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-6xl font-semibold tracking-[-0.015em] text-white">
            Day 1
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200"></p>
        </div>
        <img
          src="/graphics/hacker.webp"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-1 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-6xl font-semibold tracking-[-0.015em] text-white">
            Day 2
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200"></p>
        </div>
        <img
          src="/graphics/prizes.webp"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
  );
}
