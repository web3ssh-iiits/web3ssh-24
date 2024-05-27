// import './App.css'
import Navbar from './components/Navbar'
import CommonQuestions from "./components/CommonQuestions";
import HeroSection from "./components/HeroSection";

function App() {

  return (
    <>
      <Navbar />
      <HeroSection className="pt-28" />
      <CommonQuestions />
    </>
  )

}

export default App;
