import { motion as Motion } from 'framer-motion';
import { FaFlask, FaFileAlt, FaExternalLinkAlt, FaUserAlt, FaCalendarAlt, FaQuoteLeft, FaChartLine, FaNewspaper, FaLink } from 'react-icons/fa';

const Research = () => {
  const researchPapers = [
    {
      title: "Performance and Mechanism of Chromium Removal Using Flow Electrode Capacitive Deionization (FCDI): Validation and Optimization",
      year: "2024",
      journal: "Separation and Purification Technology",
      impactFactor: "8.2",
      role: "First Author",
      link: "https://www.sciencedirect.com/science/article/pii/S1383586624004350",
      abstract: "This study optimized FCDI with carbon nanotube-enhanced electrodes for Cr(VI) removal. Adding 1.5% CNTs boosted conductivity, achieving 99.5% removal at 0.9 V. High chloride levels did not hinder efficiency, and Cr(VI) was detoxified to Cr(III). The work highlights FCDI's eco-friendly potential for heavy metal remediation via conductive, scalable electrode design."
    },
    {
      title: "Development of a Lanthanum-Based Metal–Organic Framework Electrode for Highly Selective Fluoride Removal by Capacitive Deionization (CDI): Performances and Mechanisms",
      year: "2024",
      journal: "Chemical Engineering Journal",
      impactFactor: "13.4",
      role: "Co-author",
      link: "https://doi.org/10.1016/j.cej.2024.149657",
      abstract: "A carbonized LaBDC/C-NH2 electrode achieved 73.8 mg g⁻¹ fluoride adsorption (15× higher than AC) with 56.52 F⁻/Cl⁻ selectivity. Low energy use (8 kWh kg⁻¹) and stable performance over 10 cycles underscore its viability for industrial wastewater treatment. DFT/XPS revealed charge attraction and ion exchange as key removal mechanisms."
    },
    {
      title: "Mixed Veterinary Antibiotics Removal and Effects on Anaerobic Digestion of Animal Wastes: Current Practices and Future Perspectives",
      year: "2024",
      journal: "Chemical Engineering Journal",
      impactFactor: "13.4",
      role: "Co-author",
      link: "https://doi.org/10.1016/j.cej.2024.149131",
      abstract: "This review analyzed mixed antibiotics' (TCs, FQs, SAs) impact on anaerobic digestion (AD). MVAs reduced removal efficiency (~60%) and biogas yield, with TCs being most inhibitory. Inoculum content mitigated effects, though microbial impacts remain unclear. The work calls for deeper investigation into AD's role in addressing antibiotic mixtures in waste."
    },
    {
      title: "Impacts of Draw Solutes on the Fate of Tetracycline in an Osmotic Membrane Bioreactor: Role of the Combination Between Membrane Fouling and Microorganisms",
      year: "2023",
      journal: "Journal of Hazardous Materials",
      impactFactor: "12.2",
      role: "Co-author",
      link: "https://linkinghub.elsevier.com/retrieve/pii/S0304389423015297",
      abstract: "OMBR retained >99% tetracycline via membrane rejection and fouling-layer biodegradation. Fouling enhanced hydrophilicity and hosted degrading microbes. Electrostatic repulsion (path coefficient: 0.655) dominated over microbial degradation (0.395). Findings emphasize fouling's dual role in tetracycline removal, guiding OMBR optimization for pharmaceutical wastewater."
    },
    {
      title: "Deciphering of Microbial Community and Antibiotic Resistance Genes to the Selection Pressures of Antibiotic Concentration in Aerobic Activated Sludge Reactors",
      year: "2023",
      journal: "Journal of Water Process Engineering",
      impactFactor: "6.3",
      role: "First Author",
      link: "https://doi.org/10.1016/j.jwpe.2023.103499",
      abstract: "Higher initial SDZ/TC-HCl concentrations reduced ARG abundance but diversified microbial communities, affecting biodegradation. Final antibiotic concentration correlated with ARG levels, driven by host bacteria proliferation. The study links antibiotic dosing, microbial dynamics, and ARG spread, aiding strategies to curb resistance in wastewater systems."
    },
    {
      title: "Shedding Light on the Transfer of Tetracycline in Forward Osmosis Through Experimental Investigation and Machine Learning Modeling",
      year: "2023",
      journal: "Chemosphere",
      impactFactor: "8.3",
      role: "Co-author",
      link: "https://www.sciencedirect.com/science/article/pii/S0045653523002266",
      abstract: "FO tetracycline rejection was modeled via ANN, revealing convection, steric hindrance, and electrostatic interactions as key factors. Low draw pH and solute-specific effects enhanced retention. The model predicted transfer dynamics, offering insights for optimizing FO in pharmaceutical wastewater treatment."
    },
    {
      title: "New Insights into the Role of Molecular Structures on the Fate and Behavior of Antibiotics in an Osmotic Membrane Bioreactor",
      year: "2022",
      journal: "Journal of Hazardous Materials",
      impactFactor: "12.2",
      role: "Co-author",
      link: "https://www.sciencedirect.com/science/article/pii/S0304389421020082",
      abstract: "OMBRs removed TC-HCl via adsorption/biodegradation (80–91%) and SDZ via membrane rejection (17–75%). TC-HCl's π-π/hydrogen bonding enhanced adsorption, while SDZ removal relied on concentration-dependent electrostatic interactions. Degradation pathways reduced TC-HCl toxicity, informing OMBR design for antibiotic-laden wastewater."
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
    <section id="research" className="min-h-screen pt-20 pb-24 bg-gradient-to-b from-blue-50 to-white">
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
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 transform -translate-y-1/2 z-0"></div>
              <h2 className="inline-block bg-gradient-to-r from-white to-white px-4 sm:px-6 py-1 text-2xl sm:text-3xl md:text-4xl font-bold text-primary relative z-10">
                Research Publications
              </h2>
            </Motion.div>
            
            <Motion.p 
              variants={fadeInUp}
              className="text-center text-gray-600 max-w-3xl mx-auto mb-8 sm:mb-12 text-sm sm:text-base md:text-lg"
            >
              My research focuses on developing innovative solutions for environmental challenges, particularly in wastewater treatment, capacitive deionization, and antibiotic removal technologies.
            </Motion.p>

            <Motion.div 
              variants={fadeInUp}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 sm:mb-12"
            >
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-4 sm:p-6 rounded-xl shadow-sm">
                <div className="flex items-center mb-3">
                  <div className="p-2 sm:p-3 rounded-full bg-primary/10 mr-3">
                    <FaFlask className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-primary">Research Focus</h3>
                </div>
                <p className="text-gray-600 text-sm sm:text-base">
                  Specializing in advanced wastewater treatment technologies, with emphasis on capacitive deionization, membrane processes, and antibiotic degradation mechanisms.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-accent/5 to-primary/5 p-4 sm:p-6 rounded-xl shadow-sm">
                <div className="flex items-center mb-3">
                  <div className="p-2 sm:p-3 rounded-full bg-accent/10 mr-3">
                    <FaChartLine className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-accent">Publication Impact</h3>
                </div>
                <p className="text-gray-600 text-sm sm:text-base">
                  Published in high-impact journals with cumulative impact factor over 70, contributing significant advancements to environmental engineering and water treatment fields.
                </p>
              </div>
            </Motion.div>
            
            <div className="space-y-6 sm:space-y-8">
              {researchPapers.map((paper, index) => (
                <Motion.div
                  key={index}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={itemVariants}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
                >
                  <div className="border-l-4 border-accent">
                    <div className="p-4 sm:p-6">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
                        <div className="flex-1 mb-3 sm:mb-0">
                          <h3 className="text-lg sm:text-xl font-bold text-primary mb-2 leading-tight">
                            {paper.title}
                          </h3>
                          <div className="flex items-center text-xs sm:text-sm text-accent font-medium mb-3">
                            <FaCalendarAlt className="mr-2 flex-shrink-0" />
                            <span>{paper.year}</span>
                          </div>
                        </div>
                        <div className="bg-gradient-to-r from-primary to-accent text-white text-xs sm:text-sm font-bold px-3 py-1 rounded-full sm:ml-4 flex-shrink-0 self-start mb-3 sm:mb-0 inline-flex">
                          IF: {paper.impactFactor}
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap items-center mb-4 text-xs sm:text-sm">
                        <div className="flex items-center mr-4 mb-2">
                          <FaNewspaper className="text-gray-500 mr-2 flex-shrink-0" />
                          <span className="text-gray-700 font-medium italic">{paper.journal}</span>
                        </div>
                        
                        <div className="flex items-center mr-4 mb-2">
                          <FaUserAlt className="text-gray-500 mr-2 flex-shrink-0" />
                          <span className={`font-medium ${paper.role.includes('First') ? 'text-accent' : 'text-gray-700'}`}>
                            {paper.role}
                          </span>
                        </div>
                      </div>

                      <Motion.a 
                        href={paper.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-primary/10 to-accent/10 hover:from-primary/20 hover:to-accent/20 text-primary font-medium rounded-md mb-4 sm:mb-5 border border-accent/20 transition-all duration-300 text-xs sm:text-sm"
                        whileHover={{ scale: 1.03, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <FaLink className="mr-2 text-accent" />
                        <span>View Publication</span>
                        <FaExternalLinkAlt className="ml-2 text-xs" />
                      </Motion.a>
                      
                      <div className="relative pl-4 sm:pl-6 border-l-2 border-gray-200 mt-4 sm:mt-5">
                        <FaQuoteLeft className="absolute top-0 left-[-10px] text-accent/20 text-base sm:text-lg" />
                        <p className="text-gray-600 italic text-xs sm:text-sm">
                          {paper.abstract}
                        </p>
                      </div>
                    </div>
                  </div>
                </Motion.div>
              ))}
            </div>
          </Motion.div>
          
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-gradient-to-r from-primary to-accent p-4 sm:p-8 rounded-xl shadow-lg text-white text-center"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Research Collaboration</h3>
            <p className="mb-4 sm:mb-6 text-sm sm:text-base">Interested in collaborating on environmental engineering research or learning more about my work?</p>
            <Motion.button
              whileHover={{ y: -3, boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)" }}
              whileTap={{ y: 0 }}
              className="bg-white text-primary font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-sm sm:text-base"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Get in Touch
            </Motion.button>
          </Motion.div>
        </div>
      </div>
    </section>
  );
};

export default Research; 