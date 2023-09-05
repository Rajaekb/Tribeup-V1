'use client';
import { motion } from "framer-motion";
import { slideIn, staggerContainer, textVariant } from '../utils/motion';
import { TypingText } from "../components";
import Image from "next/image";
import { useTranslations } from "next-intl";
import sp1 from '../../public/bureau2.jpg'
import { AiOutlineCheckCircle, AiOutlineAntDesign, AiOutlineBranches, AiOutlineRocket, AiOutlineFundView, AiOutlineSafetyCertificate } from "react-icons/ai";
import { NewsLetter } from "../sections";



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
                    <div className="bg-[#d0ff05] pt-5 pl-36 h-[700px] mb-36 w-[250px]">
                        <Image
                            src={sp1}
                            width={900}
                            className="object-contain absolute my-10 "


                        />

                    </div>

                    <p>{t('aboutusp2')}</p><br />
                    <motion.div
                        variants={textVariant(1.2)}
                        className=' mb-24 grid gap-6 grid-cols-2 sm:grid-cols-3 text-md font-light tracking-[.10em] text-gray-500 dark:text-gray-300'>
                        <div className='flex flex-col items-center border border-[#d0ff05] py-16 px-5'><div><AiOutlineCheckCircle color='#912CC9' size={50} /></div><h3 className='p-2'> Agilité et transparence.</h3></div>
                        <div className='flex flex-col items-center border border-[#d0ff05] py-16 px-5'><div><AiOutlineAntDesign color="#912CC9" size={50} /></div><h3 className='p-2 '> Design et ergonomie.</h3></div>
                        <div className='flex flex-col items-center border border-[#d0ff05] py-16 px-5'><div><AiOutlineBranches color="#912CC9" size={50} /></div><h3 className='p-2'> Dernieres technologies</h3></div>
                        <div className='flex flex-col items-center border border-[#d0ff05] py-16 px-5'><div><AiOutlineRocket color="#912CC9" size={50} /></div><h3 className='p-2'> Fiabilité et Robustesse. </h3></div>
                        <div className='flex flex-col items-center border border-[#d0ff05] py-16 px-5'><div><AiOutlineFundView color="#912CC9" size={50} /></div><h3 className='p-2'> Un suivie permanent.</h3></div>
                        <div className='flex flex-col items-center border border-[#d0ff05] py-16 px-5'><div><AiOutlineCheckCircle color="#912CC9" size={50} /></div><h3 className='p-2'> Collaboration &eacute;troite avec le client.</h3></div>

                    </motion.div>

                </div>

            </motion.div>
        </section>)
};

export default About;
