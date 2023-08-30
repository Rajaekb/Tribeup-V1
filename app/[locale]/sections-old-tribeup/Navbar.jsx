
"use client"
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import BurgerMenu from '../components/BurgerMenu';
import logotripeup from '../../public/A.png';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next-intl/client';
import { useState } from 'react';

const Navbar = () => {
  const router = useRouter();
  const t = useTranslations('Index');
  const locale = useLocale();
  const pathname = usePathname();
  const [mobileNav, setMobileNav] = useState(false);

  return (
    <nav className="relative py-12 mt-5 ">
      <div className="absolute sm:w-[95%] w-[85%] inset-0">
        <div className="flex justify-between ">
          <Link href="/">
            <div className="flex items-center justify-between  md:gap-3 sticky top-0 ">
              <h1 className="text-gray-400 md:text-5xl text-2xl text-stroke-gray    md:pl-[47px]">
                <span className='text-[#FDA500]'>

                  A</span>
                PPILAB

              </h1>
            </div>
          </Link>

          <div className="text-[#FEBF03] cursor-pointer flex justify-between gap-5 md:gap-8 tracking-[.10em] right-0">
            <Link href="/about" className="hidden sm:block" duration={500}>
              <h2>{t('aboutus')}</h2>
            </Link>
            <Link href="/blog" locale={locale}>
              <h2>Blog</h2>
            </Link>
            <Link href="/contact" className="hidden sm:block" duration={500}>
              <h2>{t('contact')}</h2>
            </Link>

            <a type="button" className='hidden sm:block' onClick={() => router.push(`/en/${pathname}`)}>
              En
            </a>
            <a type="button" className='hidden sm:block' onClick={() => router.push(`/fr/${pathname}`)}>
              FR
            </a>

            {pathname === '/' ? <BurgerMenu className="absolute" /> : null}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;