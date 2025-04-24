import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { CONTACT } from "../constants";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState(""); // For feedback messages
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Show submitting feedback
        setIsSubmitting(true);
        setStatus("Submitting your message...");

        try {
            // Store the contact form data in Firebase Firestore
            await addDoc(collection(db, "contactMessages"), {
                name,
                email,
                message,
                timestamp: new Date(),
            });

            // Provide success feedback
            setStatus("Thank you for your message! I'll get back to you soon.");
            setName("");
            setEmail("");
            setMessage("");
        } catch (error) {
            console.error("Error submitting form: ", error);
            setStatus("Oops, something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="pt-24 pb-4 px-4 md:px-8 border-t border-cyan-950" id="contact">
            <h2 className="mb-12 text-center text-4xl text-stone-200">Get In <span className="text-cyan-400">Touch</span></h2>
            <div className="text-center tracking-tighter text-stone-300 mb-12 lg:text-left lg:flex lg:justify-between lg:space-x-10">
                <div className="w-full lg:w-1/2 lg:mt-10 lg:ml-60">
                    <p className="font-semibold my-4">{CONTACT.address}</p>
                    <div>
                        <a href={`mailto:${CONTACT.email}`} className="font-semibold text-cyan-400 hover:text-cyan-500 transition block mb-4">
                            {CONTACT.email}
                        </a>
                    </div>
                    <div>
                        <a href={`tel:${CONTACT.phoneNo}`} className="font-semibold text-cyan-400 hover:text-cyan-500 transition block">
                            {CONTACT.phoneNo}
                        </a>
                    </div>
                </div>

                <div className="lg:w-1/2 mt-8 lg:mt-0">
                    <form onSubmit={handleSubmit} className="w-full space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-stone-400 mb-2 text-sm">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Your Name"
                                className="w-full rounded border border-stone-800 bg-transparent px-4 py-2 text-stone-300 placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-stone-400 mb-2 text-sm">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Your Email"
                                className="w-full rounded border border-stone-800 bg-transparent px-4 py-2 text-stone-300 placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-stone-400 mb-2 text-sm">
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows="5"
                                placeholder="Your Message"
                                className="w-full rounded border border-stone-800 bg-transparent px-4 py-2 text-stone-300 placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            ></textarea>
                        </div>
                        <div className="text-center">
                            <button
                                type="submit"
                                className="rounded-full bg-white p-4 text-sm text-stone-900 hover:bg-cyan-500 transition"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </button>
                        </div>
                    </form>
                    <div className="mt-4 text-center text-stone-300">
                        {status && <p>{status}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
