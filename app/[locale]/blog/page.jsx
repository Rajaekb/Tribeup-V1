"use client"
import { GraphQLClient } from 'graphql-request';
import Link from 'next/link';
import { motion } from "framer-motion";
import { slideIn, slideUp, staggerContainer, textVariant } from '../utils/motion';
import { TypingText } from '../components';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';



const getPosts = async ({ locale }) => {
    const hygraph = new GraphQLClient(
        'https://api-us-west-2.hygraph.com/v2/clhucjq6704b601ta5kwh4jio/master'
    );

    const { tribeupblogs } = await hygraph.request(
        ` query MyQuery($locale: Locale!) {
            tribeupblogs(locales: [$locale]) {
              id
              postImage(locales : en) {
                id
                url
              }
              title
              description
              postdate
              slug 
              
              content{
                raw
                
              }
            }
          }
          `
        ,
        { locale }
    );

    return tribeupblogs;

};


export default async function Page() {


    const locale = useLocale();
    const posts = await getPosts({ locale });

    return (
        <div className='flex justify-center my-10'>
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}


            >


                <motion.div
                    variants={slideIn('left', 'tween', 0.8, 1)}
                    className="flex mt-10 justify-center">
                    <div className='sm:mt-5 sm:w-60 w-20 '>
                        <div className='border border-[#d0ff05]  rounded-lg' />
                    </div>
                    <div className='mr-7'>

                        <TypingText title="Blog" />
                    </div>
                    <div className='sm:mt-5 sm:w-60 w-20 '>
                        <div className='border border-[#d0ff05] rounded-lg' />
                    </div>

                </motion.div>

                <h2 className="text-strock-gray text-5xl md:text-7xl uppercase mx-auto sm:leading-normal leading-relaxed py-16">

                    Discover Our Latests Articles</h2>
                <div className='grid md:grid-cols-3 grid-cols-1 gap-6  sm:mx-12 mx-5 '>
                    {posts.map((item) => (

                        <>


                            <div class="max-w-sm bg-stone-900 border border-[#d0ff05] shadow ">
                                <a key={item._id} href={`/blog/${item.slug}`}>

                                    <Image
                                        src={item.postImage.url}
                                        alt="blog"
                                        width={400}
                                        height={500}
                                        className=' w-full h-52 object-cover grayscale  '
                                    />

                                    <div class="p-5">


                                        <h2 class="mb-2 text-gray-300 sm:text-xl text-md tracking-[.05em] sm:leading-normal leading-relaxed">{item.title.slice(0, 50)}</h2>
                                        <h3 className='mb-3 font-normal text-gray-400'>{item.description}</h3>

                                        <div className='border-[3px] border-[#912CC9]  inline-flex items-center mt-5 opacity-80 hover:opacity-100 cursor-pointer'>
                                            <div className='border border-[#912CC9] m-1  inline-flex items-center opacity-80 hover:opacity-100 cursor-pointer'>
                                                <button className="text-white p-3 font-light tracking-[.25em] hover:bg-gray-500 text-sm px-3 
                                             duration-300 ease-in-out text-center inline-flex items-center" href="#">
                                                    Read more
                                                </button>
                                            </div>
                                        </div>

                                    </div>
                                </a>
                            </div>
                        </>

                    ))},
                </div>
            </motion.div>
        </div>

    );
}