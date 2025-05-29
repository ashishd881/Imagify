import React from 'react'
import { assets } from '../assets/assets'


function Header() {
  return (
    <div className='flex flex-col justify-center items-center text-center my-20'>
        <div className='text-black inline-flex text-center gap-2 bg-white px-6 py-1 rounded-full  border border-neutral-500'>
            <p>Best Text to image Generator</p>
            <img src={assets.star_icon}/>
        </div>
        <h1 className='text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center'> 
            Turn text to <span className='text-blue-800'>image</span> ,in seconds.
        </h1>

        <p className='text-center max-w-xl mt-3'> 
            Unleash your Creativity with Ai .Turn your imagination into visual arts in seconds - just type and watch the magic happen.
        </p>
        <button className='sm:text-lg text-white bg-black w-auto mt-8 py-2.5 px-7 flex gap-2 items-center rounded-full'>
            Generate Images
            <img className='h-6' src={assets.star_group}/>
        </button>

        <div className='flex gap-2 py-6'>
            {Array(6).fill("").map((items,index)=>(
                <img className='rounded hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-10' 
                    src={index%2 ?assets.sample_img_1:assets.sample_img_2} key={index} width={70}/>
            ))}
        </div>

        <p>Generated images from imagify!!</p>
    </div>
  )
}

export default Header
