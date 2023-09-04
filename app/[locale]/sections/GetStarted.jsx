'use client';
import { motion } from 'framer-motion';

import { startingFeatures } from '../constants';
import { StartSteps, TitleText, TypingText } from '../components';
import { staggerContainer, slideIn, fadeIn, planetVariants } from '../utils/motion';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import sp2 from "../../public/mobile/m2.jpg"
import sp3 from "../../public/mobile/m7.jpg"

const GetStarted = () => {

  const t = useTranslations('Index');

  return (
    <section className=" relative" id='getstarted'>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}

      >
        <div className='flex mx-8 my-24 items-center'>
          <motion.div
            variants={slideIn('left', 'tween', 0.8, 1)}
            className="flex">
            <div className='mt-5 sm:w-60 w-20'>
              <div className='border border-[#d0ff05] m-1 rounded-lg' />
            </div>

          </motion.div>
          <TypingText title={t('ourservices')} textStyles="text-center" />
        </div>

        <div className="flex lg:flex-row flex-col gap-8 justify-between" id="imabrand">
          <motion.div
            variants={fadeIn('up', 'tween', 0.2, 1)}
            className={`flex-1`}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
          >
            <Image
              src={sp2}
              alt="get-started"
              className="sm:w-[800px] sm:h-[800px] w-full h-full object-cover "
            />
          </motion.div>
          <motion.div
            variants={fadeIn('up', 'tween', 0.8, 1)}
            className=" md:flex-1 md:flex justify-center flex-col bg-black bg-opacity-50 md:-ml-[300px] h-[470px] px-5 sm:mt-52 z-10 "
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
          >


            <h2 className=' text-strock-white text-5xl md:text-9xl uppercase py-5'>{t('mobileapps')}</h2>
            <div className="sm:mt-[31px] flex flex-col  gap-[24px] ">
              <p className='text-white sm:w-[800px] w-[250] pb-5'>{t('imabrandtext')}

              </p>
            </div>
          </motion.div>
        </div>
        <div className="flex lg:flex-row-reverse flex-col gap-8 justify-between" id="imabrand">
          <motion.div
            variants={fadeIn('up', 'tween', 0.2, 1)}
            className="flex-1"
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
          >
            <Image
              src={sp3}
              alt="get-started"
              className="sm:w-[800px] sm:h-[800px] w-full h-full object-cover "
            />
          </motion.div>
          <motion.div
            variants={fadeIn('up', 'tween', 0.8, 1)}
            className="md:flex-1 md:flex justify-center flex-col bg-black bg-opacity-50 p-16 h-96 -mr-16 sm:mt-52 z-10 -mt-[550px]"
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
          >


            <h2 className='text-strock-white text-5xl md:text-9xl uppercase py-5'>{t('webapps')}</h2>
            <div className="sm:mt-[31px] flex flex-col  gap-[24px] ">
              <p className='text-white sm:w-[800px] w-[250] pb-5'>{t('imabrandtext')}

              </p>
            </div>
          </motion.div>
        </div>


      </motion.div>
    </section>
  )
}
export default GetStarted;
