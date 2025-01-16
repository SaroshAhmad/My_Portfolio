import logo from "../assets/raviKumarLogo.webp"
import { FaGithub, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6"

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between py-5">
            <div className="flex flex-shrink-0 items-center">
                <a href="/" aria-label="Home">
                    <img src={logo} alt="" />
                </a>
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a href="https://www.linkedin.com/in/ahmadsarosh/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/SaroshAhmad" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <FaGithub />
                </a>
                <a href="https://www.instagram.com/iamsaroshahmad/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <FaInstagram />
                </a>
                <a href="https://x.com/AhmadSarosh07" target="_blank" rel="noopener noreferrer" aria-label="x">
                    <FaXTwitter />
                </a>
            </div>
        </nav>
    )
}

export default Navbar