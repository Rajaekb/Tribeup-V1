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
    <section className=" border" id='getstarted'>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className='flex justify-center items-center border'

      >
        <div className='flex flex-col sm:block '>

          <div className="  flex sm:flex-row flex-col justify-between " id="games">


            <motion.div
              variants={fadeIn('up', 'tween', 0.8, 1)}
              className="  sm:flex-[80%] md:flex justify-center flex-col "
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
            >

              <div className='flex items-center sm:-mt-56 -mt-36'>
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

              <h2 className=' sm:mt-24 mt-8 text-strock-white text-4xl sm:ml-16 ml-8  md:text-6xl uppercase'>{t('games')}</h2>
              <div className="sm:mt-[31px] flex flex-col sm:pr-16 text-gray-300 sm:ml-12 ml-8 text-md tracking-[.05em] ">
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
            <div className='flex justify-center w-[50%] sm:w-[23%] sm:bg-[#d0ff05] h-[500px] sm:-mt-24 sm:ml-10 '
            >

              <CldVideoPlayer
                src='https://res.cloudinary.com/dv1ijhawt/video/upload/v1696241170/Foot_Runner_Record_qprja7.webm'
                muted autoPlay="on-scroll" loop controls="0"
                className='sm:-ml-10 sm:mt-8 mt-16 ml-24'
                transformation={{
                  crop: "fill",
                  gravity: "center",
                  witdh: 550,
                  height: 770
                }}

              />
            </div>

          </div>
          <div className=" py-5 bg-stone-900 sm:h-screen flex sm:flex-row flex-col-reverse justify-between gap-5 px-5 " id="mobile">
            <div className='sm:w-[23%] sm:bg-[#d0ff05] sm:h-[500px] flex  justify-center'
            >

              <Image
                src={sp3}
                alt="get-started"
                className="sm:ml-10 sm:mt-16  object-cover sm:h-[500px] h-[250px] object-contain"
                height={500}

              />
            </div>

            <motion.div
              variants={fadeIn('up', 'tween', 0.8, 1)}
              className="sm:flex-[80%] sm:flex justify-center flex-col sm:pl-10 "
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
            >


              <h2 className='   text-strock-white text-4xl sm:ml-16   md:text-6xl uppercase'>{t('mobileapps')}</h2>
              <div className=" sm:mt-[31px] flex flex-col sm:pr-24 text-gray-300 sm:ml-12 text-md tracking-[.05em] ">

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
                  className=" absolute   "
                  variants={slideIn('right', 'tween', 0.2, 1)}>

                  <h1 className=" hidden sm:block text-8xl mt-24 ml-44 font-bold glassmorphism2 uppercase text-stone-900 z-50">
                    Mobile</h1>
                </motion.div>
              </div>
            </motion.div>


          </div>
          <div className=" flex lg:flex-row flex-col justify-between " id="webapps">


            <motion.div
              variants={fadeIn('up', 'tween', 0.8, 1)}
              className=" -mt-16 sm:flex-[80%] md:flex sm:justify-center flex-col mx-8 "
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
            >


              <h2 className='  text-strock-white text-4xl sm:ml-12  md:text-6xl uppercase  '>{t('webapps')}</h2>
              <div className="mt-[31px] flex flex-col sm:ml-8 text-gray-300  text-md tracking-[.05em] ">

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

                  <h1 className=" hidden sm:block text-8xl mt-24 ml-24 font-bold glassmorphism2 uppercase text-stone-900">
                    Web App</h1>
                </motion.div>
              </div>
            </motion.div>
            <div className='sm:w-[23%] sm:bg-[#d0ff05] sm:h-[500px]  sm:-mt-24 sm:ml-10 flex justify-center '
            >
              <Image
                src={sp2}
                alt="get-started"
                className="sm:-ml-10 mt-8  object-cover sm:h-[500px] h-[250px] object-contain"
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
