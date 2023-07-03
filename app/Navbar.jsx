
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from 'next/link';
import BurgerMenu from "./[locale]/components/BurgerMenu";


const Navbar = () => {


  const t = useTranslations('Index');


  return (
    <nav

      className="relative py-8 ">

      <div className="absolute sm:w-[95%] w-[85%] inset-0  ">
        <div className="flex justify-between ml-8 ">
          <div className="flex flex-row items-center gap-3 sticky top-0 ">

            <Image
              src="/logolaed.png"
              alt="logo"
              width={80}
              height={70}
              className=" object-contain  " />

            <h1 className="text-gray-400  md:text-5xl text-2xl text-strock-gray ">
              TRIBEUP
            </h1>


          </div>
          <div className=" text-[#FEBF03] cursor-pointer flex justify-between md:gap-8 tracking-[.10em] right-0">

            <Link href="/Insights" className="hidden sm:block" > <h2>{t('home')}</h2></Link>

            <Link href="About" className="hidden sm:block" duration={500}><h2>{t('aboutus')}</h2></Link>
            <Link href="Contact" className="hidden sm:block" duration={500}> <h2>{t('contact')}</h2></Link>

            { /*<button type="button" onClick={() => router.push("/en")} >En </button>
        <button type="button" onClick={() => router.push("/fr")}>FR </button>*/}



            <BurgerMenu />

          </div>
        </div>

      </div>

    </nav>
  )
};

export default Navbar;