// import { useState, useEffect } from 'react';
// import { motion } from "framer-motion";
// import { FaReact } from "react-icons/fa";
// import { RiNextjsFill } from "react-icons/ri";
// import { RiTailwindCssFill } from "react-icons/ri";
// import { FaNodeJs } from "react-icons/fa";
// import { IoLogoJavascript } from "react-icons/io";
// import { SiTypescript } from "react-icons/si";
// import { SiRedis } from "react-icons/si";
// import { SiMongodb } from "react-icons/si";
// import { FaHtml5 } from "react-icons/fa";
// import { FaCss3Alt } from "react-icons/fa";
// import { SiPython } from "react-icons/si";
// import { FaAngular } from "react-icons/fa";
// import { SiSpringboot } from "react-icons/si";
// import { SiPostman } from "react-icons/si";
// import { FaJava } from "react-icons/fa";
// import { SiGooglecloud } from "react-icons/si";
// import { SiFirebase } from "react-icons/si";
// import { FaFigma } from "react-icons/fa6";
// import { SiMysql } from "react-icons/si";


// const technologies = [
//     { icon: <FaReact />, name: "React", link: "https://reactjs.org/", color: "text-cyan-400" },
//     { icon: <RiNextjsFill />, name: "Next.js", link: "https://nextjs.org/", color: "text-stone-200" },
//     { icon: <RiTailwindCssFill />, name: "Tailwind CSS", link: "https://tailwindcss.com/", color: "text-cyan-400" },
//     { icon: <FaHtml5 />, name: "HTML5", link: "https://developer.mozilla.org/en-US/docs/Web/HTML", color: "text-red-600" },
//     { icon: <FaCss3Alt />, name: "CSS3", link: "https://developer.mozilla.org/en-US/docs/Web/CSS", color: "text-blue-600" },
//     { icon: <FaNodeJs />, name: "Node.js", link: "https://nodejs.org/", color: "text-green-600" },
//     { icon: <SiRedis />, name: "Redis", link: "https://redis.io/", color: "text-orange-600" },
//     { icon: <SiMongodb />, name: "MongoDB", link: "https://www.mongodb.com/", color: "text-green-600" },
//     { icon: <SiSpringboot />, name: "Spring Boot", link: "https://spring.io/projects/spring-boot", color: "text-green-500" },
//     { icon: <SiPostman />, name: "Postman", link: "https://www.postman.com/", color: "text-orange-600" },
//     { icon: <IoLogoJavascript />, name: "JavaScript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", color: "text-yellow-500" },
//     { icon: <SiTypescript />, name: "TypeScript", link: "https://www.typescriptlang.org/", color: "text-blue-400" },
//     { icon: <SiPython />, name: "Python", link: "https://www.python.org/", color: "text-yellow-300" },
//     { icon: <FaJava />, name: "Java", link: "https://www.java.com/", color: "text-red-600" },
//     { icon: <FaAngular />, name: "Angular", link: "https://angular.io/", color: "text-red-600" }
// ];

// const Technologies = () => {
//     const [shuffledTech, setShuffledTech] = useState([]);

//     useEffect(() => {
//         const shuffleArray = (array) => {
//             const newArray = [...array];
//             for (let i = newArray.length - 1; i > 0; i--) {
//                 const j = Math.floor(Math.random() * (i + 1));
//                 [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
//             }
//             return newArray;
//         };

//         setShuffledTech(shuffleArray(technologies));
//     }, []);

//     const containerVariants = {
//         hidden: {},
//         visible: {
//             transition: {
//                 staggerChildren: 0.1
//             }
//         }
//     };

//     const itemVariants = {
//         hidden: {
//             opacity: 0,
//             scale: 0.3,
//             rotate: -20,
//         },
//         visible: {
//             opacity: 1,
//             scale: 1,
//             rotate: 0,
//             transition: {
//                 type: "spring",
//                 stiffness: 70,
//                 damping: 10,
//                 mass: 0.5
//             }
//         }
//     };

//     const floatingAnimation = {
//         y: [-5, 5],
//         transition: {
//             duration: 2,
//             repeat: Infinity,
//             repeatType: "reverse",
//             ease: "easeInOut"
//         }
//     };

//     return (
//         <div className="py-24 px-4 md:px-8 border-t border-cyan-950" id="tech">
//             <motion.h2
//                 className="mb-20 text-center text-4xl text-stone-200"
//                 initial={{ opacity: 0, y: -20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.8, delay: 0.2 }}
//             >
//                 Tech Stack
//             </motion.h2>
//             <motion.div
//                 className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
//                 variants={containerVariants}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true, margin: "-50px" }}
//             >
//                 {shuffledTech.map((tech, index) => (
//                     <motion.div
//                         key={index}
//                         className="group relative rounded-xl overflow-hidden"
//                         variants={itemVariants}
//                         whileHover={{ scale: 1.05 }}
//                         animate={floatingAnimation}
//                         custom={index}
//                     >
//                         <motion.div
//                             className="absolute inset-0 bg-gradient-to-br from-stone-800/50 to-stone-900/50 backdrop-blur-sm border border-stone-300/20 transition-all duration-300 group-hover:backdrop-blur-md"
//                             whileHover={{
//                                 backgroundColor: "rgba(0,0,0,0.7)",
//                                 transition: { duration: 0.3 }
//                             }}
//                         />

//                         <a
//                             href={tech.link}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="block p-8 relative z-10"
//                         >
//                             <motion.div
//                                 className="flex items-center justify-center"
//                                 whileHover={{ rotate: [0, -10, 10, -5, 5, 0] }}
//                                 transition={{ duration: 0.5 }}
//                             >
//                                 <motion.div
//                                     className={`text-5xl ${tech.color} transform transition-all duration-300 group-hover:scale-90 group-hover:opacity-50`}
//                                     whileHover={{ scale: 1.1 }}
//                                 >
//                                     {tech.icon}
//                                 </motion.div>
//                             </motion.div>

//                             <motion.div
//                                 className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//                                 initial={{ y: 20 }}
//                                 whileHover={{ y: 0 }}
//                             >
//                                 <span className="text-white text-lg font-medium bg-black/40 px-3 py-1 rounded-md backdrop-blur-sm">
//                                     {tech.name}
//                                 </span>
//                             </motion.div>
//                         </a>
//                     </motion.div>
//                 ))}
//             </motion.div>
//         </div>
//     );
// };

// export default Technologies;


// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJava, FaAngular, FaFigma } from "react-icons/fa";
// import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
// import { IoLogoJavascript } from "react-icons/io";
// import { SiTypescript, SiRedis, SiMongodb, SiPython, SiSpringboot, SiPostman, SiGooglecloud, SiFirebase, SiMysql } from "react-icons/si";

// const technologies = [
//     { icon: <FaReact />, name: "React", link: "https://reactjs.org/", color: "text-cyan-400", category: "Frontend" },
//     { icon: <RiNextjsFill />, name: "Next.js", link: "https://nextjs.org/", color: "text-stone-200", category: "Frontend" },
//     { icon: <RiTailwindCssFill />, name: "Tailwind CSS", link: "https://tailwindcss.com/", color: "text-cyan-400", category: "Frontend" },
//     { icon: <FaHtml5 />, name: "HTML5", link: "https://developer.mozilla.org/en-US/docs/Web/HTML", color: "text-red-600", category: "Frontend" },
//     { icon: <FaCss3Alt />, name: "CSS3", link: "https://developer.mozilla.org/en-US/docs/Web/CSS", color: "text-blue-600", category: "Frontend" },
//     { icon: <IoLogoJavascript />, name: "JavaScript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", color: "text-yellow-500", category: "Programming Languages" },
//     { icon: <SiTypescript />, name: "TypeScript", link: "https://www.typescriptlang.org/", color: "text-blue-400", category: "Programming Languages" },
//     { icon: <SiPython />, name: "Python", link: "https://www.python.org/", color: "text-yellow-300", category: "Programming Languages" },
//     { icon: <FaJava />, name: "Java", link: "https://www.java.com/", color: "text-red-600", category: "Programming Languages" },
//     { icon: <FaAngular />, name: "Angular", link: "https://angular.io/", color: "text-red-600", category: "Frontend" },
//     { icon: <FaNodeJs />, name: "Node.js", link: "https://nodejs.org/", color: "text-green-600", category: "Backend" },
//     { icon: <SiRedis />, name: "Redis", link: "https://redis.io/", color: "text-orange-600", category: "Backend" },
//     { icon: <SiMongodb />, name: "MongoDB", link: "https://www.mongodb.com/", color: "text-green-600", category: "Backend" },
//     { icon: <SiSpringboot />, name: "Spring Boot", link: "https://spring.io/projects/spring-boot", color: "text-green-500", category: "Backend" },
//     { icon: <SiMysql />, name: "MySQL", link: "https://www.mysql.com/", color: "text-blue-600", category: "Backend" },
//     { icon: <SiGooglecloud />, name: "Google Cloud", link: "https://cloud.google.com/", color: "text-blue-400", category: "Cloud" },
//     { icon: <SiFirebase />, name: "Firebase", link: "https://firebase.google.com/", color: "text-yellow-500", category: "Cloud" },
//     { icon: <SiPostman />, name: "Postman", link: "https://www.postman.com/", color: "text-orange-600", category: "Tools" },
//     { icon: <FaFigma />, name: "Figma", link: "https://www.figma.com/", color: "text-purple-400", category: "Tools" },
// ];

// const Technologies = () => {
//     const groupedTech = technologies.reduce((acc, tech) => {
//         acc[tech.category] = acc[tech.category] || [];
//         acc[tech.category].push(tech);
//         return acc;
//     }, {});

//     const containerVariants = {
//         hidden: {},
//         visible: {
//             transition: {
//                 staggerChildren: 0.1,
//             },
//         },
//     };

//     const itemVariants = {
//         hidden: {
//             opacity: 0,
//             scale: 0.3,
//             rotate: -20,
//         },
//         visible: {
//             opacity: 1,
//             scale: 1,
//             rotate: 0,
//             transition: {
//                 type: "spring",
//                 stiffness: 70,
//                 damping: 10,
//                 mass: 0.5,
//             },
//         },
//     };

//     const floatingAnimation = {
//         y: [-5, 5],
//         transition: {
//             duration: 2,
//             repeat: Infinity,
//             repeatType: "reverse",
//             ease: "easeInOut",
//         },
//     };

//     return (
//         <div className="py-24 px-4 md:px-8 border-t border-cyan-950" id="tech">
//             <motion.h2
//                 className="mb-20 text-center text-4xl text-stone-200"
//                 initial={{ opacity: 0, y: -20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.8, delay: 0.2 }}
//             >
//                 Tech Stack
//             </motion.h2>
//             <motion.div
//                 className="grid grid-rows-auto grid-flow-col gap-6"
//                 variants={containerVariants}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true, margin: "-50px" }}
//             >
//                 {Object.entries(groupedTech).map(([category, techs], index) => (
//                     <div key={index} className={`row-span-${techs.length} flex flex-col gap-4`}>
//                         <h3 className="text-xl font-bold text-stone-300">{category}</h3>
//                         {techs.map((tech, idx) => (
//                             <motion.div
//                                 key={idx}
//                                 className="group relative rounded-xl overflow-hidden"
//                                 variants={itemVariants}
//                                 whileHover={{ scale: 1.05 }}
//                                 animate={floatingAnimation}
//                             >
//                                 <a
//                                     href={tech.link}
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="block p-8 relative z-10"
//                                 >
//                                     <motion.div
//                                         className="flex items-center justify-center"
//                                         whileHover={{ rotate: [0, -10, 10, -5, 5, 0] }}
//                                         transition={{ duration: 0.5 }}
//                                     >
//                                         <motion.div
//                                             className={`text-5xl ${tech.color} transform transition-all duration-300 group-hover:scale-90 group-hover:opacity-50`}
//                                             whileHover={{ scale: 1.1 }}
//                                         >
//                                             {tech.icon}
//                                         </motion.div>
//                                     </motion.div>
//                                     <motion.div
//                                         className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//                                         initial={{ y: 20 }}
//                                         whileHover={{ y: 0 }}
//                                     >
//                                         <span className="text-white text-lg font-medium bg-black/40 px-3 py-1 rounded-md backdrop-blur-sm">
//                                             {tech.name}
//                                         </span>
//                                     </motion.div>
//                                 </a>
//                             </motion.div>
//                         ))}
//                     </div>
//                 ))}
//             </motion.div>
//         </div>
//     );
// };

// export default Technologies;


// import { useState, useEffect } from 'react';
// import { motion } from "framer-motion";
// import { FaReact } from "react-icons/fa";
// import { RiNextjsFill } from "react-icons/ri";
// import { RiTailwindCssFill } from "react-icons/ri";
// import { FaNodeJs } from "react-icons/fa";
// import { IoLogoJavascript } from "react-icons/io";
// import { SiTypescript } from "react-icons/si";
// import { SiRedis } from "react-icons/si";
// import { SiMongodb } from "react-icons/si";
// import { FaHtml5 } from "react-icons/fa";
// import { FaCss3Alt } from "react-icons/fa";
// import { SiPython } from "react-icons/si";
// import { FaAngular } from "react-icons/fa";
// import { SiSpringboot } from "react-icons/si";
// import { SiPostman } from "react-icons/si";
// import { FaJava } from "react-icons/fa";
// import { SiGooglecloud } from "react-icons/si";
// import { SiFirebase } from "react-icons/si";
// import { FaFigma } from "react-icons/fa6";
// import { SiMysql } from "react-icons/si";

// const technologiesByCategory = {
//     "Programming Languages": [
//         { icon: <IoLogoJavascript />, name: "JavaScript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", color: "text-yellow-500" },
//         { icon: <SiTypescript />, name: "TypeScript", link: "https://www.typescriptlang.org/", color: "text-blue-400" },
//         { icon: <SiPython />, name: "Python", link: "https://www.python.org/", color: "text-yellow-300" },
//         { icon: <FaJava />, name: "Java", link: "https://www.java.com/", color: "text-red-600" },
//     ],
//     "Frontend": [
//         { icon: <FaReact />, name: "React", link: "https://reactjs.org/", color: "text-cyan-400" },
//         { icon: <RiNextjsFill />, name: "Next.js", link: "https://nextjs.org/", color: "text-stone-200" },
//         { icon: <FaAngular />, name: "Angular", link: "https://angular.io/", color: "text-red-600" },
//         { icon: <RiTailwindCssFill />, name: "Tailwind CSS", link: "https://tailwindcss.com/", color: "text-cyan-400" },
//         { icon: <FaHtml5 />, name: "HTML5", link: "https://developer.mozilla.org/en-US/docs/Web/HTML", color: "text-red-600" },
//         { icon: <FaCss3Alt />, name: "CSS3", link: "https://developer.mozilla.org/en-US/docs/Web/CSS", color: "text-blue-600" },
//     ],
//     "Backend": [
//         { icon: <FaNodeJs />, name: "Node.js", link: "https://nodejs.org/", color: "text-green-600" },
//         { icon: <SiSpringboot />, name: "Spring Boot", link: "https://spring.io/projects/spring-boot", color: "text-green-500" },
//     ],
//     "Databases": [
//         { icon: <SiMongodb />, name: "MongoDB", link: "https://www.mongodb.com/", color: "text-green-600" },
//         { icon: <SiRedis />, name: "Redis", link: "https://redis.io/", color: "text-orange-600" },
//         { icon: <SiMysql />, name: "MySQL", link: "https://www.mysql.com/", color: "text-blue-500" },
//     ],
//     "Cloud & Tools": [
//         { icon: <SiGooglecloud />, name: "Google Cloud", link: "https://cloud.google.com/", color: "text-blue-400" },
//         { icon: <SiFirebase />, name: "Firebase", link: "https://firebase.google.com/", color: "text-yellow-500" },
//         { icon: <SiPostman />, name: "Postman", link: "https://www.postman.com/", color: "text-orange-600" },
//         { icon: <FaFigma />, name: "Figma", link: "https://www.figma.com/", color: "text-purple-500" },
//     ],
// };

// const Technologies = () => {
//     const [shuffledTechByCategory, setShuffledTechByCategory] = useState({});

//     useEffect(() => {
//         const shuffleArray = (array) => {
//             const newArray = [...array];
//             for (let i = newArray.length - 1; i > 0; i--) {
//                 const j = Math.floor(Math.random() * (i + 1));
//                 [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
//             }
//             return newArray;
//         };

//         const shuffledCategories = {};
//         Object.entries(technologiesByCategory).forEach(([category, techs]) => {
//             shuffledCategories[category] = shuffleArray(techs);
//         });
//         setShuffledTechByCategory(shuffledCategories);
//     }, []);

//     const containerVariants = {
//         hidden: {},
//         visible: {
//             transition: {
//                 staggerChildren: 0.1
//             }
//         }
//     };

//     const itemVariants = {
//         hidden: {
//             opacity: 0,
//             scale: 0.3,
//             rotate: -20,
//         },
//         visible: {
//             opacity: 1,
//             scale: 1,
//             rotate: 0,
//             transition: {
//                 type: "spring",
//                 stiffness: 70,
//                 damping: 10,
//                 mass: 0.5
//             }
//         }
//     };

//     const floatingAnimation = {
//         y: [-5, 5],
//         transition: {
//             duration: 2,
//             repeat: Infinity,
//             repeatType: "reverse",
//             ease: "easeInOut"
//         }
//     };

//     return (
//         <div className="py-24 px-4 md:px-8 border-t border-cyan-950" id="tech">
//             <motion.h2
//                 className="mb-20 text-center text-4xl text-stone-200"
//                 initial={{ opacity: 0, y: -20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.8, delay: 0.2 }}
//             >
//                 Tech Stack
//             </motion.h2>
//             <div className="space-y-16">
//                 {Object.entries(shuffledTechByCategory).map(([category, techs]) => (
//                     <div key={category} className="space-y-6">
//                         <motion.h3
//                             className="text-2xl text-stone-200 mb-8"
//                             initial={{ opacity: 0, x: -20 }}
//                             whileInView={{ opacity: 1, x: 0 }}
//                             viewport={{ once: true }}
//                             transition={{ duration: 0.6 }}
//                         >
//                             {category}
//                         </motion.h3>
//                         <motion.div
//                             className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
//                             variants={containerVariants}
//                             initial="hidden"
//                             whileInView="visible"
//                             viewport={{ once: true, margin: "-50px" }}
//                         >
//                             {techs.map((tech, index) => (
//                                 <motion.div
//                                     key={index}
//                                     className="group relative rounded-xl overflow-hidden"
//                                     variants={itemVariants}
//                                     whileHover={{ scale: 1.05 }}
//                                     animate={floatingAnimation}
//                                     custom={index}
//                                 >
//                                     <motion.div
//                                         className="absolute inset-0 bg-gradient-to-br from-stone-800/50 to-stone-900/50 backdrop-blur-sm border border-stone-300/20 transition-all duration-300 group-hover:backdrop-blur-md"
//                                         whileHover={{
//                                             backgroundColor: "rgba(0,0,0,0.7)",
//                                             transition: { duration: 0.3 }
//                                         }}
//                                     />

//                                     <a
//                                         href={tech.link}
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                         className="block p-8 relative z-10"
//                                     >
//                                         <motion.div
//                                             className="flex items-center justify-center"
//                                             whileHover={{ rotate: [0, -10, 10, -5, 5, 0] }}
//                                             transition={{ duration: 0.5 }}
//                                         >
//                                             <motion.div
//                                                 className={`text-5xl ${tech.color} transform transition-all duration-300 group-hover:scale-90 group-hover:opacity-50`}
//                                                 whileHover={{ scale: 1.1 }}
//                                             >
//                                                 {tech.icon}
//                                             </motion.div>
//                                         </motion.div>

//                                         <motion.div
//                                             className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//                                             initial={{ y: 20 }}
//                                             whileHover={{ y: 0 }}
//                                         >
//                                             <span className="text-white text-lg font-medium bg-black/40 px-3 py-1 rounded-md backdrop-blur-sm">
//                                                 {tech.name}
//                                             </span>
//                                         </motion.div>
//                                     </a>
//                                 </motion.div>
//                             ))}
//                         </motion.div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Technologies;



// import { useState, useEffect } from 'react';
// import { motion } from "framer-motion";
// import { FaReact } from "react-icons/fa";
// import { RiNextjsFill } from "react-icons/ri";
// import { RiTailwindCssFill } from "react-icons/ri";
// import { FaNodeJs } from "react-icons/fa";
// import { IoLogoJavascript } from "react-icons/io";
// import { SiTypescript } from "react-icons/si";
// import { SiRedis } from "react-icons/si";
// import { SiMongodb } from "react-icons/si";
// import { FaHtml5 } from "react-icons/fa";
// import { FaCss3Alt } from "react-icons/fa";
// import { SiPython } from "react-icons/si";
// import { FaAngular } from "react-icons/fa";
// import { SiSpringboot } from "react-icons/si";
// import { SiPostman } from "react-icons/si";
// import { FaJava } from "react-icons/fa";
// import { SiGooglecloud } from "react-icons/si";
// import { SiFirebase } from "react-icons/si";
// import { FaFigma } from "react-icons/fa6";
// import { SiMysql } from "react-icons/si";

// const technologiesByCategory = {
//     "Programming Languages": [
//         { icon: <IoLogoJavascript />, name: "JavaScript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", color: "text-yellow-500" },
//         { icon: <SiTypescript />, name: "TypeScript", link: "https://www.typescriptlang.org/", color: "text-blue-400" },
//         { icon: <SiPython />, name: "Python", link: "https://www.python.org/", color: "text-yellow-300" },
//         { icon: <FaJava />, name: "Java", link: "https://www.java.com/", color: "text-red-600" },
//     ],
//     "Frontend": [
//         { icon: <FaReact />, name: "React", link: "https://reactjs.org/", color: "text-cyan-400" },
//         { icon: <RiNextjsFill />, name: "Next.js", link: "https://nextjs.org/", color: "text-stone-200" },
//         { icon: <FaAngular />, name: "Angular", link: "https://angular.io/", color: "text-red-600" },
//         { icon: <RiTailwindCssFill />, name: "Tailwind CSS", link: "https://tailwindcss.com/", color: "text-cyan-400" },
//         { icon: <FaHtml5 />, name: "HTML5", link: "https://developer.mozilla.org/en-US/docs/Web/HTML", color: "text-red-600" },
//         { icon: <FaCss3Alt />, name: "CSS3", link: "https://developer.mozilla.org/en-US/docs/Web/CSS", color: "text-blue-600" },
//     ],
//     "Backend": [
//         { icon: <FaNodeJs />, name: "Node.js", link: "https://nodejs.org/", color: "text-green-600" },
//         { icon: <SiSpringboot />, name: "Spring Boot", link: "https://spring.io/projects/spring-boot", color: "text-green-500" },
//     ],
//     "Databases": [
//         { icon: <SiMongodb />, name: "MongoDB", link: "https://www.mongodb.com/", color: "text-green-600" },
//         { icon: <SiRedis />, name: "Redis", link: "https://redis.io/", color: "text-orange-600" },
//         { icon: <SiMysql />, name: "MySQL", link: "https://www.mysql.com/", color: "text-blue-500" },
//     ],
//     "Cloud & Tools": [
//         { icon: <SiGooglecloud />, name: "Google Cloud", link: "https://cloud.google.com/", color: "text-blue-400" },
//         { icon: <SiFirebase />, name: "Firebase", link: "https://firebase.google.com/", color: "text-yellow-500" },
//         { icon: <SiPostman />, name: "Postman", link: "https://www.postman.com/", color: "text-orange-600" },
//         { icon: <FaFigma />, name: "Figma", link: "https://www.figma.com/", color: "text-purple-500" },
//     ],
// };

// const Technologies = () => {
//     const [shuffledTechByCategory, setShuffledTechByCategory] = useState({});
//     const [selectedCategory, setSelectedCategory] = useState(null);

//     useEffect(() => {
//         const shuffleArray = (array) => {
//             const newArray = [...array];
//             for (let i = newArray.length - 1; i > 0; i--) {
//                 const j = Math.floor(Math.random() * (i + 1));
//                 [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
//             }
//             return newArray;
//         };

//         const shuffledCategories = {};
//         Object.entries(technologiesByCategory).forEach(([category, techs]) => {
//             shuffledCategories[category] = shuffleArray(techs);
//         });
//         setShuffledTechByCategory(shuffledCategories);
//         setSelectedCategory(Object.keys(technologiesByCategory)[0]);
//     }, []);

//     const containerVariants = {
//         hidden: {},
//         visible: {
//             transition: {
//                 staggerChildren: 0.1
//             }
//         }
//     };

//     const itemVariants = {
//         hidden: {
//             opacity: 0,
//             scale: 0.3,
//             rotate: -20,
//         },
//         visible: {
//             opacity: 1,
//             scale: 1,
//             rotate: 0,
//             transition: {
//                 type: "spring",
//                 stiffness: 70,
//                 damping: 10,
//                 mass: 0.5
//             }
//         }
//     };

//     const floatingAnimation = {
//         y: [-5, 5],
//         transition: {
//             duration: 2,
//             repeat: Infinity,
//             repeatType: "reverse",
//             ease: "easeInOut"
//         }
//     };

//     return (
//         <div className="py-24 px-4 md:px-8 border-t border-cyan-950" id="tech">
//             <motion.h2
//                 className="mb-12 text-center text-4xl text-stone-200"
//                 initial={{ opacity: 0, y: -20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.8, delay: 0.2 }}
//             >
//                 Tech Stack
//             </motion.h2>

//             {/* Category Navigation */}
//             <motion.div
//                 className="flex flex-wrap justify-center gap-4 mb-16"
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6 }}
//             >
//                 {Object.keys(technologiesByCategory).map((category) => (
//                     <motion.button
//                         key={category}
//                         className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 border backdrop-blur-sm
//                             ${selectedCategory === category
//                                 ? 'border-cyan-400 text-cyan-400 bg-cyan-400/10'
//                                 : 'border-stone-700 text-stone-400 hover:border-stone-500 hover:text-stone-300'}`}
//                         onClick={() => setSelectedCategory(category)}
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                     >
//                         {category}
//                     </motion.button>
//                 ))}
//             </motion.div>

//             {/* Tech Grid */}
//             <div className="relative">
//                 {Object.entries(shuffledTechByCategory).map(([category, techs]) => (
//                     <motion.div
//                         key={category}
//                         className="space-y-8"
//                         initial={{ opacity: 0, x: 20 }}
//                         animate={{
//                             opacity: selectedCategory === category ? 1 : 0,
//                             x: selectedCategory === category ? 0 : 20,
//                             display: selectedCategory === category ? 'block' : 'none'
//                         }}
//                         transition={{ duration: 0.5 }}
//                     >
//                         <motion.div
//                             className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
//                             variants={containerVariants}
//                             initial="hidden"
//                             whileInView="visible"
//                             viewport={{ once: true, margin: "-50px" }}
//                         >
//                             {techs.map((tech, index) => (
//                                 <motion.div
//                                     key={index}
//                                     className="group relative rounded-xl overflow-hidden"
//                                     variants={itemVariants}
//                                     whileHover={{ scale: 1.05 }}
//                                     animate={floatingAnimation}
//                                     custom={index}
//                                 >
//                                     <motion.div
//                                         className="absolute inset-0 bg-gradient-to-br from-stone-800/50 to-stone-900/50 backdrop-blur-sm border border-stone-300/20 transition-all duration-300 group-hover:backdrop-blur-md group-hover:border-cyan-500/30"
//                                         whileHover={{
//                                             backgroundColor: "rgba(0,0,0,0.7)",
//                                             transition: { duration: 0.3 }
//                                         }}
//                                     />

//                                     <a
//                                         href={tech.link}
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                         className="block p-8 relative z-10"
//                                     >
//                                         <motion.div
//                                             className="flex items-center justify-center"
//                                             whileHover={{ rotate: [0, -10, 10, -5, 5, 0] }}
//                                             transition={{ duration: 0.5 }}
//                                         >
//                                             <motion.div
//                                                 className={`text-5xl ${tech.color} transform transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-lg`}
//                                                 whileHover={{ scale: 1.1 }}
//                                             >
//                                                 {tech.icon}
//                                             </motion.div>
//                                         </motion.div>

//                                         <motion.div
//                                             className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//                                             initial={{ y: 20 }}
//                                             whileHover={{ y: 0 }}
//                                         >
//                                             <span className="text-white text-lg font-medium bg-black/60 px-4 py-2 rounded-lg backdrop-blur-md border border-stone-500/30">
//                                                 {tech.name}
//                                             </span>
//                                         </motion.div>
//                                     </a>
//                                 </motion.div>
//                             ))}
//                         </motion.div>
//                     </motion.div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Technologies;



import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { SiRedis } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiPython } from "react-icons/si";
import { FaAngular } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { SiGooglecloud } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { FaFigma } from "react-icons/fa6";
import { SiMysql } from "react-icons/si";

const technologiesByCategory = {
    "Programming Languages": [
        { icon: <IoLogoJavascript />, name: "JavaScript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", color: "text-yellow-500" },
        { icon: <SiTypescript />, name: "TypeScript", link: "https://www.typescriptlang.org/", color: "text-blue-400" },
        { icon: <SiPython />, name: "Python", link: "https://www.python.org/", color: "text-yellow-300" },
        { icon: <FaJava />, name: "Java", link: "https://www.java.com/", color: "text-red-600" },
    ],
    "Frontend": [
        { icon: <FaReact />, name: "React", link: "https://reactjs.org/", color: "text-cyan-400" },
        { icon: <RiNextjsFill />, name: "Next.js", link: "https://nextjs.org/", color: "text-stone-200" },
        { icon: <FaAngular />, name: "Angular", link: "https://angular.io/", color: "text-red-600" },
        { icon: <RiTailwindCssFill />, name: "Tailwind CSS", link: "https://tailwindcss.com/", color: "text-cyan-400" },
        { icon: <FaHtml5 />, name: "HTML5", link: "https://developer.mozilla.org/en-US/docs/Web/HTML", color: "text-red-600" },
        { icon: <FaCss3Alt />, name: "CSS3", link: "https://developer.mozilla.org/en-US/docs/Web/CSS", color: "text-blue-600" },
    ],
    "Backend": [
        { icon: <FaNodeJs />, name: "Node.js", link: "https://nodejs.org/", color: "text-green-600" },
        { icon: <SiSpringboot />, name: "Spring Boot", link: "https://spring.io/projects/spring-boot", color: "text-green-500" },
    ],
    "Databases": [
        { icon: <SiMongodb />, name: "MongoDB", link: "https://www.mongodb.com/", color: "text-green-600" },
        { icon: <SiRedis />, name: "Redis", link: "https://redis.io/", color: "text-orange-600" },
        { icon: <SiMysql />, name: "MySQL", link: "https://www.mysql.com/", color: "text-blue-500" },
    ],
    "Cloud & Tools": [
        { icon: <SiGooglecloud />, name: "Google Cloud", link: "https://cloud.google.com/", color: "text-blue-400" },
        { icon: <SiFirebase />, name: "Firebase", link: "https://firebase.google.com/", color: "text-yellow-500" },
        { icon: <SiPostman />, name: "Postman", link: "https://www.postman.com/", color: "text-orange-600" },
        { icon: <FaFigma />, name: "Figma", link: "https://www.figma.com/", color: "text-purple-500" },
    ],
};

const Technologies = () => {
    const [shuffledTechByCategory, setShuffledTechByCategory] = useState({});
    const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(() => {
        const shuffleArray = (array) => {
            const newArray = [...array];
            for (let i = newArray.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
            }
            return newArray;
        };

        const shuffledCategories = {};
        Object.entries(technologiesByCategory).forEach(([category, techs]) => {
            shuffledCategories[category] = shuffleArray(techs);
        });
        setShuffledTechByCategory(shuffledCategories);
        setSelectedCategory(Object.keys(technologiesByCategory)[0]);
    }, []);

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            scale: 0.3,
            rotate: -20,
        },
        visible: {
            opacity: 1,
            scale: 1,
            rotate: 0,
            transition: {
                type: "spring",
                stiffness: 70,
                damping: 10,
                mass: 0.5
            }
        }
    };

    const gridVariants = {
        enter: {
            opacity: 0,
            x: 20,
            transition: {
                duration: 0.3
            }
        },
        center: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.3
            }
        },
        exit: {
            opacity: 0,
            x: -20,
            transition: {
                duration: 0.3
            }
        }
    };

    const floatingAnimation = {
        y: [-5, 5],
        transition: {
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
        }
    };

    return (
        <div className="py-24 px-4 md:px-8 border-t border-cyan-950" id="tech">
            <motion.h2
                className="mb-12 text-center text-4xl text-stone-200"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                Tech Stack
            </motion.h2>

            <motion.div
                className="flex flex-wrap justify-center gap-4 mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                {Object.keys(technologiesByCategory).map((category) => (
                    <motion.button
                        key={category}
                        className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 border backdrop-blur-sm
                            ${selectedCategory === category
                                ? 'border-cyan-400 text-cyan-400 bg-cyan-400/10'
                                : 'border-stone-700 text-stone-400 hover:border-stone-500 hover:text-stone-300'}`}
                        onClick={() => setSelectedCategory(category)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {category}
                    </motion.button>
                ))}
            </motion.div>

            <div className="relative min-h-[400px] lg:min-h-[300px]">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedCategory}
                        variants={gridVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        className="absolute w-full"
                    >
                        <motion.div
                            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 lg:justify-items-centre lg:w-fit lg:mx-auto"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                        >
                            {shuffledTechByCategory[selectedCategory]?.map((tech, index) => (
                                <motion.div
                                    key={index}
                                    className="group relative rounded-xl overflow-hidden"
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.05 }}
                                    animate={floatingAnimation}
                                    custom={index}
                                >
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-br from-stone-800/50 to-stone-900/50 backdrop-blur-sm border border-stone-300/20 transition-all duration-300 group-hover:backdrop-blur-md group-hover:border-cyan-500/30"
                                        whileHover={{
                                            backgroundColor: "rgba(0,0,0,0.7)",
                                            transition: { duration: 0.3 }
                                        }}
                                    />

                                    <a
                                        href={tech.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block p-8 relative z-10"
                                    >
                                        <motion.div
                                            className="flex items-center justify-center"
                                            whileHover={{ rotate: [0, -10, 10, -5, 5, 0] }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            <motion.div
                                                className={`text-5xl ${tech.color} transform transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-lg`}
                                                whileHover={{ scale: 1.1 }}
                                            >
                                                {tech.icon}
                                            </motion.div>
                                        </motion.div>

                                        <motion.div
                                            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                            initial={{ y: 20 }}
                                            whileHover={{ y: 0 }}
                                        >
                                            <span className="text-white text-xs font-medium bg-black/60 px-4 py-2 rounded-lg backdrop-blur-md border border-stone-500/30">
                                                {tech.name}
                                            </span>
                                        </motion.div>
                                    </a>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Technologies;