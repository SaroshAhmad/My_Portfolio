import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { PROJECTS } from "../constants";

const ProjectCard = ({ project, index }) => {
    const cardRef = useRef(null);
    const isInView = useInView(cardRef, { once: true, margin: "-50px" });

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 100,
            scale: 0.9
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 1.2,
                ease: "easeOut",
                delay: index * 0.2  // Increased delay between cards
            }
        }
    };

    return (
        <motion.div
            ref={cardRef}
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="mb-16 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
        >
            <div className="group relative overflow-hidden rounded-2xl bg-stone-900/50 backdrop-blur-sm border border-stone-800 hover:border-stone-700 transition-all duration-500">
                <div className="flex flex-col lg:flex-row gap-8 p-6 sm:p-8">
                    <div className="w-full lg:w-2/5">
                        <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block overflow-hidden rounded-xl"
                        >
                            <motion.img
                                src={project.image}
                                alt={project.title}
                                className="w-full max-h-[300px] sm:max-h-[400px] object-cover transform transition-transform duration-700 group-hover:scale-110"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.7 }}
                                layoutId={`project-image-${index}`}
                            />
                        </a>
                    </div>

                    <div className="w-full lg:w-3/5">
                        <motion.h3
                            className="text-2xl sm:text-3xl font-semibold mb-4 text-white"
                            initial={{ opacity: 0, x: -30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                            transition={{ delay: index * 0.4 + 0.6, duration: 1 }}
                        >
                            {project.title}
                        </motion.h3>

                        <motion.p
                            className="text-base sm:text-lg text-stone-200 mb-6 leading-relaxed"
                            initial={{ opacity: 0, x: -30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                            transition={{ delay: index * 0.4 + 0.8, duration: 1 }}
                        >
                            {project.description}
                        </motion.p>

                        <motion.div
                            className="flex flex-wrap gap-2 sm:gap-3"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ delay: index * 0.4 + 1, duration: 1 }}
                        >
                            {project.technologies.map((tech, techIndex) => (
                                <span
                                    key={techIndex}
                                    className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-stone-800/80 text-stone-200 text-xs sm:text-sm font-medium backdrop-blur-sm border border-stone-700/50 hover:border-stone-600 transition-colors duration-500"
                                >
                                    {tech}
                                </span>
                            ))}
                        </motion.div>

                        <motion.div
                            className="mt-6 sm:mt-8"
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ delay: index * 0.4 + 1.2, duration: 1 }}
                        >
                            <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-100 text-sm sm:text-base transition-all duration-500 hover:translate-x-2"
                            >
                                View Project
                                <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                                    />
                                </svg>
                            </a>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <div className="py-16 sm:py-24 border-t border-cyan-950" id="projects">
            <motion.h2
                className="text-center text-3xl sm:text-4xl lg:text-4xl font-normal mb-12 sm:mb-20 text-stone-200 px-4"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
            >
                Projects
            </motion.h2>

            <div className="flex flex-col items-center">
                {PROJECTS.map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                ))}
            </div>
        </div>
    );
};

export default Projects;