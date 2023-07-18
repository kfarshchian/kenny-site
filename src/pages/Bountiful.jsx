import React, { useEffect } from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import { Container, Stack, Divider } from "@mui/material";
import ContactForm from "../components/ContactForm/ContactForm";
import imgBountiful from "../logos/bountiful-reverse-mortgage-utah.jpg";
import bountifulsign from "../logos/bountiful-sign-reverse-mortgage-utah.jpg";
import Loader from "react-loaders";
import projectSection from "../logos/bountiful-rates-reverse-mortgage-utah.jpg";

function Bountiful() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ParallaxBanner
        title="reverse mortgage utah"
        id="mortgage-broker-utah-closing-guarantee-Container-1"
        layers={[
          { image: imgBountiful, speed: -20 },
          { image: imgBountiful, speed: -10 },
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
            Bountiful<br></br>Reverse Mortgage Utah Expert
          </h1>
        </div>
      </ParallaxBanner>
      <Container maxWidth="md">
        {/* first section */}
        <p id="reverse-mortgage-texas-contact-us-Container-p">
          When the moment arrives for you to buy a home or refinance your
          mortgage, the importance of choosing an experienced mortgage lender
          who can offer exceptional rates and terms cannot be overstated.
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
              <p id="salt-lake-city-p">
                As a trusted and licensed Utah Loan Officer in Bountiful, Kenny
                Farshchian and PRMI have been assisting individuals in financing
                their homes for over a decade. Kenny possesses extensive
                knowledge of the local real estate market and is adept at
                finding the perfect home to suit your unique needs. He is
                committed to securing the most favorable mortgage rates and
                terms on your behalf.
              </p>
              <p id="salt-lake-city-p">
                PRMI takes immense pride in being a licensed mortgage company
                that Bountiful clients can rely on to simplify the financing
                process. We have successfully helped countless individuals in
                Bountiful and surrounding communities achieve their dreams of
                homeownership.
              </p>
              <p id="salt-lake-city-p">
                Our expertise spans a wide range of loan programs, including
                fixed-rate mortgages, adjustable-rate mortgages, and
                government-backed loans, among others. Recognizing the potential
                confusion and stress involved in the mortgage loan process, our
                dedicated team handles all the necessary paperwork and legwork
                on your behalf.
              </p>
            </Stack>
          </div>
        </Stack>
        <p id="salt-lake-city-p">
          With a proven track record of efficiently processing, underwriting,
          closing, and funding mortgage loans, you can trust us to deliver a
          seamless and expedited experience. Contact us today and let us help
          turn your homeownership dreams into reality with utmost
          professionalism and expertise!
        </p>
      </Container>
      {/* second section */}
      <div className="reverse-mortgage-utah-home-Container-stack-img1">
        <div className="image-container">
          <img src={bountifulsign} alt="reverse mortgage Utah Moving Boxes" />
        </div>
        <div id="reverse-mortgage-utah-home-text-1" className="text-container">
          <h2
            title="reverse mortgage utah"
            id="reverse-mortgage-utah-home-parallax-h1"
          >
            Preferred Utah Loan Officer in Bountiful, UT - Trusted by Residents
          </h2>
          <p>
            At Primary Residential Mortgage Inc., we take immense pride in being
            the preferred mortgage company among Bountiful, UT residents. Our
            dedicated team of mortgage brokers prioritizes your needs and works
            tirelessly to secure the best possible mortgage loan terms for you.
            With an unwavering commitment to delivering exceptional service, we
            take the time to guide you through each step of the home loan
            process. We understand the significance of owning a home, and our
            goal is to turn that dream into a reality for you, whether you're a
            first-time homebuyer or seeking to refinance your existing loan.
            others.
          </p>
          <br></br>
          <p>
            Specializing in VA home loans and offering a range of other loan
            products, including FHA home loans, we proudly serve those who have
            served our country. As an approved and trusted mortgage broker in
            Bountiful, we have the confidence and expertise to meet your unique
            financing needs. With Kenny Farshchian, our knowledgeable and
            experienced mortgage broker, leading the way, you can trust that
            you're in capable hands throughout the entire home buying process.
          </p>
          <br></br>
          <p>
            Our reputation as the most dedicated mortgage company in Bountiful
            stems from the trust our clients place in us. They rely on Kenny and
            his team to work diligently in finding the perfect loan program and
            pricing tailored to their individual situation. With a wealth of
            combined experience at your disposal, we are eager to assist you
            with your home buying needs. Let us be your trusted partner as you
            embark on this important journey towards homeownership.
          </p>
        </div>
      </div>
      <Container maxWidth="md">
        {/* third section */}

        <div id="reverse-mortgage-texas-home-h2">
          <h2>
            The Preferred Utah Loan Officer Bountiful Clients Trust for Optimal
            Rates
          </h2>
        </div>
        <div id="reverse-mortgage-texas-home-p">
          <p>
            If you're contemplating buying a home in Bountiful, or anywhere in
            Utah, Kenny Farshchian at Primary Residential Mortgage Inc. is the
            professional you'll want by your side. As a skilled mortgage broker,
            Kenny and his team are experts at finding the ideal mortgage
            products to suit their clients' individual needs.
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
              With a keen understanding of your unique financial situation,
              Kenny ensures he identifies the mortgage product that best aligns
              with your requirements. If you're a veteran, Kenny stands as the
              go-to Bountiful UT VA home loan expert, well-versed in helping you
              take advantage of your entitled benefits. His unwavering
              dedication has enabled numerous veterans and their families to
              achieve their homeownership dreams, making sure their offers stand
              strong.
            </p>
          </div>
        </Stack>
        <div id="reverse-mortgage-texas-home-p">
          <p>
            Whatever your mortgage needs entail, Kenny and his diligent team are
            your most reliable source for securing the right financing tailored
            to your situation. At PRMI, we wholeheartedly commit ourselves to
            assisting you in realizing the dream of sustainable homeownership.
            Collaborating with builders, realtors, and other mortgage companies,
            we ensure you have the best possible opportunity for success.
          </p>
        </div>
        <div id="reverse-mortgage-texas-home-p">
          <p>
            As the seasoned mortgage broker Bountiful clients trust for an
            effortless process, we go the extra mile by providing remote
            mortgage services, allowing you to obtain the financing you need
            without physical presence. Contact us today to swiftly approve your
            exclusive Bountiful UT VA home loan, as we tirelessly work to secure
            optimal rates and deliver exceptional service.
          </p>
        </div>
      </Container>
      <div id="salt-lake-city-fourth-section">
        <Container maxWidth="md">
          {/* fourth section */}
          <h2 id="reverse-mortgage-texas-salt-lake-city-h2">
            A Seamless Homebuying Journey<br></br>in Bountiful: Your Premier
            Choice Utah Loan Officer
          </h2>
          <p id="salt-lake-city-p">
            Introducing Kenny Farshchian, the ultimate go-to Utah loan officer,
            devoted to providing a seamless and hassle-free mortgage experience.
            With Kenny's exceptional expertise and unwavering dedication, the
            loan process transforms into a smooth path, turning numerous
            homeownership dreams into reality for families in Bountiful and
            beyond. His genuine passion for assisting individuals and families
            secure the financing they need to acquire their dream homes shines
            through in every aspect of the journey.
          </p>
          <br></br>
          <p id="salt-lake-city-p">
            At Kenny Farshchian's office, we place paramount focus on delivering
            exceptional service and unwavering support to clients throughout
            their loan journey. Whether you are a first-time homebuyer or
            considering refinancing, Kenny and his proficient team will expertly
            guide you with personalized solutions and insightful advice. Our
            commitment to customer satisfaction is reflected in the numerous
            glowing reviews on our home page, a testament to the positive
            experiences of our past clients.
          </p>
          <br></br>
          <p id="salt-lake-city-p">
            Don't let this extraordinary opportunity pass you by; collaborate
            with Kenny Farshchian, the Utah loan officer who prioritizes your
            needs and ensures a stress-free path to homeownership. To commence
            your journey towards your dream home, contact Kenny's office today
            and experience the top-notch service that sets him apart in the
            lending industry.
          </p>
          <br></br>
        </Container>
      </div>
      <div id="Reverse-Mortgage-Florida-Container-contact">
        <ContactForm id="Reverse-Mortgage-Florida-Container-contact-2"></ContactForm>
      </div>
      <Loader type="ball-rotate" />
    </>
  );
}

export default Bountiful;
