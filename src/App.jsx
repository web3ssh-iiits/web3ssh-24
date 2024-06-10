import Navbar from './components/Navbar';
import CommonQuestions from './components/CommonQuestions';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import Outcomes from './components/Outcomes';
import GradientBackground from './components/background';
import AnalyticsSection from './components/AnalyticsSection';
import SpeakersPanel from './components/Speakers';

function App() {
  return (
    <div className="relative">
      <GradientBackground />
      <div className="relative z-10">
        <Navbar />
        <HeroSection className="pt-28" />
        <AnalyticsSection />
        <Outcomes />
        <SpeakersPanel className="mt-40" />
        <CommonQuestions />
        <Footer />
      </div>
    </div>
  );
}

export default App;
