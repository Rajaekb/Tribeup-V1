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


export default async function Page() {

    const locale = useLocale();


    const posts = await getPosts({ locale });
    // Recommendation: handle errors

    console.log(posts);
    //   console.log(locale)
    return (
        <div>
            <pre>{JSON.stringify(posts, null, 3)}</pre>
        </div>
    );
}