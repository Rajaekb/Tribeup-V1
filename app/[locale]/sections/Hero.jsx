'use client';
import React from 'react'
import { motion } from "framer-motion";
import { slideIn, staggerContainer, textVariant, fadeIn } from '../utils/motion';
import { TypingText } from '../components';
import { Link } from 'react-scroll';
import { useTranslations } from 'next-intl';
import 'next-cloudinary/dist/cld-video-player.css';

import { CldVideoPlayer } from 'next-cloudinary';


const Hero = () => {



  const t = useTranslations('Index');

  return (

    <section id="hero">
      <motion.div variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <div className='h-screen flex sm:flex-row flex-col justify-between gap-10 overflow-hidden  mx-10 ' id="home">
          <div className='flex-1 pt-32 '>
            <div className='flex items-center'>
              <motion.div
                variants={slideIn('left', 'tween', 0.2, 1)}
              >
                <div className='sm:mt-5 sm:w-20 w-20 '>
                  <div className='border border-[#d0ff05] m-1 rounded-lg' />
                </div>
              </motion.div>
              <motion.h1 className="-ml-8 z-10" variants={slideIn('left', 'tween', 0.2, 1)} >
                <TypingText title={t('n1athlete')} />
              </motion.h1>
            </div>

            <br />
            <motion.h2
              variants={textVariant(0.5)}
              className=' text-4xl sm:text-5xl text-strock-whitelight tracking-[.10em] font-extrabold uppercase sm:leading-normal leading-relaxed'>


              {t('turnidea')}</motion.h2>
            <br />

            <motion.div
              variants={textVariant(0.2)}
              className='flex  gap-5'>
              <Link to="Brand" smooth={true} offset={-100} duration={500}>
                <div className='border-[3px] border-[#912CC9]  opacity-75 hover:opacity-100'>
                  <div className='border border-[#912CC9] m-1 '>
                    <button className=" bg-[#912CC9] sm:p-4 p-2 font-bold tracking-[.10em]  hover:opacity-100 ease-in-out duration-300 hover:scale-110 text-white cursor-pointer" type="submit">{t('imabrand')}</button>
                  </div>
                </div>
              </Link>
              <Link to="Athlete" smooth={true} offset={-100} duration={500}>
                <div className='border-[3px] border-[#912CC9]  opacity-75 hover:opacity-100'>
                  <div className='border border-[#912CC9]  m-1'>
                    <button className=" sm:p-4 p-2 font-bold  tracking-[.10em]  hover:opacity-100 ease-in-out duration-300 hover:scale-110 text-white cursor-pointer bg-black/50" type="submit">{t('imafounder')}</button>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>

          <div className=' flex justify-center sm:relative  w-full sm:h-[1080px] '>
            <CldVideoPlayer
              height="1080"
              className='rounded-lg  sm:absolute  w-full md:h-[1080px]  object-contain'
              src='videowomen'
              transformation={{
                crop: "fill",
                gravity: "center",
                witdh: 850,
                height: 570
              }}
              muted autoPlay="on-scroll" loop controls="0"

            />


          </div>





        </div>


      </motion.div>



    </section>
  )
};

export default Hero;
