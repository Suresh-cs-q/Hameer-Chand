import { motion as Motion } from 'framer-motion';
import { FaGraduationCap, FaUniversity, FaCalendarAlt, FaAward } from 'react-icons/fa';

const Education = () => {
  const education = [
    {
      institution: "University of Science and Technology of China",
      degree: "PhD in Environmental Science and Engineering",
      period: "2022 - Present",
      achievements: [
        "Research focus on advanced wastewater treatment technologies",
        "Published 3 peer-reviewed papers in high-impact journals",
        "Awarded Best Research Presentation 2022",
        "Teaching Assistant for Environmental Engineering courses"
      ]
    },
    {
      institution: "Nanjing Normal University, China",
      degree: "Master of Science in Environmental Engineering",
      period: "2018 - 2022",
      achievements: [
        "Specialized in water treatment processes",
        "Completed thesis on membrane filtration",
        "Graduated with distinction"
      ]
    },
    {
      institution: "Mehran University of Engineering and Technology, Pakistan",
      degree: "Undergraduate Candidate (Institute of Petroleum &amp; Natural Gas)",
      period: "2014 - 2018",
      achievements: [
        "Focus on environmental engineering",
        "Active member of Environmental Club",
        "First class with distinction"
      ]
    }
  ];

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.2,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="education" className="min-h-screen pt-20 pb-24 bg-gradient-to-b from-white to-blue-50">
      <div className="px-4 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <Motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
            className="mb-12 md:mb-16"
          >
            <Motion.div variants={fadeInUp} className="relative mb-8 text-center">
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 transform -translate-y-1/2 z-0"></div>
              <h2 className="inline-block bg-white px-4 sm:px-6 py-1 text-2xl sm:text-3xl md:text-4xl font-bold text-primary relative z-10">
                Academic Journey
              </h2>
            </Motion.div>
            
            <Motion.p 
              variants={fadeInUp}
              className="text-center text-gray-600 max-w-3xl mx-auto mb-8 sm:mb-12 text-sm sm:text-base md:text-lg"
            >
              My academic journey has equipped me with the knowledge and skills needed to tackle complex environmental challenges through innovative research and practical solutions.
            </Motion.p>
          </Motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 sm:left-0 md:left-1/2 top-0 bottom-0 w-0.5 sm:w-1 bg-gradient-to-b from-accent to-primary rounded-full transform md:-translate-x-1/2"></div>

            {education.map((edu, index) => (
              <Motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={itemVariants}
                className="relative mb-12 sm:mb-16 md:mb-24 pl-10 sm:pl-8 md:pl-0"
              >
                <div 
                  className={`md:flex ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 sm:left-0 md:left-1/2 top-10 w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full border-4 border-accent shadow-md z-10 transform md:-translate-x-1/2 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full"></div>
                  </div>
                  
                  {/* Content */}
                  <div 
                    className={`w-full md:w-5/12 ${
                      index % 2 === 0 ? 'md:pr-8 lg:pr-12' : 'md:pl-8 lg:pl-12'
                    }`}
                  >
                    <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-accent relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-accent/5 rounded-bl-full -z-0"></div>
                      <div className="absolute bottom-0 left-0 w-16 sm:w-24 h-16 sm:h-24 bg-primary/5 rounded-tr-full -z-0"></div>
                      
                      <div className="flex items-center mb-4 sm:mb-5 relative z-10">
                        <div className="p-2 sm:p-3 rounded-full bg-accent/10 mr-3 sm:mr-4 flex-shrink-0">
                          <FaUniversity className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                        </div>
                        <h3 className="text-base sm:text-lg md:text-xl font-bold text-primary">
                          {edu.institution}
                        </h3>
                      </div>
                      
                      <div className="flex items-center mb-2 sm:mb-3 relative z-10">
                        <FaGraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-accent mr-2 sm:mr-3 flex-shrink-0" />
                        <div className="text-base sm:text-lg font-semibold text-secondary">{edu.degree}</div>
                      </div>
                      
                      <div className="flex items-center text-gray-500 mb-4 sm:mb-5 relative z-10 text-sm sm:text-base">
                        <FaCalendarAlt className="w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-3 flex-shrink-0" />
                        <div className="font-medium">{edu.period}</div>
                      </div>
                      
                      <div className="border-t border-gray-100 pt-3 sm:pt-4 mt-3 sm:mt-4 relative z-10">
                        <h4 className="text-primary font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Key Achievements</h4>
                        <ul className="space-y-2 sm:space-y-3">
                          {edu.achievements.map((achievement, i) => (
                            <Motion.li 
                              key={i} 
                              initial={{ opacity: 0, x: -5 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.5 + (i * 0.1) }}
                              className="text-gray-700 flex items-start text-xs sm:text-sm"
                            >
                              <FaAward className="w-3 h-3 sm:w-4 sm:h-4 text-accent mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                              <span>{achievement}</span>
                            </Motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  {/* Year indicator for larger screens */}
                  <div className="hidden md:block absolute left-1/2 top-10 transform -translate-x-1/2 mt-12">
                    <div className={`px-3 sm:px-4 py-0.5 sm:py-1 bg-gradient-to-r from-primary to-accent text-white text-xs sm:text-sm font-bold rounded-full shadow-md ${
                      index % 2 === 0 ? 'ml-6 sm:ml-8' : 'mr-6 sm:mr-8'
                    }`}>
                      {edu.period}
                    </div>
                  </div>
                </div>
              </Motion.div>
            ))}
          </div>
          
          {/* Final education dot */}
          <Motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative mx-auto w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center shadow-lg"
          >
            <FaGraduationCap className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          </Motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education; 