"use client";

import {
  About,
  Atappilab,
  Contact,
  GetStarted,
  Hero,
  NewsLetter,
  TribeupApp,
} from "./sections";
import OurTeam from "./sections/OurTeam";
import Getintouch from "./about/Getintouch";
import "next-cloudinary/dist/cld-video-player.css";
import { Parallax } from "react-parallax";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Atappilab />
      <GetStarted />

      <NewsLetter />
      <TribeupApp />
      <OurTeam />
      <div className=" -mt-24 ">
        <Getintouch />
      </div>

      <Contact />
    </div>
  );
}
