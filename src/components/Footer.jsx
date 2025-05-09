
import { useLocation } from 'react-router-dom';

const Footer = () => {
    const location = useLocation();
    const isBlogPage = location.pathname.startsWith("/blog");

    if (isBlogPage) {
        return null;
    }

    return (
        <footer className="relative pt-20 pb-10 border-t border-cyan-950">
            {/* Background gradient for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/50 to-transparent pointer-events-none" />

            <div className="container mx-auto px-6 relative">
                {/* Main content grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
                    {/* Explore Section */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-semibold text-stone-100">
                            Explore
                        </h3>
                        <ul className="space-y-4">
                            <li>
                                <a href="#" className="text-stone-400 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group">
                                    <span className="w-1.5 h-1.5 bg-cyan-400/50 rounded-full group-hover:scale-150 transition-transform duration-300"></span>
                                    About Me
                                </a>
                            </li>
                            <li>
                                <a href="#projects" className="text-stone-400 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group">
                                    <span className="w-1.5 h-1.5 bg-cyan-400/50 rounded-full group-hover:scale-150 transition-transform duration-300"></span>
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a href="#tech" className="text-stone-400 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group">
                                    <span className="w-1.5 h-1.5 bg-cyan-400/50 rounded-full group-hover:scale-150 transition-transform duration-300"></span>
                                    Tech Stack
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="text-stone-400 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group">
                                    <span className="w-1.5 h-1.5 bg-cyan-400/50 rounded-full group-hover:scale-150 transition-transform duration-300"></span>
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Resources Section */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-semibold text-stone-100">
                            Resources
                        </h3>
                        <ul className="space-y-4">
                            <li>
                                <a href="/blog" className="text-stone-400 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group">
                                    <span className="w-1.5 h-1.5 bg-cyan-400/50 rounded-full group-hover:scale-150 transition-transform duration-300"></span>
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="/resume.pdf" download className="text-stone-400 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group">
                                    <span className="w-1.5 h-1.5 bg-cyan-400/50 rounded-full group-hover:scale-150 transition-transform duration-300"></span>
                                    Resume
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-semibold text-stone-100">
                            Contact
                        </h3>
                        <ul className="space-y-4">
                            <li className="text-stone-400 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-cyan-400/50 rounded-full"></span>
                                📍 Glasgow, UK
                            </li>
                            <li>
                                <a href="mailto:ahmadsarosh07@gmail.com" className="text-stone-400 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group">
                                    <span className="w-1.5 h-1.5 bg-cyan-400/50 rounded-full group-hover:scale-150 transition-transform duration-300"></span>
                                    ahmadsarosh07@gmail.com
                                </a>
                            </li>
                            <li>
                                <a href="tel:+447436659548" className="text-stone-400 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group">
                                    <span className="w-1.5 h-1.5 bg-cyan-400/50 rounded-full group-hover:scale-150 transition-transform duration-300"></span>
                                    +44 7436659548
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Follow Me Section */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-semibold text-stone-100 ">
                            Follow Me
                        </h3>
                        <ul className="space-y-4">
                            <li>
                                <a href="https://github.com/SaroshAhmad" className="text-stone-400 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group">
                                    <span className="w-1.5 h-1.5 bg-cyan-400/50 rounded-full group-hover:scale-150 transition-transform duration-300"></span>
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/ahmadsarosh/" className="text-stone-400 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group">
                                    <span className="w-1.5 h-1.5 bg-cyan-400/50 rounded-full group-hover:scale-150 transition-transform duration-300"></span>
                                    LinkedIn
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/iamsaroshahmad/" className="text-stone-400 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group">
                                    <span className="w-1.5 h-1.5 bg-cyan-400/50 rounded-full group-hover:scale-150 transition-transform duration-300"></span>
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/ahmadsarosh" className="text-stone-400 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group">
                                    <span className="w-1.5 h-1.5 bg-cyan-400/50 rounded-full group-hover:scale-150 transition-transform duration-300"></span>
                                    Twitter
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright Section with divider */}
                <div className="mt-16 pt-8 border-t border-cyan-950/30">
                    <p className="text-sm text-stone-500 text-center">
                        &copy; {new Date().getFullYear()} Ahmad Sarosh. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;