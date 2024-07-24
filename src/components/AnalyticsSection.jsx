import AnalyticsCard from './AnalyticsCard';
import analyticsData from '../data/analytics.json';
import { User, Users, Podcast, micVocal, Handshake, MicVocal, Landmark, Bitcoin } from 'lucide-react';

const iconMap = {
  violet: <Users className="h-10 w-10" />,   
  amber: <Handshake className="h-10 w-10" />,     
  yellow: <MicVocal className="h-10 w-10" />, 
  green: <Bitcoin className="h-10 w-10" />     
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
            gradientColor={data.gradientColor}
            icon={iconMap[data.gradientColor] || <User className="h-8 w-8" />}
          />
        ))}
      </div>
    </>
  );
}
