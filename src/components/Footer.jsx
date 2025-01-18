import React from 'react';

export default function Footer() {
    // Fake social media links
    const socialLinks = {
        twitter: "https://twitter.com/johndoe",
        linkedin: "https://linkedin.com/in/johndoe",
        github: "https://github.com/johndoe"
    };

 
    return (
        <>
        
        </>
        // <div className="bg-gray-800 text-white py-12 mt-16">
        //     <div className="max-w-7xl mx-auto px-4">
        //         <div className="flex justify-between items-center">
        //             {/* Left section - copyright */}
        //             <div>
        //                 <p className="text-sm">&copy; 2025 John Doe. All Rights Reserved.</p>
        //             </div>

        //             {/* Middle section - footer links */}
        //             <div className="space-x-6">
        //                 <a href="#about" className="hover:text-blue-400">About</a>
        //                 <a href="#skills" className="hover:text-blue-400">Skills</a>
        //                 <a href="#projects" className="hover:text-blue-400">Projects</a>
        //                 <a href="#catalog" className="hover:text-blue-400">Catalog</a>
        //                 <a href="#contact" className="hover:text-blue-400">Contact</a>
        //             </div>

        //             {/* Right section - social media links */}
        //             <div className="space-x-6">
        //                 <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
        //                     Twitter
        //                 </a>
        //                 <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
        //                     LinkedIn
        //                 </a>
        //                 <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
        //                     GitHub
        //                 </a>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
}
