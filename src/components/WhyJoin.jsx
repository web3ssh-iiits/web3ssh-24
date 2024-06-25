import { FlipWords } from './ui/flip-words';

export function JoinUs() {
  const words = ['Networking', 'Learning', 'Passion', 'Guidance'];
  return (
    <div className="h-[20rem] flex justify-center items-center px-4">
      <div className="text-6xl mx-auto font-semibold text-gray-100">
        Experience
        <FlipWords words={words} /> <br />
        like never before!
      </div>
    </div>
  );
}
