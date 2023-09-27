'use client';
import React from 'react'
import { motion } from "framer-motion";
import { slideIn, staggerContainer, textVariant, fadeIn } from '../utils/motion';
import { TypingText } from '../components';
import { Link } from 'react-scroll';
import Image from 'next/image';
import univer from '../../public/univer1.jpg'
import { useTranslations } from 'next-intl';


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
          <div className='flex-1 pt-44 '>
            <div className='flex items-center'>
              <motion.div
                variants={slideIn('left', 'tween', 0.2, 1)}
              >
                <div className='sm:mt-5 sm:w-20 w-20 '>
                  <div className='border border-[#d0ff05] m-1 rounded-lg' />
                </div>
              </motion.div>
              <motion.h1 className="-ml-8" variants={slideIn('left', 'tween', 0.2, 1)} >
                <TypingText title={t('n1athlete')} />
              </motion.h1>
            </div>

            <br />
            <motion.h2
              variants={textVariant(0.5)}
              className=' text-4xl sm:text-5xl  text-strock-white tracking-[.10em] font-extrabold uppercase sm:leading-normal leading-relaxed'>


              {t('turnidea')}</motion.h2>
            <br />

            <motion.div
              variants={textVariant(0.2)}
              className='flex  gap-5'>
              <Link to="Brand" smooth={true} offset={-100} duration={500}>
                <div className='border-[3px] border-[#912CC9]  opacity-75 hover:opacity-100'>
                  <div className='border border-[#912CC9] m-1 '>
                    <button className=" bg-[#912CC9]   sm:p-4 p-2 font-bold tracking-[.10em] sm:tracking-[.25em]  hover:opacity-100 ease-in-out duration-300 hover:scale-110 text-white cursor-pointer" type="submit">{t('imabrand')}</button>
                  </div>
                </div>
              </Link>
              <Link to="Athlete" smooth={true} offset={-100} duration={500}>
                <div className='border-[3px] border-[#912CC9]  opacity-75 hover:opacity-100'>
                  <div className='border border-[#912CC9]  m-1'>
                    <button className=" sm:p-4 p-2 font-bold  tracking-[.10em] sm:tracking-[.25em] hover:opacity-100 ease-in-out duration-300 hover:scale-110 text-white cursor-pointer bg-black/50" type="submit">{t('imafounder')}</button>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
          <div
            className=' flex-1 duration-300 ease-in-out transition'>
            <div className=' -z-10 duration-300 ease-in-out transition'>
              <Image src={univer} className='object-contain absolute -top-36 -right-[250px] -z-50  duration-300 ease-in-out transition' />
            </div>



          </div>


        </div>


      </motion.div>
    </section>
  )
};

export default Hero;
