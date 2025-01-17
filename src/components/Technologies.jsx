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
// import { FaJava } from "react-icons/fa"; // Java icon import

// const Technologies = () => {
//     return (
//         <div className="pb-24 border-t border-stone-900" id="tech">
//             <h2 className="my-20 text-center text-4xl text-stone-200">Tech Stack</h2>
//             <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 px-8">
//                 {/* Frontend */}
//                 <div className="flex flex-col items-center justify-center text-center group bg-transparent border-2 border-transparent hover:border-cyan-500 p-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
//                     <FaReact className="text-6xl text-cyan-400 group-hover:scale-110 transition-transform duration-300 animate-pulse" />
//                     <p className="mt-2 text-stone-300 group-hover:text-stone-100">React</p>
//                 </div>
//                 <div className="flex flex-col items-center justify-center text-center group bg-transparent border-2 border-transparent hover:border-stone-300 p-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
//                     <RiNextjsFill className="text-6xl text-stone-200 group-hover:scale-110 transition-transform duration-300 animate-pulse" />
//                     <p className="mt-2 text-stone-300 group-hover:text-stone-100">Next.js</p>
//                 </div>
//                 <div className="flex flex-col items-center justify-center text-center group bg-transparent border-2 border-transparent hover:border-cyan-500 p-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
//                     <RiTailwindCssFill className="text-6xl text-cyan-400 group-hover:scale-110 transition-transform duration-300 animate-pulse" />
//                     <p className="mt-2 text-stone-300 group-hover:text-stone-100">Tailwind CSS</p>
//                 </div>
//                 <div className="flex flex-col items-center justify-center text-center group bg-transparent border-2 border-transparent hover:border-red-600 p-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
//                     <FaHtml5 className="text-6xl text-red-600 group-hover:scale-110 transition-transform duration-300 animate-pulse" />
//                     <p className="mt-2 text-stone-300 group-hover:text-stone-100">HTML5</p>
//                 </div>
//                 <div className="flex flex-col items-center justify-center text-center group bg-transparent border-2 border-transparent hover:border-blue-600 p-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
//                     <FaCss3Alt className="text-6xl text-blue-600 group-hover:scale-110 transition-transform duration-300 animate-pulse" />
//                     <p className="mt-2 text-stone-300 group-hover:text-stone-100">CSS3</p>
//                 </div>

//                 {/* Backend */}
//                 <div className="flex flex-col items-center justify-center text-center group bg-transparent border-2 border-transparent hover:border-green-600 p-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
//                     <FaNodeJs className="text-6xl text-green-600 group-hover:scale-110 transition-transform duration-300 animate-pulse" />
//                     <p className="mt-2 text-stone-300 group-hover:text-stone-100">Node.js</p>
//                 </div>
//                 <div className="flex flex-col items-center justify-center text-center group bg-transparent border-2 border-transparent hover:border-orange-600 p-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
//                     <SiRedis className="text-6xl text-orange-600 group-hover:scale-110 transition-transform duration-300 animate-pulse" />
//                     <p className="mt-2 text-stone-300 group-hover:text-stone-100">Redis</p>
//                 </div>
//                 <div className="flex flex-col items-center justify-center text-center group bg-transparent border-2 border-transparent hover:border-green-600 p-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
//                     <SiMongodb className="text-6xl text-green-600 group-hover:scale-110 transition-transform duration-300 animate-pulse" />
//                     <p className="mt-2 text-stone-300 group-hover:text-stone-100">MongoDB</p>
//                 </div>
//                 <div className="flex flex-col items-center justify-center text-center group bg-transparent border-2 border-transparent hover:border-green-500 p-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
//                     <SiSpringboot className="text-6xl text-green-500 group-hover:scale-110 transition-transform duration-300 animate-pulse" />
//                     <p className="mt-2 text-stone-300 group-hover:text-stone-100">Spring Boot</p>
//                 </div>
//                 <div className="flex flex-col items-center justify-center text-center group bg-transparent border-2 border-transparent hover:border-orange-600 p-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
//                     <SiPostman className="text-6xl text-orange-600 group-hover:scale-110 transition-transform duration-300 animate-pulse" />
//                     <p className="mt-2 text-stone-300 group-hover:text-stone-100">Postman</p>
//                 </div>

//                 {/* Languages */}
//                 <div className="flex flex-col items-center justify-center text-center group bg-transparent border-2 border-transparent hover:border-yellow-500 p-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
//                     <IoLogoJavascript className="text-6xl text-yellow-500 group-hover:scale-110 transition-transform duration-300 animate-pulse" />
//                     <p className="mt-2 text-stone-300 group-hover:text-stone-100">JavaScript</p>
//                 </div>
//                 <div className="flex flex-col items-center justify-center text-center group bg-transparent border-2 border-transparent hover:border-blue-400 p-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
//                     <SiTypescript className="text-6xl text-blue-400 group-hover:scale-110 transition-transform duration-300 animate-pulse" />
//                     <p className="mt-2 text-stone-300 group-hover:text-stone-100">TypeScript</p>
//                 </div>
//                 <div className="flex flex-col items-center justify-center text-center group bg-transparent border-2 border-transparent hover:border-yellow-400 p-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
//                     <SiPython className="text-6xl text-yellow-300 group-hover:scale-110 transition-transform duration-300 animate-pulse" />
//                     <p className="mt-2 text-stone-300 group-hover:text-stone-100">Python</p>
//                 </div>
//                 <div className="flex flex-col items-center justify-center text-center group bg-transparent border-2 border-transparent hover:border-red-600 p-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
//                     <FaJava className="text-6xl text-red-600 group-hover:scale-110 transition-transform duration-300 animate-pulse" />
//                     <p className="mt-2 text-stone-300 group-hover:text-stone-100">Java</p>
//                 </div>

//                 {/* Frameworks */}
//                 <div className="flex flex-col items-center justify-center text-center group bg-transparent border-2 border-transparent hover:border-red-600 p-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
//                     <FaAngular className="text-6xl text-red-600 group-hover:scale-110 transition-transform duration-300 animate-pulse" />
//                     <p className="mt-2 text-stone-300 group-hover:text-stone-100">Angular</p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Technologies;

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
