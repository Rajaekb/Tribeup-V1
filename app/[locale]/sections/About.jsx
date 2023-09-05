'use client';
import { motion } from "framer-motion";
import { slideIn, staggerContainer, textVariant } from '../utils/motion';
import { TypingText } from "../components";
import Image from "next/image";
import { useTranslations } from "next-intl";
import rug from '../../public/rug2.jpg'



const About = () => {

  const t = useTranslations('Index');

  return (
    <section id="About" className="h-screen">
      <motion.div
        className=" flex items-center mx-8"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <motion.div
          variants={textVariant(0.3)}
        >
          <div className="bg-[#d0ff05] pt-16 pl-4  h-[400px] ">
            <Image
              src={rug}
              alt="rug2"
              className="  hidden sm:block object-contain w-[900] sm:ml-10"
              width={800}
              height={800} />
          </div>

        </motion.div>
        <div className="sm:-mr-50 mt-16 ">
          <div className='flex items-center'>
            <motion.div
              variants={slideIn('left', 'tween', 0.8, 1)}
              className="flex">
              <div className='sm:mt-5  sm:w-60 w-20 '>
                <div className='border border-[#d0ff05] m-1 rounded-lg' />
              </div>

            </motion.div>
            <motion.div
              variants={slideIn('left', 'tween', 0.2, 1)}
            >

              <TypingText title={t('aboutus')} /></motion.div>
          </div>

          <motion.div
            className=" absolute -z-10 pt-44 right-0 "
            variants={slideIn('left', 'tween', 0.2, 1)}>

            <h1 className="hidden sm:block text-8xl font-bold glassmorphism2 uppercase text-stone-900">
              ABOUT US </h1>
          </motion.div>
          <motion.p
            variants={textVariant(0.5)}
            className="text-gray-300 sm:text-3xl text-xl tracking-[.10em] sm:leading-normal leading-relaxed pt-5 z-10">
            {t('aboutustext')}</motion.p>

        </div>
      </motion.div>
    </section>)
};

export default About;
