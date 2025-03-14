import Navbar from './components/Navbar';
import Home from './components/Home';
import Education from './components/Education';
import Research from './components/Research';
import Awards from './components/Awards';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useEffect } from 'react';

function App() {
  // Ensure smooth scrolling behavior for all browsers
  useEffect(() => {
    // Function to handle smooth scrolling for anchor links
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a');
      if (target && target.hash && target.hash.startsWith('#') && target.pathname === window.location.pathname) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    // Add event listener
    document.addEventListener('click', handleAnchorClick);

    // Clean up
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="relative overflow-x-hidden">
      <Navbar />
      <main className="bg-white">
        <Home />
        <Education />
        <Research />
        <Awards />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
