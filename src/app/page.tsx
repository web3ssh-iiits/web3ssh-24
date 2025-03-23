import CommonQuestions from '@components/components2025/CommonQuestions';
import HeroSection from '@components/components2025/HeroSection2025';
// import AnalyticsSection from '@components/components2024/AnalyticsSection';
import { JoinUs } from '@components/WhyJoin';
import Speakers from '@components/components2025/Speakers';
import Guides from '@components/components2025/Guides';
// import dynamic from 'next/dynamic';
import SessionTypes from '@components/components2025/SessionTypes';
// import KeyComponents from '@components/KeyComponents';
import Partners from '@components/components2025/Partners';
import { Schedule } from '@components/components2025/Schedule';
import Navbar from '@components/components2025/Navbar2025'; // Direct import
import Footer from '@components/components2025/Footer2025'; // Direct import

// const Outcomes = dynamic(() => import('@components/Outcomes'), { ssr: false });

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <Partners />
        <Speakers />
        <Guides />
        <SessionTypes />
        <Schedule />
        {/* <KeyComponents /> */}
        {/* <Outcomes /> */}
        {/* <AnalyticsSection /> */}
        <JoinUs />
        <CommonQuestions />
      </main>
      <Footer />
    </>
  );
}