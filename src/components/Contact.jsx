import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaFlask, FaGraduationCap } from 'react-icons/fa';

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="w-5 h-5 text-accent" />,
      label: "Address",
      value: "University of Science and Technology of China, Anhui, Hefei, China"
    },
    {
      icon: <FaPhone className="w-5 h-5 text-accent" />,
      label: "Phone",
      value: "+8617855105152",
      link: "tel:+8617855105152"
    },
    {
      icon: <FaEnvelope className="w-5 h-5 text-accent" />,
      label: "Email",
      value: "hameer@mail.ustc.edu.cn",
      link: "mailto:hameer@mail.ustc.edu.cn"
    }
  ];

  const socialLinks = [
    {
      icon: <FaGraduationCap className="w-6 h-6" />,
      label: "Google Scholar",
      url: "https://scholar.google.com/citations?hl=en&user=wYbnj6kAAAAJ&view_op=list_works&sortby=pubdate"
    },
    {
      icon: <FaFlask className="w-6 h-6" />,
      label: "ResearchGate",
      url: "https://www.researchgate.net/profile/Hameer-Chand"
    },
    {
      icon: <FaLinkedin className="w-6 h-6" />,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/hameer-chand-352665b3/"
    }
  ];

  return (
    <section id="contact" className="min-h-screen pt-16 pb-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="px-4 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary text-center mb-4">Contact Me</h2>
            <p className="text-center text-gray-600 max-w-3xl mx-auto text-sm sm:text-base">
              I'm always open to discussing research collaborations, academic opportunities, or answering questions about my work. Feel free to reach out!
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 sm:p-8 rounded-lg shadow-md"
            >
              <div className="space-y-6 sm:space-y-8 mb-8 sm:mb-10">
                {contactInfo.map((info, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-start"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className="p-2 sm:p-3 rounded-full bg-accent/10 mr-3 sm:mr-4 flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-medium text-primary">{info.label}</h4>
                      {info.link ? (
                        <a 
                          href={info.link} 
                          className="text-gray-600 hover:text-accent transition-colors text-sm sm:text-base break-words"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-600 text-sm sm:text-base">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                <h3 className="text-lg sm:text-xl font-semibold text-primary mb-4 sm:mb-6 border-b pb-2">Connect With Me</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-3 rounded-lg bg-gray-50 hover:bg-accent/10 transition-colors group"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      aria-label={link.label}
                    >
                      <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-accent mr-3 group-hover:text-accent/80 transition-colors flex-shrink-0">
                        {link.icon}
                      </div>
                      <span className="text-gray-700 group-hover:text-accent transition-colors text-sm sm:text-base">{link.label}</span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 