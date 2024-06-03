import Navbar from './components/Navbar';
import CommonQuestions from './components/CommonQuestions';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import GradientBackground from './components/background';
import AnalyticsSection from './components/AnalyticsSection';

function App() {
  return (
    <div className="relative">
      <GradientBackground />
      <div className="relative z-10">
        <Navbar />
        <HeroSection className="pt-28" />
        <AnalyticsSection />
        <CommonQuestions />
        <Footer />
      </div>
    </div>
  );
}

export default App;
