import { EXPERIENCES } from "../constants"

const Experience = () => {
    return (
        <div className="pb-4 border-t border-cyan-950" id="experience">
            <h2 className="my-20 text-center text-4xl">Experience</h2>
            <div>
                {EXPERIENCES.map((experience, index) => (
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                        <div className="w-full lg:w-1/4">
                            <p className="mb-2 text-sm text-stone-400">
                                {experience.year}
                            </p>
                        </div>
                        <div className="w-full max-w-xl lg:w-3/4">
                            <h3 className="mb-2 font-semibold">
                                {experience.role} -{" "}
                                <span className="text-sm text-stone-500">{experience.company}</span>
                            </h3>
                            <p className="mb-4 text-stone-400">{experience.description}</p>
                            {/* Flex container for technologies */}
                            <div className="flex flex-wrap gap-2 mt-4">
                                {experience.technologies.map((tech, index) => (
                                    <span
                                        className="rounded bg-stone-900 px-3 py-1 text-xs md:text-sm font-medium text-stone-300"
                                        key={index}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default Experience