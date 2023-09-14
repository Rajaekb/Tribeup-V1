'use client';
import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer, textVariant } from '../utils/motion';
import { TypingText } from "../components";
import ContactForm2 from "../components/ContactForm2";
import { useTranslations } from "next-intl";

const Contact = () => {
    const t = useTranslations('Index');

    return (
        <section className="px-8 " id="Contact">
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}

            >
                <div className=' flex my-12  mt-24 items-center'>
                    <motion.div
                        variants={slideIn('left', 'tween', 0.8, 1)}
                        className="flex">
                        <div className='mt-5 sm:w-60 w-20 '>
                            <div className='border border-[#d0ff05] m-1 rounded-lg' />
                        </div>

                    </motion.div>
                    <TypingText title={t('getintouch')} textStyles="text-center" />
                </div>
                <motion.div
                    variants={fadeIn('up', 'tween', 0.8, 1)}

                    class="  relative flex   md:pb-20 mb-52  justify-between items-center flex-col sm:pt-0">


                    <div className=" z-10   md:w-[1200px] w-full p-10 md:h-96 h-auto bg-stone-900 bg-opacity-80 flex  md:flex-row flex-col md:gap-60 ">
                        <div >
                            <p class="text-gray-400 mt-2">
                                Fill in the form to start a conversation
                            </p>



                            <div class="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-[#912CC9]">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <div class="ml-4 text-md tracking-wide font-semibold w-40">
                                    +32 478 947 890
                                </div>
                            </div>

                            <div class="flex items-center mt-2 text-gray-600 dark:text-gray-400">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-[#912CC9]">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <div class="ml-4 text-md tracking-wide font-semibold w-40">
                                    info@appilab.be
                                </div>
                            </div>
                            <div class="flex items-center mt-8 text-gray-600 dark:text-gray-400">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-[#912CC9]">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <div class="ml-4 text-md tracking-wide font-semibold w-40">
                                    Rue des Guillemins No 139 Boite 719
                                    4000 Liège
                                    Belgique

                                </div>
                            </div>
                        </div>
                        <div class="flex  md:w-[500px] w-full md:gab-8 justify-between text-gray-200">
                            <div class=" w-full md:max-w-lg">
                                <ContactForm2 />
                            </div>
                        </div>
                    </div>

                </motion.div>

            </motion.div>
        </section>
    );
}
export default Contact;
