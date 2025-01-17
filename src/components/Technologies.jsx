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

const technologies = [
    { icon: <FaReact />, name: "React", link: "https://reactjs.org/", color: "text-cyan-400", borderColor: "border-cyan-400" },
    { icon: <RiNextjsFill />, name: "Next.js", link: "https://nextjs.org/", color: "text-stone-200", borderColor: "border-stone-200" },
    { icon: <RiTailwindCssFill />, name: "Tailwind CSS", link: "https://tailwindcss.com/", color: "text-cyan-400", borderColor: "border-cyan-400" },
    { icon: <FaHtml5 />, name: "HTML5", link: "https://developer.mozilla.org/en-US/docs/Web/HTML", color: "text-red-600", borderColor: "border-red-600" },
    { icon: <FaCss3Alt />, name: "CSS3", link: "https://developer.mozilla.org/en-US/docs/Web/CSS", color: "text-blue-600", borderColor: "border-blue-600" },
    { icon: <FaNodeJs />, name: "Node.js", link: "https://nodejs.org/", color: "text-green-600", borderColor: "border-green-600" },
    { icon: <SiRedis />, name: "Redis", link: "https://redis.io/", color: "text-orange-600", borderColor: "border-orange-600" },
    { icon: <SiMongodb />, name: "MongoDB", link: "https://www.mongodb.com/", color: "text-green-600", borderColor: "border-green-600" },
    { icon: <SiSpringboot />, name: "Spring Boot", link: "https://spring.io/projects/spring-boot", color: "text-green-500", borderColor: "border-green-500" },
    { icon: <SiPostman />, name: "Postman", link: "https://www.postman.com/", color: "text-orange-600", borderColor: "border-orange-600" },
    { icon: <IoLogoJavascript />, name: "JavaScript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", color: "text-yellow-500", borderColor: "border-yellow-500" },
    { icon: <SiTypescript />, name: "TypeScript", link: "https://www.typescriptlang.org/", color: "text-blue-400", borderColor: "border-blue-400" },
    { icon: <SiPython />, name: "Python", link: "https://www.python.org/", color: "text-yellow-300", borderColor: "border-yellow-300" },
    { icon: <FaJava />, name: "Java", link: "https://www.java.com/", color: "text-red-600", borderColor: "border-red-600" },
    { icon: <FaAngular />, name: "Angular", link: "https://angular.io/", color: "text-red-600", borderColor: "border-red-600" }
];

const Technologies = () => {
    return (
        <div className="pb-24 border-t border-cyan-950" id="tech">
            <h2 className="my-20 text-center text-4xl text-stone-200">Tech Stack</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 px-8">
                {technologies.map((tech, index) => (
                    <div
                        key={index}
                        className={`relative flex flex-col items-center justify-center text-center group p-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-2xl backdrop-blur-[6px] bg-opacity-30  hover:border-opacity-80`}
                    >
                        {/* Ensure link wraps the entire content */}
                        <a
                            href={tech.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full h-full flex items-center justify-center group-hover:opacity-60 transition-all duration-300"
                        >
                            <div className="flex items-center justify-center">
                                <div className={`text-6xl ${tech.color} group-hover:scale-110 transition-transform duration-300`}>
                                    {tech.icon}
                                </div>
                            </div>
                        </a>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 backdrop-blur-sm bg-black/50 text-white text-xl font-medium p-4 rounded-lg transition-opacity duration-300">
                            {tech.name}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Technologies;
