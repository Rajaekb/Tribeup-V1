'use client';
import { motion } from 'framer-motion';

import { StartSteps, TitleText, TypingText } from '../../components';
import { staggerContainer, slideIn, fadeIn, planetVariants } from '../../utils/motion';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import sp2 from "../../../public/mobile/m7.jpg"
import sp3 from "../../../public/mobile/m4.jpg"
import Getintouch from '../Getintouch';

const GetStarted = () => {

    const t = useTranslations('Index');

    return (
        <>
            <section className=" relative" id='getstarted'>
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.25 }}
                    className='mt-24 flex justify-center sm:block space-y-24'

                >




                    <div className="flex lg:flex-row flex-col gap-8 justify-between" id="web">
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
                                className="sm:w-[800px] sm:h-[800px] w-full h-full object-cover "
                            />
                        </motion.div>
                        <motion.div
                            variants={fadeIn('up', 'tween', 0.8, 1)}
                            className="md:flex-1 md:flex justify-center flex-col bg-black bg-opacity-50 p-5 sm:p-16 h-96 -mr-16 sm:mt-52 z-10  sm:-mt-[550px]"
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: false, amount: 0.25 }}
                        >


                            <h2 className='text-strock-white text-4xl md:text-9xl uppercase py-2 sm:py-5'>{t('mobileapps')}</h2>
                            <div className="sm:mt-[31px] flex flex-col  gap-[24px] ">
                                <p className='text-white sm:w-[800px] w-[250] pb-24 '>{t('mobileappsdesc')}

                                </p>
                            </div>
                        </motion.div>
                    </div>

                    <div className="flex lg:flex-row-reverse flex-col gap-8 justify-between" id="web">
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
                            className="md:flex-1 md:flex justify-center flex-col bg-black bg-opacity-50 p-5 sm:p-16 h-96 -mr-16 sm:mt-52 z-10  sm:-mt-[550px]"
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: false, amount: 0.25 }}
                        >


                            <h2 className='text-strock-white text-4xl md:text-9xl uppercase py-2 sm:py-5'>{t('webapps')}</h2>
                            <div className="sm:mt-[31px] flex flex-col  gap-[24px] ">
                                <p className='text-white sm:w-[800px] w-[250] pb-24 '>{t('webappsdesc')}

                                </p>
                            </div>
                        </motion.div>
                    </div>



                </motion.div>
            </section>
            <div className='my-16'>

                <Getintouch />
            </div>
        </>
    )
}
export default GetStarted;
