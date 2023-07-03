"use client"
import { GraphQLClient } from 'graphql-request';
import Link from 'next/link';
import { motion } from "framer-motion";
import { slideIn, slideUp, staggerContainer, textVariant } from '../utils/motion';
import { TypingText } from '../components';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';

const getPosts = async ({ locale }) => {
    const hygraph = new GraphQLClient(
        'https://api-us-west-2.hygraph.com/v2/clhucjq6704b601ta5kwh4jio/master'
    );

    const tribeupblogs = await hygraph.request(
        ` query MyQuery($locale: Locale!) {
            tribeupblogs(locales: [$locale]) {
              id
              postImage {
                id
                url
              }
              title
              slug
              locale
            }
          }
          `
        ,
        { locale }
    );

    return tribeupblogs;

};

export function generateMetadata() {
    return { title: 'Posts' };
}

export default async function Page() {

    const locale = useLocale();


    const data = await getPosts({ locale });
    console.log(posts);
    const posts = JSON.stringify(data)
    //   console.log(locale)
    return (
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}

        >

            <div className='flex items-center py-16 px-8 '>
                <motion.div
                    variants={slideIn('left', 'tween', 0.8, 1)}
                    className="flex">
                    <div className='mt-5 sm:w-60 w-20 '>
                        <div className='border border-[#FDA500] m-1 rounded-lg' />
                    </div>
                </motion.div>
                <motion.h1 variants={slideIn('left', 'tween', 0.2, 1)}>
                    <TypingText title="Blog" />
                </motion.h1>
            </div>

            <div className='grid grid-cols-3 gap-6'>
                {posts.map((item) => (
                    <Link key={item._id} href={`/blog/${item.slug}`} className=''
                    >
                        <div className='flex flex-col flex-wrap'>
                            <Image
                                src={item.postImage.url}
                                alt="blog"
                                width={400}
                                height={500}
                                className='object-fit'
                            />
                        </div>
                        <div>
                            <h1>{item.title}</h1>
                            <p>
                                {item.slug} </p>
                            <p>
                                {item.locale} </p>
                        </div>
                    </Link>

                ))},
            </div>
        </motion.div>
    );
}