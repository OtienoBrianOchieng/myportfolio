import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList } from '@fortawesome/free-solid-svg-icons';


export default function Projects() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
                <div className="flex items-center space-x-2 p-2 border-b-2 bg-black border-black mb-6">
                            <FontAwesomeIcon icon={faClipboardList} 
                            className="h-14 w-14 text-[#FFD700] mb-2" />
                            <h2 className="text-3xl font-extrabold text-white ">Projects</h2>          
                </div>

        {/* Poaplan Project */}
        <div className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-800">Poaplan</h3>
        <p className="text-lg text-gray-700 mb-4">
            A full-stack web app designed to improve care for individuals with sickle-cell disease. As a father and caregiver of a child with this condition, I developed this app to facilitate the care process.
        </p>
        <ul className="list-disc pl-6 text-lg text-gray-700">
            <li>Backend built with Flask Restful API framework and PostgreSQL database, hosted on Host Pinnacle.</li>
            <li>Front-end built using React.js, Vanilla JavaScript, and Tailwind CSS.</li>
            <li>Mobile responsive design for all devices.</li>
        </ul>
        <a href="https://poaplan.com" target='_blank' className="text-blue-800 font-bold text-2xl underline mt-4 inline-block">View Project</a>
        </div>

        {/* Lipa Kesho Project */}
        <div>
        <h3 className="text-2xl font-semibold text-gray-800">Lipa Kesho (On-going)</h3>
        <p className="text-lg text-gray-700 mb-4">
            A mobile application designed to help small businesses, such as Mama Mboga, track debts and manage clients.
        </p>
        <ul className="list-disc pl-6 text-lg text-gray-700">
            <li>Built using React Native for the front-end and Flask for the back-end.</li>
            <li>Business side of the application is completed; currently working on the client side.</li>
        </ul>
        <p className="text-lg text-gray-700 mt-4">Demo available on request.</p>
        </div>
    </div>
  )
}
