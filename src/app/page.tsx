import CommonQuestions from '@components/CommonQuestions';
import HeroSection from '@components/HeroSection';
import AnalyticsSection from '@components/AnalyticsSection';
// import { Hackathon } from '@components/Hackathon';
import { JoinUs } from '@components/WhyJoin';

import Speakers from '@components/Speakers';
import dynamic from 'next/dynamic';
import SessionTypes from '@components/SessionTypes';
// import Outcomes from '@components/Outcomes';
import KeyComponents from '@components/KeyComponents';
import Partners from '@components/Partners';

const Outcomes = dynamic(() => import('@components/Outcomes'), { ssr: false });
const Hackathon = dynamic(() => import('@components/Hackathon'), { ssr: false });

export default function Page() {
  return (
    <>
      <HeroSection />
      <Partners />
      <Speakers />
      <SessionTypes />
      <KeyComponents />
      <Hackathon />
      <Outcomes />
      <AnalyticsSection />
      <JoinUs />
      <CommonQuestions />
    </>
  );
}
