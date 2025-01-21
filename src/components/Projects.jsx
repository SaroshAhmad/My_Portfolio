import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { PROJECTS } from "../constants";

// Categories array remains the same
const CATEGORIES = [
    "Web Development",
    "Mobile Development",
    "Machine Learning",
    "Frontend Development",
    "Full-Stack Development"
];

// ProjectCard Component
const ProjectCard = ({ project, index }) => {
    const cardRef = useRef(null);
    const isInView = useInView(cardRef, { once: true, margin: "-100px" });
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Updated card animation variants
    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 50,
            scale: 0.95
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 20,
                mass: 0.5
            }
        }
    };

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    return (
        <motion.div
            ref={cardRef}
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="min-w-full h-full lg:h-fit lg:pb-0 flex items-center justify-center snap-center"
        >
            <div className="group relative overflow-hidden rounded-2xl bg-stone-900/50 backdrop-blur-sm border border-stone-800 hover:border-stone-700 transition-all duration-500 w-full max-w-4xl mx-4">
                <div className="flex flex-col lg:flex-row gap-6 p-6">
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
                                className="w-full h-[200px] sm:h-[250px] object-cover transform transition-transform duration-700"
                                whileHover={{
                                    scale: 1.05,
                                    transition: { type: "spring", stiffness: 300 }
                                }}
                                layoutId={`project-image-${index}`}
                            />
                        </a>
                    </div>

                    <div className="w-full lg:w-3/5">
                        <motion.h3
                            className="text-2xl font-semibold mb-3 text-white"
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
                        >
                            {project.title}
                        </motion.h3>

                        <motion.div
                            className="flex items-center gap-2 mb-4"
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
                        >
                            <motion.span
                                className={`w-2.5 h-2.5 rounded-full ${project.status === "Completed" ? "bg-green-500" : "bg-yellow-500"}`}
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [1, 0.8, 1],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            ></motion.span>
                            <motion.p className="text-sm text-stone-200">
                                {project.status}
                            </motion.p>
                        </motion.div>

                        <motion.p
                            className="text-base text-stone-200 mb-4 leading-relaxed line-clamp-3"
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
                        >
                            {project.description}
                        </motion.p>

                        <motion.div
                            className="flex flex-wrap gap-2"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
                        >
                            {project.technologies.map((tech, techIndex) => (
                                <span
                                    key={techIndex}
                                    className="px-3 py-1 rounded-full bg-stone-800/80 text-stone-200 text-xs font-medium backdrop-blur-sm border border-stone-700/50 hover:border-stone-600 transition-colors duration-500"
                                >
                                    {tech}
                                </span>
                            ))}
                        </motion.div>

                        <motion.div
                            className="mt-4"
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ delay: 0.6 }}
                        >
                            <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 mr-2 py-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-100 text-sm transition-all duration-500 hover:translate-x-2"
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
                            <button
                                onClick={handleOpenModal}
                                className="mt-2 lg:ml-2 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-100 text-sm transition-all duration-500"
                            >
                                View Detail
                            </button>
                        </motion.div>
                    </div>
                </div>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-stone-900/60 z-50 flex justify-center items-center backdrop-blur-sm">
                    <motion.div
                        className="bg-stone-800 rounded-lg p-6 w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 max-h-[80vh] overflow-y-auto"
                        initial={{ opacity: 0, y: 50, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    >
                        <h3 className="text-2xl text-white mb-4">{project.title}</h3>
                        <p className="text-sm lg:text-base text-stone-200 mb-4">{project.fullDescription}</p>
                        <button
                            onClick={handleCloseModal}
                            className="mt-4 px-6 py-2 rounded-lg bg-stone-700 text-stone-100 hover:bg-stone-600 transition-all duration-300"
                        >
                            Okay fine, don't brag it now! 🙄
                        </button>
                    </motion.div>
                </div>
            )}
        </motion.div>
    );
};

// Navigation Button Component (remains mostly the same with adjusted positioning)
const NavigationButton = ({ direction, onClick, disabled }) => (
    <motion.button
        onClick={onClick}
        className={`absolute ${direction === 'next' ? 'right-2' : 'left-2'} top-1/2 -translate-y-1/2 
                   p-2 rounded-full bg-stone-800/80 backdrop-blur-sm border border-stone-700
                   hover:bg-stone-700 transition-all duration-300 z-10
                   ${disabled ? 'opacity-50 cursor-not-allowed' : 'opacity-100 cursor-pointer'}`}
        whileHover={!disabled ? { scale: 1.1 } : {}}
        whileTap={!disabled ? { scale: 0.95 } : {}}
        disabled={disabled}
    >
        <svg
            className={`w-5 h-5 text-white ${direction === 'prev' ? 'rotate-180' : ''}`}
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
    </motion.button>
);


const Projects = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const containerRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const filteredProjects = selectedCategory === "All"
        ? PROJECTS
        : PROJECTS.filter(project => project.categories.includes(selectedCategory));

    const scrollToProject = (direction) => {
        if (containerRef.current) {
            const newIndex = direction === 'next'
                ? Math.min(currentIndex + 1, filteredProjects.length - 1)
                : Math.max(currentIndex - 1, 0);

            const scrollAmount = containerRef.current.offsetWidth * newIndex;
            containerRef.current.scrollTo({
                left: scrollAmount,
                behavior: 'smooth'
            });
            setCurrentIndex(newIndex);
        }
    };

    const handleScroll = (e) => {
        if (containerRef.current) {
            const index = Math.round(e.target.scrollLeft / containerRef.current.offsetWidth);
            setCurrentIndex(index);
        }
    };

    return (
        <div className="py-24 px-4 md:px-8 border-t border-cyan-950" id="projects">
            <motion.h2
                className="mb-12 text-center text-4xl text-stone-200"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100 }}
            >
                Projects
            </motion.h2>

            <motion.div
                className="flex flex-wrap justify-center gap-2 md:gap-4 mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100 }}
            >
                <motion.button
                    key="All"
                    className={`px-3 py-2 md:px-6 md:py-3 rounded-full text-xs md:text-sm font-medium transition-all duration-300 border backdrop-blur-sm
                        ${selectedCategory === "All"
                            ? 'border-cyan-400 text-cyan-400 bg-cyan-400/10'
                            : 'border-stone-700 text-stone-400 hover:border-stone-500 hover:text-stone-300'}`}
                    onClick={() => {
                        setSelectedCategory("All");
                        setCurrentIndex(0);
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    All
                </motion.button>
                {CATEGORIES.map((category) => (
                    <motion.button
                        key={category}
                        className={`px-3 py-2 md:px-6 md:py-3 rounded-full text-xs md:text-sm font-medium transition-all duration-300 border backdrop-blur-sm
                            ${selectedCategory === category
                                ? 'border-cyan-400 text-cyan-400 bg-cyan-400/10'
                                : 'border-stone-700 text-stone-400 hover:border-stone-500 hover:text-stone-300'}`}
                        onClick={() => {
                            setSelectedCategory(category);
                            setCurrentIndex(0);
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {category}
                    </motion.button>
                ))}
            </motion.div>

            <div className="relative h-[650px] md:h-[650px] lg:h-[350px] xl:h-[350px] w-full overflow-hidden">
                {currentIndex > 0 && (
                    <NavigationButton
                        className=""
                        direction="prev"
                        onClick={() => scrollToProject('prev')}
                        disabled={currentIndex === 0}
                    />
                )}
                {currentIndex < filteredProjects.length - 1 && (
                    <NavigationButton
                        direction="next"
                        onClick={() => scrollToProject('next')}
                        disabled={currentIndex === filteredProjects.length - 1}
                    />
                )}

                <div
                    ref={containerRef}
                    className="flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory scrollbar-hide h-full"
                    style={{
                        scrollSnapType: 'x mandatory',
                        WebkitOverflowScrolling: 'touch'
                    }}
                    onScroll={handleScroll}
                >
                    {filteredProjects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            project={project}
                            index={index}
                        />
                    ))}
                </div>

                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
                    {filteredProjects.map((_, index) => (
                        <motion.div
                            key={index}
                            className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer
                                ${currentIndex === index
                                    ? 'bg-cyan-400 scale-125'
                                    : 'bg-stone-600 hover:bg-stone-500'}`}
                            onClick={() => {
                                setCurrentIndex(index);
                                const scrollAmount = containerRef.current.offsetWidth * index;
                                containerRef.current.scrollTo({
                                    left: scrollAmount,
                                    behavior: 'smooth'
                                });
                            }}
                            whileHover={{ scale: 1.2 }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};


export default Projects;




