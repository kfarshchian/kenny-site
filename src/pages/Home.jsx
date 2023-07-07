import React from 'react';
import { Container } from "@mui/material";
import { ParallaxBanner } from "react-scroll-parallax";
import meeting from '../logos/3.jpg'
import './layout.scss'






function Home() {
  

  return (
    <>
         <ParallaxBanner
        id="reverse-mortgage-texas-contact-us-Container-1"
        layers={[
          { image: meeting, speed: -20 },
          { image: meeting, speed: -10 },
        ]}
        className="aspect-[2/1]"
      >
        <div id="reverse-mortgage-texas-contact-us-Container-banner-title">
          <h1 id="reverse-mortgage-texas-contact-us-Container-h1">
            Contact Us
          </h1>
        </div>
      </ParallaxBanner>

        <Container>
        </Container>
  
    </>
  );
}

export default Home;
