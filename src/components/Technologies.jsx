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
import { FaJava } from "react-icons/fa"; // Java icon import


const Technologies = () => {
    return (
        <div className="pb-24 border-t border-stone-900" id="tech">
            <h2 className="my-20 text-center text-4xl text-stone-200">Tech Stack</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 px-8">
                {/* Frontend */}
                <div className="flex flex-col items-center justify-center text-center group bg-transparent border-2 border-transparent hover:border-cyan-500 p-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                    <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
                        <FaReact className="text-6xl text-cyan-400 group-hover:scale-110 transition-transform duration-300 animate-pulse" />
                    </a>
                    <p className="mt-2 text-stone-300 group-hover:text-stone-100">React</p>
                </div>
                <div className="flex flex-col items-center justify-center text-center group bg-transparent border-2 border-transparent hover:border-stone-300 p-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                    <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
                        <RiNextjsFill className="text-6xl text-stone-200 group-hover:scale-110 transition-transform duration-300 animate-pulse" />
                    </a>
                    <p className="mt-2 text-stone-300 group-hover:text-stone-100">Next.js</p>
                </div>
                <div className="flex flex-col items-center justify-center text-center group bg-transparent border-2 border-transparent hover:border-cyan-500 p-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                    <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">
                        <RiTailwindCssFill className="text-6xl text-cyan-400 group-hover:scale-110 transition-transform duration-300 animate-pulse" />
                    </a>
                    <p className="mt-2 text-stone-300 group-hover:text-stone-100">Tailwind CSS</p>
                </div>
                <div className="flex flex-col items-center justify-center text-center group bg-transparent border-2 border-transparent hover:border-red-600 p-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                    <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer">
                        <FaHtml5 className="text-6xl text-red-600 group-hover:scale-110 transition-transform duration-300 animate-pulse" />
                    </a>
                    <p className="mt-2 text-stone-300 group-hover:text-stone-100">HTML5</p>
                </div>
                <div className="flex flex-col items-center justify-center text-center group bg-transparent border-2 border-transparent hover:border-blue-600 p-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer">
                        <FaCss3Alt className="text-6xl text-blue-600 group-hover:scale-110 transition-transform duration-300 animate-pulse" />
                    </a>
                    <p className="mt-2 text-stone-300 group-hover:text-stone-100">CSS3</p>
                </div>

                {/* Backend */}
                <div className="flex flex-col items-center justify-center text-center group bg-transparent border-2 border-transparent hover:border-green-600 p-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                    <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">
                        <FaNodeJs className="text-6xl text-green-600 group-hover:scale-110 transition-transform duration-300 animate-pulse" />
                    </a>
                    <p className="mt-2 text-stone-300 group-hover:text-stone-100">Node.js</p>
                </div>
                <div className="flex flex-col items-center justify-center text-center group bg-transparent border-2 border-transparent hover:border-orange-600 p-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                    <a href="https://redis.io/" target="_blank" rel="noopener noreferrer">
                        <SiRedis className="text-6xl text-orange-600 group-hover:scale-110 transition-transform duration-300 animate-pulse" />
                    </a>
                    <p className="mt-2 text-stone-300 group-hover:text-stone-100">Redis</p>
                </div>
                <div className="flex flex-col items-center justify-center text-center group bg-transparent border-2 border-transparent hover:border-green-600 p-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                    <a href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer">
                        <SiMongodb className="text-6xl text-green-600 group-hover:scale-110 transition-transform duration-300 animate-pulse" />
                    </a>
                    <p className="mt-2 text-stone-300 group-hover:text-stone-100">MongoDB</p>
                </div>
                <div className="flex flex-col items-center justify-center text-center group bg-transparent border-2 border-transparent hover:border-green-500 p-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                    <a href="https://spring.io/projects/spring-boot" target="_blank" rel="noopener noreferrer">
                        <SiSpringboot className="text-6xl text-green-500 group-hover:scale-110 transition-transform duration-300 animate-pulse" />
                    </a>
                    <p className="mt-2 text-stone-300 group-hover:text-stone-100">Spring Boot</p>
                </div>
                <div className="flex flex-col items-center justify-center text-center group bg-transparent border-2 border-transparent hover:border-orange-600 p-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                    <a href="https://www.postman.com/" target="_blank" rel="noopener noreferrer">
                        <SiPostman className="text-6xl text-orange-600 group-hover:scale-110 transition-transform duration-300 animate-pulse" />
                    </a>
                    <p className="mt-2 text-stone-300 group-hover:text-stone-100">Postman</p>
                </div>

                {/* Languages */}
                <div className="flex flex-col items-center justify-center text-center group bg-transparent border-2 border-transparent hover:border-yellow-500 p-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">
                        <IoLogoJavascript className="text-6xl text-yellow-500 group-hover:scale-110 transition-transform duration-300 animate-pulse" />
                    </a>
                    <p className="mt-2 text-stone-300 group-hover:text-stone-100">JavaScript</p>
                </div>
                <div className="flex flex-col items-center justify-center text-center group bg-transparent border-2 border-transparent hover:border-blue-400 p-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                    <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">
                        <SiTypescript className="text-6xl text-blue-400 group-hover:scale-110 transition-transform duration-300 animate-pulse" />
                    </a>
                    <p className="mt-2 text-stone-300 group-hover:text-stone-100">TypeScript</p>
                </div>
                <div className="flex flex-col items-center justify-center text-center group bg-transparent border-2 border-transparent hover:border-yellow-400 p-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                    <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer">
                        <SiPython className="text-6xl text-yellow-300 group-hover:scale-110 transition-transform duration-300 animate-pulse" />
                    </a>
                    <p className="mt-2 text-stone-300 group-hover:text-stone-100">Python</p>
                </div>
                <div className="flex flex-col items-center justify-center text-center group bg-transparent border-2 border-transparent hover:border-red-600 p-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                    <a href="https://www.java.com/" target="_blank" rel="noopener noreferrer">
                        <FaJava className="text-6xl text-red-600 group-hover:scale-110 transition-transform duration-300 animate-pulse" />
                    </a>
                    <p className="mt-2 text-stone-300 group-hover:text-stone-100">Java</p>
                </div>

                {/* Frameworks */}
                <div className="flex flex-col items-center justify-center text-center group bg-transparent border-2 border-transparent hover:border-red-600 p-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                    <a href="https://angular.io/" target="_blank" rel="noopener noreferrer">
                        <FaAngular className="text-6xl text-red-600 group-hover:scale-110 transition-transform duration-300 animate-pulse" />
                    </a>
                    <p className="mt-2 text-stone-300 group-hover:text-stone-100">Angular</p>
                </div>
            </div>
        </div>
    );
};

export default Technologies;


// import { useState } from "react"; // Import useState
// import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for hamburger and close

// const Navbar = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     return (
//         <nav className="flex items-center justify-between py-5 fixed w-full bg-transparent z-10 backdrop-blur-md">
//             {/* Logo Section */}
//             <div className="flex flex-shrink-0 items-center">
//                 <a href="/" aria-label="Home">
//                     <img
//                         src={logo}
//                         alt="Logo"
//                         className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 transition-all duration-400 hover:filter hover:drop-shadow-glow"
//                     />
//                 </a>
//             </div>

//             {/* Hamburger Icon for Mobile */}
//             <div className="lg:hidden">
//                 <button
//                     aria-label="Toggle Menu"
//                     onClick={() => setIsMenuOpen(!isMenuOpen)}
//                     className="text-stone-300 text-2xl focus:outline-none hover:text-stone-100"
//                 >
//                     {isMenuOpen ? <FaTimes /> : <FaBars />}
//                 </button>
//             </div>

//             {/* Navigation and Social Icons */}
//             <div
//                 className={`lg:flex flex-col lg:flex-row lg:items-center fixed lg:relative bg-stone-900 lg:bg-transparent w-full lg:w-auto top-0 left-0 h-screen lg:h-auto transition-transform duration-300 overflow-y-auto ${isMenuOpen ? "translate-y-0" : "-translate-y-full"
//                     } lg:translate-y-0`}
//             >
//                 <ul className="flex flex-col lg:flex-row lg:gap-8 text-lg font-semibold text-stone-300 p-5 lg:p-0">
//                     <li>
//                         <a
//                             href="#tech"
//                             className="hover:text-cyan-300 transition-all duration-200"
//                             onClick={() => setIsMenuOpen(false)}
//                         >
//                             Tech
//                         </a>
//                     </li>
//                     <li>
//                         <a
//                             href="#projects"
//                             className="hover:text-cyan-300 transition-all duration-200"
//                             onClick={() => setIsMenuOpen(false)}
//                         >
//                             Projects
//                         </a>
//                     </li>
//                     <li>
//                         <a
//                             href="#experience"
//                             className="hover:text-cyan-300 transition-all duration-200"
//                             onClick={() => setIsMenuOpen(false)}
//                         >
//                             Experience
//                         </a>
//                     </li>
//                     <li>
//                         <a
//                             href="#contact"
//                             className="hover:text-cyan-300 transition-all duration-200"
//                             onClick={() => setIsMenuOpen(false)}
//                         >
//                             Contact
//                         </a>
//                     </li>
//                 </ul>

//                 <div className="flex flex-col lg:hidden gap-4 text-2xl text-stone-300 p-5">
//                     <a
//                         href="https://www.linkedin.com/in/ahmadsarosh/"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         aria-label="LinkedIn"
//                         className="hover:text-stone-100 transition-all duration-200"
//                         onClick={() => setIsMenuOpen(false)}
//                     >
//                         <FaLinkedin />
//                     </a>
//                     <a
//                         href="https://github.com/SaroshAhmad"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         aria-label="GitHub"
//                         className="hover:text-stone-100 transition-all duration-200"
//                         onClick={() => setIsMenuOpen(false)}
//                     >
//                         <FaGithub />
//                     </a>
//                     <a
//                         href="https://www.instagram.com/iamsaroshahmad/"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         aria-label="Instagram"
//                         className="hover:text-stone-100 transition-all duration-200"
//                         onClick={() => setIsMenuOpen(false)}
//                     >
//                         <FaInstagram />
//                     </a>
//                     <a
//                         href="https://x.com/AhmadSarosh07"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         aria-label="x"
//                         className="hover:text-stone-100 transition-all duration-200"
//                         onClick={() => setIsMenuOpen(false)}
//                     >
//                         <FaXTwitter />
//                     </a>
//                 </div>
//             </div>

//         </nav>
//     );
// };

// export default Navbar;
