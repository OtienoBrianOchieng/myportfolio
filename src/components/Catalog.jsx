import {React, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox } from '@fortawesome/free-solid-svg-icons';

export default function Catalog() {

      const imageLink = "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
      const events = [
        {id: 1, title: "Event 1", date: "January 10, 2025", description: "A brief description of the first event...", image: imageLink },
        {id: 2, title: "Event 2", date: "January 10, 2025", description: "A brief description of the first event...", image: imageLink },
        {id: 3, title: "Event 3", date: "January 10, 2025", description: "A brief description of the first event...", image: imageLink },
        {id: 4, title: "Event 4", date: "January 10, 2025", description: "A brief description of the first event...", image: imageLink },
        {id: 5, title: "Event 5", date: "January 10, 2025", description: "A brief description of the first event A brief description of the first event A brief description of the first event A brief description of the first event A brief description of the first event A brief description of the first event...", image: imageLink }
      ]

      const [currentIndex, setCurrentIndex] = useState(0)
      

      const handleNext = () => {
        if (currentIndex < events.length - 3){
          setCurrentIndex(currentIndex + 1)
        };}

      const handlePrev = () => {
        if(currentIndex > 0) {
          setCurrentIndex(currentIndex - 1)
        }
      };
    
  return (
        <div className="relative py-8 px-4 max-w-screen-xl mx-auto">
                <div className="flex items-center space-x-2 p-2 border-b-2 bg-black border-black mb-2">
                   <FontAwesomeIcon icon={faBox} 
                   className="h-14 w-14 text-[#FFD700] mb-2" />
                   <h2 className="text-3xl font-extrabold text-white ">Catalog</h2>          
                </div>
          <p className="mt-4 text-lg text-black">Here are the events I have attended, including training, social gatherings, and hackathons.</p>
          {/* Left arrow button */}
          <button
            onClick={() => handlePrev()}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
          >
            &lt;
          </button>

              {/* Event Cards (display 3 cards at a time) */}
              <div className="flex justify-center gap-4 p-4 overflow-hidden">
                {events.slice(currentIndex, currentIndex + 3).map((event) => (
                  <div
                    key={event.id}
                    className="w-72 bg-white border-2 border-black overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
                  >
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-52 p-4 object-cover"
                    />
                    <div className="p-4">
                      <p className="text-lg font-semibold">{event.title}</p>
                      <p className="text-sm text-black">{event.date}</p>
                      <p className="text-sm text-black mt-2">{event.description}</p>
                    </div>
                  </div>
                ))}
              </div>

          {/* Right arrow button */}
          <button
            onClick={ () => handleNext()}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
          >
            &gt;
          </button>
      </div>
  )
}
