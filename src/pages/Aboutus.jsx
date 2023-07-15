import React, {useEffect} from "react";
import archutah from "../logos/arch-utah-reverse-mortgage-utah.jpg";
import kenny from "../logos/kennyf.webp";
import Loader from "react-loaders";
import { ParallaxBanner } from "react-scroll-parallax";
import ContactForm from "../components/ContactForm/ContactForm";
import "./layout.scss";
import { Container, Stack } from "@mui/material";


function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <ParallaxBanner
        title="reverse mortgage utah"
        id="reverse-mortgage-florida-aboutus-Container-1"
        layers={[
          { image: archutah, speed: -20 },
          { image: archutah, speed: -10 },
        ]}
        className="aspect-[2/1]"
      >
        <div
          title="reverse mortgage utah"
          id="reverse-mortgage-florida-aboutus-banner-title"
        >
          <h1
            title="reverse mortgage utah"
            id="reverse-mortgage-florida-aboutus-Container-h1"
          >
            Utah Loan Officer <br></br> and Utah Mortgage
            Broker
          </h1>
        </div>
      </ParallaxBanner>
      <Container maxWidth="md">
        <h2 id="reverse-mortgage-florida-aboutus-Container-h2">
          Kenny Farshchian
        </h2>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          id="reverse-mortgage-florida-aboutus-stack"
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
          spacing={{ xs: 1, sm: 2, md: 2 }}
        >
          <div>
            <h2>Utah Loan Officer</h2>
            <p id="reverse-mortgage-florida-aboutus-stack-p">
              Kenny Farshchian, a devoted Utah Loan Officer, he is a
              dedicated professional who takes great pride in helping
              individuals and families achieve their homeownership dreams. With
              a Bachelor's degree in Business from the University of Utah, Kenny
              possesses the knowledge and expertise to navigate the complex
              world of home finance. His passion lies in assisting people with
              mortgages, understanding the vital role that stable and affordable
              housing plays in a family's well-being.
            </p>
          </div>
          <div id="reverse-mortgage-florida-aboutus-stack-container">
            <img
              id="reverse-mortgage-florida-aboutus-stack-img-kenny"
              src={kenny}
              alt="reverse mortgage Utah Moving Boxes"
            />
          </div>
        </Stack>
        <p id="reverse-mortgage-florida-aboutus-stack-p">
          When he's not busy with his responsibilities as a Utah loan officer, Kenny
          cherishes spending quality time with his five children. Family holds
          a special place in his heart, and he values the moments shared
          together. Furthermore, he believes that family camping trips are an
          excellent opportunity to bond and create lasting memories. In addition
          to traditional outdoor activities, Kenny enjoys indulging in hobbies
          such as golfing and disk golfing, which provide a healthy outlet for
          relaxation and personal growth.
        </p>
        <br></br>
        <p id="reverse-mortgage-florida-aboutus-stack-p-3">
          As a Utah mortgage broker, Kenny Farshchian recognizes the
          significance of home finance in the lives of families. His genuine
          interest in helping people, combined with his background in business
          and mortgage expertise, enables him to guide clients through the
          mortgage process with professionalism and compassion. Whether it's
          finding the ideal mortgage solution or offering expert advice, Kenny
          is committed to ensuring that individuals and families in Utah secure
          the best possible financing options for their homes.
        </p>
      </Container>

      <div id="Reverse-Mortgage-Florida-Container-contact">
        <ContactForm id="Reverse-Mortgage-Florida-Container-contact-2"></ContactForm>
      </div>
      <Loader type="ball-rotate" />
    </>
  );
}

export default AboutUs;
