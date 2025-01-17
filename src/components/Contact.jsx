
// import { CONTACT } from "../constants"

// const Contact = () => {
//     return (
//         <div className="pb-4 border-t border-stone-900" id="contact">
//             <h2 className="my-10 text-center text-4xl">Get in Touch</h2>
//             <div className="text-center tracking-tighter">
//                 <p className="my-4">
//                     {CONTACT.address}
//                 </p>
//                 <p className="my-4">
//                     {CONTACT.phoneNo}
//                 </p>
//                 <a href="#" className="border-b">
//                     {CONTACT.email}
//                 </a>
//             </div>
//         </div>
//     )
// }

// export default Contact

import { CONTACT } from "../constants";

const Contact = () => {
    return (
        <div className="pb-16 border-t border-stone-900" id="contact">
            <h2 className="my-10 text-center text-4xl text-stone-200">Get in Touch</h2>
            <div className="text-center tracking-tighter text-stone-300 mb-12">
                <p className="my-4">{CONTACT.address}</p>
                <p className="my-4">{CONTACT.phoneNo}</p>
                <a href={`mailto:${CONTACT.email}`} className="text-cyan-400 hover:text-cyan-500 transition">
                    {CONTACT.email}
                </a>
            </div>
            <div className="flex justify-center">
                <form className="w-full max-w-lg space-y-6">
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
                            className="rounded-full bg-cyan-500 px-6 py-2 text-sm font-semibold text-stone-900 hover:bg-cyan-600 transition"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
