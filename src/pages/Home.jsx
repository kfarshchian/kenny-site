import React from "react";
import {
  Container,
  Button,
  Stack,
  Card,
  CardMedia,
  Typography,
  CardContent,
  CardActions,
} from "@mui/material";
import { ParallaxBanner } from "react-scroll-parallax";
import meeting from "../logos/3.jpg";
import "./layout.scss";
import ContactForm from "../components/ContactForm/ContactForm";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import SystemSecurityUpdateGoodOutlinedIcon from "@mui/icons-material/SystemSecurityUpdateGoodOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import HomeBuying from "../logos/reverse-mortgage-texas-painting-house-buying.jpg";
import HomeRefi from "../logos/reverse-mortgage-florida-painting-house-refinance.jpg";
import ReverseMortgage from "../logos/reverse-mortgage-utah-retirement.jpg";
import { useEffect, useState, useRef } from "react";
import MovingHome from "../logos/reverse-mortgage-utah-moving.jpg";
import Signing from "../logos/reverse-mortgage-florida-signing.jpg";
import House from "../logos/reverse-mortgage-florida-home.jpg";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import {  Modal } from '@mui/material';

function Home() {
  // Modal JS
  // const [open, setOpen] = useState(false);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setOpen(true);
  //   }, 5000); // 10 seconds

  //   return () => clearTimeout(timer);
  // }, []);

  // const handleClose = () => {
  //   setOpen(false);
  // };

  // Below is delay div sliding in
  const [isVisible, setIsVisible] = useState(false);
  const divRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(divRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

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
        <h2
          title="reverse mortgage utah"
          id="reverse-mortgage-utah-home-Container-h2"
        >
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
                  Home Purchasing
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Having a great loan officer during the home-buying process
                  ensures expert guidance and favorable loan terms for a
                  stress-free experience.
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  title="reverse mortgage utah"
                  href={
                    "https://apply.prmihome.com/#/journey?referrerId=kenf%40primeres.com"
                  }
                  id="reverse-mortgage-utah-home-button-1"
                  size="small"
                >
                  Learn More
                </Button>
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
                  Refinancing a home with a great loan officer can lead to
                  reduced monthly payments, and potential savings in the long
                  run.
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  title="reverse mortgage utah"
                  href={
                    "https://apply.prmihome.com/#/journey?referrerId=kenf%40primeres.com"
                  }
                  id="reverse-mortgage-utah-home-button-1"
                  size="small"
                >
                  Learn More
                </Button>
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
                  A great loan officer is essential for a reverse mortgage,
                  ensuring thorough guidance, protection, and optimal financial
                  outcomes.
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  title="reverse mortgage utah"
                  href={
                    "https://apply.prmihome.com/#/journey?referrerId=kenf%40primeres.com"
                  }
                  id="reverse-mortgage-utah-home-button-1"
                  size="small"
                >
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Stack>
          <Button
            title="reverse mortgage utah"
            href={
              "https://apply.prmihome.com/#/journey?referrerId=kenf%40primeres.com"
            }
            id="reverse-mortgage-utah-home-button-1"
          >
            Start your home buying journey today!
          </Button>
        </h3>
      </Container>
      {/* contact and motion banners */}
      <Stack
        direction={{ xs: "column", sm: "row" }}
        id="reverse-mortgage-utah-home-Container-stack"
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
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
          <div
            ref={divRef}
            className={isVisible ? "slide-in" : ""}
            id="reverse-mortgage-utah-home-Container-stack-column-box"
          >
            <AssignmentTurnedInOutlinedIcon
              sx={{
                fontSize: "75px",
                justifyContent: "center",
                alignItems: "center",
                color: "#ED8B00",
              }}
            />
            <p>Simple Process</p>
          </div>
          <div
            ref={divRef}
            className={isVisible ? "slide-in2" : ""}
            id="reverse-mortgage-utah-home-Container-stack-column-box"
          >
            <SystemSecurityUpdateGoodOutlinedIcon
              sx={{
                fontSize: "75px",
                justifyContent: "center",
                alignItems: "center",
                color: "#ED8B00",
              }}
            />
            <p>Constant Communication</p>
          </div>
          <div
            ref={divRef}
            className={isVisible ? "slide-in3" : ""}
            id="reverse-mortgage-utah-home-Container-stack-column-box"
          >
            <EmojiEventsOutlinedIcon
              sx={{
                fontSize: "75px",
                justifyContent: "center",
                alignItems: "center",
                color: "#ED8B00",
              }}
            />
            <p>Award winning lending team</p>
          </div>
        </Stack>
      </Stack>
      {/* image left info right */}
      <div className="reverse-mortgage-utah-home-Container-stack-img1">
        <div className="image-container">
          <img src={MovingHome} alt="reverse mortgage Utah Moving Boxes" />
        </div>
        <div className="text-container">
          <p>Your text goes here...</p>
        </div>
      </div>
      {/* parallax mid page */}
      <ParallaxBanner
        title="reverse mortgage utah"
        id="reverse-mortgage-utah-home-parallax-mid"
        layers={[
          { image: House, speed: -20 },
          { image: House, speed: -10 },
        ]}
        className="aspect-[2/1]"
      >
        <div
          title="reverse mortgage utah"
          id="reverse-mortgage-utah-home-parallax-title"
        >
          <h1
            title="reverse mortgage utah"
            id="reverse-mortgage-utah-home-parallax-h1"
          >
            Finance Your Home With Confidence
          </h1>
          <p id="reverse-mortgage-utah-home-parallax-p"> small</p>
        </div>
      </ParallaxBanner>
      {/* image right info left */}
      <div className="reverse-mortgage-utah-home-Container-stack-img2">
        <div className="text-container">
          <p>Your text goes here...</p>
        </div>
        <div className="image-container">
          <img src={Signing} alt="reverse mortgage Utah Moving Boxes" />
        </div>
      </div>
      {/* paragraph with map */}
      <Container
        id="reverse-mortgage-florida-home-map"
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div id="reverse-mortgage-florida-home-map-container">
          <p> hi</p>
          <img
            id="reverse-mortgage-florida-home-map"
            src={Signing}
            alt="reverse mortgage Utah Moving Boxes"
          />
        </div>
      </Container>
      {/* line timeline */}
      <Container>
        <div id="reverse-mortgage-florida-home-timeline">
          <h2>4 Step Process for Getting a Loan</h2>
        </div>

        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#4F758B", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #4F758B" }}
            iconStyle={{ background: "#ED8B00", color: "#fff" }}
            icon={<PhoneInTalkIcon />}
          >
            <h3 className="vertical-timeline-element-title">1. Apply</h3>
            <p>
              We discuss your current financial situation and your goals for
              buying a house so we can move the process along quickly.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#C7C9C7", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  #C7C9C7" }}
            iconStyle={{ background: "#ED8B00", color: "#fff" }}
            icon={<CheckBoxIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              2. Get Pre-Approved
            </h3>
            <p>
              Getting pre-approved is a BIG step into moving forward with your
              loan. A Pre-Approval letter tells the sellers that you are
              financially ready to buy the house!
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#4F758B", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #4F758B" }}
            iconStyle={{ background: "#ED8B00", color: "#fff" }}
            icon={<LocalOfferIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              3. Make an Offer
            </h3>
            <p>
              Once you've found a house that you love, put an offer down and
              work closely with your Loan Officer AND Real Estate agent to keep
              your offer at the top of the list.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#C7C9C7", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  #C7C9C7" }}
            iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
            icon={<EmojiEventsOutlinedIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              4. Loan Approval
            </h3>
            <p>
              23-25 days is the average time that it takes from beginning to
              closing on the loan! Enjoy a low stress, hassle free experience
              and spend more time celebrating this experience!
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </Container>
      {/* after timeline section */}
      <Container>
        {/* first section */}
        <div id="reverse-mortgage-texas-home-h2">
          <h2>Title</h2>
        </div>
        <div id="reverse-mortgage-texas-home-p">
          <p>paragraph</p>
        </div>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          id="reverse-mortgage-texas-home-stack"
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
          spacing={{ xs: 1, sm: 2, md: 2 }}
        >
          <div id="reverse-mortgage-texas-home-stack-container">
            <img
              id="reverse-mortgage-texas-home-stack-img"
              src={Signing}
              alt="reverse mortgage Utah Moving Boxes"
            />
          </div>
          <div>
            <p id="reverse-mortgage-texas-home-stack-p">paragraph</p>
          </div>
        </Stack>
        <div id="reverse-mortgage-texas-home-p">
          <p>paragraph</p>
        </div>
        {/* second section */}
        <div id="reverse-mortgage-texas-home-h2">
          <h2>Title</h2>
        </div>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          id="reverse-mortgage-texas-home-stack"
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
          spacing={{ xs: 1, sm: 2, md: 2 }}
        >
          <div>
            <p id="reverse-mortgage-texas-home-stack-p">paragraph</p>
          </div>
          <div id="reverse-mortgage-texas-home-stack-container">
            <img
              id="reverse-mortgage-texas-home-stack-img"
              src={Signing}
              alt="reverse mortgage Utah Moving Boxes"
            />
          </div>
        </Stack>
        <div id="reverse-mortgage-texas-home-p">
          <p>paragraph</p>
        </div>
        <div id="reverse-mortgage-texas-home-p">
          <p>paragraph</p>
        </div>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          id="reverse-mortgage-texas-home-stack"
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
          spacing={{ xs: 1, sm: 2, md: 2 }}
        >
          <div id="reverse-mortgage-texas-home-stack-container">
            <img
              id="reverse-mortgage-texas-home-stack-img"
              src={Signing}
              alt="reverse mortgage Utah Moving Boxes"
            />
          </div>
          <div>
            <p id="reverse-mortgage-texas-home-stack-p">paragraph</p>
          </div>
        </Stack>
        <div id="reverse-mortgage-texas-home-p">
          <p>paragraph</p>
        </div>
        <div id="reverse-mortgage-texas-home-p">
          <p>paragraph</p>
        </div>
        <div id="reverse-mortgage-texas-home-button-container">
          <Button id="reverse-mortgage-texas-home-button">801-520-8475</Button>
        </div>
      </Container>
      <Container>
        <div id="reverse-mortgage-texas-home-h2">
          <h2>Title</h2>
        </div>
        <div id="reverse-mortgage-texas-home-p">
          <p>paragraph</p>
        </div>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#4F758B", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #4F758B" }}
            iconStyle={{ background: "#ED8B00", color: "#fff" }}
            icon={<PhoneInTalkIcon />}
          >
            <h3 className="vertical-timeline-element-title">1. Apply</h3>
            <p>
              We discuss your current financial situation and your goals for
              buying a house so we can move the process along quickly.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#C7C9C7", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  #C7C9C7" }}
            iconStyle={{ background: "#ED8B00", color: "#fff" }}
            icon={<CheckBoxIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              2. Get Pre-Approved
            </h3>
            <p>
              Getting pre-approved is a BIG step into moving forward with your
              loan. A Pre-Approval letter tells the sellers that you are
              financially ready to buy the house!
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#4F758B", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #4F758B" }}
            iconStyle={{ background: "#ED8B00", color: "#fff" }}
            icon={<LocalOfferIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              3. Make an Offer
            </h3>
            <p>
              Once you've found a house that you love, put an offer down and
              work closely with your Loan Officer AND Real Estate agent to keep
              your offer at the top of the list.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#C7C9C7", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  #C7C9C7" }}
            iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
            icon={<EmojiEventsOutlinedIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              4. Loan Approval
            </h3>
            <p>
              23-25 days is the average time that it takes from beginning to
              closing on the loan! Enjoy a low stress, hassle free experience
              and spend more time celebrating this experience!
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          id="reverse-mortgage-texas-home-stack"
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
          spacing={{ xs: 1, sm: 2, md: 2 }}
        >
          <div id="reverse-mortgage-texas-home-stack-container">
            <img
              id="reverse-mortgage-texas-home-stack-img"
              src={Signing}
              alt="reverse mortgage Utah Moving Boxes"
            />
          </div>
          <div>
            <p id="reverse-mortgage-texas-home-stack-p">paragraph</p>
          </div>
        </Stack>
      </Container>
      {/* Faqs accordion*/}
      <div id="reverse-mortgage-texas-home-h2-accordion">
        <h2>FAQs</h2>
      </div>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        id="reverse-mortgage-texas-home-stack"
        sx={{
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
          margin: "20px",
        }}
        spacing={{ xs: 1, sm: 2, md: 2 }}
      >
        <div>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Accordion 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography>Accordion 3</Typography>
            </AccordionSummary>
          </Accordion>
        </div>
        <div>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Accordion 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography>Accordion 3</Typography>
            </AccordionSummary>
          </Accordion>
        </div>
      </Stack>
    </>
  );
}

export default Home;
