import React from 'react';

export default function Contact() {
    // Fake data for contact section
    const contactInfo = {
        name: "John Doe",
        email: "johndoe@example.com",
        phone: "(123) 456-7890",
        socialLinks: {
            twitter: "https://twitter.com/johndoe",
            linkedin: "https://linkedin.com/in/johndoe",
            github: "https://github.com/johndoe"
        }
    };

    return (
        <div className="bg-gray-50 py-20">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-semibold text-blue-600">Contact Information</h2>
                <p className="mt-4 text-lg text-gray-700">Feel free to reach out to me via the contact form or through any of the links below.</p>

                {/* Contact Details */}
                <div className="mt-8">
                    <h3 className="text-xl font-semibold text-gray-800">Name:</h3>
                    <p className="mt-2 text-gray-600">{contactInfo.name}</p>

                    <h3 className="text-xl font-semibold text-gray-800 mt-4">Email:</h3>
                    <p className="mt-2 text-gray-600">{contactInfo.email}</p>

                    <h3 className="text-xl font-semibold text-gray-800 mt-4">Phone:</h3>
                    <p className="mt-2 text-gray-600">{contactInfo.phone}</p>

                    <h3 className="text-xl font-semibold text-gray-800 mt-4">Social Links:</h3>
                    <ul className="mt-2 space-y-2 text-gray-600">
                        <li>
                            <a href={contactInfo.socialLinks.twitter} className="hover:text-blue-500" target="_blank" rel="noopener noreferrer">
                                Twitter
                            </a>
                        </li>
                        <li>
                            <a href={contactInfo.socialLinks.linkedin} className="hover:text-blue-500" target="_blank" rel="noopener noreferrer">
                                LinkedIn
                            </a>
                        </li>
                        <li>
                            <a href={contactInfo.socialLinks.github} className="hover:text-blue-500" target="_blank" rel="noopener noreferrer">
                                GitHub
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Contact Form */}
                <div className="mt-12 bg-white p-8 rounded-lg shadow-md">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Send a Message</h3>
                    <form>
                        <input 
                            type="text" 
                            placeholder="Your Name" 
                            className="w-full p-3 mt-4 border border-gray-300 rounded-md"
                        />
                        <input 
                            type="email" 
                            placeholder="Your Email" 
                            className="w-full p-3 mt-4 border border-gray-300 rounded-md"
                        />
                        <textarea 
                            placeholder="Your Message" 
                            className="w-full p-3 mt-4 border border-gray-300 rounded-md"
                        />
                        <button 
                            type="submit" 
                            className="w-full bg-blue-600 text-white py-3 mt-4 rounded-md hover:bg-blue-700"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
