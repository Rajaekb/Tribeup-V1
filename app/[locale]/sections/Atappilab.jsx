'use client';

import React from 'react'

import { Link } from 'react-scroll';

import { motion } from "framer-motion";
import { staggerContainer, textVariant } from '../utils/motion';
import { useTranslations } from 'next-intl';
import photo from "../../public/image.webp"
import Image from 'next/image';



const Atappilab = () => {

  const t = useTranslations('Index');

  return (

    <section className="sm:h-auto bg-galaxy  sm:mt-56" >
      <motion.div variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <div className=' '>

          <div className="flex flex-col sm:flex-row items-center justify-center px-8 py-8 ">
            <div className='flex-1 hidden sm:block '>
              <Image
                src={photo}
                alt=""
                width={1500}
                height={700}
                objectFit='contain'
                className='sm:-ml-24 w-[80%]'
              />

            </div>
            <div className='flex-1 '>
              <motion.p variants={textVariant(0.5)}
                className=" sm:-ml-16 text-gray-300  sm:text-2xl text-xl tracking-[.05em] ">

                {t('atappilab')}</motion.p>



              <motion.div
                variants={textVariant(0.2)}
                className='flex sm:-ml-16 gap-5 mt-5 '>
                <Link to="Brand" smooth={true} offset={-100} duration={500}>
                  <div className='border-[3px] border-[#d0ff05]   opacity-75 hover:opacity-100'>
                    <div className='border border-[#d0ff05] m-1 '>
                      <button className="   sm:p-4 p-2 font-bold tracking-[.10em]  hover:opacity-100 ease-in-out duration-300 hover:scale-110 text-white cursor-pointer" type="submit">{t('imabrand')}</button>
                    </div>
                  </div>
                </Link>
                <Link to="Athlete" smooth={true} offset={-100} duration={500}>
                  <div className='border-[3px] border-[#d0ff05]  opacity-75 hover:opacity-100'>
                    <div className='border border-[#d0ff05]  m-1'>
                      <button className=" sm:p-4 p-2 font-bold  tracking-[.10em] hover:opacity-100 ease-in-out duration-300 hover:scale-110 text-white cursor-pointer" type="submit">{t('imafounder')}</button>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </div>

          </div>
        </div>
      </motion.div>

    </section >
  )

};

export default Atappilab;
