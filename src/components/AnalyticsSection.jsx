import AnalyticsCard from './AnalyticsCard';

export default function AnalyticsSection() {
  return (
    <>
      <div className="flex m-12 justify-center">
        <AnalyticsCard />
        <AnalyticsCard />
      </div>
      <div className="flex m-12 justify-center">
        <AnalyticsCard />
        <AnalyticsCard />
      </div>
    </>
  );
}
