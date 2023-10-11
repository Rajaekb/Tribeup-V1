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
    <section className="w-full " id='getstarted'>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className='flex justify-center items-center'

      >
        <div className='flex flex-col sm:block sm:space-y-[150px] sm:py-[250px] py-[100px]'>

          <div className=" flex sm:flex-row flex-col justify-between h-auto sm:h-[613px] mx-8 " id="games">


            <motion.div
              variants={fadeIn('up', 'tween', 0.8, 1)}
              className=""
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
            >

              <div className='flex items-center '>
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

              <h2 className=' sm:mt-24 mt-8 text-strock-white text-4xl sm:ml-16 w-[80%]  md:text-6xl uppercase'>{t('games')}</h2>
              <div className="sm:mt-[31px] flex flex-col sm:pr-16  text-gray-300  w-full  sm:ml-12 text-md tracking-[.05em] ">
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

                  <h1 className=" hidden sm:block text-8xl mt-24 ml-80 font-bold glassmorphism2 uppercase text-stone-900">
                    games</h1>
                </motion.div>
              </div>
              <div className=' hidden sm:flex justify-end  h-6 mt-32 '>

                <div className=' greenline uppercase  '>
                  {t('gamesdescp5')}
                </div>
              </div>

            </motion.div>
            <div className='flex justify-center  rounded-xl sm:w-[43%] rounded-xl sm:h-[500px]'
            >

              <CldVideoPlayer
                src='https://res.cloudinary.com/dv1ijhawt/video/upload/v1696241170/Foot_Runner_Record_qprja7.webm'
                muted autoPlay="on-scroll" loop controls="0"
                className='rounded-xl h-[550px] w-full'
                transformation={{
                  crop: "fill",
                  gravity: "center",
                  witdh: 250,
                  height: 550
                }}

              />
            </div>

          </div>
          <div className="  bg-stone-900  flex sm:flex-row flex-col-reverse justify-between py-[150px] px-8" id="mobile">
            <div className='flex justify-center   w-full sm:w-[40%] '
            >

              <Image
                src={sp3}
                alt="get-started"
                className="object-contain rounded-xl w-full"
                height={800}
                width={250}

              />
            </div>

            <motion.div
              variants={fadeIn('up', 'tween', 0.8, 1)}
              className=" sm:flex justify-center  flex-col  "
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
            >


              <h2 className='   text-strock-white text-4xl sm:ml-16   md:text-6xl uppercase'>{t('mobileapps')}</h2>
              <div className=" sm:mt-[31px] flex flex-col  text-gray-300 sm:ml-12 text-md tracking-[.05em]  ">

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

                <motion.div
                  className=" absolute   "
                  variants={slideIn('right', 'tween', 0.2, 1)}>

                  <h1 className=" hidden sm:flex justify-start text-8xl mt-24 -ml-16 font-bold glassmorphism2 uppercase text-stone-900 z-50">
                    Mobile</h1>
                </motion.div>

              </div>
              <div className='hidden sm:flex justify-start mt-32'>
                <div className='greenline uppercase ' >
                  {t('mobiledescp5')}
                </div>
              </div>
            </motion.div>


          </div>
          <div className=" flex lg:flex-row flex-col justify-between mx-8 mt-5" id="webapps">


            <motion.div
              variants={fadeIn('up', 'tween', 0.8, 1)}
              className=" sm:flex sm:justify-center flex-col"
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
            >


              <h2 className='  text-strock-white text-4xl sm:ml-16  md:text-6xl uppercase  '>{t('webapps')}</h2>
              <div className="sm:mt-[31px] flex flex-col sm:ml-12 sm:mr-16 text-gray-300  relative text-md tracking-[.05em] ">

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

                <motion.div
                  className=" absolute -z-10  "
                  variants={slideIn('left', 'tween', 0.2, 1)}>

                  <h1 className=" hidden sm:block text-8xl mt-24 ml-16 font-bold glassmorphism2 uppercase text-stone-900">
                    Webapps</h1>
                </motion.div>

              </div>  <div className='hidden sm:flex justify-end h-6 mt-32 '>
                <div className='greenline uppercase  z-50'>
                  {t('webappsdescp5')}
                </div>
              </div>

            </motion.div>
            <div className='flex justify-center   w-full sm:w-[33%] '
            >
              <Image
                src={sp2}
                alt="get-started"
                className="object-contain rounded-xl w-full"
                height={800}
                width={250}


              />

            </div>

          </div>

        </div>



      </motion.div>
    </section>
  )
}
export default GetStarted;
