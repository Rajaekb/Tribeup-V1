"use client"
import Image from 'next/image';
import { motion } from "framer-motion";
import { slideIn, staggerContainer, textVariant } from '../utils/motion';
import { TypingText } from "../components";
import { useTranslations } from 'next-intl';

import Etienne from '../../public/EtienneLambot.webp';
import Sebastien from '../../public/SebastienBellin1.webp';

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
        <div className=' flex my-12 items-center'>
          <motion.div
            variants={slideIn('left', 'tween', 0.8, 1)}
            className="flex">
            <div className='mt-5 sm:w-60 w-20 '>
              <div className='border border-[#d0ff05] m-1 rounded-xl' />
            </div>

          </motion.div>
          <TypingText title={t('ourteam')} textStyles="text-center" />
        </div>
        <div className='flex flex-col sm:space-y-5 pt-10 justify-center items-center bg-stone-900'>
          <motion.h2 variants={textVariant(0.2)} className='text-strock-white mx-8 text-3xl md:text-5xl uppercase py-5'>  {t('ourteamtitle')} </motion.h2>
          <motion.p
            variants={textVariant(0.5)}
            className=' mx-8 sm:mx-56 text-gray-300 sm:text-2xl tracking-[.10em] sm:leading-normal leading-relaxed '>


            {t('ourteamdesc')}
          </motion.p>
          <div className=' tracking-[.10em]  sm:leading-normal leading-relaxed gap-8 min-h-[70vh] space-y-10 sm:space-y-0  justify-between text-white p-10 sm:p-32 md:p-24  '>


            <div className='flex  space-y-2'>

              <motion.div variants={textVariant(0.8)} className='flex-1 flex justify-center ' >
                <Image width={500} height={500} className='w-[60%] h-[80%] object-cover rounded-3xl' src={Etienne} /></motion.div>

              <div className='flex-1 flex items-center '>
                <div>
                  <motion.h2 variants={textVariant(0.2)} className='text-2xl text-[#912CC9]'>Etienne Lambot</motion.h2>
                  <motion.h3 variants={textVariant(0.5)} className=' text-[#d0ff05]'>CEO / Co-Founder</motion.h3>
                  <motion.p variants={textVariant(0.8)} className=' text-gray-300'>
                    {t('etiennedesc')}              </motion.p>
                </div>

              </div>

            </div>

            <div className='flex  space-y-2'>

              <motion.div variants={textVariant(0.8)} className='flex-1 flex justify-center ' >
                <Image width={500} height={500} className='w-[60%] h-[80%] object-cover object-top rounded-3xl' src={Sebastien} /></motion.div>

              <div className='flex-1 flex items-center '>
                <div>
                  <motion.h2 variants={textVariant(0.9)} className='text-2xl text-[#912CC9]'>Sebastien Bellin</motion.h2>
                  <motion.h3 variants={textVariant(1.2)} className=' text-[#d0ff05]'> Co-Founder</motion.h3>
                  <motion.p variants={textVariant(1.5)} className=' text-gray-300'>
                    {t('sebastiendesc')}              </motion.p>
                </div>

              </div>

            </div>





          </div>

        </div>
      </motion.div>
    </section >
  )
}

export default OurTeam;

