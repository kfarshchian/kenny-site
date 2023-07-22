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
import LicenseMap from "../logos/kenny-map-reverse-mortgage-utah.png";
import planImage from "../logos/reverse-mortgage-texas-home-calc.jpg";
import UtahHouse from "../logos/reverse-mortgage-texas-home-house.jpg";
import ContractSign from "../logos/reverse-mortgage-texas-home-paper.jpg";
import ContractRead from "../logos/reverse-mortgage-texas-home-reading.jpg";
import { Helmet } from "react-helmet";
import Loader from "react-loaders";
// import {  Modal } from '@mui/material';

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
            Utah Mortgage Solutions: <br></br>Your Trusted Loan Officer and
            Reverse Mortgage Utah Expert
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
          <h2
            title="reverse mortgage utah"
            id="reverse-mortgage-utah-home-parallax-h1"
          >
            Experience Excellence with Kenny Farshchian:<br></br> Utah's Premier
            Reverse Mortgage Loan Officer
          </h2>
          <p>
            As the esteemed loan officer, <a href="/aboutus" type="page" id="pageLinksOnPage">Kenny Farshchian</a>, you can rest assured
            that you are working with the best in Utah. With his extensive
            knowledge and expertise in the lending industry, Kenny is dedicated
            to providing you with exceptional service and guidance throughout
            your loan journey. Specializing in reverse mortgages, Kenny is
            well-versed in the intricacies of the Utah market and understands
            the unique dynamics that come with it.
          </p>
          <br></br>
          <p>
            Not only does Kenny excel as a Utah loan officer, but he also
            extends his expertise to reverse mortgages in Texas and Florida. By
            staying up-to-date with the latest trends and regulations in these
            states, Kenny ensures that you receive comprehensive and tailored
            solutions, no matter where you are located. With a strong commitment
            to professionalism, attention to detail, and client satisfaction,
            Kenny strives to build lasting relationships based on trust and
            transparency. You can trust that Kenny Farshchian, as your dedicated
            reverse mortgage loan officer, will provide you with <a href="/contact" type="page" id="pageLinksOnPage">personalized
            guidance</a> and the highest level of service throughout the loan
            process.
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
            Nurturing Excellence: Kenny Farshchian's Compassionate Approach to
            Exceptional Mortgage Experiences
          </h1>
          <Container>
            <p id="reverse-mortgage-utah-home-parallax-p">
              With a genuine passion for creating an exceptional mortgage
              experience, Kenny Farshchian, Utah's esteemed loan officer, goes
              above and beyond to ensure his clients receive nothing but the
              best. Specializing in reverse mortgages, Kenny understands the
              unique financial needs and goals of his clients in Utah and
              beyond. His extensive knowledge and expertise as a <a href="/Utah-mortgage-salt-lake-city" type="page" id="pageLinksOnPage">Utah mortgage
              lender</a> allow him to provide tailored solutions that meet the
              specific requirements of each client.
            </p>
            <br></br>
            <p id="reverse-mortgage-utah-home-parallax-p">
              Whether it's a reverse mortgage in Utah, Texas, or Florida,
              Kenny's commitment to excellence remains unwavering. He believes
              in building strong relationships with his clients, guided by trust
              and open communication. Kenny's dedication to creating an
              <a href="/Reverse-mortgage-Florida-Venice" type="page" id="pageLinksOnPage">exceptional mortgage experience</a> is evident in his attention to
              detail, personalized guidance, and proactive approach. He ensures
              that his clients are well-informed and supported throughout the
              entire process, offering a smooth and hassle-free experience.
            </p>
            <br></br>
            <p id="reverse-mortgage-utah-home-parallax-p">
              Kenny's exceptional service extends beyond the transaction itself.
              As a reverse mortgage loan officer, he recognizes the significance
              of financial decisions and their impact on his clients' lives.
              With his expertise in the reverse mortgage markets of Utah, Texas,
              and Florida, Kenny provides <a href="/contact" type="page" id="pageLinksOnPage">comprehensive guidance</a> that considers building
              the unique regulations and trends of each state. By focusing on
               long-lasting relationships and delivering unmatched
              service, Kenny Farshchian guarantees an exceptional mortgage
              experience that surpasses expectations.
            </p>
          </Container>
        </div>
      </ParallaxBanner>
      {/* image right info left */}
      <div className="reverse-mortgage-utah-home-Container-stack-img2">
        <div id="reverse-mortgage-utah-home-text-2" className="text-container">
          <h2 id="reverse-mortgage-utah-home-text-h2-1">
            Securing Your Dreams: Primary Residential Mortgage, Inc. - Your
            Trusted Direct Mortgage Lenders in Utah, Led by Kenny Farshchian
          </h2>
          <p>
            At Primary Residential Mortgage, Inc., we are dedicated direct
            mortgage lenders in Utah, driven by our commitment to securing the
            best terms for your mortgage. Offering a comprehensive range of
            mortgage loan products, including Fannie Mae/Freddie Mac,
            Adjustable-Rate Mortgages (ARM), FHA loans, VA loans, HUD programs,
            USDA loans, Second Home, and Investment loans, we have the
            flexibility to find the perfect program that matches your unique
            needs and goals.
          </p>
          <br></br>
          <p>
            Led by the expertise of Kenny Farshchian, our team takes a
            personalized approach to mortgage lending. We differentiate
            ourselves by going the extra mile to work on your behalf, diligently
            finding the best mortgage solution tailored to your specific
            circumstances. As a  <a href="/Reverse-mortgage-Texas-Austin" type="page" id="pageLinksOnPage">nationwide lender</a>, we have implemented robust
            layers of security and advanced technology, enabling our team to
            seamlessly operate remotely. This ensures that regardless of your
            location, we can provide exceptional care and service.
          </p>
          <br></br>
          <p>
            Don't wait any longer to achieve your homeownership dreams or
            refinance your existing mortgage. Contact us today to experience the
            dedication, expertise, and convenience that sets us apart as your
            <a href="/Utah-mortgage-Layton" type="page" id="pageLinksOnPage"> trusted mortgage partner</a>. Let us secure your dreams and make your
            homeownership aspirations a reality with Kenny Farshchian leading
            the way.
          </p>
          <br></br>
        </div>
        <div className="image-container">
          <img src={Signing} alt="reverse mortgage Utah Moving Boxes" />
        </div>
      </div>
      {/* paragraph with map */}
      <Container
        maxWidth="md"
        id="reverse-mortgage-florida-home-map-1"
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div id="reverse-mortgage-florida-home-map-container">
          <br></br>
          <p>
            As direct mortgage lenders based in Utah, Primary Residential
            Mortgage, Inc. is wholly dedicated to securing the most favorable
            terms for your mortgage. With a comprehensive range of mortgage loan
            products, including Fannie Mae / Freddie Mac, Adjustable-rate
            mortgages (ARM), FHA loans, VA loans, HUD programs, USDA loans,
            Second Home & Investment loans, we have the flexibility to cater to
            your specific needs and aspirations. Kenny and his team approach
            things uniquely, working on your behalf to identify the optimal
            program that aligns perfectly with your requirements and goals.
          </p>
          <br></br>
          <p>
            As a  <a href="/Reverse-mortgage-Texas-Houston" type="page" id="pageLinksOnPage"> nationwide lender</a>, we have tirelessly invested in implementing
            multiple layers of security and cutting-edge technology. These
            advancements enable our team to operate remotely, effectively
            serving you without requiring a physical presence in the various
            locations where we are licensed. Don't hesitate to reach out to us
            today and take the first step towards your mortgage journey!
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
          <h2>
            Your Trusted Utah Loan Officer: Kenny Farshchian at Primary
            Residential Mortgage, Inc.
          </h2>
        </div>
        <div id="reverse-mortgage-texas-home-p">
          <p>
            When it comes to financing your home, whether you're a first-time
            buyer or a seasoned homeowner in Utah, it's crucial to work with a
            trusted <a href="/Reverse-mortgage-Florida-Palm-Beach" type="page" id="pageLinksOnPage"> mortgage broker</a> who will prioritize your education and
            consider all your loan options. That's where Kenny Farshchian at
            Primary Residential Mortgage, Inc. comes in. As a top-rate utah
            mortgage broker in Utah, Kenny takes pride in guiding clients
            through the process of obtaining a mortgage that meets their unique
            needs. With a wide range of loan products available for purchasing a
            home or refinancing, including options with or without cash-out,
            Kenny ensures that every client receives personalized attention and
            expert advice.
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
              As a reliable <a href="/Reverse-mortgage-Utah-Ogden" type="page" id="pageLinksOnPage"> utah mortgage</a> broker in Utah, Kenny has access to a
              diverse portfolio of loan products, including adjustable-rate
              mortgages (ARM), FHA, VA, HUD programs, USDA, conventional,
              reverse mortgage and investment property loans. Recognizing that
              buying a home is a significant financial decision, Kenny is
              committed to finding the right loan for you and ensuring a smooth
              and memorable process. Whether you're a first-time homebuyer
              seeking guidance or have specific loan requirements, Kenny will
              walk you through the different options and help you choose the
              best one for your needs. With a thorough analysis of your credit,
              income, and debts, Kenny will determine the loan amount you
              qualify for.
            </p>
          </div>
        </Stack>
        <div id="reverse-mortgage-texas-home-p">
          <p>
            Being a direct lender, Kenny and his team can expedite the loan
            closing process if needed. With a decade of experience in the
            industry, they have fine-tuned their lending process, resulting in
            fast mortgage approvals, competitive interest rates, and exceptional
            customer service. While their business spans <a href="/Reverse-mortgage-Texas-Dallas" type="page" id="pageLinksOnPage"> nationwide</a>, with a
            focus on Utah, Florida, and Texas, Kenny's reputation speaks for
            itself. Get in touch with Kenny Farshchian today to embark on your
            homeownership journey and experience the outstanding service that
            has made him a trusted name in the industry.
          </p>
        </div>
        {/* second section */}
        <div id="reverse-mortgage-texas-home-h2">
          <h2>
            Utah Mortgage Solutions: Your Trusted Loan Officer Utah, Mortgage
            Broker Utah, and Lender - Kenny Farshchian
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
              Utah presents an exceptional opportunity for establishing your
              residence. The Kenny Farshchian Team recognizes the wide array of
              <a href="/Reverse-mortgage-Florida-Naples" type="page" id="pageLinksOnPage"> mortgage lenders</a> available in the state, underscoring the
              importance of finding an ideal match for your specific
              requirements. Whether you are a first-time homebuyer in need of
              down payment assistance, planning your next move, or a seasoned
              homeowner exploring second homes or investment properties, Kenny
              Farshchian, affiliated with Primary Residential Mortgage, emerges
              as the esteemed professional you should entrust.
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
            Realize the full potential of a <a href="/Utah-mortgage-Bountiful" type="page" id="pageLinksOnPage"> reverse mortgage in Utah</a> by
            partnering with a trusted housing lender. For residents of the
            Beehive State seeking a reliable source, look no further than Kenny
            Farshchian at Primary Residential Mortgage Inc. As a direct endorsed
            lender specializing in home mortgages, we possess refined expertise
            that empowers us to guide you towards the loan type that best aligns
            with your unique circumstances.
          </p>
        </div>
        <div id="reverse-mortgage-texas-home-p">
          <p>
            Initiate your journey towards the realization of your dream home by
            exploring the myriad loan options available to you. At the Kenny
            Farshchian Team, we place great value on engaging in meaningful
            discussions with our clients, comprehending their present financial
            situation and goals in purchasing a property. As a licensed Utah
            housing lender, we collaborate closely with you, streamlining the
            approval process to provide a swift and efficient experience.
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
              Members of the armed forces and veterans seeking VA housing
              financing can place their trust in us at Primary Residential
              Mortgage, Inc. Leveraging our extensive experience in the VA loan
              program, we are wholeheartedly committed to offering unwavering
              support throughout your entire home buying journey. Our
              comprehensive knowledge of the VA home loan program allows us to
              guide you in maximizing its unique benefits, such as no down
              payment, no mortgage insurance, flexible qualification guidelines,
              and reduced closing costs. From initiation to conclusion, we will
              accompany you every step of the way, ensuring that you secure the
              home you desire and deserve.
            </p>
          </div>
        </Stack>
        <div id="reverse-mortgage-texas-home-p">
          <p>
            VA home loans represent some of the most potent and adaptable
            lending options available today. As a direct endorsed VA-approved
            lender, we take immense pride in assisting our military borrowers in
            utilizing the benefits they have earned. VA housing loans, backed by
            the Department of Veterans Affairs, provide VA-approved lenders with
            heightened protection when extending loans to military borrowers.
            This often results in highly competitive rates and terms for
            qualified veterans.
          </p>
        </div>
        <div id="reverse-mortgage-texas-home-p">
          <p>
            Kenny Farshchian, in association with Primary Residential Mortgage,
            Inc., eagerly awaits the opportunity to guide you through the entire
            home buying process, from pre-approval to closing. Discover your
            eligibility for VA loans, an exceptional choice for qualifying
            individuals. Take the initial step by submitting your application
            now or reaching out to one of our knowledgeable home buying experts
            to initiate your VA housing loan in <a href="/Utah-Mortgage-Syracuse" type="page" id="pageLinksOnPage"> Utah today</a>! Above all, we extend
            our sincere gratitude for your honorable service.
          </p>
        </div>
        <div id="reverse-mortgage-texas-home-button-container">
          <Button id="reverse-mortgage-texas-home-button">801-520-8475</Button>
        </div>
      </Container>
      <Container maxWidth="md">
        <div id="reverse-mortgage-texas-home-h2">
          <h2>
            Navigating the Utah Mortgage Market: Essential Tips for Selecting a
            Top Loan Officer or Mortgage Broker in Utah
          </h2>
        </div>
        <div id="reverse-mortgage-texas-home-p">
          <p>
            When it comes to securing a <a href="/Reverse-mortgage-Utah-WestValleyCity" type="page" id="pageLinksOnPage"> Utah mortgage</a>, finding the right loan
            officer or mortgage broker in Utah can make a world of difference.
            The process of obtaining a loan can be complex and overwhelming, but
            with the guidance of a skilled professional, you can navigate it
            with confidence. To begin your search, start by conducting thorough
            research on loan officers in Utah who specialize in Utah mortgages.
            Look for experienced professionals who have a deep understanding of
            the local market and can provide personalized advice based on your
            unique financial situation and goals. Seeking recommendations from
            friends, family, or colleagues who have recently purchased a home in
            Utah can also be beneficial. Once you have a list of potential loan
            officers or mortgage brokers, evaluate their communication skills
            and responsiveness. Effective and transparent communication is
            crucial throughout the loan application process. Additionally,
            consider their expertise and specialization in the Utah mortgage
            landscape. Look for professionals with a strong network of industry
            connections, as this can provide access to a wide range of loan
            options and potentially better terms. By following these tips, you
            can find a trusted loan officer or mortgage broker in Utah who will
            guide you through the loan process and help you secure the best Utah
            mortgage for your needs.
          </p>
          <div id="reverse-mortgage-texas-home-h2">
            <h2>Our Approach</h2>
          </div>
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
              src={UtahHouse}
              alt="reverse mortgage Utah Moving Boxes"
            />
          </div>
          <div>
            <p id="reverse-mortgage-texas-home-stack-p">
              Crucial for a successful home purchase, finding the top mortgage
              lenders in Utah and Utah loan officer like Kenny Farshchian is
              essential. Research and compare lenders, assess finances,
              understand loan types, get pre-approved, and maintain open
              communication with your loan officer for a smooth Utah mortgage
              experience.
            </p>
          </div>
        </Stack>
      </Container>
      <Container>
        <Helmet>
          <script
            src="https://d1gxt2ovmgw1zu.cloudfront.net/custom_reviews_widget_script.js"
            ss-custom-reviews-widget-api-key="YVrdF2s34AXyXZbfXfRdmOTu9IzfQIMXshQUIlYJkAocl-kPn1ImZPMUgwdewc2aokKBBr9CZbyDWUw3"
            widget-key="DmODg32KAxhrh1Mw3kS1HA"
            type="text/javascript"
          />
        </Helmet>
        <div id="ss-custom-reviews-widget-root" />
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
                How much mortgage can I afford with my salary?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                To determine how much mortgage you can afford with your salary,
                it's important to consider various factors such as your income,
                expenses, debt obligations, and the prevailing interest rates. A
                commonly used guideline is the debt-to-income ratio (DTI), which
                indicates the portion of your monthly income that goes towards
                debt payments, including your mortgage.
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
                What is a reverse mortgage?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                A reverse mortgage is a financial product designed for
                homeowners who are typically aged 62 or older and have
                significant equity in their homes. Unlike a traditional mortgage
                where the borrower makes monthly payments to the lender, a
                reverse mortgage allows the homeowner to receive payments from
                the lender, effectively converting a portion of their home
                equity into cash.
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
                What is a mortgage?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                A mortgage is a type of loan that is used to finance the
                purchase of a property, such as a home or an investment
                property. It is a legal agreement between the borrower (the
                person purchasing the property) and the lender (usually a bank
                or financial institution) that allows the borrower to borrow a
                specific amount of money to buy the property.
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
                How long does it take to get a mortgage?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                The time it takes to get a mortgage can vary depending on
                several factors, including the complexity of your financial
                situation, the lender's process, and the efficiency of the
                parties involved. Here is a general timeline of the mortgage
                process:<br></br>
                <br></br>
                1. Pre-approval <br></br>
                2. Loan application<br></br>
                3. Loan processing<br></br>
                4. Underwriting<br></br>
                5. Loan approval and closing<br></br>
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
                What is mortgage insurance?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Mortgage insurance is a type of insurance that protects the
                lender in case the borrower defaults on their mortgage payments.
                It is typically required when the borrower makes a down payment
                of less than 20% of the home's purchase price. Mortgage
                insurance allows lenders to offer loans with a lower down
                payment while mitigating their risk.
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
                How do I get a mortgage?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                To get a mortgage, you generally need to follow these steps:
                <br></br>
                <br></br>
                1. Determine your financial readiness <br></br>
                2. Research and compare lenders<br></br>
                3. Get pre-approved<br></br>
                4. Gather necessary documents<br></br>
                5. Complete the mortgage application<br></br>
                6. Loan processing and underwriting<br></br>
                8. Loan approval and close the loan<br></br>
                <br></br>
                It's important to note that the mortgage process can vary among
                lenders, and the timeline can be influenced by factors such as
                the complexity of your application, responsiveness in providing
                documentation, and the lender's workload. Working closely with
                your chosen lender and keeping communication open will help
                streamline the process. Regenerate response
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
