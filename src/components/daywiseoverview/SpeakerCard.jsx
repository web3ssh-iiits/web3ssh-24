export default function SpeakerCard({ imgSrc, title, date, speaker }) {
  return (
    <div className="w-96 h-96 overflow-hidden rounded-2xl relative group">
      <p className="absolute font-mono w-full mt-[20px] font-bold text-center z-20 text-black transition-transform delay-100 duration-500 group-hover:-translate-y-[calc(100%_+_30px)]">
        {title}
      </p>
      <div className="mb-[16px] flex px-4 absolute bottom-0 justify-between w-full ">
        <p className="mt-[20px] font-mono text-center z-20 text-black bg-gray-600/60 p-1 rounded-md transition-transform delay-100 duration-500 group-hover:-translate-x-[calc(100%_+_80px)]">
          📅 {date}
        </p>
        <p className="mt-[20px] font-mono text-center z-20 text-black bg-gray-600/60 p-1 rounded-md transition-transform delay-100 duration-500 group-hover:translate-x-[calc(100%_+_80px)]">
          👤 {speaker}
        </p>
      </div>
      <img
        className="absolute w-full h-full grayscale hover:filter-none group-hover:scale-110 object-cover transition-all duration-300"
        src={imgSrc}
      />
    </div>
  )
}
