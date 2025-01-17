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







// const Technologies = () => {
//     return (
//         <div className="pb-24 border-t border-stone-900" id="tech">
//             <h2 className="my-20 text-center text-4xl">Tech Stack</h2>
//             <div className="flex flex-wrap items-center justify-center gap-4">
//                 <div>
//                     <FaReact className="text-7xl text-cyan-400" />
//                 </div>
//                 <div className='p-4'>
//                     <RiNextjsFill className='text-7xl' />
//                 </div>
//                 <div className="p-4">
//                     <RiTailwindCssFill className="text-7xl text-cyan-400" />
//                 </div>
//                 <div className="p-4">
//                     <FaNodeJs className="text-7xl text-green-600" />
//                 </div>
//                 <div className="p-4">
//                     <IoLogoJavascript className="text-7xl text-yellow-500" />
//                 </div>
//                 <div className="p-4">
//                     <SiTypescript className="text-7xl text-blue-400" />
//                 </div>
//                 <div className="p-4">
//                     <SiRedis className="text-7xl text-orange-600" />
//                 </div>
//                 <div className="p-4">
//                     <SiMongodb className="text-7xl text-green-600" />
//                 </div>
//                 <div className="p-4">
//                     <FaHtml5 className="text-7xl text-red-600" />
//                 </div>
//                 <div className="p-4">
//                     <FaCss3Alt className="text-7xl text-blue-600" />
//                 </div>
//                 <div className="p-4">
//                     <SiPython className="text-7xl text-" />
//                 </div>
//                 <div className="p-4">
//                     <FaAngular className="text-7xl text-red-600" />
//                 </div>
//                 <div className="p-4">
//                     <SiSpringboot className="text-7xl text-green-500" />
//                 </div>
//                 <div className="p-4">
//                     <SiPostman className="text-7xl text-orange-600" />

//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Technologies

const Technologies = () => {
    return (
        <div className="pb-24 border-t border-stone-900" id="tech">
            <h2 className="my-20 text-center text-4xl text-stone-200">Tech Stack</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 px-8">
                <div className="flex flex-col items-center justify-center text-center group">
                    <FaReact className="text-6xl text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                    <p className="mt-2 text-stone-300 group-hover:text-stone-100">React</p>
                </div>
                <div className="flex flex-col items-center justify-center text-center group">
                    <RiNextjsFill className="text-6xl text-stone-200 group-hover:scale-110 transition-transform duration-300" />
                    <p className="mt-2 text-stone-300 group-hover:text-stone-100">Next.js</p>
                </div>
                <div className="flex flex-col items-center justify-center text-center group">
                    <RiTailwindCssFill className="text-6xl text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                    <p className="mt-2 text-stone-300 group-hover:text-stone-100">Tailwind CSS</p>
                </div>
                <div className="flex flex-col items-center justify-center text-center group">
                    <FaNodeJs className="text-6xl text-green-600 group-hover:scale-110 transition-transform duration-300" />
                    <p className="mt-2 text-stone-300 group-hover:text-stone-100">Node.js</p>
                </div>
                <div className="flex flex-col items-center justify-center text-center group">
                    <IoLogoJavascript className="text-6xl text-yellow-500 group-hover:scale-110 transition-transform duration-300" />
                    <p className="mt-2 text-stone-300 group-hover:text-stone-100">JavaScript</p>
                </div>
                <div className="flex flex-col items-center justify-center text-center group">
                    <SiTypescript className="text-6xl text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                    <p className="mt-2 text-stone-300 group-hover:text-stone-100">TypeScript</p>
                </div>
                <div className="flex flex-col items-center justify-center text-center group">
                    <SiRedis className="text-6xl text-orange-600 group-hover:scale-110 transition-transform duration-300" />
                    <p className="mt-2 text-stone-300 group-hover:text-stone-100">Redis</p>
                </div>
                <div className="flex flex-col items-center justify-center text-center group">
                    <SiMongodb className="text-6xl text-green-600 group-hover:scale-110 transition-transform duration-300" />
                    <p className="mt-2 text-stone-300 group-hover:text-stone-100">MongoDB</p>
                </div>
                <div className="flex flex-col items-center justify-center text-center group">
                    <FaHtml5 className="text-6xl text-red-600 group-hover:scale-110 transition-transform duration-300" />
                    <p className="mt-2 text-stone-300 group-hover:text-stone-100">HTML5</p>
                </div>
                <div className="flex flex-col items-center justify-center text-center group">
                    <FaCss3Alt className="text-6xl text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                    <p className="mt-2 text-stone-300 group-hover:text-stone-100">CSS3</p>
                </div>
                <div className="flex flex-col items-center justify-center text-center group">
                    <SiPython className="text-6xl text-yellow-300 group-hover:scale-110 transition-transform duration-300" />
                    <p className="mt-2 text-stone-300 group-hover:text-stone-100">Python</p>
                </div>
                <div className="flex flex-col items-center justify-center text-center group">
                    <FaAngular className="text-6xl text-red-600 group-hover:scale-110 transition-transform duration-300" />
                    <p className="mt-2 text-stone-300 group-hover:text-stone-100">Angular</p>
                </div>
                <div className="flex flex-col items-center justify-center text-center group">
                    <SiSpringboot className="text-6xl text-green-500 group-hover:scale-110 transition-transform duration-300" />
                    <p className="mt-2 text-stone-300 group-hover:text-stone-100">Spring Boot</p>
                </div>
                <div className="flex flex-col items-center justify-center text-center group">
                    <SiPostman className="text-6xl text-orange-600 group-hover:scale-110 transition-transform duration-300" />
                    <p className="mt-2 text-stone-300 group-hover:text-stone-100">Postman</p>
                </div>
            </div>
        </div>
    );
};

export default Technologies;
