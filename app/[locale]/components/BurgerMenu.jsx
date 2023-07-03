"use client"
import React from 'react'

import { Link } from 'react-scroll';
import { AnimatePresence, motion, useCycle } from "framer-motion";
import { useTranslations } from 'next-intl';

export default function BurgerMenu() {

  const t = useTranslations('Index');
  const links = [
    { name: t('home'), to: "Home", id: 1 },
    { name: t("aboutus"), to: "About", id: 2 },
    { name: t("portfolio"), to: "Portfolio", id: 2 },
    { name: t("news"), to: "Insights", id: 3 },
    { name: t("contact"), to: "Contact", id: 4 }
  ];

  const itemVariants = {
    closed: {
      opacity: 0
    },
    open: { opacity: 1 }
  };

  const sideVariants = {
    closed: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: -1
      }
    },
    open: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: 1
      }
    }
  };




  const [open, cycleOpen] = useCycle(false, true);

  return (
    <main>
      <AnimatePresence >
        {open && (
          <motion.aside
            initial={{ width: 0 }}
            animate={{
              width: 400,
            }}
            exit={{
              width: 0,
              transition: { delay: 0.7, duration: 0.3 }
            }}
            className="opacity-90 top-0 "
          >
            <motion.div
              className="flex flex-col text-[#FDA500] text-2xl gap-8 text-center cursor-pointer tracking-[.10em] sm:right-0 mt-20"
              initial="closed"
              animate="open"
              exit="closed"
              variants={sideVariants}
            >


              {links.map(({ name, to, id }) => (
                <Link to={to} key={id} smooth={true} offset={-100} duration={500}>
                  {name}</Link>



              ))}
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
      <div className="btn-container">
        <div onClick={cycleOpen}>{open

          ?

          <div className="block ">
            <div className="block absolute w-8 h-0.5 duration-500 ease-in-out bg-gray-300 -rotate-45 "></div>
            <div className="block absolute w-8 h-0.5 duration-500 ease-in-out bg-gray-300 opacity-0"></div>
            <div className="block absolute w-8 h-0.5 duration-500 ease-in-out bg-gray-300 rotate-45"></div>
          </div>
          :

          <div class="space-y-2">
            <div class="w-8 h-0.5 bg-gray-300"></div>
            <div class="w-8 h-0.5 bg-gray-300"></div>
            <div class="w-8 h-0.5 bg-gray-300"></div>
          </div>

        }</div>

      </div>
    </main>
  );
}
