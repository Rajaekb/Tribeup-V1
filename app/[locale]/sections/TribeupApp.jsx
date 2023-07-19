'use client';
import Image from 'next/image'
import React from 'react'

import { motion } from "framer-motion";
import { slideIn, staggerContainer, textVariant, fadeIn } from '../utils/motion';
import { TypingText } from "../components";

import { Link } from 'react-scroll';
import { useTranslations } from 'next-intl';
import appimg from "../../public/phonetribeup.png"
import appleicone from '../../public/appleicone.png'
import googleicone from '../../public/googleicone.png'



function TribeupApp() {

  const t = useTranslations('Index');


  return (
    <section id="ourproduct">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}

        className=' '>
        <div className='flex my-10 '>
          <motion.div
            variants={slideIn('left', 'tween', 0.2, 1)}
            className="flex">
            <div className='sm:mt-5 sm:w-60 w-20 '>
              <div className='border border-[#FDA500] m-1 rounded-lg' />
            </div>



          </motion.div>
          <motion.h1 variants={slideIn('left', 'tween', 0.2, 1)}>
            <TypingText title={t('ourproduct')} />
          </motion.h1>
        </div>
        <div className='flex items-center lg:flex-row flex-col min-h-[100vh] gap-10 space-y-10 sm:space-y-0  bg-stone-900 justify-between text-white sm:h-auto  py-40  px-20 '>
          <motion.div variants={fadeIn('up', 'tween', 0.2, 1)}>
            <div className='  sm:flex-1'>
              <Image
                src={appimg}
                alt="tribeup"
                width={500}
                height={500}
                className=" object-contain sm:-mt-20 mr-14 rotate-12" />
            </div>
          </motion.div>
          <div className=' flex-1 my-10 sm:my-40'>

            <motion.p
              variants={textVariant(0.5)}
              className=' text-gray-300 sm:text-2xl tracking-[.10em] sm:leading-normal leading-relaxed '>


              {t('tribeupdesc')}</motion.p>
            <br />

            <motion.div
              variants={textVariant(0.8)}
              className=' flex  gap-5 '>
              <Link to="Brand" smooth={true} offset={-100} duration={500}>
                <div className='border-[3px] border-[#FDA500] opacity-75 hover:opacity-100'>
                  <div className='border border-[#FDA500] m-1 p-1 '>
                    <button className="  hover:opacity-100 ease-in-out duration-300   cursor-pointer" type="submit">

                      <Image
                        src={appleicone}
                        alt="tribeup"
                        width={150}
                        height={80}
                        className=" object-contain" /></button>
                  </div>
                </div>
              </Link>
              <Link to="Athlete" smooth={true} offset={-100} duration={500}>
                <div className='border-[3px] border-[#FDA500] opacity-75 hover:opacity-100'>
                  <div className='border border-[#FEBF03] m-1 p-1'>
                    <button className="  hover:opacity-100 ease-in-out duration-300 cursor-pointer" type="submit">
                      <Image
                        src={googleicone}
                        alt="tribeup"
                        width={150}
                        height={80}
                        className=" object-contain" />
                    </button>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>





        </div>
      </motion.div>

    </section>
  )
}

export default TribeupApp