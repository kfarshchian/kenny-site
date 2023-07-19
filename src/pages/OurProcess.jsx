import React, { useEffect } from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import { Container, Stack, Divider } from "@mui/material";
import ContactForm from "../components/ContactForm/ContactForm";
import imgProcess from "../logos/our-process-reverse-mortgage-utah.jpg";
import movingBox from "../logos/our-process-moving-reverse-mortgage-utah.jpg";
import Loader from "react-loaders";
import projectSection from "../logos/austin-coins-reverse-mortgage-texas.jpg";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";

function OurProcess() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ParallaxBanner
        title="reverse mortgage utah"
        id="mortgage-broker-utah-closing-guarantee-Container-1"
        layers={[
          { image: imgProcess, speed: -20 },
          { image: imgProcess, speed: -10 },
        ]}
        className="aspect-[2/1]"
      >
        <div
          title="reverse mortgage utah"
          id="mortgage-broker-utah-closing-guarantee-Container-banner-title"
        >
          <h1
            title="reverse mortgage utah"
            id="mortgage-broker-utah-closing-guarantee-Container-h1"
          >
            Our Process<br></br>The PRMI Home Process
          </h1>
        </div>
      </ParallaxBanner>
      <Container maxWidth="md">
        {/* first section */}
        <p id="reverse-mortgage-texas-contact-us-Container-p">
          Our tried and true approach to helping homeowners, just like you,
          navigate the mortgage world.
        </p>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          id="reverse-mortgage-texas-contact-us-stack"
          sx={{
            justifyContent: "center",
            marginTop: "15px",
            marginBottom: "15px",
            paddingLeft: "5px",
            paddingRight: "5px",
          }}
          divider={<Divider orientation="vertical" flexItem />}
          spacing={{ xs: 1, sm: 2, md: 2 }}
        >
          <div>
            <h2 id="reverse-mortgage-texas-contact-us-contact-section">
              Request A Free Consultation Today
            </h2>
            <ContactForm></ContactForm>
          </div>
          <div>
            <Stack
              direction={{ xs: "column", sm: "column" }}
              id="salt-lake-city-stack"
              sx={{
                marginTop: "50px",
                marginBottom: "50px",
                paddingLeft: "5px",
                paddingRight: "5px",
              }}
              spacing={{ xs: 1, sm: 1, md: 6 }}
            >
              <h2 id="salt-lake-city-p">Who you choose MATTERS.</h2>
              <p id="salt-lake-city-p">
                We understand you have been on your own journey and have a
                unique story. You need a lender that is trust worthy and wants
                to see you succeed, not just collect a commission. In 2021
                alone, we have helped over 1,000 homeowners confidently navigate
                their financial and real estate journeys.
              </p>
              <p id="salt-lake-city-p">
                Refinancing your home should be exciting, not complicated.
              </p>
              <p id="salt-lake-city-p">
                To get started, fill out this short (non committal) loan
                questionnaire so that our Mortgage Advisors can help guide you
                in the right direction.
              </p>
              <p id="salt-lake-city-p">
                It's time to make your house work for you!
              </p>
            </Stack>
          </div>
        </Stack>
      </Container>

      {/* second section */}
      <div className="reverse-mortgage-utah-home-Container-stack-img1">
        <div className="image-container">
          <img src={movingBox} alt="reverse mortgage Utah Moving Boxes" />
        </div>
        <div id="reverse-mortgage-utah-home-text-1" className="text-container">
          <h2
            title="reverse mortgage utah"
            id="reverse-mortgage-utah-home-parallax-h1"
          >
            Our Mission
          </h2>
          <p>
            .. is to leave such a positive impression on our homeowners, they'd
            interrupt a stranger to recommend us.
          </p>
          <br></br>
          <h2
            title="reverse mortgage utah"
            id="reverse-mortgage-utah-home-parallax-h1"
          >
            We Believe
          </h2>
          <br></br>
          <p>
            in taking a personalized approach to helping individuals, couples,
            and families get the right mortgage in the most simple, clear, and
            informative way.
          </p>
          <br></br>
        </div>
      </div>
      <Container maxWidth="md">
        {/* third section */}

        <div id="reverse-mortgage-texas-home-h2">
          <h2>
            Effortless Flow: Streamlining Our Process for an Easy and Smooth
            Process
          </h2>
        </div>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#4F758B", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #4F758B" }}
            iconStyle={{ background: "#ED8B00", color: "#fff" }}
            icon={<PhoneInTalkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              1. Research and Compare Lenders
            </h3>
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
        <div id="reverse-mortgage-texas-home-h2">
          <h2>
          Seamless Homeownership: An Easy and Smooth Mortgage Journey
          </h2>
        </div>
        <div id="reverse-mortgage-texas-home-p">
          <p>
            Welcome to our hassle-free mortgage process, designed to make buying
            your dream home a smooth and stress-free experience. We understand
            that securing a mortgage can feel overwhelming, so we've simplified
            the process to ensure it's easy and straightforward for all our
            valued clients. Whether you're a first-time homebuyer or looking to
            refinance, we're here to guide you every step of the way.
          </p>
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
              src={projectSection}
              alt="reverse mortgage Utah Moving Boxes"
            />
          </div>
          <div>
            <p id="reverse-mortgage-texas-home-stack-p">
              Getting started is a breeze! Enter your contact information to
              begin the mortgage process from the comfort of your own home. Just
              provide the essential information, and our system will take care
              of the rest. Say goodbye to stacks of paperwork and hello to a
              streamlined digital experience.
            </p>
          </div>
        </Stack>
        <div id="reverse-mortgage-texas-home-p">
          <p>
            Once your questionnaire is submitted, our team of experienced
            mortgage specialists will swing into action. They'll review your
            application promptly and reach out to you with any additional
            details needed. Our commitment to transparent communication means
            you'll be kept informed throughout the entire process, ensuring
            peace of mind during this significant financial decision.
          </p>
        </div>
        <div id="reverse-mortgage-texas-home-p">
          <p>
            We understand the importance of a quick decision when it comes to
            your mortgage application. Our advanced technology enables us to
            assess your eligibility efficiently, so you won't be kept waiting.
            You'll receive a decision in a timely manner, allowing you to plan
            confidently for your future home.
          </p>
        </div>
        <div id="reverse-mortgage-texas-home-p">
          <p>
            Congratulations! Once your mortgage is approved, we'll guide you
            through the final steps, including the closing process. We'll ensure
            that all necessary paperwork is completed accurately and
            efficiently. With our easy and smooth mortgage process, you'll soon
            be unlocking the door to your new home, knowing that you've made a
            sound financial decision with a trusted partner by your side.
          </p>
        </div>
      </Container>
      <div id="Reverse-Mortgage-Florida-Container-contact">
        <ContactForm id="Reverse-Mortgage-Florida-Container-contact-2"></ContactForm>
      </div>
      <Loader type="ball-rotate" />
    </>
  );
}

export default OurProcess;
