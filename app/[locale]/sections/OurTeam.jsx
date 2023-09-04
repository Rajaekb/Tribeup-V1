"use client"
import Image from 'next/image';
import { motion } from "framer-motion";
import { slideIn, staggerContainer, textVariant } from '../utils/motion';
import { TypingText } from "../components";
import { useTranslations } from 'next-intl';

import etienne from '../../public/team/EtienneLambot.png';
import abdellah from '../../public/team/AbdellahJaize.png';
import salah from '../../public/team/Salah_Eddine.jpg';
import rajae from '../../public/team/kobirajae.jpg';
import rafael from '../../public/team/default.png';

const teamMembers = [
  {
    name: 'Etienne Lambot',
    role: 'CEO / Founder',
    imageSrc: etienne,
  },
  {
    name: 'Abdellah Jaize',
    role: 'Tech Lead Mobile Developer',
    imageSrc: abdellah,
  },
  {
    name: 'Salah Eddine',
    role: 'Mobile Developer',
    imageSrc: salah,
  },
  {
    name: 'Kobi Rajae',
    role: 'Front end Developer',
    imageSrc: rajae,
  },
  {
    name: 'Rafael',
    role: 'Full Stack Developer',
    imageSrc: rafael,
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
              <div className='border border-[#d0ff05] m-1 rounded-lg' />
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
                  className='lg:-mt-12 md:max-h-10 lg:max-h-20  bg-[#912CC9] font-bold tracking-[.10em] flex justify-center items-center text-[12px] lg:text-md text-white rounded-xl lg:rounded-3xl  p-2 md:p-4 '>

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

