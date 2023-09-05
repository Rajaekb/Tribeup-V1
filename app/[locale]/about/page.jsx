'use client';
import { motion } from "framer-motion";
import { slideIn, staggerContainer, textVariant } from '../utils/motion';
import { TypingText } from "../components";
import Image from "next/image";
import { useTranslations } from "next-intl";
import sp1 from '../../public/bureau2.jpg'



const About = () => {

    const t = useTranslations('Index');

    return (
        <section id="About" className="">

            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
            >



                <div className="flex justify-center my-10 " >

                    <motion.div
                        variants={slideIn('left', 'tween', 0.8, 1)}
                        className="flex">
                        <div className='sm:mt-5  sm:w-60 w-20 '>
                            <div className='border border-[#d0ff05] m-1 rounded-lg' />
                        </div>

                        <TypingText title={t('aboutus')} />
                        <div className='sm:mt-5  sm:w-60 w-20 '>
                            <div className='border border-[#d0ff05] m-1 rounded-lg' />
                        </div>
                    </motion.div>

                </div>


                <div className="text-gray-300 sm:text-2xl text-md tracking-[.05em] sm:leading-normal leading-relaxed  z-10 mx-64">

                    <h2 className="text-strock-gray text-5xl md:text-7xl uppercase py-5 sm:leading-normal leading-relaxed py-10">La Technologie Au Service De Votre Croissance</h2>
                    <div className="bg-[#d0ff05] pt-5 pl-36 h-[800px] mb-24 w-[250px]">
                        <Image
                            src={sp1}
                            width={1000}
                            className="object-contain absolute my-10 "


                        />

                    </div>

                    <p>{t('aboutusp2')}</p><br />

                </div>

            </motion.div>
        </section>)
};

export default About;
