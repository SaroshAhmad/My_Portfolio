// BlogPage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const BlogPage = () => {
    const easing = [0.6, -0.05, 0.01, 0.99];

    // Sample blog data - you'll replace this with your actual data
    const blogs = [
        {
            id: 1,
            title: "Building Modern Web Applications",
            excerpt: "Exploring the latest trends in web development and how to implement them effectively...",
            date: "March 15, 2025",
            imageUrl: "/api/placeholder/800/400",
            category: "Web Development"
        },
        // Add more blog posts here
    ];

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
                        className="text-9xl lg:text-9xl font-bold mb-8 bg-gradient-to-r from-cyan-200 to-cyan-600 bg-clip-text text-transparent"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: easing }}
                    >
                        Blog
                    </motion.h1>
                    <motion.p
                        className="text-stone-300 text-lg"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: easing, delay: 0.2 }}
                    >
                        Thoughts, learnings, and insights about web development
                    </motion.p>
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
                                    <p className="text-stone-300 text-sm mb-4">
                                        {blog.excerpt}
                                    </p>
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

// BlogPost.jsx
const BlogPost = () => {
    const easing = [0.6, -0.05, 0.01, 0.99];

    return (
        <div className="mt-20 pt-20 pb-4 min-h-screen">
            <motion.article
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: easing }}
                className="container mx-auto px-4 max-w-4xl"
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: easing }}
                    className="mb-8"
                >
                    <span className="text-cyan-400">Web Development</span>
                    <h1 className="text-4xl lg:text-5xl font-bold my-4 text-white">
                        Building Modern Web Applications
                    </h1>
                    <div className="flex items-center text-stone-400 text-sm">
                        <span>March 15, 2025</span>
                        <span className="mx-2">•</span>
                        <span>5 min read</span>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: easing, delay: 0.2 }}
                >
                    <img
                        src="/api/placeholder/1200/600"
                        alt="Blog Post Header"
                        className="w-full rounded-xl mb-8"
                    />

                    <div className="prose prose-lg prose-invert max-w-none">
                        <p className="text-stone-300 leading-relaxed mb-6">
                            Your blog content goes here. The prose class will style your markdown content beautifully.
                        </p>

                        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
                            Section Heading
                        </h2>

                        <p className="text-stone-300 leading-relaxed mb-6">
                            More content here...
                        </p>
                    </div>
                </motion.div>
            </motion.article>
        </div>
    );
};

export { BlogPage, BlogPost };