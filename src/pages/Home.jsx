import CommonQuestions from '../components/CommonQuestions';
import HeroSection from '../components/HeroSection';
import Outcomes from '../components/Outcomes';
import AnalyticsSection from '../components/AnalyticsSection';
import KeyComponents from '../components/KeyComponents';
import { Hackathon } from '../components/Hackathon';
import { JoinUs } from '../components/WhyJoin';
import Speakers from '../components/Speakers';

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      {/* partners and sponsors */}
      <Speakers className="sm:px-40" />
      <KeyComponents />
      <Hackathon />
      <Outcomes />
      <AnalyticsSection />
      <JoinUs />
      <CommonQuestions />
    </div>
  );
}
