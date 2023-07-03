'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeIn } from '../utils/motion';

export const exploreWorlds = [
  {
    id: "world-1",
    imgUrl: '/sport1nb.png',
    title: "Basketball",
  },
  {
    id: "world-2",
    imgUrl: '/sport2nb.png',
    title: "The Cycling",
  },
  {
    id: "world-3",
    imgUrl: "/sport3.jpg",
    title: "Bridge to Success",
  },
  {
    id: "world-4",
    imgUrl: "/sport4nb.png",
    title: "Paradise Island",
  },
  {
    id: "world-5",
    imgUrl: '/sport5nb.png',
    title: "Hawkins Labs",
  },
];

const PortfolioCard = ({ id, imgUrl, title, index, active, handleClick }) => (

  <motion.div
    variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
    className={`relative ${active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
      } flex items-center justify-center min-w-[50px] h-[700px] transition-[flex] 
      duration-[0.7s] ease-out-flex cursor-pointer
      `}
    onHoverStart={() => handleClick(id)}
  >
    <Image
      src={imgUrl}
      alt={title}
      className="absolute w-full h-full object-cover "
      width={700}
      height={1500}
    />

    {active !== id ? (
      <h3 className="font-semibold sm:text-[26px] text-[18px] text-gray-400  absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
        {title}
      </h3>
    ) : (
      <div className="absolute bottom-0 p-8 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] ">

        <h2 className="mt-[24px] font-semibold sm:text-[32px] text-[24px] text-gray-400">
          {title}
        </h2>

      </div>
    )}
  </motion.div>
);

export default PortfolioCard;
