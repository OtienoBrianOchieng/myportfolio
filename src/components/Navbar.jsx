import {React, useState} from 'react'

export default function Navbar() {
    const navElements = [
        {name:"About", id:"about"},
        {name:"Education", id:"education"},
        {name: "Skills", id: "skills"},
        {name: "Projects", id:"projects"}, 
        {name: "Catalog", id:"catalog"},
        {name:"Contact", id : "contact"},

    ]

    const [active, setActive] = useState(null)

    const activate = (index) => {
        setActive(index)
    }


  return (
        <nav className="sticky top-0 z-10">
        <div className="max-w-7xl mx-auto p-8 py-2 h-18 bg-[#FFD700]">
        <ul className="flex space-x-8 mb-4 mt-4 text-black">
            {navElements.map((element, index) => (
            <li
                onClick={() => activate(index)}
                className={`${active === index ? 'underline' : ''} font-bold text-black text-xl`}
                key={index}
            >
                <a href={`#${element.id}`}>{element.name}</a>
            </li>
            ))}
        </ul>
        </div>
    </nav>
    )
}
