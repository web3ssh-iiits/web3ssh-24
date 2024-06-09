
import Navbar from './components/Navbar';
import CommonQuestions from './components/CommonQuestions';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import Outcomes from "./components/Outcomes";
import GradientBackground from './components/background';
import AnalyticsSection from './components/AnalyticsSection';
import SpeakerCardV2 from './components/daywiseoverview/SpeakerCardV2'

function App() {
  return (
    <div className="relative">
      <GradientBackground />
      <div className="relative z-10">
        <Navbar />
        <HeroSection className="pt-28" />
        <AnalyticsSection />
        <Outcomes />
        <CommonQuestions />
        <Footer />
      </div>
    </div>
    // <SpeakerCardV2 title="Laisha Wadhwa" speaker="Lead Researcher, Samsung India" imgSrc="/speakers/laisha_wadhwa.png" />
  );
}

export default App;
