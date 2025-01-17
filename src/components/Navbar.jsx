import { useState } from "react";
import logo from "../assets/AhmadSaroshLogo.svg";
import { FaGithub, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { CiHeart } from "react-icons/ci";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Scroll handler
    const handleScroll = () => {
        setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);

    return (
        <nav
            className={`flex items-center justify-between py-5 px-8 fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
                ? "bg-gradient-to-b from-stone-900/70 via-stone-900/50 to-transparent backdrop-blur-md shadow-lg"
                : "bg-transparent"
                }`}
        >
            {/* Logo Section */}
            <div className="flex flex-shrink-0 items-center">
                <a href="/" aria-label="Home">
                    <img
                        src={logo}
                        alt="Logo"
                        className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 transition-all duration-400 hover:filter hover:drop-shadow-glow"
                    />
                </a>
            </div>

            {/* Navigation Links for Large Screens */}
            <div className="hidden lg:flex flex-1 justify-center">
                <ul className="flex gap-8 text-lg font-semibold text-stone-300">
                    <li>
                        <a
                            href="#tech"
                            className="hover:text-cyan-300 transition-all duration-200"
                        >
                            Tech
                        </a>
                    </li>
                    <li>
                        <a
                            href="#projects"
                            className="hover:text-cyan-300 transition-all duration-200"
                        >
                            Projects
                        </a>
                    </li>
                    <li>
                        <a
                            href="#experience"
                            className="hover:text-cyan-300 transition-all duration-200"
                        >
                            Experience
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            className="hover:text-cyan-300 transition-all duration-200"
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </div>

            {/* Social Icons for Large Screens */}
            <div className="hidden lg:flex items-center gap-4 text-2xl text-stone-300">
                <CiHeart className="text-3xl" />
                <a
                    href="https://www.linkedin.com/in/ahmadsarosh/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="hover:text-cyan-300 transition-all duration-200"
                >
                    <FaLinkedin />
                </a>
                <a
                    href="https://github.com/SaroshAhmad"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="hover:text-cyan-300 transition-all duration-200"
                >
                    <FaGithub />
                </a>
                <a
                    href="https://www.instagram.com/iamsaroshahmad/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="hover:text-cyan-300 transition-all duration-200"
                >
                    <FaInstagram />
                </a>
                <a
                    href="https://x.com/AhmadSarosh07"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="x"
                    className="hover:text-cyan-300 transition-all duration-200"
                >
                    <FaXTwitter />
                </a>
            </div>

            {/* Hamburger Menu Icon for Small Screens */}
            <div className="lg:hidden">
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="text-2xl text-stone-300 hover:text-cyan-300 transition-all duration-500"
                    aria-label="Toggle Menu"
                >
                    {isMenuOpen ? <RxCross1 /> : <RxHamburgerMenu />}
                </button>
            </div>

            {/* Hamburger Menu Dropdown for Small Screens */}
            <div
                className={`fixed top-32 right-4 w-60 h-auto pb-4 bg-stone-900/60 backdrop-blur-sm rounded-lg z-40 transition-all duration-300 transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                <div className="flex flex-col items-start justify-start mt-12 ml-4 gap-8 text-stone-300 text-lg font-semibold">
                    {/* Navbar Links */}
                    <a
                        href="#tech"
                        className="hover:text-cyan-300 transition-all duration-200"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Tech
                    </a>
                    <a
                        href="#projects"
                        className="hover:text-cyan-300 transition-all duration-200"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Projects
                    </a>
                    <a
                        href="#experience"
                        className="hover:text-cyan-300 transition-all duration-200"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Experience
                    </a>
                    <a
                        href="#contact"
                        className="hover:text-cyan-300 transition-all duration-200"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Contact
                    </a>

                    {/* Social Icons */}
                    <div className="flex gap-4 text-2xl">
                        <a
                            href="https://www.linkedin.com/in/ahmadsarosh/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="hover:text-cyan-300 transition-all duration-200"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="https://github.com/SaroshAhmad"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="hover:text-cyan-300 transition-all duration-200"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="https://www.instagram.com/iamsaroshahmad/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            className="hover:text-cyan-300 transition-all duration-200"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <FaInstagram />
                        </a>
                        <a
                            href="https://x.com/AhmadSarosh07"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="x"
                            className="hover:text-cyan-300 transition-all duration-200"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <FaXTwitter />
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
