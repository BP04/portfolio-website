"use client"
import React, { useState } from "react"
import GithubIcon from "../../../public/github-icon.svg"
import LinkedinIcon from "../../../public/linkedin-icon.svg"
import Link from "next/link"
import Image from "next/image"

const Contact = () => {
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [emailSubmitted, setEmailSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log({ email, subject, message });

        setEmail('');
        setSubject('');
        setMessage('');
        setEmailSubmitted(true);
    };

    return (
        <section id="contact" className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
            <div className="z-10">
                <h5 className="text-xl font-bold text-white my-2">
                    Let&apos;s Connect
                </h5>
                <p className="text-[#ADB7BE] mb-4 max-w-md">
                    I&apos;m currently looking for new opportunities, my inbox is always
                    open. Whether you have a question or just want to say hi, I&apos;ll
                    try my best to get back to you!
                </p>
                <div className="socials flex flex-row gap-2">
                    <Link href="https://github.com/BP04">
                        <Image src={GithubIcon} alt="Github Icon" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/benedict-presley-b834ab29a/">
                        <Image src={LinkedinIcon} alt="Linkedin Icon" />
                    </Link>
                </div>
            </div>
            <div>
                {emailSubmitted ? (
                    <p className="text-green-500 text-sm mt-2">
                        Email sent successfully!
                    </p>
                ) : (
                    <form className="flex flex-col" onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">
                                Your email
                            </label>
                            <input
                                name="email"
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                                placeholder="something@google.com"
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="subject" className="text-white block text-sm mb-2 font-medium">
                                Subject
                            </label>
                            <input
                                name="subject"
                                type="text"
                                id="subject"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                required
                                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                                placeholder="Hi!"
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                htmlFor="message"
                                className="text-white block text-sm mb-2 font-medium"
                            >
                                Message
                            </label>
                            <textarea
                                name="message"
                                id="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                                placeholder="Let's talk about..."
                            />
                        </div>
                        <button type="submit" className="bg-blue-700 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full">
                            Send Message
                        </button>
                    </form>
                    )}
            </div>
        </section>
    );
};

export default Contact;
