import React from "react";
import { Container, Stack, Divider } from "@mui/material";
import PinDropIcon from "@mui/icons-material/PinDrop";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import ContactForm from "../components/ContactForm/ContactForm";
import reverseMortgageTexas from "../logos/reverse-mortgage-florida-reverse-mortgage-texas-contact-us.jpg";
import { ParallaxBanner } from "react-scroll-parallax";
import './layout.scss'


function ContactUs() {
  return (
    <>
      <ParallaxBanner
        id="reverse-mortgage-texas-contact-us-Container-1"
        layers={[
          { image: reverseMortgageTexas, speed: -20 },
          { image: reverseMortgageTexas, speed: -10 },
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
        <p id="reverse-mortgage-texas-contact-us-Container-p">
          At Primary Residential Mortgage Inc., we extend a warm welcome to you.
          Our primary goal is to assist you in discovering the perfect mortgage
          solution tailored to your unique circumstances. We understand that
          each individual seeking a mortgage has distinct needs, and thus, we
          proudly offer a diverse range of products to cater to your specific
          requirements.
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
              id="reverse-mortgage-texas-contact-us-stack"
              sx={{
                marginTop: "50px",
                marginBottom: "50px",
                paddingLeft: "5px",
                paddingRight: "5px",
              }}
              spacing={{ xs: 1, sm: 1, md: 6 }}
            >
              <h2 id="reverse-mortgage-texas-contact-us-contact-section">
                Contact Us
              </h2>
              <h4>
                We're committed to helping you in any way we can. <br></br>Leave
                us a note and we'll get in touch with you shortly.
              </h4>
              <LocalPhoneIcon sx={{ color: "#ED8B00" }} />
              Phones: Mobile(801) 520-8475; Office(801) 320-7081{" "}
              <ForwardToInboxIcon sx={{ color: "#ED8B00" }} />
              kenf@primeres.com <PinDropIcon sx={{ color: "#ED8B00" }} />
              Address: 1597 Woodland Park Dr STE 100, Layton, UT 84041
            </Stack>
          </div>
        </Stack>
        <p id="reverse-mortgage-texas-contact-us-Container-p-info">
          When it comes to navigating the intricate world of mortgages,
          experience, and expertise matter. Meet <span id="reverse-mortgage-texas-contact-us-Container-a"><a id="reverse-mortgage-texas-contact-us-Container-a" href='/'>Kenny Farshchian </a></span>, a seasoned
          Loan Officer with a wealth of knowledge and a decade-long background
          in the field. Holding a Bachelor's degree in Business, Kenny is
          well-equipped to guide you through the complexities of the mortgage
          process. With a wide network of investors at our disposal, we are
          proud to offer a diverse array of mortgage products tailored to your
          needs. Whether you seek reverse mortgage, adjustable-rate, or
          fixed-rate loans, Conventional, FHA, VA Home loans, USDA options,
          investment loans, or refinancing solutions, we have you covered.
          <br></br>
          <br></br>
          Kenny's mission is to be your trusted companion on this mortgage
          journey, regardless of whether you're a first-time homebuyer or a
          seasoned borrower. If you are considering a mortgage in Utah, Florida,
          or Texas Kenny Farshchian at PRMI is a name to remember. With close to
          a decade of experience, Kenny has helped numerous individuals in Utah,
          Florida, and Texas turn their dreams of homeownership into reality.
          Known for his friendly and approachable demeanor, Kenny ensures that
          you feel comfortable throughout the entire process.
          <br></br>
          <br></br>
          Moreover, he is well-versed in offering valuable advice on credit
          score improvement and monthly payment savings. By comparing various
          mortgage products and lenders, Kenny will empower you to make the best
          decisions for your unique situation. In conclusion, if you are seeking
          a stellar mortgage Loan Originator in Utah, Florida, or Texas look no
          further than Kenny Farshchian at Primary Residential Mortgage Inc.
          Contact him today to discover the exceptional services he can provide
          for you.
        </p>
      </Container>
    </>
  );
}

export default ContactUs;
