// import logo from "../assets/AhmadSaroshLogo.svg"
// import { FaGithub, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6"

// const Navbar = () => {
//     return (
//         <nav className="flex items-center justify-between py-5">
//             <div className="flex flex-shrink-0 items-center">
//                 <a href="/" aria-label="Home">
//                     <img src={logo} alt="Logo" className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 transition-all duration-400 hover:filter hover:drop-shadow-glow" />
//                 </a>
//                 <div className="flex-1 flex justify-center">
//                     <ul className="hidden lg:flex gap-8 text-lg text-stone-300">
//                         <li>
//                             <a href="#tech" className="hover:text-stone-100 transition-all duration-200">
//                                 Tech
//                             </a>
//                         </li>
//                         <li>
//                             <a href="#projects" className="hover:text-stone-100 transition-all duration-200">
//                                 Projects
//                             </a>
//                         </li>
//                         <li>
//                             <a href="#experience" className="hover:text-stone-100 transition-all duration-200">
//                                 Experience
//                             </a>
//                         </li>
//                         <li>
//                             <a href="#contact" className="hover:text-stone-100 transition-all duration-200">
//                                 Contact
//                             </a>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//             <div className="m-8 flex items-center justify-center gap-4 text-2xl">
//                 <a href="https://www.linkedin.com/in/ahmadsarosh/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
//                     <FaLinkedin />
//                 </a>
//                 <a href="https://github.com/SaroshAhmad" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
//                     <FaGithub />
//                 </a>
//                 <a href="https://www.instagram.com/iamsaroshahmad/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
//                     <FaInstagram />
//                 </a>
//                 <a href="https://x.com/AhmadSarosh07" target="_blank" rel="noopener noreferrer" aria-label="x">
//                     <FaXTwitter />
//                 </a>
//             </div>
//         </nav>
//     )
// }

// export default Navbar


import logo from "../assets/AhmadSaroshLogo.svg";
import { FaGithub, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between py-5">
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

            {/* Navigation Links Section */}
            <div className="flex-1 flex justify-center">
                <ul className="hidden lg:flex gap-8 text-lg font-semibold text-stone-300">
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

            {/* Social Icons Section */}
            <div className="flex items-center gap-4 text-2xl text-stone-300">
                <a
                    href="https://www.linkedin.com/in/ahmadsarosh/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="hover:text-stone-100 transition-all duration-200"
                >
                    <FaLinkedin />
                </a>
                <a
                    href="https://github.com/SaroshAhmad"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="hover:text-stone-100 transition-all duration-200"
                >
                    <FaGithub />
                </a>
                <a
                    href="https://www.instagram.com/iamsaroshahmad/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="hover:text-stone-100 transition-all duration-200"
                >
                    <FaInstagram />
                </a>
                <a
                    href="https://x.com/AhmadSarosh07"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="x"
                    className="hover:text-stone-100 transition-all duration-200"
                >
                    <FaXTwitter />
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
