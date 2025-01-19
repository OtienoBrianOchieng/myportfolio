import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb} from '@fortawesome/free-solid-svg-icons';

export default function Skills() {
  return (
        <div className="max-w-screen-xl mx-auto px-4 py-8">
            
                            <div className="flex items-center space-x-2 p-2 border-b-2 bg-black border-black mb-6">
                                        <FontAwesomeIcon icon={faLightbulb} 
                                        className="h-14 w-14 text-[#FFD700] mb-2" />
                                        <h2 className="text-3xl font-extrabold text-white ">Skills</h2>          
                            </div>
        
            <div className="space-y-4">
                <div>
                <h3 className="text-xl font-semibold text-gray-800">Front-end Development:</h3>
                <p className="text-lg text-gray-700">
                    React Native, React.js, JavaScript, HTML, CSS, TailwindCSS
                </p>
                </div>

                <div>
                <h3 className="text-xl font-semibold text-gray-800">Back-end Development:</h3>
                <p className="text-lg text-gray-700">
                    Python, Flask, Restful APIs, Hosting on cPanel
                </p>
                </div>

                <div>
                <h3 className="text-xl font-semibold text-gray-800">Other Technical Skills:</h3>
                <p className="text-lg text-gray-700">
                    C Language, Arduino Programming, WordPress
                </p>
                </div>

                <div>
                <h3 className="text-xl font-semibold text-gray-800">Additional Skills:</h3>
                <p className="text-lg text-gray-700">
                    Excel, SPSS, PowerPoint, Word, Publisher
                </p>
                </div>

                <div>
                <h3 className="text-xl font-semibold text-gray-800">Soft Skills:</h3>
                <p className="text-lg text-gray-700">
                    Problem-solving, Critical Thinking, Creativity, Interpersonal Relationships, Communication, Cultural Intelligence, Emotional Awareness
                </p>
                </div>
            </div>
        </div>
  )
}
