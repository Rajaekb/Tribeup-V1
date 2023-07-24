
"use client"
import React from 'react';
import { GraphQLClient } from 'graphql-request';
import { motion } from "framer-motion";
import { slideIn, slideUp, staggerContainer, textVariant } from '../../utils/motion';
import { TypingText } from '../../components';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

const getPost = async (params, locale) => {

    const hygraph = new GraphQLClient(
        'https://api-us-west-2.hygraph.com/v2/clhucjq6704b601ta5kwh4jio/master'
    );
    const { tribeupblog } = await hygraph.request(
        `query MyQuery($slug: String!,$locale : Locale!) {
        tribeupblog( where: { slug: $slug }, locales:[$locale]) {
           id
            postImage(locales : en) {
                id
                url
              }
              title
              description
              content{
                raw
              }
         
              slug 
              locale
        }
      }`,
        {
            slug: params.slug,
            locale
        }

    );

    return tribeupblog;

};

export default async function Page({ params }) {
    const getContentFragment = (index, text, obj, type) => {
        let modifiedText = text;

        if (obj) {
            if (obj.bold) {
                modifiedText = (<b key={index}>{text}</b>);
            }

            if (obj.italic) {
                modifiedText = (<em key={index}>{text}</em>);
            }

            if (obj.underline) {
                modifiedText = (<u key={index}>{text}</u>);
            }
        }

        switch (type) {
            case 'heading-three':
                return <h3 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
            case 'paragraph':
                return <p key={index} className="mb-8">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
            case 'heading-four':
                return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
            case 'image':
                return (
                    <img
                        key={index}
                        alt={obj.title}
                        height={obj.height}
                        width={obj.width}
                        src={obj.src}
                    />
                );
            default:
                return modifiedText;
        }
    };

    const locale = useLocale();

    const data = await getPost(params, locale);


    //const data = JSON.stringify(post, null, 1)

    return (

        <div>
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}>


                <div className=' text-gray-300 sm:text-xl text-md tracking-[.05em] sm:leading-normal leading-relaxed pt-5 z-10  mx-5 md:mx-64'>

                    <div className=''>
                        <h1 className='text-4xl flex justify-center '>{data.title}</h1>
                        <h1 className='text-3xl flex justify-center '>{data.description}</h1>
                        <div className='flex flex-col flex-wrap'>
                            <Image
                                src={data.postImage.url}
                                alt="blog"
                                width={700}
                                height={500}
                                className='object-fit grayscale rounded-xl mx-auto my-10'
                            />
                        </div>

                        <div>{data.content.raw.children.map((typeObj, index) => {
                            const children = typeObj.children.map((item, itemindex) => getContentFragment(itemindex, item.text, item));

                            return getContentFragment(index, children, typeObj, typeObj.type);
                        })}
                        </div>
                    </div>



                </div>
            </motion.div>
        </div>

    );
}
