'use client';

import React from 'react'

import { Link } from 'react-scroll';

import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer, textVariant } from '../utils/motion';
import { useTranslations } from 'next-intl';

const Atappilab = () => {

  const t = useTranslations('Index');

  return (

    <section className="sm:h-auto bg-stone-900 mt-40 ">
      <motion.div variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >

        <div className='mx-auto flex flex-col justify-center items-center sm:px-24 px-8 pt-[8%] pb-[8%] space-y-[8%] sm:space-y-[60px] '>
          <motion.p
            variants={textVariant(0.5)}
            className="text-gray-300 md:text-6xl sm:text-3xl text-2xl md:leading-[80px] sm:leading-normal leading-[40px] text-center	font-bold ">

            {t('attribeup')}</motion.p>


          <motion.div
            variants={textVariant(0.2)}
            className='flex  gap-5'>
            <Link to="Brand" smooth={true} offset={-100} duration={500}>
              <div className='border-[3px] border-[#912CC9]   opacity-75 hover:opacity-100'>
                <div className='border border-[#912CC9] m-1 '>
                  <button className=" bg-[#912CC9]   sm:p-4 p-2 font-bold tracking-[.10em] sm:tracking-[.25em]  hover:opacity-100 ease-in-out duration-300 hover:scale-110 text-white cursor-pointer" type="submit">{t('imabrand')}</button>
                </div>
              </div>
            </Link>
            <Link to="Athlete" smooth={true} offset={-100} duration={500}>
              <div className='border-[3px] border-[#912CC9]  opacity-75 hover:opacity-100'>
                <div className='border border-[#912CC9]  m-1'>
                  <button className=" sm:p-4 p-2 font-bold  tracking-[.10em] sm:tracking-[.25em]  hover:opacity-100 ease-in-out duration-300 hover:scale-110 text-white cursor-pointer" type="submit">{t('imafounder')}</button>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>


      </motion.div>
    </section>
  )

};

export default Atappilab;
