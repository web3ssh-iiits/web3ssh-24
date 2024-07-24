export default function AnalyticsCard({ icon, number, unit, title, gradientColor }) {
  return (
    <div className="mx-auto p-2 py-8 flex-1">
      <div className="flex w-80">
        <div className="flex w-full max-w-full flex-col break-words rounded-lg bg-gray-800 bg-opacity-50 text-white shadow-lg">
          <div className="p-4 relative">
            <div className="absolute -mt-8 ml-[256px] bg-gray-800 bg-opacity-90 h-16 w-16 rounded-full text-center text-white shadow-lg flex items-center justify-center">
              {icon}
            </div>
            <div className="pt-1 text-left">
              <h4 className={`text-2xl bg-clip-text text-transparent bg-gradient-to-r from-${gradientColor}-900 to-${gradientColor}-400 font-sans font-bold tracking-tighter lg:text-4xl`}>
                {number}
              </h4>
              <p className="text-3xl font-bolder font-sans capitalize">{unit}</p>
            </div>
          </div>
          <div className="p-4">
            <p className="font-light">
              <span className={`text-4xl font-sans bg-clip-text text-transparent bg-gradient-to-r from-${gradientColor}-900 to-${gradientColor}-400 font-medium`} >{title}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
