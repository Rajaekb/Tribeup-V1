
"use client"
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import BurgerMenu from '../components/BurgerMenu';
import logotripeup from '../../public/logolaed.png';
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
            <div className="flex items-center justify-between gap-3 sticky top-0 ">
              <Image src={logotripeup} alt="logo" fill className=" object-contain -ml-12 md:-ml-20 " />
              <h1 className="text-gray-400 md:text-5xl text-2xl text-stroke-gray ml-12 pl-5 md:pl-20">TRIBEUP</h1>
            </div>
          </Link>

          <div className="text-[#FEBF03] cursor-pointer flex justify-between gap-5 md:gap-8 tracking-[.10em] right-0">
            <Link href="/about" className="hidden sm:block" duration={500}>
              <h2>{t('aboutus')}</h2>
            </Link>
            <Link href="/blog" className="hidden sm:block" locale={locale}>
              <h2>{t('news')}</h2>
            </Link>
            <Link href="/contact" className="hidden sm:block" duration={500}>
              <h2>{t('contact')}</h2>
            </Link>

            <a type="button" onClick={() => router.push(`/en/${pathname}`)}>
              En
            </a>
            <a type="button" onClick={() => router.push(`/fr/${pathname}`)}>
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
