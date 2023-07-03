'use client';

import React from 'react'

import { Link } from 'react-scroll';

import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer, textVariant } from '../utils/motion';
import { useTranslations } from 'next-intl';

const AtLaeds = () => {

  const t = useTranslations('Index');

  return (

    <section className="sm:h-auto bg-stone-900 mt-40 ">
      <motion.div variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >

        <div className='mx-auto flex flex-col justify-center items-center sm:px-24 px-8 pt-[8%] pb-[8%] '>
          <motion.p
            variants={textVariant(0.5)}
            className="text-gray-300 md:text-7xl sm:text-5xl text-3xl md:leading-[100px] sm:leading-normal text-center	font-bold mb-16">

            {t('at')}<span className='font-bold text-[#FEBF03]'>TRIBEUP</span>     {t('attribeup')}</motion.p>

          <motion.div
            variants={textVariant(1.1)}
            className='flex gap-5'>
            <Link to="Brand" smooth={true} offset={-100} duration={500}>
              <div className='border-[3px] border-[#FEBF03] opacity-75 hover:opacity-100'>
                <div className='border border-[#FEBF03] m-1'>
                  <button className=" sm:p-4 p-2 font-bold sm:tracking-[.25em] tracking-[.10em] hover:opacity-100 ease-in-out duration-300 hover:scale-110 text-white cursor-pointer" type="submit">  {t('imabrand')}</button>
                </div>
              </div>
            </Link>
            <Link to="Athlete" smooth={true} offset={-100} duration={500}>
              <div className='border-[3px] border-[#FEBF03] opacity-75 hover:opacity-100'>
                <div className='border border-[#FEBF03] m-1 '>
                  <button className="font-bold sm:tracking-[.25em] tracking-[.10em] sm:p-4 p-2 ease-in-out duration-300  hover:scale-110 text-white" type="submit">  {t('imanathlete')}</button>

                </div>

              </div>
            </Link>
          </motion.div>
        </div>


      </motion.div>
    </section>
  )

};

export default AtLaeds;
