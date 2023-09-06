'use client';
import Image from 'next/image'
import React from 'react'

import { motion } from "framer-motion";
import { slideIn, staggerContainer, textVariant, fadeIn } from '../utils/motion';
import { TypingText } from "../components";

import { Link } from 'react-scroll';
import { useTranslations } from 'next-intl';
import appimg from "../../public/appistadium.png"
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
              <div className='border border-[#d0ff05] m-1 rounded-lg' />
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
                width={600}

                className=" object-contain sm:-mt-20 mr-14 rotate-12" />
            </div>
          </motion.div>
          <div className=' flex-1 my-10 sm:my-40'>
            <h2 className='text-strock-white text-3xl md:text-7xl uppercase py-5'>Appistadium</h2>
            <motion.p
              variants={textVariant(0.5)}
              className=' text-gray-300 sm:text-2xl tracking-[.10em] sm:leading-normal leading-relaxed '>


              {t('appistadium')}</motion.p>
            <br />

            <motion.div
              variants={textVariant(0.8)}
              className=' flex  gap-5 '>
              <Link to="Brand" smooth={true} offset={-100} duration={500}>
                <button className="  hover:opacity-100 ease-in-out duration-300   cursor-pointer" type="submit">

                  <Image
                    src={appleicone}
                    alt="tribeup"
                    width={200}
                    className=" object-contain" /></button>

              </Link>
              <Link to="Athlete" smooth={true} offset={-100} duration={500}>

                <button className="  hover:opacity-100 ease-in-out duration-300 cursor-pointer" type="submit">
                  <Image
                    src={googleicone}
                    alt="tribeup"
                    width={200}
                    className=" object-contain" />
                </button>

              </Link>

            </motion.div>
            <a href="https://www.web.appistadium.com/" target="_blank">
              <div className=' my-5 w-[50%] border-[3px] border-[#912CC9] opacity-75 hover:opacity-100'>
                <div className=' border border-[#912CC9] m-1'>
                  <button className="  w-full bg-[#912CC9] sm:p-4 p-2 font-bold sm:tracking-[.25em] tracking-[.10em] hover:opacity-100 ease-in-out duration-300 text-white cursor-pointer" type="submit">  {t('website')}</button>
                </div>
              </div>
            </a>
          </div>





        </div>
      </motion.div>

    </section>
  )
}

export default TribeupApp