
"use client"
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import BurgerMenu from '../components/BurgerMenu';
import logo from '../../public/logoappilabvert.png';
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
    <nav className="h-24 py-12 flex items-center pt-10 ">
      <div className="absolute sm:w-[95%] w-[85%] inset-0">
        <div className="flex justify-between mx-8 ">
          <Link href="/">
            <div className="flex flex-row items-center mt-5">
              <Image
                src={logo}
                alt="logo"
                width={60}
                height={50}
                className=" object-contain" />
              <h1 className="text-gray-400 font-bold text-3xl sm:text-5xl uppercase text-strock-gray p-2">
                Appilab
              </h1>

            </div>

          </Link>

          <div className="text-white py-12 cursor-pointer flex justify-between gap-5 text-[#d0ff05] tracking-[.10em] -mr-9 ">
            <Link href="/about" className="  hidden sm:block" duration={500}>
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
              Fr
            </a>

            {pathname === '/' ? <BurgerMenu className="absolute py-12" /> : null}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
