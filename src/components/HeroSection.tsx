'use client'
import Link from "next/link"
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

const HeroSection = () => {
  return (
    <div className='h-screen md:h-[40rem] w-full rounded-md flex flex-col justify-center relative overflow-hidden mx-auto py-10 md:py-0'>
        <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
        />
        <div className='relative p-4 z-10 w-full text-center  justify-center'>
            <h1
                className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
            >
                Master the art of music
            </h1>
            <p
                className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto"
            >
                Dive into our comprehensive music courses and transform your musical journey today. Whether you're a beginner or looking to refine your skills, join us to unlock your true potential.
            </p>
            
            <div className="mt-5  flex items-center justify-center" >
                    <HoverBorderGradient
                        containerClassName="rounded-full border-black"
                        as="button"
                        className="dark:bg-black px-6 py-2.5 bg-white text-black dark:text-white flex items-center space-x-2"
                    >
                    <Link href={'/courses'} >
                            Explore Courses
                    </Link>
                    </HoverBorderGradient>
            </div>
        </div>
    </div>
  )
}

export default HeroSection