import { motion } from 'framer-motion';
import { FaFlask, FaCode, FaUsers, FaChevronDown, FaGraduationCap } from 'react-icons/fa';
import HameerImage from '../assests/Hameer.jpg';

const Home = () => {
  const skills = {
    technical: [
      'Wastewater Treatment',
      'Environmental Remediation',
      'Water Quality Analysis',
      'Advanced Material Synthesis',
      'Capacitive Deionization',
      'Forward Osmosis',
    ],
    software: [
      'MATLAB',
      'R Programming',
      'Python',
      'GIS Software',
      'Data Visualization Tools',
      'Statistical Analysis',
    ],
    professional: [
      'Research Writing',
      'Data Analysis',
      'Project Management',
      'Team Leadership',
      'Interdisciplinary Collaboration',
      'Scientific Communication',
    ],
  };

  // Text animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.2,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const highlightText = (text, highlight) => {
    if (!highlight) return <span>{text}</span>;
    
    return text.split(highlight).map((part, i, arr) => 
      i === arr.length - 1 ? (
        <span key={i}>{part}</span>
      ) : (
        <span key={i}>
          {part}
          <span className="text-accent font-semibold">{highlight}</span>
        </span>
      )
    );
  };

  return (
    <section id="home" className="min-h-screen pt-16">
      {/* Hero Section */}
      <div className="py-12 sm:py-16 md:py-20 px-4 sm:px-8 lg:px-12 bg-gradient-to-br from-white via-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 md:gap-12 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="lg:col-span-7 text-center lg:text-left order-2 lg:order-1"
            >
              <div className="relative mb-6">
                <motion.div 
                  className="absolute -top-6 -left-6 w-16 h-16 bg-accent/10 rounded-full hidden sm:block"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                ></motion.div>
                
                <motion.h1 
                  custom={0}
                  variants={fadeInUp}
                  className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2 relative z-10"
                >
                  <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-blue-600">
                    Hameer Chand
                  </span>
                </motion.h1>
                
                <motion.div 
                  custom={1}
                  variants={fadeInUp}
                  className="flex items-center justify-center lg:justify-start space-x-2 mb-4"
                >
                  <FaGraduationCap className="text-accent w-4 h-4 sm:w-5 sm:h-5" />
                  <h2 className="text-lg sm:text-xl md:text-2xl text-secondary font-medium">
                    PhD Candidate in Environmental Science
                  </h2>
                </motion.div>
              </div>
              
              <motion.div
                custom={2}
                variants={fadeInUp}
                className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-xl border-l-4 border-accent mb-8 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/5 rounded-tr-full"></div>
                
                <p className="text-gray-700 leading-relaxed text-base sm:text-lg mb-4 relative z-10">
                  I am a <span className="text-primary font-semibold">PhD Candidate</span> in Environmental Science Engineering at <span className="text-accent font-semibold">University of Science and Technology of China</span>, dedicated to developing sustainable solutions for wastewater treatment.
                </p>
                
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base relative z-10">
                  My research emphasizes <span className="underline decoration-accent decoration-2 underline-offset-2">advanced material synthesis</span> and the optimization of <span className="underline decoration-accent decoration-2 underline-offset-2">capacitive deionization</span> and <span className="underline decoration-accent decoration-2 underline-offset-2">forward osmosis processes</span> to achieve efficient contaminant removal and resource recovery.
                </p>
                
                <div className="mt-6 text-gray-600 italic text-sm sm:text-base border-t border-gray-100 pt-4">
                  I have contributed to high-impact projects focusing on chromium removal and the degradation of antibiotics in wastewater, effectively bridging fundamental research with practical applications.
                </div>
              </motion.div>
              
              <motion.div
                custom={3}
                variants={fadeInUp}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6"
              >
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0px 5px 15px rgba(66, 153, 225, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-primary to-accent text-white px-6 sm:px-8 py-3 rounded-lg shadow-lg transition-all duration-300 font-medium flex items-center w-full sm:w-auto justify-center"
                  onClick={() => document.getElementById('skills').scrollIntoView({ behavior: 'smooth' })}
                >
                  Explore My Work
                  <FaChevronDown className="ml-2 w-4 h-4" />
                </motion.button>
                
                <motion.a
                  href="#research"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-primary border-2 border-primary hover:bg-primary hover:text-white px-6 sm:px-8 py-3 rounded-lg transition-colors duration-300 font-medium w-full sm:w-auto text-center"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('research').scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  View Research
                </motion.a>
              </motion.div>
            </motion.div>
            
            {/* Right Column - Image */}
            <motion.div
              className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2 mb-8 lg:mb-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                {/* Decorative elements */}
                <motion.div 
                  className="absolute -top-6 -right-6 w-24 sm:w-32 h-24 sm:h-32 bg-accent/10 rounded-full hidden sm:block"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                ></motion.div>
                <motion.div 
                  className="absolute -bottom-4 -left-4 w-16 sm:w-24 h-16 sm:h-24 bg-primary/10 rounded-full hidden sm:block"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                ></motion.div>
                
                <motion.div 
                  className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl bg-gradient-to-br from-white to-gray-100 overflow-hidden shadow-2xl relative"
                  whileHover={{ boxShadow: "0px 10px 30px rgba(26, 54, 93, 0.4)" }}
                  animate={{ 
                    boxShadow: ["0px 5px 15px rgba(26, 54, 93, 0.2)", "0px 15px 30px rgba(26, 54, 93, 0.4)", "0px 5px 15px rgba(26, 54, 93, 0.2)"],
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 4
                  }}
                >
                  <img 
                    src={HameerImage} 
                    alt="Hameer Chand" 
                    className="w-full h-full object-cover"
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                  ></motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div id="skills" className="py-16 sm:py-20 md:py-24 px-4 sm:px-8 lg:px-12 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 md:mb-16 text-center"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">Areas of Expertise</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base">
              My interdisciplinary background has equipped me with a diverse skill set spanning technical knowledge, software proficiency, and professional capabilities.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
            {Object.entries(skills).map(([category, items], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-accent"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 sm:p-4 rounded-full bg-accent/10 mr-4">
                    {category === 'technical' && <FaFlask className="w-6 h-6 sm:w-7 sm:h-7 text-accent" />}
                    {category === 'software' && <FaCode className="w-6 h-6 sm:w-7 sm:h-7 text-accent" />}
                    {category === 'professional' && <FaUsers className="w-6 h-6 sm:w-7 sm:h-7 text-accent" />}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-primary capitalize">
                    {category} Skills
                  </h3>
                </div>
                <ul className="space-y-3">
                  {items.map((skill, idx) => (
                    <motion.li 
                      key={skill} 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + (idx * 0.1) }}
                      className="text-gray-700 flex items-start text-sm sm:text-base"
                    >
                      <span className="text-accent mr-3 text-lg">•</span>
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home; 