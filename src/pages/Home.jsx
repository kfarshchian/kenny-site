import React from "react";
import { Container, Button, Stack, Divider, Card, CardMedia, Typography, CardContent, CardActions  } from "@mui/material";
import { ParallaxBanner } from "react-scroll-parallax";
import meeting from "../logos/3.jpg";
import "./layout.scss";
import ContactForm from "../components/ContactForm/ContactForm";
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import SystemSecurityUpdateGoodOutlinedIcon from '@mui/icons-material/SystemSecurityUpdateGoodOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import HomeBuying from '../logos/reverse-mortgage-texas-painting-house-buying.jpg'
import HomeRefi from '../logos/reverse-mortgage-florida-painting-house-refinance.jpg'
import ReverseMortgage from '../logos/reverse-mortgage-utah-retirement.jpg'
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
        title="reverse mortgage utah"
        id="reverse-mortgage-utah-home-Container-1"
        layers={[
          { image: meeting, speed: -20 },
          { image: meeting, speed: -10 },
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
            Finance Your Home <br></br>With Confidence
          </h1>
        </div>
      </ParallaxBanner>
      <Container>
        <h2 title="reverse mortgage utah"
          id="reverse-mortgage-utah-home-Container-h2">
            Everyone has unique goals...
            </h2>
        <h3
          title="reverse mortgage utah"
          id="reverse-mortgage-utah-home-Container-h3"
        >
          Home loans designed just for you<br></br>
          <Stack
        direction={{ xs: "column", sm: "row" }}
        id="reverse-mortgage-utah-home-Container-stack-card"
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
        spacing={{ xs: 1, sm: 2, md: 2 }}
      >
        {/* card 1 */}
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={HomeBuying}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Home Buying
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Having a great loan officer during the home-buying process ensures expert guidance and favorable loan terms for a stress-free experience.
        </Typography>
      </CardContent>
      <CardActions>
        <Button title="reverse mortgage utah"
           href={'https://apply.prmihome.com/#/journey?referrerId=kenf%40primeres.com'} id="reverse-mortgage-utah-home-button-1" size="small">Learn More</Button>
      </CardActions>
    </Card>
    {/* card 2 */}
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={HomeRefi}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Refinancing
        </Typography>
        <Typography variant="body2" color="text.secondary">
Refinancing a home with a great loan officer can lead to reduced monthly payments, and potential savings in the long run.
        </Typography>
      </CardContent>
      <CardActions>
        <Button title="reverse mortgage utah"
          href={'https://apply.prmihome.com/#/journey?referrerId=kenf%40primeres.com'}  id="reverse-mortgage-utah-home-button-1" size="small">Learn More</Button>
      </CardActions>
    </Card>
    {/* card 3 */}
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={ReverseMortgage}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Reverse Mortgage
        </Typography>
        <Typography variant="body2" color="text.secondary">
        A great loan officer is essential for a reverse mortgage, ensuring thorough guidance, protection, and optimal financial outcomes.
        </Typography>
      </CardContent>
      <CardActions>
        <Button title="reverse mortgage utah"
           href={'https://apply.prmihome.com/#/journey?referrerId=kenf%40primeres.com'} id="reverse-mortgage-utah-home-button-1" size="small">Learn More</Button>
      </CardActions>
    </Card>

        </Stack>


          <Button
            title="reverse mortgage utah"
            href={'https://apply.prmihome.com/#/journey?referrerId=kenf%40primeres.com'}
            id="reverse-mortgage-utah-home-button-1"
          >
            Start your home buying journey today!
          </Button>
        </h3>
      </Container>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        id="reverse-mortgage-utah-home-Container-stack"
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
        divider={<Divider orientation="vertical" flexItem />}
        spacing={{ xs: 1, sm: 2, md: 2 }}
      >
        <ContactForm id="reverse-mortgage-utah-home-Container-Contactform" />
        <Stack
          direction={{ xs: "column", sm: "column" }}
          id="reverse-mortgage-utah-home-Container-stack-column"
          sx={{
            marginTop: "50px",
            marginBottom: "50px",
            paddingLeft: "5px",
            paddingRight: "5px",
          }}
          spacing={{ xs: 1, sm: 1, md: 6 }}
        >
          <div id="reverse-mortgage-utah-home-Container-stack-column-box">
            <AssignmentTurnedInOutlinedIcon 
            sx={{fontSize: '75px', justifyContent: 'center', alignItems:'center', color: '#ED8B00'}} 
            />
            <p>Simple Process</p>
            </div>
          <div id="reverse-mortgage-utah-home-Container-stack-column-box">
          <SystemSecurityUpdateGoodOutlinedIcon 
            sx={{fontSize: '75px', justifyContent: 'center', alignItems:'center', color: '#ED8B00'}} 
            />
            <p>Constant Communication</p>
          </div>
          <div id="reverse-mortgage-utah-home-Container-stack-column-box">
          <EmojiEventsOutlinedIcon 
            sx={{fontSize: '75px', justifyContent: 'center', alignItems:'center', color: '#ED8B00'}} 
            />
            <p>Award winning lending team</p>
          </div>
        </Stack>
      </Stack>
      <Container></Container>
    </>
  );
}

export default Home;
