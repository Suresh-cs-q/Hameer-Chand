import { motion as Motion } from 'framer-motion';
import { FaTrophy, FaMedal, FaCertificate, FaUniversity, FaStar, FaGraduationCap, FaLaptop, FaGlobe, FaAward } from 'react-icons/fa';

const Awards = () => {
  const awards = [
    {
      title: "Academic Excellence Award",
      organization: "University of Science and Technology of China",
      year: "2023/2024",
      description: "Awarded for outstanding academic performance and research contributions during doctoral studies",
      icon: <FaTrophy className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-500" />,
      category: "Academic Achievement"
    },
    {
      title: "ANSO Fully Funded PhD Program",
      organization: "Alliance of National and International Science Organizations",
      year: "2022",
      description: "Prestigious international scholarship awarded to promising researchers for doctoral studies in environmental science",
      icon: <FaGlobe className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />,
      category: "International Scholarship"
    },
    {
      title: "Jiangsu Government Scholarship",
      organization: "Jiangsu Provincial Government, China",
      year: "2022",
      description: "Awarded for excellence in scientific research and academic contributions",
      icon: <FaAward className="w-6 h-6 sm:w-8 sm:h-8 text-red-500" />,
      category: "Research Excellence"
    },
    {
      title: "Nanjing Normal University Scholarship",
      organization: "Nanjing Normal University",
      year: "2019-2022",
      description: "Fully funded master's program scholarship awarded based on academic merit and research potential",
      icon: <FaGraduationCap className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />,
      category: "Academic Scholarship"
    },
    {
      title: "Prime Minister's Laptop Scheme",
      organization: "Government of Pakistan",
      year: "2019",
      description: "National merit-based award recognizing academic excellence among top university students",
      icon: <FaLaptop className="w-6 h-6 sm:w-8 sm:h-8 text-gray-700" />,
      category: "National Recognition"
    }
  ];

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.1,
        duration: 0.7,
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
    <section id="awards" className="min-h-screen pt-20 pb-24 bg-gradient-to-b from-white to-blue-50">
      <div className="px-4 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <Motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
            className="mb-16"
          >
            <Motion.div variants={fadeInUp} className="relative mb-8 text-center">
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-accent/30 to-transparent transform -translate-y-1/2 z-0"></div>
              <h2 className="inline-block bg-white px-4 sm:px-8 py-1 sm:py-2 text-2xl sm:text-3xl md:text-4xl font-bold text-primary relative z-10 shadow-sm rounded-full">
                Awards & Academic Excellence
              </h2>
            </Motion.div>
            
            <Motion.p 
              variants={fadeInUp}
              className="text-center text-gray-600 max-w-3xl mx-auto mb-8 sm:mb-12 text-sm sm:text-base md:text-lg"
            >
              A track record of academic excellence and recognition, with scholarships and awards from prestigious international and national institutions.
            </Motion.p>

            {/* Featured Award */}
            <Motion.div
              variants={fadeInUp}
              className="mb-8 sm:mb-12 bg-gradient-to-br from-primary/5 to-accent/5 p-4 sm:p-6 md:p-8 rounded-2xl shadow-md relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 sm:w-64 h-32 sm:h-64 bg-accent/5 rounded-bl-full -z-0"></div>
              <div className="absolute bottom-0 left-0 w-24 sm:w-48 h-24 sm:h-48 bg-primary/5 rounded-tr-full -z-0"></div>
              
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4 sm:gap-6 relative z-10">
                <div className="p-3 sm:p-4 bg-white rounded-xl shadow-sm flex-shrink-0 flex items-center justify-center">
                  <FaGlobe className="w-10 h-10 sm:w-16 sm:h-16 text-blue-600" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <span className="inline-block bg-accent/10 text-accent px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-medium mb-2 sm:mb-3">
                    Featured Achievement
                  </span>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-2 sm:mb-3">ANSO Fully Funded PhD Program</h3>
                  <p className="text-gray-600 mb-4 max-w-3xl text-sm sm:text-base">
                    Selected for the prestigious Alliance of National and International Science Organizations (ANSO) scholarship program, providing full funding for doctoral studies at the University of Science and Technology of China. This highly competitive international scholarship recognizes promising researchers with exceptional potential to contribute to environmental science and engineering.
                  </p>
                  <div className="flex items-center justify-center md:justify-start text-secondary text-sm sm:text-base">
                    <FaUniversity className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-accent" />
                    <span className="font-medium">Alliance of National and International Science Organizations</span>
                  </div>
                </div>
              </div>
            </Motion.div>

            {/* Award Grid */}
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              {awards.filter(award => award.title !== "ANSO Fully Funded PhD Program").map((award, index) => (
                <Motion.div
                  key={index}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={itemVariants}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group"
                >
                  <div className="border-t-4 border-accent">
                    <div className="p-4 sm:p-6">
                      <div className="flex items-start">
                        <div className="mr-3 sm:mr-5 flex-shrink-0 p-2 sm:p-3 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl group-hover:from-primary/10 group-hover:to-accent/10 transition-all duration-300">
                          {award.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center justify-between mb-1">
                            <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-0.5 rounded-full mb-1 sm:mb-0">
                              {award.category}
                            </span>
                            <span className="text-xs sm:text-sm font-medium text-gray-500">
                              {award.year}
                            </span>
                          </div>
                          <h3 className="text-lg sm:text-xl font-bold text-primary mb-1 sm:mb-2 truncate">{award.title}</h3>
                          <div className="flex items-center text-secondary mb-2 sm:mb-3 text-sm">
                            <FaUniversity className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-accent flex-shrink-0" />
                            <span className="font-medium truncate">{award.organization}</span>
                          </div>
                          <p className="text-gray-600 text-sm">{award.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Motion.div>
              ))}
            </div>
          </Motion.div>
          
          <Motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white p-4 sm:p-8 rounded-xl shadow-md text-center border border-accent/10"
          >
            <div className="flex justify-center mb-4">
              <div className="p-2 sm:p-3 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full shadow-sm">
                <FaStar className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-500" />
              </div>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">Academic Journey</h3>
            <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base">
              My academic path has been marked by consistent excellence and recognition, from undergraduate studies in Pakistan to doctoral research in China. Each scholarship and award has fueled my commitment to advancing environmental science through innovative research and international collaboration.
            </p>
          </Motion.div>
        </div>
      </div>
    </section>
  );
};

export default Awards; 