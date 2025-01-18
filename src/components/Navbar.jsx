import {React, useState} from 'react'

export default function Navbar() {
    const navElements = [
        {name:"About", id:"about"},
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
            <div className="max-w-7xl mx-auto px-4 py-4">
            <ul className="flex space-x-8 text-white">
                {navElements.map((element, index) => (
                    <li onClick = {() => activate(index)} 
                        className= {`${active === index? 'underline' : ''} text-black text-xl`}
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
