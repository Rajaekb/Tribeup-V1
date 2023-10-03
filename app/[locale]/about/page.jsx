'use client';


import { useTranslations } from "next-intl";
import About from "./About"
import Ourservices from "./Ourservices"
import Getintouch from "./Getintouch"



const Page = () => {

    const t = useTranslations('Index');

    return (
        <>
            <About />
            <Ourservices />
            <Getintouch />
        </>
    )
};

export default Page;
