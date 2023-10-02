'use client';
import { motion } from 'framer-motion';

import { startingFeatures } from '../constants';
import { StartSteps, TitleText, TypingText } from '../components';
import { staggerContainer, slideIn, fadeIn, planetVariants } from '../utils/motion';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import sp2 from "../../public/mobile/m7.jpg"
import sp3 from "../../public/mobile/m4.jpg"
import { CldVideoPlayer } from 'next-cloudinary';

const GetStarted = () => {

  const t = useTranslations('Index');

  return (
    <section className=" relative" id='getstarted'>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className='flex flex-col mt-[450px] sm:block space-y-24'

      >
        <div className='flex   my-24  items-center'>
          <motion.div
            variants={slideIn('left', 'tween', 0.8, 1)}
            className="flex">
            <div className='mt-5 sm:w-60 w-20'>
              <div className='border border-[#d0ff05] m-1 rounded-lg' />
            </div>

          </motion.div>
          <TypingText title={t('ourservices')} textStyles="text-center" />
        </div>
        <div className="flex lg:flex-row flex-col justify-between " id="web">
          <div className='w-[50%] rounded-lg'
          >

            <CldVideoPlayer
              src='https://res.cloudinary.com/dv1ijhawt/video/upload/v1696241170/Foot_Runner_Record_qprja7.webm'
              muted autoPlay="on-scroll" loop controls="0"

            />
          </div>


          <motion.div
            variants={fadeIn('up', 'tween', 0.8, 1)}
            className="  sm:flex-[80%] md:flex flex-grow justify-center flex-col bg-black bg-opacity-50 p-5 sm:mt-52 z-10  sm:-mt-[550px]"
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
          >


            <h2 className='text-strock-white text-4xl md:text-6xl pur uppercase  sm:py-5'>{t('games')}</h2>
            <div className="sm:mt-[31px] flex flex-col sm:pr-24">
              <p className='text-white sm:pb-24 w-full '>{t('gamesdesc')}

              </p>
            </div>
          </motion.div>
        </div>

        <div className="flex lg:flex-row-reverse flex-col gap-8 justify-between" id="mobile">
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
              className="sm:w-[800px] sm:h-[800px] object-cover "

            />
          </motion.div>
          <motion.div
            variants={fadeIn('up', 'tween', 0.8, 1)}
            className="md:flex-1   md:flex justify-center flex-col  sm:p-16 p-5 h-96 -mr-16 sm:mt-52 z-10 bg-black/50 w-full h-full -mt-[680px] sm:-mt-[550px]"
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
          >


            <h2 className='text-strock-white text-3xl md:text-6xl uppercase py-5'>{t('mobileapps')}</h2>
            <div className="sm:mt-[31px] flex flex-col  gap-[24px] ">
              <p className='text-white sm:w-[800px] pb-5'>{t('mobileappsdesc')}

              </p>
            </div>
          </motion.div>
        </div>
        <div className="flex lg:flex-row flex-col gap-8 justify-between " id="web">
          <motion.div
            variants={fadeIn('up', 'tween', 0.2, 1)}
            className="flex-1"
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
            className="md:flex-1 md:flex justify-center flex-col  sm:p-16 p-5 h-96 -mr-16 sm:mt-52 z-10 bg-black/50 w-full h-full pb-14  -mt-[655px] sm:-mt-[550px] "
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
          >


            <h2 className='text-strock-white text-3xl md:text-6xl uppercase py-2 sm:py-5'>{t('webapps')}</h2>
            <div className="sm:mt-[31px] flex flex-col  gap-[24px] ">
              <p className='text-white sm:w-[800px] pb-5  '>{t('webappsdesc')}

              </p>
            </div>
          </motion.div>
        </div>



      </motion.div>
    </section>
  )
}
export default GetStarted;
