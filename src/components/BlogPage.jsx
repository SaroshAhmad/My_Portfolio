import React from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";

// Blog data
const blogs = [
    {
        id: 1,
        title: "Building Modern Web Applications",
        excerpt:
            "Exploring the latest trends in web development and how to implement them effectively...",
        date: "March 15, 2025",
        imageUrl: "../public/images/blog1.jpg",
        category: "Web Development",
        content: `
        <h1>Building Modern Web Applications: A Guide for Today's Digital Landscape</h1>

        <p>In today's fast-paced digital world, creating web applications that stand out requires more than just basic coding knowledge. Modern web applications need to be fast, responsive, and provide an exceptional user experience across all devices. Let's explore the essential elements that make a web application truly modern.</p>
        
        <h2>User Experience Takes Centre Stage</h2>
        
        <p>The cornerstone of any modern web application is its user experience. Today's users expect interfaces that are not only visually appealing but also intuitive and responsive. Implementing features like dark mode, smooth animations, and accessibility options isn't just nice to have – it's essential.</p>
        
        <h2>Performance: Speed Matters</h2>
        
        <p>Loading times can make or break your application. Modern web apps utilise techniques like:</p>
        <ul>
            <li>Code splitting to load only what's needed</li>
            <li>Image optimisation for faster rendering</li>
            <li>Caching strategies for improved performance</li>
            <li>Server-side rendering for quick initial loads</li>
        </ul>
        
        <h2>Modern Technology Stack</h2>
        
        <p>Choosing the right tools is crucial. Popular choices include:</p>
        <ul>
            <li>React or Next.js for dynamic user interfaces</li>
            <li>Tailwind CSS for modern styling</li>
            <li>TypeScript for type-safe development</li>
            <li>Node.js for scalable backend services</li>
        </ul>
        
        <h2>Mobile-First Approach</h2>
        
        <p>With mobile devices accounting for over half of web traffic, designing for smaller screens first is non-negotiable. Modern applications must be responsive and provide a consistent experience across all device sizes.</p>
        
        <h2>Progressive Enhancement</h2>
        
        <p>Building applications that work well regardless of browser capabilities ensures wider accessibility. Start with a solid foundation, then layer on advanced features for capable browsers.</p>
        
        <h2>Security at the Core</h2>
        
        <p>Modern web applications must prioritise security. This includes:</p>
        <ul>
            <li>Regular security audits</li>
            <li>HTTPS implementation</li>
            <li>Data encryption</li>
            <li>Secure authentication methods</li>
        </ul>
        
        <h2>Testing and Maintenance</h2>
        
        <p>Automated testing and continuous integration ensure your application remains reliable and maintainable. Regular updates and performance monitoring help maintain optimal functionality.</p>
        
        <h2>Conclusion</h2>
        
        <p>Building modern web applications requires a holistic approach that balances user experience, performance, and security. By focusing on these key areas and staying current with technology trends, you can create applications that not only meet today's standards but are also prepared for tomorrow's challenges.</p>
        
        <p><em>Looking to modernise your web application? Start by evaluating your current stack and identifying areas for improvement. The journey to building better web applications is continuous, but the rewards are worth the effort.</em></p>
        
        <p><small>Keywords: web development, modern applications, user experience, performance optimization, responsive design, web security, frontend development, TypeScript, React, Next.js</small></p>
    `,
    },
    {
        id: 2,
        title: "Mastering React for Scalable Apps",
        excerpt:
            "Understand the core principles of React to build scalable and maintainable applications...",
        date: "Coming in 2025",
        imageUrl: "../public/images/blog2.jpg",
        category: "Frontend Development",
        content: "", // No content available
    },
    {
        id: 3,
        title: "Future of AI in Web Development",
        excerpt:
            "Dive into how AI is shaping the future of web development and how you can leverage it...",
        date: "Coming in 2025",
        imageUrl: "../public/images/blog3.jpg",
        category: "AI and Web",
        content: "", // No content available
    },
];

const BlogPage = () => {
    const easing = [0.6, -0.05, 0.01, 0.99];

    return (
        <div className="pt-20 pb-4 min-h-screen">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: easing }}
                className="container mx-auto px-4"
            >
                <div className="mt-10 mb-12 text-center">
                    <motion.h1
                        className="text-6xl mb-2 lg:text-[10rem] font-bold pb-4 lg:mb-6 bg-gradient-to-r from-cyan-100 to-cyan-500 bg-clip-text text-transparent"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: easing }}
                    >
                        My Blogs
                    </motion.h1>
                    <motion.p
                        className="text-white text-base font-medium lg:text-2xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: easing, delay: 0.2 }}
                    >
                        <strong>Thoughts, learnings, and insights</strong>
                    </motion.p>
                </div>

                {/* Go Back Button */}
                <div className="mb-8 text-center">
                    <Link to="/">
                        <button className="rounded-full bg-white p-4 text-sm text-stone-900 hover:bg-cyan-400 transition mb-4 delay-100">
                            Go Back to Portfolio (Click the logo to navigate)
                        </button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog) => (
                        <motion.div
                            key={blog.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: easing }}
                            className="bg-stone-900/50 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
                        >
                            <Link to={`/blog/${blog.id}`}>
                                <img
                                    src={blog.imageUrl}
                                    alt={blog.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6">
                                    <span className="text-cyan-400 text-sm">{blog.category}</span>
                                    <h2 className="text-xl font-semibold text-white mt-2 mb-3">
                                        {blog.title}
                                    </h2>
                                    <p className="text-stone-300 text-sm mb-4">{blog.excerpt}</p>
                                    <div className="flex justify-between items-center">
                                        <span className="text-stone-400 text-sm">{blog.date}</span>
                                        <span className="text-cyan-400 text-sm">Read More →</span>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

const BlogPost = () => {
    const { id } = useParams();
    const blog = blogs.find((blog) => blog.id === parseInt(id));

    if (!blog) {
        return (
            <div className="mt-20 pt-20 pb-4 min-h-screen text-center text-white">
                <h1 className="text-4xl">Blog not found!</h1>
                <Link to="/blog">
                    <button className="mt-4 rounded-full bg-white p-4 text-sm text-stone-900 hover:bg-cyan-400 transition">
                        ← Back to Blogs
                    </button>
                </Link>
            </div>
        );
    }

    const easing = [0.6, -0.05, 0.01, 0.99];

    return (
        <div className="mt-20 pt-20 pb-4 min-h-screen">
            <motion.article
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: easing }}
                className="container mx-auto px-4 max-w-4xl"
            >
                {/* Back to Blogs Button */}
                <div className="mb-8">
                    <Link to="/blog">
                        <button className="rounded-full bg-white p-4 text-sm text-stone-900 hover:bg-cyan-400 transition mb-4 delay-100">
                            ← Back to Blogs
                        </button>
                    </Link>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: easing }}
                    className="mb-8"
                >
                    <span className="text-cyan-400">{blog.category}</span>
                    <h1 className="text-4xl lg:text-5xl font-bold my-4 text-white">
                        {blog.title}
                    </h1>
                    <div className="flex items-center text-stone-400 text-sm">
                        <span>{blog.date}</span>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: easing, delay: 0.2 }}
                >
                    <img
                        src={blog.imageUrl}
                        alt={blog.title}
                        className="w-full rounded-xl mb-8"
                    />
                    <div
                        className="prose prose-lg prose-invert max-w-none"
                        dangerouslySetInnerHTML={{
                            __html: blog.content || `<p>Content coming soon on this topic.</p>`,
                        }}
                    />
                </motion.div>
            </motion.article>
        </div>
    );
};

export { BlogPage, BlogPost };
