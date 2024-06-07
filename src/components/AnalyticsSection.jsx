import AnalyticsCard from './AnalyticsCard';

export default function AnalyticsSection() {
  return (
    <>
      <div className="flex m-12 justify-center flex-wrap mx-auto p-4">
        <AnalyticsCard
          number={'+300'}
          title={'Online Participants'}
          unit={'students'}
        />
        <AnalyticsCard
          number={'+60'}
          title={'Offline Participants'}
          unit={'students'}
        />
        <AnalyticsCard number={'+20'} unit={'experts'} title={'Speakers'} />
        <AnalyticsCard number={'+4'} unit={'companies'} title={'Sponsors'} />
      </div>
    </>
  );
}
