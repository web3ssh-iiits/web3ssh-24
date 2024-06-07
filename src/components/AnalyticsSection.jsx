import AnalyticsCard from './AnalyticsCard';
import analyticsData from '../data/analytics.json';

export default function AnalyticsSection() {
  return (
    <>
      <div className="flex m-12 justify-center flex-wrap mx-auto p-4">
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
