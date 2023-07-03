'use client';

import Image from 'next/image';
import React from 'react'

const Post = () => {
  return (
    <div className="flex bg-stone-900 md:flex-col  shadow-md overflow-hidden rounded-md md:max-w-2xl sm:h-[80%] h-44">

      <div className='flex-1 flex overflow-hidden'>

        <Image
          src="/sport1.jpg"
          alt="rugbyimage"
          className="object-cover object-center hover:object-bottom duration-300 w-full sm:h-[400px] h-44 grayscale cursor-pointer"
          width={800}
          height={800} />

      </div>
      <div class="flex-1 p-4">

        <a href="#">
          <h5 className="dark:text-white text-black  md:text-2xl text-md tracking-[.10em] md:mb-2">The Impact of Sports on Society</h5>
        </a>
        <p className="font-thin p-2 dark:text-white md:text-md text-sm text-gray-700 md:leading-8">How Athletics Shape Culture and Value...</p>


        <div className='border-[3px] border-[#FDA500]  inline-flex items-center mt-5 opacity-80 hover:opacity-100 cursor-pointer'>
          <div className='border border-[#FDA500] m-1  inline-flex items-center opacity-80 hover:opacity-100 cursor-pointer'>
            <button className="text-white p-3 font-light tracking-[.25em] hover:bg-gray-500 text-sm px-3 
    duration-300 ease-in-out text-center inline-flex items-center" href="#">
              Read more
            </button>
          </div>
        </div>

      </div>


    </div>


  )
}

export default Post