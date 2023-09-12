"use client"
import Image from 'next/image'
import { motion } from "framer-motion";
import { slideIn, staggerContainer, textVariant, fadeIn } from '../../utils/motion';
import { TypingText } from "../../components";
import phone from "./../../public/phone.png"
import phone2 from "./../../public/phone2.png"
import phone3 from "./../../public/phone3.png"
import { useTranslations } from 'next-intl';
import { Link } from 'react-scroll';
import Getintouch from '../Getintouch';

const page = () => {
    const t = useTranslations('Index');

    return (
        <>
            <section className='mx-24 mt-16'>
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.25 }}>
                    <div className='flex justify-center mx-8 '>
                        <div className='flex flex-col sm:flex-row justify-between mx-8'>
                            <motion.div variants={textVariant(0.2)} className=' flex-2 flex justify-center '>
                                <Image src={phone} width={350} className='object-contain mx-8' />

                            </motion.div>
                            <div className='flex-1  space-y-5  sm:my-40 '>
                                <motion.h2 variants={textVariant(0.5)} className='text-strock-white text-3xl md:text-7xl uppercase'>{t('games')}</motion.h2>
                                <motion.h3 variants={textVariant(0.8)} className='text-md text-[#d0ff05] tracking-[.25em]  sm:leading-normal leading-relaxed'> {t('appistadiumtitle')}</motion.h3>
                                <motion.p
                                    variants={textVariant(1.2)}
                                    className=' text-gray-300 sm:text-2xl tracking-[.10em] sm:leading-normal leading-relaxed '>


                                    {t('appistadium')}
                                </motion.p>




                            </div>
                        </div>

                    </div>
                    <div className='flex justify-center mx-8 '>
                        <div className='flex flex-col sm:flex-row-reverse justify-between mx-8'>
                            <motion.div variants={fadeIn('up', 'tween', 0.2, 1)}

                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: false, amount: 0.25 }} className=' flex-2 flex justify-center '>
                                <Image src={phone2} width={350} className='object-contain mx-8' />

                            </motion.div>
                            <motion.div
                                variants={fadeIn('up', 'tween', 0.8, 1)}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: false, amount: 0.25 }}
                                className='flex-1  space-y-5  sm:my-40 '>
                                <h2 className='text-strock-white text-3xl md:text-7xl uppercase'>{t('games')}</h2>
                                <h3 className='text-md text-[#d0ff05] tracking-[.25em]  sm:leading-normal leading-relaxed'> {t('appistadiumtitle')}</h3>
                                <p

                                    className=' text-gray-300 sm:text-2xl tracking-[.10em] sm:leading-normal leading-relaxed '>


                                    {t('appistadium')}
                                </p>




                            </motion.div>
                        </div>

                    </div>
                    <div className='flex justify-center mx-8 '>
                        <div className='flex flex-col sm:flex-row justify-between mx-8'>
                            <motion.div variants={fadeIn('up', 'tween', 0.2, 1)}

                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: false, amount: 0.25 }} className=' flex-2 flex justify-center '>
                                <Image src={phone3} width={350} className='object-contain mx-8' />

                            </motion.div>
                            <motion.div
                                variants={fadeIn('up', 'tween', 0.8, 1)}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: false, amount: 0.25 }}
                                className='flex-1  space-y-5  sm:my-40 '>
                                <h2 className='text-strock-white text-3xl md:text-7xl uppercase'>{t('games')}</h2>
                                <h3 className='text-md text-[#d0ff05] tracking-[.25em]  sm:leading-normal leading-relaxed'> {t('appistadiumtitle')}</h3>
                                <p

                                    className=' text-gray-300 sm:text-2xl tracking-[.10em] sm:leading-normal leading-relaxed '>


                                    {t('appistadium')}
                                </p>




                            </motion.div>
                        </div>

                    </div>

                </motion.div>
            </section>
            <div className='my-16'>

                <Getintouch />
            </div>
        </>

    )
}

export default page