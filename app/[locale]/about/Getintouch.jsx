
'use client';
import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer, textVariant } from '../utils/motion';
import { useTranslations } from "next-intl";

const Getintouch = () => {

    const t = useTranslations('Index');


    return (
        <section id="getintouch">
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}>

                <motion.div variants={fadeIn('up', 'tween', 0.8, 1)}
                    className='w-[80%]  bg-[#d0ff05] text-black font-bold mx-auto h-56 my-10 flex  items-center'
                >

                    <div className='w-full mx-16 text-2xl flex  gap-16 justify-between'>
                        <h2 className='flex-9 justify-self-start  flex items-center  '>
                            {t('discovertext')}
                        </h2>
                        <div className=' flex-1 flex justify-end'>
                            <button className=' border  border-black p-5'>
                                {t('discoverbtn')}
                            </button>
                        </div>

                    </div >
                </motion.div>
            </motion.div >
        </section>
    )
}

export default Getintouch