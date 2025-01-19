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
        
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-semibold border-b-2 border-black">Contact Brian</h2>
                <p className="mt-4 text-lg text-gray-700">Feel free to reach out to me via the contact form.</p>

                {/* Contact Form */}
                <div className="mt-4 bg-white p-8 rounded-lg shadow-md">
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
    );
}
