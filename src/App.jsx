// import './App.css'
import Navbar from './components/Navbar'
import CommonQuestions from "./components/CommonQuestions";
import HeroSection from "./components/HeroSection";
import SpeakerCard from './components/daywiseoverview/SpeakerCard';
import CarouselPanel from './components/daywiseoverview/CarouselPanel';

function App() {

  return (
    <>
      {/*
      <Navbar />
      <HeroSection className="pt-28" />
      <CommonQuestions />
      */}
      <CarouselPanel />
    </>
  )

}

export default App;
