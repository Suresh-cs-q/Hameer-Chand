import { FaHeart, FaEnvelope, FaMapMarkerAlt, FaGraduationCap, FaFlask, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Research", path: "/#research" },
    { name: "Publications", path: "/#publications" },
    { name: "Awards", path: "/#awards" },
    { name: "Contact", path: "/#contact" }
  ];
  
  const socialLinks = [
    {
      icon: <FaGraduationCap className="w-5 h-5" />,
      label: "Google Scholar",
      url: "https://scholar.google.com/citations?hl=en&user=wYbnj6kAAAAJ&view_op=list_works&sortby=pubdate"
    },
    {
      icon: <FaFlask className="w-5 h-5" />,
      label: "ResearchGate",
      url: "https://www.researchgate.net/profile/Hameer-Chand"
    },
    {
      icon: <FaLinkedin className="w-5 h-5" />,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/hameer-chand-352665b3/"
    }
  ];
  
  return (
    <footer className="bg-primary text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-semibold mb-4 border-b border-accent/30 pb-2">About</h3>
            <p className="text-gray-300 mb-4 text-sm sm:text-base">
              Environmental researcher focused on innovative solutions for water treatment and environmental protection at the University of Science and Technology of China.
            </p>
            <div className="flex items-center text-gray-300 text-sm sm:text-base">
              <FaMapMarkerAlt className="mr-2 text-accent flex-shrink-0" />
              <span>Hefei, Anhui, China</span>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="sm:px-4">
            <h3 className="text-xl font-semibold mb-4 border-b border-accent/30 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.path} 
                    className="text-gray-300 hover:text-accent transition-colors flex items-center text-sm sm:text-base"
                  >
                    <span className="mr-2">›</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Connect */}
          <div>
            <h3 className="text-xl font-semibold mb-4 border-b border-accent/30 pb-2">Connect</h3>
            <div className="flex flex-col space-y-3">
              <a 
                href="mailto:hameer@mail.ustc.edu.cn" 
                className="text-gray-300 hover:text-accent transition-colors flex items-center text-sm sm:text-base"
              >
                <FaEnvelope className="mr-2 text-accent flex-shrink-0" />
                <span className="break-all">hameer@mail.ustc.edu.cn</span>
              </a>
              
              <div className="flex flex-wrap gap-3 mt-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary-dark p-2 rounded-full hover:bg-accent transition-colors flex items-center"
                    aria-label={link.label}
                  >
                    <span className="sr-only">{link.label}</span>
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-300 text-sm sm:text-base">
            &copy; {currentYear} Hameer Chand. All rights reserved.
          </p>
          <p className="mt-2 text-xs sm:text-sm text-gray-400 flex items-center justify-center">
            Made with <FaHeart className="mx-1 text-red-400" /> for environmental research
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 