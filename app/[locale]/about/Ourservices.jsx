
'use client';
import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer } from '../utils/motion';
import { TypingText } from "../components";
import { useTranslations } from "next-intl";
import { AiOutlineCheckCircle, AiOutlineAntDesign, AiOutlineBranches, AiOutlineRocket, AiOutlineFundView, AiOutlineSafetyCertificate } from "react-icons/ai";

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
                        <div className='sm:mt-5  sm:w-[620px] w-20 '>
                            <div className='border border-[#d0ff05] m-1 rounded-lg' />
                        </div>
                        <div className="mr-7">

                            <TypingText title={t('ourservices')} />
                        </div>
                        <div className='sm:mt-5  sm:w-[620px] w-20 '>
                            <div className='border border-[#d0ff05] m-1 rounded-lg' />
                        </div>
                    </motion.div>

                </div>

                <motion.div variants={fadeIn('up', 'tween', 0.5, 1)}
                    className="flex justify-center text-gray-300 sm:text-xl text-md tracking-[.05em] sm:leading-normal leading-relaxed pt-5 pb-16 px-16" >
                    <div><h1 className="text-strock-gray text-5xl md:text-6xl uppercase py-5 sm:leading-normal leading-relaxed py-10">{t('ourservicestitle')}</h1>
                        <div className=" text-gray-300 sm:text-2xl text-xl tracking-[.10em] ">
                            <p>{t('ourservicestext1')}</p><br />
                            <p>{t('ourservicestext2')}</p>

                        </div>
                    </div>
                </motion.div>

                <motion.div
                    variants={fadeIn('up', 'tween', 1.2, 1)}
                    className=' mb-24 mx-64 grid gap-9 grid-cols-1 sm:grid-cols-2 text-xl  tracking-[.10em] text-gray-300'>
                    <a href="/about/games">
                        <div className='cursor-pointer hover:bg-[#d0ff05] duration-300 ease-in-out hover:text-black flex flex-col items-center border border-[#d0ff05] py-16 px-5'>
                            <div>
                                <AiOutlineCheckCircle color='#912CC9' size={50} />
                            </div>
                            <h3 className='p-2'> {t('games')}</h3>
                        </div>
                    </a>
                    <a href="/about/applications"><div className='cursor-pointer hover:bg-[#d0ff05] duration-300 ease-in-out hover:text-black flex flex-col items-center border border-[#d0ff05] py-16 px-5'><div><AiOutlineAntDesign color="#912CC9" size={50} /></div><h3 className='p-2 '> {t('webmobileapps')}</h3></div></a>

                    <div className='cursor-pointer hover:bg-[#d0ff05] duration-300 ease-in-out hover:text-black flex flex-col items-center border border-[#d0ff05] py-16 px-5'><div><AiOutlineRocket color="#912CC9" size={50} /></div><h3 className='p-2'> {t('resources')}</h3></div>
                    <div className='cursor-pointer hover:bg-[#d0ff05] duration-300 ease-in-out hover:text-black flex flex-col items-center border border-[#d0ff05] py-16 px-5'><div><AiOutlineFundView color="#912CC9" size={50} /></div><h3 className='p-2'> Academy</h3></div>



                </motion.div>
            </motion.div>
        </section>
    )
}

export default Ourservices