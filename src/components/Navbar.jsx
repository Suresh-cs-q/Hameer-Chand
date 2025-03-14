import { useState, useEffect } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Education', href: '#education' },
    { name: 'Research', href: '#research' },
    { name: 'Awards', href: '#awards' },
    { name: 'Contact', href: '#contact' },
  ];

  // Handle scroll events to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 20);
      
      // Determine active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1));
      
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  // Close mobile menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  // Animation variants
  const navbarVariants = {
    initial: { boxShadow: "0 0 0 rgba(0,0,0,0)", backgroundColor: "rgba(255,255,255,0)" },
    scrolled: { 
      boxShadow: "0 4px 20px rgba(0,0,0,0.08)", 
      backgroundColor: "rgba(255,255,255,0.95)",
      backdropFilter: "blur(8px)",
      height: "4rem"
    },
    notScrolled: { 
      boxShadow: "0 0 0 rgba(0,0,0,0)", 
      backgroundColor: "rgba(255,255,255,0)",
      height: "5rem"
    }
  };

  const mobileMenuVariants = {
    closed: { 
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: { 
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.05,
        staggerDirection: 1
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, y: -5 },
    open: { opacity: 1, y: 0 }
  };

  return (
    <Motion.nav 
      className="fixed w-full z-50 transition-all duration-300"
      initial="initial"
      animate={scrolled ? "scrolled" : "notScrolled"}
      variants={navbarVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-full">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center space-x-1 lg:space-x-2">
            {navItems.map((item, index) => (
              <Motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="relative px-3 lg:px-6 py-2 text-sm font-medium transition-all duration-200"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                custom={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    delay: index * 0.1,
                    duration: 0.5
                  }
                }}
              >
                <span className={`${
                  activeSection === item.href.substring(1)
                    ? 'text-primary font-semibold'
                    : scrolled 
                      ? 'text-gray-700 hover:text-primary' 
                      : 'text-gray-800 hover:text-primary'
                }`}>
                  {item.name}
                </span>
                {activeSection === item.href.substring(1) && (
                  <Motion.div
                    className="absolute bottom-0 left-0 right-0 mx-auto w-1/2 h-0.5 bg-primary"
                    layoutId="activeIndicator"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Motion.a>
            ))}
          </div>

          {/* Mobile Navigation Button - Centered */}
          <div className="md:hidden flex justify-center w-full">
            <Motion.button
              className="text-gray-800 p-2 rounded-full hover:bg-white/20 transition-colors backdrop-blur-sm"
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <Motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <HiX size={24} className="text-primary" />
                  </Motion.div>
                ) : (
                  <Motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <HiMenu size={24} />
                  </Motion.div>
                )}
              </AnimatePresence>
            </Motion.button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <Motion.div 
              className="md:hidden overflow-hidden bg-white/95 backdrop-blur-md rounded-xl shadow-lg mt-2 mx-auto max-w-xs"
              initial="closed"
              animate="open"
              exit="closed"
              variants={mobileMenuVariants}
            >
              <div className="px-3 py-4 space-y-2">
                {navItems.map((item, index) => (
                  <Motion.a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                    className={`block px-4 py-3 rounded-lg text-center text-base font-medium transition-all ${
                      activeSection === item.href.substring(1)
                        ? 'text-primary bg-primary/5 font-semibold'
                        : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                    }`}
                    variants={itemVariants}
                    custom={index}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.name}
                  </Motion.a>
                ))}
              </div>
            </Motion.div>
          )}
        </AnimatePresence>
      </div>
    </Motion.nav>
  );
};

export default Navbar; 