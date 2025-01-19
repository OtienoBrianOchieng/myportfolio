import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';



export default function About() {
  return (
 
    <div className="max-w-screen-xl mx-auto px-4">
          <div className="flex items-center space-x-2 p-2 border-b-2 bg-black border-black mb-6">
              <FontAwesomeIcon icon={faUserCircle} 
              className="h-14 w-14 text-[#FFD700] mb-2" />
              <h2 className="text-3xl font-extrabold text-white ">More about me</h2>          
          </div>
        <p className="text-lg text-black mb-6">
          I have a passion for creating impactful technology that addresses real-world challenges. 
          My journey in software development began with my completion of a Software Engineering program at Moringa School, where I met greate instructors, colleagues and worked with diverse teams as a student and students representative. 
          The experience impressed on me the value of people and interpersonal relationships. 
          I love engaging in complex problems focus on building adaptable, empathetic applications.
          Besides programming, I also love watching movie series, documentaries, time with friends and family, and road trips. 
        </p>
    </div>
  )
}
