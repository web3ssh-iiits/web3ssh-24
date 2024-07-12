import { WobbleCard } from './ui/wobble-card';

function TimeWrapper(props){
  return (
    <div className="w-fit bg-[#222] text-white text-muted-foreground px-5 py-1 rounded-full text-lg font-medium my-2">
      {props.time}
    </div>
  )
}

export default function Hackathon() {
  return (
    <div
      id="hackathon"
      className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full px-4"
    >
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-4xl lg:text-6xl font-sans font-semibold tracking-[-0.015em] text-white">
            2 Day Hackathon
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            With over 100,000 mothly active bot users, Gippity AI is the most
            popular AI platform for developers.
          </p>
        </div>
        <img
          src="/graphics/code_cup.webp"
          alt="linear demo image"
          className="w-[240px] absolute -right-5 -bottom-1 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80  text-left text-balance text-4xl lg:text-6xl font-semibold tracking-[-0.015em] text-white">
          Rules
        </h2>
        <p className="mt-4 ml-2 max-w-[20rem] text-left  text-base/6 text-neutral-200"></p>
        <img
          src="/graphics/calendar.webp"
          alt="linear demo image"
          className="w-[240px] absolute -right-5 -bottom-1 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-1 bg-blue-900 min-h-[500px] lg:min-h-[550px]">
        <div className="">
          <h2 className="text-left text-balance text-4xl font-semibold tracking-[-0.015em] text-white mb-10">
            Day 0, August 2
          </h2>
          <p className="mt-4 ml-2 max-w-[20rem] text-left  text-base/6 text-neutral-200">
            <TimeWrapper time="5 AM to 6 PM" />
            Concluding Session of Summer School &
            Official Announcement of Hackathon Tracks.
            <TimeWrapper time="6 AM to 8 PM " />
            Peer discussion, Doubt Clearing &
            Brainstorming
          </p>
        </div>
        <img
          src="/graphics/thinking.webp"
          alt="linear demo image"
          className="w-[240px] absolute -right-5 -bottom-1 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-1 bg-blue-900 min-h-[500px] lg:min-h-[550px]">
        <div className="max-w-sm">
          <h2 className="text-left text-balance text-4xl font-semibold tracking-[-0.015em] text-white mb-10">
            Day 1, August 3
          </h2>
          <p className="mt-4 ml-2 max-w-[20rem] text-left  text-base/6 text-neutral-200">
            <TimeWrapper time="8 AM to 6 PM " />
            Hackathon Coding Round Officially Starts
            <TimeWrapper time="6 PM to 8 PM" />
            Preliminary Evaluation, Mentorship, and
            Feedback to students
          </p>
        </div>
        <img
          src="/graphics/hacker.webp"
          alt="linear demo image"
          className="w-[240px] absolute -right-5 -bottom-1 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-1 bg-blue-900 min-h-[500px] lg:min-h-[550px]">
        <div className="max-w-sm">
          <h2 className="text-left text-balance text-4xl font-semibold tracking-[-0.015em] text-white mb-10">
            Day 2, August 4
          </h2>
          <p className="mt-4 ml-2 max-w-[20rem] text-left  text-base/6 text-neutral-200">
            <TimeWrapper time="8 AM to 10 AM" />
            Elimination Round
            <TimeWrapper time="6 PM to 7 PM" />
            Final Evaluations
            <TimeWrapper time="7 PM to 8 PM" />
            Valedictory Session, Winners
            Announcement and Prize Distribution
          </p>
        </div>
        <img
          src="/graphics/prizes.webp"
          alt="linear demo image"
          className="w-[200px] absolute -right-5 -bottom-1 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
  );
}
