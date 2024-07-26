export default function AnalyticsCard({ icon, number, unit, title, gradientColorFrom, gradientColorVia, gradientColorTo, bgColorFrom, bgColorTo, direction }) {
  return (
    <div className="mx-auto p-2 py-8 flex-1">
      <div className="flex w-80">
        <div className={`flex w-full max-w-full flex-col break-words rounded-lg bg-gradient-to-${direction} from-${bgColorFrom} to-${bgColorTo} bg-opacity-50 text-white shadow-lg ring-1 ring-gray-500`}>
          <div className="p-4 relative">
            <div className="absolute -mt-8 ml-[256px] bg-gray-800 bg-opacity-90 h-16 w-16 rounded-full text-center text-white shadow-lg flex items-center justify-center ring-1 ring-gray-300">
              {icon}
            </div>
            <div className="pt-1 text-left">
              <h4 className={`text-2xl bg-clip-text text-transparent bg-gradient-to-tr from-${gradientColorFrom} via-${gradientColorVia} to-${gradientColorTo} font-sans font-bold tracking-tighter lg:text-4xl`}>
                {number}
              </h4>
              <p className="text-3xl font-bolder font-sans capitalize">{unit}</p>
            </div>
          </div>
          <div className="p-4">
            <p className="font-light">
              <span className={`text-4xl font-sans bg-clip-text text-transparent bg-gradient-to-r from-${gradientColorFrom} via-${gradientColorVia} to-${gradientColorTo} font-medium`} >{title}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
