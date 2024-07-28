import AnalyticsCard from './AnalyticsCard';
import analyticsData from '../data/analytics.json';
import { User, Users, Podcast, micVocal, Handshake, MicVocal, Landmark, Bitcoin } from 'lucide-react';

const iconMap = {
  students: <Users className="h-10 w-10" />,
  organizations: <Handshake className="h-10 w-10" />,
  experts: <MicVocal className="h-10 w-10" />,
  companies: <Bitcoin className="h-10 w-10" />
};

export default function AnalyticsSection() {
  return (
    <>
      <div className="w-full mx-auto mt-20 md:mt-40 md:w-fit grid justify-items-center grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-4 ">
        {analyticsData.map((data, index) => (
          <AnalyticsCard
            key={index}
            number={data.number}
            title={data.title}
            unit={data.unit}
            direction = {data.direction}
            icon={iconMap[data.unit]}
          />
        ))}
      </div>
    </>
  );
}
