import AnalyticsCard from './AnalyticsCard';
import analyticsData from '../data/analytics.json';

export default function AnalyticsSection() {
  return (
    <>
      <div className="grid justify-items-center m-12 grid-cols-1 lg:grid-cols-2 lg:w-[60%] mx-auto ">
        {analyticsData.map((data, index) => (
          <AnalyticsCard
            key={index}
            number={data.number}
            title={data.title}
            unit={data.unit}
          />
        ))}
      </div>
    </>
  );
}
