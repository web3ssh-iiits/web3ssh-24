import CommonQuestions from '@components/CommonQuestions';
import HeroSection from '@components/HeroSection';
import AnalyticsSection from '@components/AnalyticsSection';
// import { Hackathon } from '@components/Hackathon';
import { JoinUs } from '@components/WhyJoin';

import Dignitaries from '@components/Dignitaries';
import Speakers from '@components/Speakers';
import Guides from '@components/Guides'
import dynamic from 'next/dynamic';
import SessionTypes from '@components/SessionTypes';
// import Outcomes from '@components/Outcomes';
import KeyComponents from '@components/KeyComponents';
import Partners from '@components/Partners';
import { Schedule } from '@components/Schedule';

const Outcomes = dynamic(() => import('@components/Outcomes'), { ssr: false });
// const Hackathon = dynamic(() => import('@components/Hackathon'), { ssr: false });

export default function Page() {
  return (
    <>
      <HeroSection />
      <Partners />
      <Dignitaries />
      <Speakers />
      <Guides />
      <SessionTypes />
      <Schedule />
      <KeyComponents />
      {/* <Hackathon /> */}
      <Outcomes />
      <AnalyticsSection />
      <JoinUs />
      <CommonQuestions />
    </>
  );
}
