export default function AnalyticsCard({ icon, number, unit, title }) {
  return (
    <>
      <div className="mx-auto p-2 py-8 flex-1">
        <div className="flex w-80">
          <div className="flex w-full max-w-full flex-col break-words rounded-lg  bg-black bg-opacity-30 text-white shadow-lg">
            <div className="p-4">
              <div className="absolute -mt-8 ml-[256px] bg-black bg-opacity-80 h-16 w-16 rounded-[32px] text-center text-white shadow-lg p-2.5">
                {icon}
              </div>
              <div className="pt-1 text-left">
                <h4 className="text-2xl font-sans font-bold tracking-tighter lg:text-4xl">
                  {number}
                </h4>
                <p className="text-2xl font-sans font-light capitalize">{unit}</p>
              </div>
            </div>

            <div className="p-4">
              <p className="font-light">
                <span className="text-4xl font-sans font-medium">{title}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
