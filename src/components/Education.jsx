import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

export default function Education() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      
        <div className="flex items-center space-x-2 p-2 border-b-2 bg-black border-black mb-6">
                    <FontAwesomeIcon icon={faGraduationCap} 
                    className="h-14 w-14 text-[#FFD700] mb-2" />
                    <h2 className="text-3xl font-extrabold text-white ">Education</h2>          
        </div>

      {/* Moringa School */}
      <div className="mb-4">
        <h3 className="text-2xl font-semibold text-gray-800">Moringa School</h3>
        <p className="text-lg text-gray-700">
          <strong>Software Engineering</strong> | Certificate of Completion
        </p>
        <p className="text-lg text-gray-700">Sep 2023 - Apr 2024</p>
      </div>

      {/* Homa Bay High School */}
      <div className="mb-4">
        <h3 className="text-2xl font-semibold text-gray-800">Homa Bay High School</h3>
        <p className="text-lg text-gray-700">
          <strong>Certificate of Secondary Education</strong> | B+ (73 out of 84 Points)
        </p>
        <p className="text-lg text-gray-700">2010</p>
      </div>

      {/* Orero Boys High School */}
      <div className="mb-4">
        <h3 className="text-2xl font-semibold text-gray-800">Orero Boys High School</h3>
        <p className="text-lg text-gray-700">2006 - 2009</p>
      </div>

      {/* God-Marera Primary School */}
      <div>
        <h3 className="text-2xl font-semibold text-gray-800">God-Marera Primary School</h3>
        <p className="text-lg text-gray-700">
          <strong>Certificate of Primary Education</strong> | 365 Points out of 500
        </p>
        <p className="text-lg text-gray-700">2010</p>
      </div>
    </div>
  )
}
