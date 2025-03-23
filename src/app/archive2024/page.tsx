"use client";
import dynamic from "next/dynamic";
import CommonQuestions from "@components/components2024/CommonQuestions";
import HeroSection from "@components/components2024/HeroSection2024";
import AnalyticsSection from "@components/components2024/AnalyticsSection";
import { JoinUs } from "@components/WhyJoin";
import Speakers from "@components/components2024/Speakers";
import Guides from "@components/components2024/Guides";
import SessionTypes from "@components/components2024/SessionTypes";
import KeyComponents from "@components/KeyComponents";
import Partners from "@components/components2024/Partners";
import { Schedule } from "@components/components2024/Schedule";

const Outcomes = dynamic(() => import("@components/Outcomes"), { ssr: false });

export default function Page() {
  return (
    <>
      <HeroSection />
      <Partners />
      <Speakers />
      <Guides />
      <SessionTypes />
      <Schedule />
      <KeyComponents />
      <Outcomes />
      <AnalyticsSection />
      <JoinUs />
      <CommonQuestions />
    </>
  );
}
