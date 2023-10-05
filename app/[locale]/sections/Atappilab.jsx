'use client';

import React from 'react'

import { Link } from 'react-scroll';

import { motion } from "framer-motion";
import { staggerContainer, textVariant } from '../utils/motion';
import { useTranslations } from 'next-intl';
import galaxy from "../../public/galax.webp"
import photo from "../../public/image.webp"
import gifphot from "../../public/phot.gif"
import Image from 'next/image';



const Atappilab = () => {

  const t = useTranslations('Index');

  return (

    <section className="sm:h-auto bg-galaxy mt-56" >
      <motion.div variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <div className=' '>

          <div className="flex items-center  ">
            <div className='flex-1 '>
              <Image
                src={photo}
                alt=""
                width={1500}
                height={700}
                objectFit='contain'
                className='-ml-24 w-[80%]'
              />

            </div>
            <div className='flex-1'>
              <motion.p variants={textVariant(0.5)}
                className=" -ml-16 text-gray-300  text-xl tracking-[.10em] sm:leading-normal leading-relaxed">

                {t('attribeup')}</motion.p>



              <motion.div
                variants={textVariant(0.2)}
                className='flex -ml-16 gap-5 mt-5 '>
                <Link to="Brand" smooth={true} offset={-100} duration={500}>
                  <div className='border-[3px] border-[#912CC9]   opacity-75 hover:opacity-100'>
                    <div className='border border-[#912CC9] m-1 '>
                      <button className=" bg-[#912CC9]   sm:p-4 p-2 font-bold tracking-[.10em]  hover:opacity-100 ease-in-out duration-300 hover:scale-110 text-white cursor-pointer" type="submit">{t('imabrand')}</button>
                    </div>
                  </div>
                </Link>
                <Link to="Athlete" smooth={true} offset={-100} duration={500}>
                  <div className='border-[3px] border-[#912CC9]  opacity-75 hover:opacity-100'>
                    <div className='border border-[#912CC9]  m-1'>
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
