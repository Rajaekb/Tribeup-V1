'use client';
import { motion } from "framer-motion";
import { slideIn, staggerContainer, textVariant } from '../utils/motion';
import { TypingText } from "../components";
import Image from "next/image";
import { useTranslations } from "next-intl";
import sp1 from '../../public/sp1.png'



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
                            <div className='border border-[#FEBF03] m-1 rounded-lg' />
                        </div>

                        <TypingText title={t('aboutus')} />
                        <div className='sm:mt-5  sm:w-60 w-20 '>
                            <div className='border border-[#FEBF03] m-1 rounded-lg' />
                        </div>
                    </motion.div>

                </div>


                <div className="text-gray-300 sm:text-xl text-md tracking-[.05em] sm:leading-normal leading-relaxed pt-5 z-10 mx-64">


                    <p>{t('aboutustext')}</p><br />
                    <p>{t('aboutusp1')}</p>
                    <Image
                        src={sp1}
                        width={700}
                        className="object-contain mx-auto my-10"


                    />

                    <p>{t('aboutusp2')}</p><br />
                    <p>{t('aboutusp3')}</p><br />
                    <p>{t('aboutusp4')}</p><br />
                    <p>{t('aboutusp5')}</p><br />
                    <p>{t('aboutusp6')}</p><br />
                </div>

            </motion.div>
        </section>)
};

export default About;
