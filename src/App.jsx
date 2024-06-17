import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RedirectHandler from './utils/RedirectHandler';
import HomePage from './pages/Home';
import GradientBackground from './components/background';
import Footer from './components/Footer';
import TeamPage from './pages/Team.jsx';
import JoinCodePage from './pages/Join.jsx';

function App() {
  return (
    <div className="relative font-geist">
      <GradientBackground />
      <div className="relative z-10">
        <Navbar />
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/join" element={<JoinCodePage />} />
            <Route path="/*" element={<RedirectHandler />} />
          </Routes>
        </Router>
        <Footer />
      </div>
    </div>
  );
}

export default App;
