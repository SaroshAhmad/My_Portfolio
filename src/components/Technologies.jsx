import { useState, useEffect } from 'react';
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

const technologies = [
    { icon: <FaReact />, name: "React", link: "https://reactjs.org/", color: "text-cyan-400" },
    { icon: <RiNextjsFill />, name: "Next.js", link: "https://nextjs.org/", color: "text-stone-200" },
    { icon: <RiTailwindCssFill />, name: "Tailwind CSS", link: "https://tailwindcss.com/", color: "text-cyan-400" },
    { icon: <FaHtml5 />, name: "HTML5", link: "https://developer.mozilla.org/en-US/docs/Web/HTML", color: "text-red-600" },
    { icon: <FaCss3Alt />, name: "CSS3", link: "https://developer.mozilla.org/en-US/docs/Web/CSS", color: "text-blue-600" },
    { icon: <FaNodeJs />, name: "Node.js", link: "https://nodejs.org/", color: "text-green-600" },
    { icon: <SiRedis />, name: "Redis", link: "https://redis.io/", color: "text-orange-600" },
    { icon: <SiMongodb />, name: "MongoDB", link: "https://www.mongodb.com/", color: "text-green-600" },
    { icon: <SiSpringboot />, name: "Spring Boot", link: "https://spring.io/projects/spring-boot", color: "text-green-500" },
    { icon: <SiPostman />, name: "Postman", link: "https://www.postman.com/", color: "text-orange-600" },
    { icon: <IoLogoJavascript />, name: "JavaScript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", color: "text-yellow-500" },
    { icon: <SiTypescript />, name: "TypeScript", link: "https://www.typescriptlang.org/", color: "text-blue-400" },
    { icon: <SiPython />, name: "Python", link: "https://www.python.org/", color: "text-yellow-300" },
    { icon: <FaJava />, name: "Java", link: "https://www.java.com/", color: "text-red-600" },
    { icon: <FaAngular />, name: "Angular", link: "https://angular.io/", color: "text-red-600" }
];

const Technologies = () => {
    const [shuffledTech, setShuffledTech] = useState([]);

    useEffect(() => {
        // Fisher-Yates shuffle algorithm
        const shuffleArray = (array) => {
            const newArray = [...array];
            for (let i = newArray.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
            }
            return newArray;
        };

        setShuffledTech(shuffleArray(technologies));
    }, []);

    return (
        <div className="py-24 px-4 md:px-8 border-t border-cyan-950" id="tech">
            <h2 className="mb-20 text-center text-4xl text-stone-200">Tech Stack</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {shuffledTech.map((tech, index) => (
                    <div
                        key={index}
                        className="group relative rounded-xl overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-stone-800/50 to-stone-900/50 backdrop-blur-sm border border-stone-300/20 transition-all duration-300 group-hover:backdrop-blur-md" />

                        <a
                            href={tech.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block p-8 relative z-10"
                        >
                            <div className="flex items-center justify-center">
                                <div className={`text-5xl ${tech.color} transform transition-all duration-300 group-hover:scale-90 group-hover:opacity-50`}>
                                    {tech.icon}
                                </div>
                            </div>

                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="text-white text-lg font-medium bg-black/40 px-3 py-1 rounded-md backdrop-blur-sm">
                                    {tech.name}
                                </span>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Technologies;