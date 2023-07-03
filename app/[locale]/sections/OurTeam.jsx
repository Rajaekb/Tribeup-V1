'use client';
import Image from 'next/image'
import React from 'react'
import Alain from '../../public/team/alaineliasy.jpg';
import clara from '../../public/team/ClaraOberhoessel.jpg';
import im from '../../public/team/img.jpg';
import py from '../../public/team/py.jpg';
import TD from '../../public/team/ThomasDidillon.jpg';

import { motion } from "framer-motion";
import { slideIn, staggerContainer, textVariant } from '../utils/motion';
import { TypingText } from "../components";
import { useTranslations } from 'next-intl';




function OurTeam() {
  const t = useTranslations('Index');


  return (
    <section id="ourteam">
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
            <TypingText title={t('ourteam')} />
          </motion.h1>
        </div>
        <div className='flex mt-[50px]  lg:flex-row flex-col min-h-[70vh] gap-3 space-y-10 sm:space-y-0  bg-stone-900 justify-between text-white sm:h-auto p-32 p-y-15'>
          <div className=' flex-1 flex  flex-col  justify-center items-center '>
            <motion.div variants={textVariant(0.2)} >
              <Image
                src={Alain}
                alt="rugbyimage"
                className='rounded-3xl '

              />
            </motion.div>
            <motion.div variants={textVariant(0.4)}
              className=' bg-gradient-to-br from-[#F86811] from-5% via-[#FDA500] to-[#FEC001] flex justify-center items-center text-black rounded-3xl font-bold h-20 w-52 p-2 -m-8' >

              Alain Elyasi <br /> CEO / Founder

            </motion.div>
          </div>
          <div className=' flex-1  flex flex-col justify-center items-center '>
            <motion.div variants={textVariant(0.6)}>
              <Image
                src={TD}
                alt="rugbyimage"
                className='rounded-3xl object-contain'

              />
            </motion.div>
            <motion.div variants={textVariant(0.8)}
              className=' bg-gradient-to-br from-[#F86811] from-5% via-[#FDA500] to-[#FEC001] flex justify-center items-center text-black rounded-3xl font-bold h-20 w-52 p-2 -m-8' >

              Thomas Didillon<br /> Lorem / ipsum

            </motion.div>
          </div>
          <div className=' flex-1   flex flex-col justify-center items-center '>
            <motion.div variants={textVariant(1)}>
              <Image
                src={clara}
                alt="rugbyimage"
                className='rounded-3xl '

              />
            </motion.div>
            <motion.div variants={textVariant(1.2)}
              className=' bg-gradient-to-br from-[#F86811] from-5% via-[#FDA500] to-[#FEC001] flex justify-center items-center text-black rounded-3xl font-bold h-20 w-52 p-2 -m-8' >

              Clara Oberhoessel <br /> lorem ipsum

            </motion.div>
          </div>
          <div className=' flex-1   flex flex-col justify-center items-center  '>
            <motion.div variants={textVariant(1.4)}>
              <Image
                src={py}
                alt="rugbyimage"
                className='rounded-3xl '

              />
            </motion.div>
            <motion.div variants={textVariant(1.6)}
              className=' bg-gradient-to-br from-[#F86811] from-5% via-[#FDA500] to-[#FEC001] flex justify-center items-center text-black rounded-3xl font-bold h-20 w-52 p-2 -m-8' >

              Lorem Ipsum <br /> Lorem / ipsum

            </motion.div>
          </div>
          <div className=' flex-1   flex flex-col justify-center items-center '>
            <motion.div variants={textVariant(1.8)}>
              <Image
                src={im}
                alt="rugbyimage"
                className='rounded-3xl '

              />
            </motion.div>
            <motion.div variants={textVariant(2)}
              className=' bg-gradient-to-br from-[#F86811] from-5% via-[#FDA500] to-[#FEC001] flex justify-center items-center text-black rounded-3xl font-bold h-20 w-52 p-2 -m-8' >

              Lorem Ipsum <br /> Lorem / ipsum

            </motion.div>
          </div>

        </div>
      </motion.div>

    </section>
  )
}

export default OurTeam