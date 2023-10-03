'use client';
import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer } from '../utils/motion';
import { TypingText } from "../components";
import Image from "next/image";
import { useTranslations } from "next-intl";
import sp1 from '../../public/bureau2.jpg'
import { AiOutlineCheckCircle, AiOutlineAntDesign, AiOutlineBranches, AiOutlineRocket, AiOutlineFundView, AiOutlineSafetyCertificate } from "react-icons/ai";



const About = () => {

    const t = useTranslations('Index');

    return (
        <>
            <section id="About" className="">

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.25 }}
                >



                    <div className="flex justify-center my-10 " >

                        <motion.div
                            variants={slideIn('left', 'tween', 0.2, 1)}
                            className="flex">
                            <div className='sm:mt-5  sm:w-60 w-20 '>
                                <div className='border border-[#d0ff05] m-1 rounded-lg' />
                            </div>
                            <div className="mr-7">

                                <TypingText title={t('aboutus')} />
                            </div>
                            <div className='sm:mt-5  sm:w-60 w-20 '>
                                <div className='border border-[#d0ff05] m-1 rounded-lg' />
                            </div>
                        </motion.div>

                    </div>


                    <motion.div variants={fadeIn('up', 'tween', 0.5, 1)} className="text-gray-300 sm:text-2xl text-md tracking-[.05em] sm:leading-normal leading-relaxed  z-10 mx-64">

                        <h2 className="text-strock-gray text-5xl md:text-7xl uppercase py-5 sm:leading-normal leading-relaxed py-10">La Technologie Au Service De Votre Croissance</h2>
                        <div className="bg-[#d0ff05] pt-5 pl-36 h-[700px] mb-36 w-[250px]">
                            <Image
                                src={sp1}
                                width={900}
                                className="object-contain absolute my-10 "


                            />

                        </div>

                        <p>{t('aboutusp2')}</p><br />
                        <div
                            className='grid gap-3 grid-cols-2 sm:grid-cols-3 text-sm font-light tracking-[.15em] text-gray-300'>
                            <div className='flex items-center'><div><AiOutlineCheckCircle color='#00ff00' size={50} /></div><h3 className='p-2'> Agilité et transparence.</h3></div>
                            <div className='flex items-center'><div><AiOutlineAntDesign color="purple" size={50} /></div><h3 className='p-2 '> Design et ergonomie.</h3></div>
                            <div className='flex items-center'><div><AiOutlineBranches color="#A0E7E5" size={50} /></div><h3 className='p-2'> Dernieres technologies</h3></div>
                            <div className='flex items-center'><div><AiOutlineRocket color="#FA26A0" size={50} /></div><h3 className='p-2'> Fiabilité et Robustesse . </h3></div>
                            <div className='flex items-center'><div><AiOutlineFundView color="#F8D210" size={50} /></div><h3 className='p-2'> Un suivie permanent.</h3></div>
                            <div className='flex items-center'><div><AiOutlineCheckCircle color="#A16AE8" size={50} /></div><h3 className='p-2'> Collaboration &eacute;troite avec le client.</h3></div>

                        </div>

                    </motion.div>



                </motion.div>
            </section>

        </>
    )
};

export default About;
