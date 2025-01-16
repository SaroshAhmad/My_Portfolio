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







const Technologies = () => {
    return (
        <div className="pb-24">
            <h2 className="my-20 text-center text-4xl">Tech Stack</h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <div>
                    <FaReact className="text-7xl text-cyan-400" />
                </div>
                <div className='p-4'>
                    <RiNextjsFill className='text-7xl' />
                </div>
                <div className="p-4">
                    <RiTailwindCssFill className="text-7xl text-cyan-400" />
                </div>
                <div className="p-4">
                    <FaNodeJs className="text-7xl text-green-600" />
                </div>
                <div className="p-4">
                    <IoLogoJavascript className="text-7xl text-yellow-500" />
                </div>
                <div className="p-4">
                    <SiTypescript className="text-7xl text-blue-400" />
                </div>
                <div className="p-4">
                    <SiRedis className="text-7xl text-orange-600" />
                </div>
                <div className="p-4">
                    <SiMongodb className="text-7xl text-green-600" />
                </div>
                <div className="p-4">
                    <FaHtml5 className="text-7xl text-red-600" />
                </div>
                <div className="p-4">
                    <FaCss3Alt className="text-7xl text-blue-600" />
                </div>
                <div className="p-4">
                    <SiPython className="text-7xl text-" />
                </div>
                <div className="p-4">
                    <FaAngular className="text-7xl text-red-600" />
                </div>
                <div className="p-4">
                    <SiSpringboot className="text-7xl text-green-500" />
                </div>
                <div className="p-4">
                    <SiPostman className="text-7xl text-orange-600" />

                </div>
            </div>
        </div>
    )
}

export default Technologies