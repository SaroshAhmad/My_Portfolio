import { CONTACT } from "../constants";

const Contact = () => {
    return (
        <div className="pb-4 border-t border-cyan-950" id="contact">
            <h2 className="my-10 text-center text-4xl text-stone-200">Get In <span className="text-cyan-400">Touch</span></h2>
            <div className="text-center tracking-tighter text-stone-300 mb-12 lg:text-left lg:flex lg:justify-between lg:space-x-10">
                <div className="w-full lg:w-1/2 lg:mt-10 lg:ml-60">
                    <p className="my-4">{CONTACT.address}</p>
                    <p className="my-4">{CONTACT.phoneNo}</p>
                    <a href={`mailto:${CONTACT.email}`} className="text-cyan-400 hover:text-cyan-500 transition">
                        {CONTACT.email}
                    </a>
                </div>
                <div className="lg:w-1/2 mt-8 lg:mt-0">
                    <form className="w-full space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-stone-400 mb-2 text-sm">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Your Name"
                                className="w-full rounded border border-stone-800 bg-transparent px-4 py-2 text-stone-300 placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
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
                            ></textarea>
                        </div>
                        <div className="text-center">
                            <button
                                type="submit"
                                className="rounded-full bg-white p-4 text-sm text-stone-900 hover:bg-cyan-500 transition"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
