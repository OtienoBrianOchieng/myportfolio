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
        <nav className="sticky top-0 z-20 ">
            <div className="max-w-7xl mx-auto px-4 py-8 h-24 border-b-2 border-black">
            <ul className="flex space-x-8 text-white">
                {navElements.map((element, index) => (
                    <li onClick = {() => activate(index)} 
                        className= {`${active === index? 'underline' : ''} font-bold text-black text-xl`}
                        key={index}>
                        <a href= {`#${element.id}`}>
                            {element.name}
                        </a>
                    </li>
                ))}
            </ul>
            </div>
        </nav>
    )
}
