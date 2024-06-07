export default function AnalyticsCard({ icon, number, unit, title }) {
  return (
    <>
      <div className="mx-12 w-full p-2 py-8 flex-1 ">
        <div className="flex w-72">
          <div className="flex w-full max-w-full flex-col break-words rounded-lg  bg-black bg-opacity-30 text-white shadow-lg">
            <div className="p-4">
              <div className="absolute -mt-8 ml-[235px] bg-black bg-opacity-60 h-16 w-16 rounded-[32px] text-center text-white shadow-lg">
                {icon}
              </div>
              <div className="pt-1 text-left">
                <h4 className="text-2xl font-semibold tracking-tighter xl:text-2xl">
                  {number}
                </h4>
                <p className="text-sm font-light capitalize">{unit}</p>
              </div>
            </div>

            <div className="p-4">
              <p className="font-light">
                <span className="text-2xl font-bold">{title}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
