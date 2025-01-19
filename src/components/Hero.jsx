import React from 'react'


export default function Hero() {
  return (
 
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="mb-6 max-w-2xl text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl ">Meet Brian Ochieng</h1>
            <p className="text-black text-2xl ">Brian is a full-stack software developer proficient in Javascript and python. He has experience in Mobile Apps and Web development. Additionally, he is also a fun of C-language and Arduino.</p>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
        <img src= "/backgroundimage.jpeg" alt="Brian Ochieng Image" className="w-full h-auto "/>

        </div>                
    </div>
  )
}
