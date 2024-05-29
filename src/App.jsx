// import './App.css'
import Navbar from './components/Navbar'
import CommonQuestions from "./components/CommonQuestions";
import HeroSection from "./components/HeroSection";
import SpeakerCard from './components/daywiseoverview/SpeakerCard';
import CarouselPanel from './components/daywiseoverview/CarouselPanel';
import SpeakerCardV2 from './components/daywiseoverview/SpeakerCardV2';
import person from "./assets/chingchong.avif"

function App() {

  return (
    <>
      {/*
      <Navbar />
      <HeroSection className="pt-28" />
      <CommonQuestions />
      <CarouselPanel />
      */}
      <SpeakerCardV2 title="Jericho" imgSrc={person} date="TODAY" speaker="Yo Mama" />
    </>
  )

}

export default App;
