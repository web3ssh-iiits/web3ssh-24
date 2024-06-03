// import './App.css'
import Navbar from "./components/Navbar";
import CommonQuestions from "./components/CommonQuestions";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import Outcomes from "./components/Outcomes";

function App() {
    return (
        <>
            <Navbar />
            <HeroSection className="pt-28" />
            <Outcomes />
            <CommonQuestions />
            <Footer />
        </>
    );
}

export default App;
