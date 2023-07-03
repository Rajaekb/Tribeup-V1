'use client';

import React from 'react'



import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer, textVariant } from '../utils/motion';
import { Post } from '../components';

const LatestPosts = () => {
    return (
      <div  className="h-screen" id="Blog">
        <h1 className='md:text-5xl sm:text-4xl text-3xl'>Derniers<span className='text-purple-500'> Articles</span> </h1>
          <br/>
           <hr className='bg-[#00ff00] w-20 h-1'/>
          <br/>
     
         
    </div>
      )
    }
    
    export default LatestPosts