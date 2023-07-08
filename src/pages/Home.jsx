import React from 'react';
import { Container, Button } from "@mui/material";
import { ParallaxBanner } from "react-scroll-parallax";
import meeting from '../logos/3.jpg'
import './layout.scss'
// import { useEffect, useState } from 'react';
// import {  Modal } from '@mui/material';




function Home() {
  // const [open, setOpen] = useState(false);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setOpen(true);
  //   }, 10000); // 10 seconds

  //   return () => clearTimeout(timer);
  // }, []);

  // const handleClose = () => {
  //   setOpen(false);
  // };

  return (
    <>
    {/* <Modal open={open} onClose={handleClose}
aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description">
      <div>
        <h2>Hello, World!</h2>
        <p>This is my modal content.</p>
      </div>
    </Modal> */}
         <ParallaxBanner
         title="reverser mortgage utah"
        id="reverse-mortgage-utah-home-Container-1"
        layers={[
          { image: meeting, speed: -20 },
          { image: meeting, speed: -10 },
        ]}
        className="aspect-[2/1]"
      >
        <div title="reverser mortgage utah" id="reverse-mortgage-utah-home-Container-banner-title">
          <h1 title="reverser mortgage utah" id="reverse-mortgage-utah-home-Container-h1">
          Finance Your Home <br></br>With Confidence
          </h1>
        </div>
      </ParallaxBanner>
        <Container>
        <h2 title="reverser mortgage utah" id="reverse-mortgage-utah-home-Container-h2">
        Home loans designed just for you<br></br>
        <Button title="reverser mortgage utah" id="reverse-mortgage-utah-home-button-1">Start your home buying journey today!</Button>
          </h2>
          
        </Container>
  
    </>
  );
}

export default Home;
