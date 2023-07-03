import { useTranslations } from "next-intl";
import Link from "next-intl/link";
import AlertMessage from "./AlertMessage";
import {
  About,
  AtLaeds,
  Contact,
  GetStarted,
  Hero,
  Insights,
  NewsLetter,
  Portfolio,
  TribeupApp,
} from "./sections";
import OurTeam from "./sections/OurTeam";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <AtLaeds />
      <GetStarted />

      <NewsLetter />
      <TribeupApp />
      <OurTeam />
      <Contact />
    </div>
  );
}
