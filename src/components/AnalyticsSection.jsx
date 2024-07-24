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
      <div className="grid justify-items-center m-12 grid-cols-1 lg:grid-cols-2 lg:w-[60%] mx-auto  gap-x-0 ">
        {analyticsData.map((data, index) => (
          <AnalyticsCard
            key={index}
            number={data.number}
            title={data.title}
            unit={data.unit}
            gradientColorFrom={data.gradientColorFrom}
            gradientColorVia={data.gradientColorVia}
            gradientColorTo={data.gradientColorTo}
            bgColorFrom={data.bgColorFrom}
            bgColorTo={data.bgColorTo}
            direction = {data.direction}
            icon={iconMap[data.unit]}
          />
        ))}
      </div>
    </>
  );
}
