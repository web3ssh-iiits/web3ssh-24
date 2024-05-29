export default function SpeakerCardV2({ title, date, speaker, imgSrc }) {

  // <div className="relative flex h-[194px] w-full min-w-full max-w-min flex-col overflow-hidden rounded-2xl bg-[#D9DCE4] sm:h-[267px] lg:h-[249px] xl:h-[336px]">
  //   <div className="z-20 h-full w-full">
  //     <img
  //       alt="Coinfest Asia 2024 (Topp Jirayut Srupsrisopa - Speakers)"
  //       loading="lazy"
  //       className="mx-auto h-auto w-full object-cover object-center"
  //       src="/_next/image?url=https%3A%2F%2Fhub.coinvestasi.com%2Fuploads%2FBitkub_Topp_Jirayut_9bb2241998.png&w=1200&q=87"
  //       style={{ color: "transparent" }}
  //     />
  //   </div>
  // <div className="ca2024CvrBgSpeakers ca2024CvrBgSpeakersBlue absolute inset-x-0 inset-y-0 z-px opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100" />
  // </div>

  return (
    <div className="w-96 aspect-[3/4] overflow-hidden rounded-2xl relative group hover:bg-blue-500 transition-colors duration-500 ease-in-out">
      <p className="absolute font-mono w-full bg-gray-600/35 py-[10px] font-bold text-center text-white z-20 transition-transform delay-100 duration-500 group-hover:-translate-y-[calc(100%_+_30px)]">
        {title}
      </p>
      <div className="mb-[16px] flex px-4 absolute bottom-0 justify-between w-full ">
        <p className="mt-[20px] font-mono text-center z-20 text-white bg-gray-600/60 p-1 rounded-md transition-all delay-100 duration-500 group-hover:opacity-0 group-hover:-translate-x-[calc(100%_+_80px)]">
          📅 {date}
        </p>
        <p className="mt-[20px] font-mono text-center z-20 text-white bg-gray-600/60 p-1 rounded-md transition-transform delay-100 duration-500 group-hover:translate-x-[calc(100%_+_80px)]">
          👤 {speaker}
        </p>
      </div>
      <img
        className="absolute w-full h-full grayscale hover:filter-none group-hover:scale-105 object-cover object-center transition-all duration-300"
        src={imgSrc}
      />
      <span className="absolute bottom-auto left-auto right-3 top-3 z-10 flex h-10 w-10 flex-col items-center justify-center rounded-xl bg-white opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 sm:right-4 sm:top-4">
        <svg
          className="h-6 w-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.5251 5.49512L10.5205 7.49512L15.0781 7.50578L5.47461 17.0899L6.8874 18.5056L16.5172 8.89516L16.5064 13.5091L18.5064 13.5138L18.5251 5.51383L10.5251 5.49512Z"
            fill="black"
          />
        </svg>
      </span>
    </div>
  )
}
