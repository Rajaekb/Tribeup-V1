'use client';
import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer, textVariant } from '../utils/motion';
import { TypingText } from "../components";
import Image from "next/image";
import { useTranslations } from "next-intl";
import sp1 from '../../public/bureau2.jpg'
import { AiOutlineCheckCircle, AiOutlineAntDesign, AiOutlineBranches, AiOutlineRocket, AiOutlineFundView, AiOutlineSafetyCertificate } from "react-icons/ai";
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
