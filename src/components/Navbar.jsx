import { useState, useEffect } from "react";
import logo from "../assets/AhmadSaroshLogo.svg";
import { FaGithub, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { FaHeart } from "react-icons/fa6";
import { db, doc, getDoc, setDoc, increment } from "../firebase"; // Firebase functions
import confetti from "canvas-confetti"; // Confetti animation

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(0);

    // Scroll handler
    const handleScroll = () => {
        setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);

    // Fetch like count from Firestore
    useEffect(() => {
        const fetchLikeCount = async () => {
            const docRef = doc(db, "likes", "totalLikes");
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                setLikeCount(docSnap.data().count);
            } else {
                // Create the document if it doesn't exist
                await setDoc(docRef, { count: 0 });
            }
        };
        fetchLikeCount();
    }, []);

    // Handle heart click
    const handleLike = async () => {
        setIsLiked(true);

        // Increment like count in Firestore
        const docRef = doc(db, "likes", "totalLikes");
        await setDoc(docRef, { count: increment(1) }, { merge: true });

        // Update local state for like count
        setLikeCount((prevCount) => prevCount + 1);

        // Trigger confetti animation
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
        });

        // Show the thank you message
        showThankYouMessage();
    };

    // Display thank you message
    const showThankYouMessage = () => {
        alert(`Thank you for your love! The website has ${likeCount + 1} likes!`);
    };

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
                    <li>
                        <a
                            href="/blog"
                            className="hover:text-cyan-300 transition-all duration-200"
                        >
                            Blog
                        </a>
                    </li>
                </ul>
            </div>

            {/* Social Icons for Large Screens */}
            <div className="hidden lg:flex items-center gap-4 text-2xl text-stone-300">
                <FaHeart
                    onClick={handleLike}
                    className={`text-3xl cursor-pointer ${isLiked ? "text-red-500 delay-300" : "text-stone-300"}`}
                />
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
                className={`fixed top-32 right-4 w-60 h-auto pb-4 bg-stone-900/60 backdrop-blur-sm rounded-lg z-40 transition-all duration-300 transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
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
                    <a
                        href="/blog"
                        className="hover:text-cyan-300 transition-all duration-200"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Blog
                    </a>

                    {/* Social Icons */}
                    <div className="flex gap-4 text-2xl">
                        <FaHeart
                            onClick={handleLike}
                            className={`text-3xl cursor-pointer ${isLiked ? "text-red-500 delay-300" : "text-stone-300"}`}
                        />
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
