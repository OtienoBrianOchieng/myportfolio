import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentAlt } from '@fortawesome/free-solid-svg-icons';

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
                    <div className="flex items-center space-x-2 p-2 border-b-2 bg-black border-black mb-2">
                        <FontAwesomeIcon icon={faCommentAlt} 
                         className="h-14 w-14 text-[#FFD700] mb-2" />
                        <h2 className="text-3xl font-extrabold text-white ">Contact Brian</h2>          
                    </div>
                <p className="mt-4 text-lg text-gray-700">Feel free to reach out to me via the contact form.</p>

                {/* Contact Form */}
                <div className="mt-4 bg-white p-8 rounded-lg shadow-md">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Send a Message</h3>
                    <form>
                        <input 
                            type="text" 
                            placeholder="Name" 
                            required
                            className="w-full p-3 mt-4 border border-gray-300 rounded-md"
                        />
                        <input 
                            type="email" 
                            placeholder="Email" 
                            required
                            className="w-full p-3 mt-4 border border-gray-300 rounded-md"
                        />
                        <textarea 
                            placeholder="Message" 
                            required
                            className="w-full p-3 mt-4 border border-gray-300 rounded-md"
                        />
                        <button 
                            type="submit" 
                            className="w-full bg-gray-600 text-white py-3 mt-4 rounded-md hover hover:bg-gray"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div> 
    );
}
