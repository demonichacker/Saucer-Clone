import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import StatsBox from './components/StatsBox';
import Stars from './components/Stars';
import TrendingSection from './components/TrendingSection';
import Features from './components/Features';
import SupportedBy from './components/SupportedBy';
import Collaborations from './components/Collaborations';
import JoinCommunity from './components/JoinCommunity';
import Footer from './components/Footer'; // Import the Footer component

function App() {
  return (
    <div className="min-h-screen bg-dark-900 relative">
      <Stars />
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-saucer-primary/20 via-transparent to-saucer-primary/20 animate-gradient-x"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,136,0.1)_0%,transparent_100%)]"></div>
      </div>
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <StatsBox />
        <TrendingSection />
        <Features />
        <SupportedBy />
        <Collaborations />
        <JoinCommunity />
        <Footer /> {/* Add the Footer component here */}
      </div>
    </div>
  );
}

export default App;
