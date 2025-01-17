import { PROJECTS } from "../constants"

const Projects = () => {
    return (
        <div className="pb-4 border-t border-stone-900" id="projects">
            <h2 className="my-20 text-center text-4xl">Projects</h2>
            <div>
                {PROJECTS.map((project, index) => (
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                        <div className="w-full lg:w-1/4">
                            {/* Make the anchor tag behave like an inline-block element */}
                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="inline-block">
                                <img
                                    src={project.image}
                                    width={250}
                                    height={250}
                                    alt={project.title}
                                    className="mb-6 rounded border border-stone-800 transition-all duration-300 hover:shadow-[0_0_15px_5px_rgba(136,165,191,0.5)] block max-w-full"
                                />
                            </a>
                        </div>
                        <div className="w-full max-w-xl lg:w-3/4">
                            <h3 className="mb-2 font-semibold text-2xl">{project.title}</h3>
                            <p className="mb-4 text-stone-400">{project.description}</p>
                            {project.technologies.map((tech, index) => (
                                <span
                                    className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300"
                                    key={index}
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
