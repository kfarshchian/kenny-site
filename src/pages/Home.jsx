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
import LicenseMap from '../logos/kenny-map-reverse-mortgage-utah.png'
import planImage from '../logos/reverse-mortgage-texas-home-calc.jpg'
import UtahHouse from '../logos/reverse-mortgage-texas-home-house.jpg'
import ContractSign from '../logos/reverse-mortgage-texas-home-paper.jpg'
import ContractRead from '../logos/reverse-mortgage-texas-home-reading.jpg'
import Loader from 'react-loaders'
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
        <div id="reverse-mortgage-utah-home-text-1" className="text-container">
          <p>
            If you're looking for top-rated mortgage lenders in Utah, look no
            further than Steve Wilcox with Primary Residential Mortgage, Inc.
            Steve and his team are proud to be recognized as a top 1% loan
            originator in America, and also recognized by Yahoo Finance for
            providing top quality customer service. Being in the business for
            17+ years he is proud of the fine-tuned process he has built that
            allows his customer experience to be one of a kind! Whether you are
            looking for financing on the purchase of a new home, looking to buy
            a second home, an investment property, or even refinance your
            current loan we have got you covered! We are located in Utah,
            however we are licensed nationwide so make sure you check out or
            licensing map to see if we are licensed in state that you are
            needing assistance. Our expertise does not end with home mortgage
            loans; we strive each day to keep up to date on the current real
            estate market so that we can help educate you to find out if now is
            a good time & the best loan program right for your needs
          </p>
          <br></br>
          <p>
            At Primary Residential Mortgage Inc., we are proud to be a top-rated
            mortgage lender and can help you take advantage of the many
            different financing options. This could be anything from down
            payment assistance, grants, flexible credit requirements, and the
            ability to help you qualify with higher debt-to-income ratios than
            the industry standard. Our team is focused on getting you the best
            rate possible home loan Utah residents can get, while providing
            personalized service throughout the loan process.{" "}
          </p>
          <br></br>
          <p>
            Over the years, Steve has learned that there isn’t one loan fits
            all. With his expertise he will compare different loan programs,
            rates, and terms to find the right loan for your needs. We
            understand that the loan mechanism can be daunting, but we're here
            to help you every step of the way. Contact our mortgage team today
            to learn more about how we can help you finance your home!
          </p>
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
            The Best Utah Mortgage Lenders You Can Find
          </h1>
          <Container >
            <p id="reverse-mortgage-utah-home-parallax-p">
              If you're looking for the top mortgage lenders in Utah or across
              America, you have found the one that can help you with home
              financing. Steve Wilcox at Primary Residential Mortgage, Inc. is
              everyone’s #1 choice. We're a top-rated lender that can provide
              you with some of the best advice and direction on top of helping
              you through every step of the home loan process, we will guide you
              from the start to the closing table. Whether you're a first-time
              homebuyer, looking for that next move up, or you're looking to
              refinance your existing home, we can help you get the best
              mortgage loan for your needs. We have years of experience helping
              Utahans and many across the nation get the loans they need. We're
              experts in mortgage loans and stay on top of the housing market.
              This allows us to share our expertise with our customer; discuss
              if now is the best time for you, & most importantly tailor the
              lending process to each customer's specific needs or goals.
            </p>
            <br></br>
            <p id="reverse-mortgage-utah-home-parallax-p">
              Our mission is to leave such a positive impression on our
              homeowners, they'd interrupt a stranger to recommend us. When
              you're ready to buy your first home, or have a life event that
              requires you to explore taking the next step you'll want to find
              the best Utah mortgage lenders that can help you talk through the
              pros and cons, what we are seeing in the current market, and help
              determine if now is the best time for you.
            </p>
          </Container>
        </div>
      </ParallaxBanner>
      {/* image right info left */}
      <div className="reverse-mortgage-utah-home-Container-stack-img2">
        <div id="reverse-mortgage-utah-home-text-2" className="text-container">
          <h2 id="reverse-mortgage-utah-home-text-h2-1">
            Affordable Mortgage Lenders In Utah
          </h2>
          <p>
            Home financing can be a daunting task, but with the right mortgage
            lender by your side, the process can be much simpler. Steve Wilcox
            at Primary Residential Mortgage, Inc. is top 1% mortgage lender that
            takes the time to understand your unique financial situation and
            provides accurate information every step of the way. We believe in
            providing our clients with the best possible mortgage experience and
            offer competitive rates on home loans.
          </p>
          <p>
            As licensed mortgage lenders, our team can help you find the right
            financing for your home. Our team offers an array of mortgage loans,
            including Conventional; Federal Housing Authority (FHA), VA, USDA,
            and many state specific down payment assistance programs which can
            be a great option for first-time homebuyers. For example, with an
            FHA loan you'll only need to put down a small down payment, and you
            may qualify even if your credit score isn't perfect. We can help you
            determine which mortgage is right for you and guide you through the
            application process as we work with industry experts to get you the
            best mortgage loan for your home.
          </p>
          <br></br>
        </div>
        <div className="image-container">
          <img src={Signing} alt="reverse mortgage Utah Moving Boxes" />
        </div>
      </div>
      {/* paragraph with map */}
      <Container maxWidth="md"
        id="reverse-mortgage-florida-home-map-1"
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div id="reverse-mortgage-florida-home-map-container">
          <br></br>
          <p>
            As direct mortgage lenders in Utah, Primary Residential Mortgage,
            Inc. is committed to getting you the best terms for your mortgage.
            We have all the different mortgage loan products; Including Fannie
            Mae / Freddie Mac, Adjustable-rate mortgages (ARM), FHA loans, VA
            loans, HUD programs, USDA loans, Second Home & Investment loans.
            Steve and his team do things differently; by going to work for you
            and finding the best program to fit your needs and goals
          </p>
          <br></br>
          <p>
            Being a nationwide lender; we have worked tirelessly adding many
            layers of security + technology so that our team can work remotely.
            This allows us to take care of you without the need to be physically
            present at the different locations we are licensed in. Contact us
            today to get started!
          </p>
          <br></br>
          <br></br>
          <div id="reverse-mortgage-florida-home-map">
            <img
              id="reverse-mortgage-florida-home-map"
              src={LicenseMap}
              alt="reverse mortgage Utah Moving Boxes"
            />
          </div>
          <div id="reverse-mortgage-texas-home-button-container">
            <Button id="reverse-mortgage-texas-home-button">
              801-520-8475
            </Button>
          </div>
        </div>
      </Container>
      {/* line timeline */}
      <Container Container maxWidth="md">
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
      <Container maxWidth="md">
        {/* first section */}
        <div id="reverse-mortgage-texas-home-h2">
          <h2>Your Trusted Mortgage Broker In Utah</h2>
        </div>
        <div id="reverse-mortgage-texas-home-p">
          <p>
            As a first-time home buyer in Utah, or a seasoned homeowner it’s
            always a good idea to talk to a lender that will educate you &
            consider all your different loan options when it comes to financing
            your home. Steve Wilcox at Primary Residential Mortgage, Inc. is
            proud to be a top-rate mortgage broker in Utah who can walk you
            through obtaining a mortgage that’s going to meet all your needs. We
            have many different loan products that are available for purchasing
            a home and refinancing, including with and without a cash-out
            options.
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
              src={planImage}
              alt="reverse mortgage Utah Moving Boxes"
            />
          </div>
          <div>
            <p id="reverse-mortgage-texas-home-stack-p">
              As a reliable mortgage broker in Utah, we have access to
              adjustable-rate mortgage loans (ARM), FHA, VA, HUD programs, USDA,
              Conventional, and/or an investment property loan that fits your
              needs and budget. We understand that buying a home is one of the
              biggest financial decisions you will make in your lifetime, and
              that's why we are committed to finding the right loan for you and
              making the process as smooth as possible and one to remember. If
              you are a first time home buyer, we thrive in walking you through
              the different loan options and help you choose the best one for
              your needs. We will also be there to answer any questions you have
              along the way. We'll analyze your credit, income, and debts to
              determine the loan amount that you can qualify for.{" "}
            </p>
          </div>
        </Stack>
        <div id="reverse-mortgage-texas-home-p">
          <p>
            Since we're an direct lender, we can close your loan quickly if
            needed! Being in the business for 17+ years now, this has allowed us
            to fine-tune our lending process and create many raving customers.
            We do business nationwide; a majority in Utah, Nevada, and Idaho. If
            you look up our reputation we're known for our fast mortgage
            approvals, low interest rates, and outstanding customer service. Get
            in touch with us today to get started on the path to home ownership!
          </p>
        </div>
        {/* second section */}
        <div id="reverse-mortgage-texas-home-h2">
          <h2>
            Best Utah Mortgage Lenders <br></br> Homeowners Recommend
          </h2>
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
            <p id="reverse-mortgage-texas-home-stack-p">
              Utah is a great state to make your home! Here at the Steve Wilcox
              Team, we understand there are many mortgage lenders to choose
              from, so it's important to find one that fits your needs. Whether
              you are a 1st time buyer needing down payment assistance, looking
              for that next move up, or are a seasoned homeowner buying a 2nd
              home or investment property Steve Wilcox with Primary Residential
              Mortgage is the one you want in your corner!
            </p>
          </div>
          <div id="reverse-mortgage-texas-home-stack-container">
            <img
              id="reverse-mortgage-texas-home-stack-img"
              src={ContractRead}
              alt="reverse mortgage Utah Moving Boxes"
            />
          </div>
        </Stack>
        <div id="reverse-mortgage-texas-home-p">
          <p>
            If you're a Beehive State resident looking for a reliable Utah
            housing lender, Steve Wilcox at Primary Residential Mortgage Inc. is
            a great option. Being a direct endorsed lender, we specialize in
            home mortgages, & we can help you determine what type of loan is
            right for you.
          </p>
        </div>
        <div id="reverse-mortgage-texas-home-p">
          <p>
            If you are wanting to explore your loan options before you find the
            home of your dream, we would love to have a conversation, and
            discuss your current financial situation and your goals for buying a
            house. As a licensed Utah housing lender, we’ll work closely with
            you so we can move the approval process along quickly!
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
              src={ContractSign}
              alt="reverse mortgage Utah Moving Boxes"
            />
          </div>
          <div>
            <p id="reverse-mortgage-texas-home-stack-p">
              For our service members and veterans looking for VA housing
              financing, Primary Residential Mortgage, Inc. is here to help.
              With years of experience in the VA loan program, we are dedicated
              to providing you with the best possible home buying experience
              from start to finish. We know the ins and outs of the VA home loan
              program and can help you take advantage of its unique benefits,
              including no down payment, no mortgage insurance, flexible
              qualification guidelines, and lower closing costs. We will work
              with you every step of the way to make sure you get the home you
              want and deserve.{" "}
            </p>
          </div>
        </Stack>
        <div id="reverse-mortgage-texas-home-p">
          <p>
            VA home loans are one of the most powerful and flexible lending
            options on the market today, and as a direct endorsed VA-approved
            lender, we're proud to help our military borrowers take advantage of
            everything they've earned. VA housing loans are guaranteed by the
            Department of Veterans Affairs, which means that if you default on
            your loan, the VA will repay a portion of it to the lender. This
            guarantee gives VA-approved lenders greater protection when lending
            to military borrowers, and often leads to highly competitive rates
            and terms for qualified veterans.
          </p>
        </div>
        <div id="reverse-mortgage-texas-home-p">
          <p>
            Steve Wilcox W/ Primary Residential Mortgage, Inc., will be happy to
            help you navigate the home buying process from pre-approval to
            closing. VA loans are an excellent option for those who qualify, so
            let's see if you might be eligible. Apply now or talk to one of our
            home buying experts to get started on your VA housing loan in Utah
            today! Most importantly, Thank You for your service!!
          </p>
        </div>
        <div id="reverse-mortgage-texas-home-button-container">
          <Button id="reverse-mortgage-texas-home-button">801-520-8475</Button>
        </div>
      </Container>
      <Container maxWidth="md">
        <div id="reverse-mortgage-texas-home-h2">
          <h2>
            Finding the Best Mortgage Lenders in Utah: Tips for a Smooth{" "}
            <br></br> Home Buying Experience
          </h2>
        </div>
        <div id="reverse-mortgage-texas-home-p">
          <p>
            When it comes to buying a home, securing the right financing is
            crucial. Utah boasts a flourishing real estate market, and working
            with the best mortgage lenders in Utah can make all the difference
            in your home buying experience. In this article, we'll provide some
            tips on finding the best mortgage lenders in Utah and ensuring a
            seamless process.
          </p>
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
              src={UtahHouse}
              alt="reverse mortgage Utah Moving Boxes"
            />
          </div>
          <div>
            <p id="reverse-mortgage-texas-home-stack-p">
              In conclusion, finding the best mortgage lenders in Utah is
              crucial for a successful home buying experience. By researching
              and comparing lenders, assessing your financial situation,
              understanding different mortgage loan types, obtaining
              pre-approval, and maintaining open communication with your lender,
              you can ensure a seamless process.
            </p>
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
              expandIcon={<ExpandMoreIcon sx={{ color: "#ED8B00" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography sx={{ fontWeight: "bold", letterSpacing: "1px" }}>
                Accordion 1
              </Typography>
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
              expandIcon={<ExpandMoreIcon sx={{ color: "#ED8B00" }} />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography sx={{ fontWeight: "bold", letterSpacing: "1px" }}>
                Accordion 2
              </Typography>
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
              expandIcon={<ExpandMoreIcon sx={{ color: "#ED8B00" }} />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography sx={{ fontWeight: "bold", letterSpacing: "1px" }}>
                Accordion 3
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <div>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#ED8B00" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography sx={{ fontWeight: "bold", letterSpacing: "1px" }}>
                Accordion 1
              </Typography>
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
              expandIcon={<ExpandMoreIcon sx={{ color: "#ED8B00" }} />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography sx={{ fontWeight: "bold", letterSpacing: "1px" }}>
                Accordion 2
              </Typography>
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
              expandIcon={<ExpandMoreIcon sx={{ color: "#ED8B00" }} />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography sx={{ fontWeight: "bold", letterSpacing: "1px" }}>
                Accordion 3
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </Stack>
      <div id="reverse-mortgage-texas-home-Container-Contactform">
        <ContactForm id="reverse-mortgage-texas-home-Container-Contactform2" />
      </div>
      <Loader type="ball-rotate" />
    </>
  );
}

export default Home;
