import React from 'react';
import archutah from "../logos/arch-utah-reverse-mortgage-utah.jpg";
import Loader from "react-loaders";
import { ParallaxBanner } from "react-scroll-parallax";

function AboutUs() {
  

  return (
    <>
     <ParallaxBanner
        title="reverse mortgage utah"
        id="reverse-mortgage-utah-home-Container-1"
        layers={[
          { image: archutah, speed: -20 },
          { image: archutah, speed: -10 },
        ]}
        className="aspect-[2/1]"
      >
        <div
          title="reverse mortgage utah"
          id="reverse-mortgage-utah-home-Container-banner-title"
        >
          <h1
            title="reverse mortgage utah"
            id="reverse-mortgage-utah-home-Container-h1"
          >
           Kenny Farshchian: <br></br> Utah Loan Officer and Utah Mortgage Broker
          </h1>
        </div>
      </ParallaxBanner>



      <Loader type="ball-rotate" />
    </>
  );
}

export default AboutUs;
