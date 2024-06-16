import Navbar from './components/Navbar';
import CommonQuestions from './components/CommonQuestions';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import Outcomes from './components/Outcomes';
import GradientBackground from './components/background';
import AnalyticsSection from './components/AnalyticsSection';
import KeyComponents from './components/KeyComponents';
import { Hackathon } from './components/Hackathon';
import { JoinUs } from './components/WhyJoin';

function App() {
  return (
    <div className="relative font-geist">
      <GradientBackground />
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        {/* partners and sponsors */}
        {/* speakers */}
        <KeyComponents />
        <Hackathon />
        <Outcomes />
        <AnalyticsSection />
        <JoinUs />
        <CommonQuestions />
        <Footer />
      </div>
    </div>
  );
}

export default App;
