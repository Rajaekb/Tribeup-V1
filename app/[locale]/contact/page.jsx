'use client';
import { useTranslations } from "next-intl";
import { Contact } from "../sections-old-tribeup";



const Page = () => {

    const t = useTranslations('Index');

    return (
        <section id="Contact" className="">
            <Contact />

        </section>)
};

export default Page;
