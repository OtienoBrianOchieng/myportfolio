import {React, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import emailjs from 'emailjs-com'

export default function Contact() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [isSending, setIsSending] = useState(false)
    const [error, setError] = useState (null)

    const handleSendEmail = (e) => {
        e.preventDefault()

        if(!name || !email || !message) {
            alert("Ensure all fields are completed")
            return
        }

        setIsSending(true)

        const mailContent = {
            name:name,
            email:email,
            message: message
        }

        emailjs.send(
            'service_hkqbh1j',    // Your Service ID
            'template_g2nxa6p',    // Your Template ID
            mailContent,           // The parameters from your form
            'lQu8ONWK8fWz4jTDx'    // Your User ID (from the EmailJS dashboard)
          )
          
        .then (
            (res) => {
                alert("Thank you for contacting Brian!")
                setIsSending(false)
                setName('')
                setEmail('')
                setMessage('')
                     },
        (err) => {
            setError("Unexpected error occured. Try again.")
            setIsSending(false)
            setTimeout(
                ()=>{
                    setError(null)
                }, 3000
            )
        }
        )
    }





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
                   { 
                    !isSending && !error &&
                    (<>
                   <h3 className="text-2xl font-semibold text-gray-800 mb-4">Send a Message</h3>
                    <form onSubmit={handleSendEmail}>
                        <input 
                            type="text" 
                            placeholder="Name" 
                            required
                            className="w-full p-3 mt-4 border border-gray-300 rounded-md"
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input 
                            type="email" 
                            placeholder="Email" 
                            required
                            className="w-full p-3 mt-4 border border-gray-300 rounded-md"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <textarea 
                            placeholder="Message" 
                            required
                            className="w-full p-3 mt-4 border border-gray-300 rounded-md"
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        <button 
                            type="submit" 
                            className="w-full bg-gray-600 text-white py-3 mt-4 rounded-md hover hover:bg-gray"
                            
                        >
                            Send Message
                        </button>
                    </form>
                    </>)}
                    {isSending && <h3 className="text-3xl text-center font-semibold text-green-800 mb-8 mt-8 animation-pulse">Sending ...</h3>}
                    {error && !isSending && <h3 className="text-3xl text-center font-semibold text-red-800 mb-8 mt-8">{error}</h3>}
                </div>
            </div> 
    );
}
