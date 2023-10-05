'use client';
import { motion } from 'framer-motion';


import { TypingText } from '../components';
import { staggerContainer, slideIn, fadeIn, textVariant } from '../utils/motion';
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
        className='flex justify-center items-center   relative mt-56 px-8'

      >
        <div className='flex flex-col sm:block space-y-56'>

          <div className="  flex lg:flex-row flex-col justify-between " id="games">


            <motion.div
              variants={fadeIn('up', 'tween', 0.8, 1)}
              className="  sm:flex-[80%] md:flex justify-center flex-col "
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
            >

              <div className='flex items-center -mt-56'>
                <motion.div
                  variants={slideIn('left', 'tween', 0.2, 1)}
                >
                  <div className='sm:mt-5 sm:w-56 w-10 '>
                    <div className='border border-[#d0ff05] m-1 rounded-lg' />
                  </div>
                </motion.div>
                <motion.h1 className="sm:-ml-8 z-10" variants={slideIn('left', 'tween', 0.2, 1)} >
                  <TypingText title={t('whatwedo')} />
                </motion.h1>
              </div>

              <h2 className=' mt-24 text-strock-white text-4xl ml-16  md:text-6xl uppercase'>{t('games')}</h2>
              <div className="sm:mt-[31px] flex flex-col sm:pr-16 text-gray-300 ml-12 text-md tracking-[.05em] ">
                <p className=''>
                  {t('gamesdesc')}

                </p>
                <p className=''>
                  {t('gamesdescp1')}

                </p>
                <p className=''>
                  {t('gamesdescp2')}

                </p>
                <p className=''>
                  {t('gamesdescp3')}

                </p>
                <p className=''>
                  {t('gamesdescp4')}

                </p>
                <motion.div
                  className=" absolute -z-10  "
                  variants={slideIn('left', 'tween', 0.2, 1)}>

                  <h1 className=" hidden sm:block text-8xl mt-24 ml-44 font-bold glassmorphism2 uppercase text-stone-900">
                    games</h1>
                </motion.div>
              </div>
            </motion.div>
            <div className='w-[23%] bg-[#d0ff05] h-[500px]  -mt-24 ml-10 '
            >

              <CldVideoPlayer
                src='https://res.cloudinary.com/dv1ijhawt/video/upload/v1696241170/Foot_Runner_Record_qprja7.webm'
                muted autoPlay="on-scroll" loop controls="0"
                className='-ml-10 mt-8 '
                transformation={{
                  crop: "fill",
                  gravity: "center",
                  witdh: 550,
                  height: 770
                }}

              />
            </div>

          </div>
          <div className=" flex lg:flex-row-reverse flex-col-reverse justify-between " id="mobile">


            <motion.div
              variants={fadeIn('up', 'tween', 0.8, 1)}
              className="  sm:flex-[80%] md:flex justify-center flex-col pl-10 "
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
            >


              <h2 className='  text-strock-white text-4xl ml-16   md:text-6xl uppercase'>{t('mobileapps')}</h2>
              <div className="sm:mt-[31px] flex flex-col sm:pr-24 text-gray-300 ml-12 text-md tracking-[.05em] ">

                <p className=''>
                  {t('mobiledescp1')}

                </p>
                <p className=''>
                  {t('mobiledescp2')}

                </p>
                <p className=''>
                  {t('mobiledescp3')}

                </p>
                <p className=''>
                  {t('mobiledescp4')}

                </p>
                <p className=''>
                  {t('mobiledescp5')}

                </p>
                <motion.div
                  className=" absolute -z-10  "
                  variants={slideIn('right', 'tween', 0.2, 1)}>

                  <h1 className=" hidden sm:block text-8xl mt-24 ml-44 font-bold glassmorphism2 uppercase text-stone-900">
                    Mobile</h1>
                </motion.div>
              </div>
            </motion.div>
            <div className='w-[23%] bg-[#d0ff05] h-[500px]'
            >

              <Image
                src={sp3}
                alt="get-started"
                className="ml-10 mt-16  object-cover h-[500px]"
                height={500}

              />
            </div>

          </div>
          <div className="   flex lg:flex-row flex-col justify-between " id="webapps">


            <motion.div
              variants={fadeIn('up', 'tween', 0.8, 1)}
              className=" -mt-16 sm:flex-[80%] md:flex justify-center flex-col "
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
            >


              <h2 className='  text-strock-white text-4xl ml-16  md:text-6xl uppercase'>{t('webapps')}</h2>
              <div className="sm:mt-[31px] flex flex-col sm:pr-16 text-gray-300 ml-12 text-md tracking-[.05em] ">

                <p className=''>
                  {t('webappsdescp1')}

                </p>
                <p className=''>
                  {t('webappsdescp2')}

                </p>
                <p className=''>
                  {t('webappsdescp3')}

                </p>
                <p className=''>
                  {t('webappsdescp4')}

                </p>
                <p className=''>
                  {t('webappsdescp5')}

                </p>
                <motion.div
                  className=" absolute -z-10  "
                  variants={slideIn('left', 'tween', 0.2, 1)}>

                  <h1 className=" hidden sm:block text-8xl mt-24 ml-44 font-bold glassmorphism2 uppercase text-stone-900">
                    Web Apps</h1>
                </motion.div>
              </div>
            </motion.div>
            <div className='w-[23%] bg-[#d0ff05] h-[500px]  -mt-24 ml-10 '
            >
              <Image
                src={sp2}
                alt="get-started"
                className="-ml-10 mt-8  object-cover h-[500px] "
                height={500}


              />

            </div>

          </div>

        </div>



      </motion.div>
    </section>
  )
}
export default GetStarted;
