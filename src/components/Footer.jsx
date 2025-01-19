
const Footer = () => {
    return (
        <footer className="pb-4 mt-4 border-t border-cyan-950 text-stone-100 py-10">
            <div className="container mx-auto px-4">
                {/* Middle Section: Quick Links */}
                <div className="flex flex-wrap justify-between gap-8 text-left">
                    <div className="w-1/2 sm:w-1/4">
                        <h3 className="text-lg font-semibold mb-4">Explore</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-cyan-400">About Me</a></li>
                            <li><a href="#projects" className="hover:text-cyan-400">Projects</a></li>
                            <li><a href="#tech" className="hover:text-cyan-400">Tech Stack</a></li>
                            <li><a href="#contact" className="hover:text-cyan-400">Contact</a></li>
                        </ul>
                    </div>
                    <div className="w-1/2 sm:w-1/4">
                        <h3 className="text-lg font-semibold mb-4">Resources</h3>
                        <ul className="space-y-2">
                            <li><a href="/blog" className="hover:text-cyan-400">Blog</a></li>
                            <li><a href="/resume.pdf" className="hover:text-cyan-400" download>Resume</a></li>
                        </ul>
                    </div>
                    <div className="w-1/2 sm:w-1/4">
                        <h3 className="text-lg font-semibold mb-4">Contact</h3>
                        <ul className="space-y-2">
                            <li><span>📍 Birmingham, UK</span></li>
                            <li><a href="mailto:ahmadsarosh07@gmail.com" className="hover:text-cyan-400">ahmadsarosh07@gmail.com</a></li>
                            <li><a href="tel:+447436659548" className="hover:text-cyan-400">+44 7436659548</a></li>
                        </ul>
                    </div>
                    <div className="w-1/2 sm:w-1/4">
                        <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
                        <ul className="space-y-2">
                            <li><a href="https://github.com/SaroshAhmad" className="hover:text-cyan-400">GitHub</a></li>
                            <li><a href="https://www.linkedin.com/in/ahmadsarosh/" className="hover:text-cyan-400">LinkedIn</a></li>
                            <li><a href="https://www.instagram.com/iamsaroshahmad/" className="hover:text-cyan-400">Instagram</a></li>
                            <li><a href="https://twitter.com/ahmadsarosh" className="hover:text-cyan-400">Twitter</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section: Copyright */}
                <div className="text-center mt-8">
                    <p className="text-sm text-stone-500">
                        &copy; {new Date().getFullYear()} Ahmad Sarosh. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
