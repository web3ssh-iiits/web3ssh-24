export default function AnalyticsCard({ icon, number, unit, title, gradientColorFrom, gradientColorVia, gradientColorTo, bgColorFrom, bgColorTo, direction }) {
  return (
    <div className="mx-auto p-2 py-8 flex-1">
      <div className="flex w-80">
        <div className="p-2 pb-4 flex w-full max-w-full flex-col break-words rounded-lg text-white bg-white bg-opacity-5">
          <div className="p-4 relative">
            <div className="absolute -mt-8 ml-[256px] bg-gray-800 bg-opacity-90 h-16 w-16 rounded-full text-center text-white shadow-lg flex items-center justify-center ring-1 ring-gray-300">
              {icon}
            </div>
            <div className="text-left">
              <h4 className={`text-5xl lg:text-5xl font-sans font-bold bg-clip-text text-transparent bg-gradient-to-tr from-yellow-600 via-orange-600 to-purple-600 tracking-tighter`}>
                {number}
              </h4>
            </div>
          </div>
              <p className="pl-20 text-3xl font-bolder font-sans capitalize">{unit}</p>
          <div className="pl-20 pt-1">
            <p className="font-light">
              <span className={`text-4xl font-sans bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 via-orange-600 to-purple-600 font-medium`} >{title}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
