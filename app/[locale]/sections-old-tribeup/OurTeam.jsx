"use client"
import Image from 'next/image';
import { motion } from "framer-motion";
import { slideIn, staggerContainer, textVariant } from '../utils/motion';
import { TypingText } from "../components";
import { useTranslations } from 'next-intl';

import Alain from '../../public/team/alaineliasy.jpg';
import clara from '../../public/team/ClaraOberhoessel.jpg';
import im from '../../public/team/img.jpg';
import py from '../../public/team/py.jpg';
import TD from '../../public/team/ThomasDidillon.jpg';

const teamMembers = [
  {
    name: 'Alain Elyasi',
    role: 'CEO / Founder',
    imageSrc: Alain,
  },
  {
    name: 'Thomas Didillon',
    role: 'Lorem / ipsum',
    imageSrc: TD,
  },
  {
    name: 'Clara Oberhoessel',
    role: 'Lorem ipsum',
    imageSrc: clara,
  },
  {
    name: 'Lorem Ipsum',
    role: 'Lorem / ipsum',
    imageSrc: py,
  },
  {
    name: 'Lorem Ipsum',
    role: 'Lorem / ipsum',
    imageSrc: im,
  },
];

function OurTeam() {
  const t = useTranslations('Index');

  return (
    <section id="ourteam">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className=' '>
        <div className=' flex my-12 items-center'>
          <motion.div
            variants={slideIn('left', 'tween', 0.8, 1)}
            className="flex">
            <div className='mt-5 sm:w-60 w-20 '>
              <div className='border border-[#FDA500] m-1 rounded-lg' />
            </div>

          </motion.div>
          <TypingText title={t('ourteam')} textStyles="text-center" />
        </div>
        <div className='flex justify-center bg-stone-900'>
          <div className='grid sm:grid-cols-3 md:grid-cols-5 gap-3 min-h-[70vh] space-y-10 sm:space-y-0  justify-between text-white p-10 sm:p-32 md:p-24'>
            {teamMembers.map((member, index) => (
              <div key={index} className='sm:flex-1 w-36 md:w-full flex flex-col justify-center items-center'>
                <motion.div variants={textVariant(index * 0.2)}>
                  <Image
                    src={member.imageSrc}
                    alt="rugbyimage"
                    className='rounded-3xl'
                    width={240}
                    height={300}
                  />
                </motion.div>
                <motion.div variants={textVariant(index * 0.2 + 0.2)}
                  className='lg:-mt-12 md:max-h-10 lg:max-h-20 bg-gradient-to-br from-[#F86811] from-5% via-[#FDA500] to-[#FEC001] flex justify-center items-center text-[10px] lg:text-md text-black rounded-xl lg:rounded-3xl  p-2 md:p-4 '>

                  {member.name} <br /> {member.role}

                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default OurTeam;
