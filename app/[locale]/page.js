"use client";

import {
  About,
  Atappilab,
  Contact,
  GetStarted,
  Hero,
  NewsLetter,
  Appistadium,
} from "./sections";
import OurTeam from "./sections/OurTeam";
import Getintouch from "./about/Getintouch";
import "next-cloudinary/dist/cld-video-player.css";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="my-[250px]">
        <About />
      </div>

      <Atappilab />

      <GetStarted />

      <Appistadium />
      <NewsLetter />
      <OurTeam />
      <div className=" -mt-24 ">
        <Getintouch />
      </div>

      <Contact />
    </div>
  );
}
