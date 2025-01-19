// import { useState } from "react";
// import profilePic from "../assets/AhmadSaroshProfile.svg";
// import { HERO_CONTENT } from "../constants";
// import { motion } from "framer-motion";

// const Hero = () => {
//     const [showConfirm, setShowConfirm] = useState(false); // State for confirmation dialog
//     const easing = [0.6, -0.05, 0.01, 0.99]; // Custom easing curve for smooth animations

//     const handleDownload = () => {
//         setShowConfirm(true); // Show the confirmation dialog
//     };

//     const confirmDownload = () => {
//         setShowConfirm(false); // Hide the confirmation dialog
//         // Trigger the download
//         const link = document.createElement("a");
//         link.href = "/resume.pdf";
//         link.download = true;
//         link.click();
//     };

//     return (
//         <div className="pt-20 pb-4 lg:mb-36 mt-10">
//             <div className="flex flex-wrap lg:flex-row-reverse">
//                 {/* Profile Picture Section */}
//                 <div className="w-full lg:w-1/2">
//                     <motion.div
//                         className="flex justify-center lg:p-8"
//                         initial={{ opacity: 0, scale: 0.8 }}
//                         animate={{ opacity: 1, scale: 1 }}
//                         transition={{ duration: 2, ease: easing }}
//                     >
//                         <img
//                             src={profilePic}
//                             alt="Ahmad Sarosh"
//                             className="border border-stone-900 rounded-3xl w-full md:w-3/4 lg:w-full"
//                         />
//                     </motion.div>
//                 </div>

//                 {/* Text Section */}
//                 <div className="w-full lg:w-1/2">
//                     <div className="flex flex-col items-center lg:items-start mt-10">
//                         {/* Name */}
//                         <h2 className="pb-2 text-white text-5xl justify-center tracking-tighter lg:text-8xl mt-0 lg:mt-10">
//                             <motion.span
//                                 initial={{ opacity: 0, x: -30 }}
//                                 animate={{ opacity: 1, x: 0 }}
//                                 transition={{ duration: 1.2, ease: easing }}
//                             >
//                                 Ahmad{" "}
//                             </motion.span>
//                             <motion.span
//                                 className="bg-gradient-to-r from-cyan-200 to-cyan-600 bg-clip-text text-transparent"
//                                 initial={{ opacity: 0, filter: "blur(10px)" }}
//                                 animate={{ opacity: 1, filter: "blur(0px)" }}
//                                 transition={{ duration: 1.2, ease: easing, delay: 0.5 }}
//                             >
//                                 Sarosh
//                             </motion.span>
//                         </h2>

//                         {/* Role */}
//                         <motion.span
//                             className="bg-gradient-to-r from-stone-500 to-stone-100 bg-clip-text text-3xl tracking-tight text-transparent font-medium lg:text-4xl"
//                             initial={{ opacity: 0, filter: "blur(10px)" }}
//                             animate={{ opacity: 1, filter: "blur(0px)" }}
//                             transition={{ duration: 1.2, ease: easing, delay: 1 }}
//                         >
//                             Full Stack Developer
//                         </motion.span>

//                         {/* Description */}
//                         <motion.p
//                             className="my-2 max-w-lg py-6 text-white text-xl leading-relaxed tracking-tighter font-medium text-center lg:text-left"
//                             initial={{ opacity: 0, y: 20 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 1.2, ease: easing, delay: 1.5 }}
//                         >
//                             {HERO_CONTENT}
//                         </motion.p>

//                         {/* Download Button */}
//                         <motion.button
//                             onClick={handleDownload}
//                             className="rounded-full bg-white p-4 text-sm text-stone-900 hover:bg-cyan-400 transition mb-4"
//                             initial={{ opacity: 0, y: 20 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 1.2, ease: easing, delay: 2 }}
//                             whileHover={{ scale: 1.05 }}
//                             whileTap={{ scale: 0.95 }}
//                         >
//                             Download Resume
//                         </motion.button>
//                     </div>
//                 </div>
//             </div>

//             {/* Confirmation Dialog */}
//             {showConfirm && (
//                 <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//                     <div className="bg-white rounded-lg p-6 text-center shadow-lg">
//                         <p className="mb-4 text-stone-900 text-lg">
//                             Are you sure you want to download the resume?
//                         </p>
//                         <div className="flex justify-center gap-4">
//                             <button
//                                 onClick={confirmDownload}
//                                 className="bg-cyan-400 text-white px-4 py-2 rounded hover:bg-cyan-500 transition"
//                             >
//                                 Yes
//                             </button>
//                             <button
//                                 onClick={() => setShowConfirm(false)}
//                                 className="bg-stone-300 text-black px-4 py-2 rounded hover:bg-stone-400 transition"
//                             >
//                                 No
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Hero;


import { useState } from "react";
import profilePic from "../assets/AhmadSaroshProfile.svg";
import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";
import { db } from "../firebase"; // Import Firestore instance
import { collection, addDoc } from "firebase/firestore"; // Firestore functions

const Hero = () => {
    const [showConfirm, setShowConfirm] = useState(false); // State for confirmation dialog
    const easing = [0.6, -0.05, 0.01, 0.99]; // Custom easing curve for smooth animations

    const handleDownload = () => {
        setShowConfirm(true); // Show the confirmation dialog
    };

    const logDownload = async () => {
        try {
            // Add a new document to the "downloads" collection
            await addDoc(collection(db, "downloads"), {
                timestamp: new Date().toISOString(),
            });
            console.log("Download logged successfully!");
        } catch (error) {
            console.error("Error logging the download:", error);
        }
    };

    const confirmDownload = () => {
        setShowConfirm(false); // Hide the confirmation dialog
        logDownload(); // Log the download in Firestore
        // Trigger the download
        const link = document.createElement("a");
        link.href = "/resume.pdf";
        link.download = true;
        link.click();
    };

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
                        <h2 className="pb-2 text-white text-5xl justify-center tracking-tighter lg:text-8xl mt-0 lg:mt-10">
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
                            className="bg-gradient-to-r from-stone-500 to-stone-100 bg-clip-text text-3xl tracking-tight text-transparent font-medium lg:text-4xl"
                            initial={{ opacity: 0, filter: "blur(10px)" }}
                            animate={{ opacity: 1, filter: "blur(0px)" }}
                            transition={{ duration: 1.2, ease: easing, delay: 1 }}
                        >
                            Full Stack Developer
                        </motion.span>

                        {/* Description */}
                        <motion.p
                            className="my-2 max-w-lg py-6 text-white text-xl leading-relaxed tracking-tighter font-medium text-center lg:text-left"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, ease: easing, delay: 1.5 }}
                        >
                            {HERO_CONTENT}
                        </motion.p>

                        {/* Download Button */}
                        <motion.button
                            onClick={handleDownload}
                            className="rounded-full bg-white p-4 text-sm text-stone-900 hover:bg-cyan-400 transition mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, ease: easing, delay: 2 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Download Resume
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* Confirmation Dialog */}
            {showConfirm && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 px-4">
                    <div className="bg-white rounded-lg p-6 text-center shadow-lg">
                        <p className="mb-4 text-stone-900 text-lg">
                            Are you sure you want to download the resume?
                        </p>
                        <div className="flex justify-center gap-4">
                            <button
                                onClick={confirmDownload}
                                className="bg-cyan-400 text-white px-4 py-2 rounded hover:bg-cyan-500 transition"
                            >
                                Yes
                            </button>
                            <button
                                onClick={() => setShowConfirm(false)}
                                className="bg-stone-300 text-black px-4 py-2 rounded hover:bg-stone-400 transition"
                            >
                                No
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Hero;
