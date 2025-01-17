import profilePic from "../assets/AhmadSaroshProfile.svg";
import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";

const Hero = () => {
    const easing = [0.6, -0.05, 0.01, 0.99]; // Custom easing curve for smooth animations

    return (
        <div className="pt-20 pb-4 lg:mb-36 mt-10">
            <div className="flex flex-wrap lg:flex-row-reverse">
                {/* Profile Picture Section */}
                <div className="w-full lg:w-1/2">
                    <motion.div
                        className="flex justify-center lg:p-8"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 2, ease: easing }}
                    >
                        <img
                            src={profilePic}
                            alt="Ahmad Sarosh"
                            className="border border-stone-900 rounded-3xl w-full md:w-3/4 lg:w-full"
                        />
                    </motion.div>
                </div>

                {/* Text Section */}
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start mt-10">
                        {/* Name */}
                        <h2 className="pb-2 text-white text-4xl tracking-tighter lg:text-8xl mt-0 lg:mt-10">
                            <motion.span
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1.2, ease: easing }}
                            >
                                Ahmad{" "}
                            </motion.span>
                            <motion.span
                                className="bg-gradient-to-r from-cyan-200 to-cyan-600 bg-clip-text text-transparent"
                                initial={{ opacity: 0, filter: "blur(10px)" }}
                                animate={{ opacity: 1, filter: "blur(0px)" }}
                                transition={{ duration: 1.2, ease: easing, delay: 0.5 }}
                            >
                                Sarosh
                            </motion.span>
                        </h2>

                        {/* Role */}
                        <motion.span
                            className="bg-gradient-to-r from-stone-100 to-stone-400 bg-clip-text text-3xl tracking-tight text-transparent"
                            initial={{ opacity: 0, filter: "blur(10px)" }}
                            animate={{ opacity: 1, filter: "blur(0px)" }}
                            transition={{ duration: 1.2, ease: easing, delay: 1 }}
                        >
                            Full Stack Developer
                        </motion.span>

                        {/* Description */}
                        <motion.p
                            className="my-2 max-w-lg py-6 text-white text-xl leading-relaxed tracking-tighter text-center lg:text-left"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, ease: easing, delay: 1.5 }}
                        >
                            {HERO_CONTENT}
                        </motion.p>

                        {/* Download Button */}
                        <motion.a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            download
                            className="rounded-full bg-white p-4 text-sm text-stone-900 hover:bg-cyan-400 transition mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, ease: easing, delay: 2 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Download Resume
                        </motion.a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
