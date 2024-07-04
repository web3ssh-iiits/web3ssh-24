import { color } from 'framer-motion';
import { FlipWords } from './ui/flip-words';

export function JoinUs() {
  const words = ['Networking', 'Learning', 'Passion', 'Guidance'];
  return (
    <div className="h-[20rem] flex justify-center items-center px-4">
      <div className="lg:min-w-[700px] text-center text-5xl lg:text-left lg:text-6xl mx-auto font-semibold text-gray-100">
        Experience
        <span> </span>
        <FlipWords words={words} /> <br />
        {/* </span> */}
        like never before!
      </div>
    </div>
  );
}
