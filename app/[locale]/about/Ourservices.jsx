
'use client';
import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer, textVariant } from '../utils/motion';
import { TypingText } from "../components";
import Image from "next/image";
import { useTranslations } from "next-intl";
import sp1 from '../../public/bureau2.jpg'
import { AiOutlineCheckCircle, AiOutlineAntDesign, AiOutlineBranches, AiOutlineRocket, AiOutlineFundView, AiOutlineSafetyCertificate } from "react-icons/ai";
import { NewsLetter } from "../sections";

const Ourservices = () => {

    const t = useTranslations('Index');

    return (
        <section id="ourservices" className="">
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

                        <TypingText title={t('ourservices')} />
                        <div className='sm:mt-5  sm:w-60 w-20 '>
                            <div className='border border-[#d0ff05] m-1 rounded-lg' />
                        </div>
                    </motion.div>

                </div>

                <motion.div variants={fadeIn('up', 'tween', 0.5, 1)} className="flex justify-center text-gray-300 sm:text-xl text-md tracking-[.05em] sm:leading-normal leading-relaxed pt-5 pb-16 mx-64 " >
                    <div><h1 className="text-strock-gray text-5xl md:text-7xl uppercase py-5 sm:leading-normal leading-relaxed py-10">{t('ourservicestitle')}</h1>
                        <div className="flex gap-5">
                            <p>{t('ourservicestext1')}</p>
                            <p>{t('ourservicestext2')}</p>

                        </div>
                    </div>
                </motion.div>

                <motion.div
                    variants={fadeIn('up', 'tween', 1.2, 1)}
                    className=' mb-24 mx-64 grid gap-6 grid-cols-2 sm:grid-cols-3 text-md font-light tracking-[.10em] text-gray-300'>
                    <div className='flex flex-col items-center border border-[#d0ff05] py-16 px-5'><div><AiOutlineCheckCircle color='#912CC9' size={50} /></div><h3 className='p-2'> {t('games')}</h3></div>
                    <div className='flex flex-col items-center border border-[#d0ff05] py-16 px-5'><div><AiOutlineAntDesign color="#912CC9" size={50} /></div><h3 className='p-2 '> {t('mobileapps')}</h3></div>
                    <div className='flex flex-col items-center border border-[#d0ff05] py-16 px-5'><div><AiOutlineBranches color="#912CC9" size={50} /></div><h3 className='p-2'>{t('webapps')}</h3></div>
                    <div className='flex flex-col items-center border border-[#d0ff05] py-16 px-5'><div><AiOutlineRocket color="#912CC9" size={50} /></div><h3 className='p-2'> {t('resources')}</h3></div>
                    <div className='flex flex-col items-center border border-[#d0ff05] py-16 px-5'><div><AiOutlineFundView color="#912CC9" size={50} /></div><h3 className='p-2'> Un suivie permanent.</h3></div>
                    <div className='flex flex-col items-center border border-[#d0ff05] py-16 px-5'><div><AiOutlineCheckCircle color="#912CC9" size={50} /></div><h3 className='p-2'> Collaboration &eacute;troite avec le client.</h3></div>


                </motion.div>
            </motion.div>
        </section>
    )
}

export default Ourservices