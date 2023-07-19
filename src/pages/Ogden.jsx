import React, { useEffect } from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import { Container, Stack, Divider } from "@mui/material";
import ContactForm from "../components/ContactForm/ContactForm";
import imgOgden from "../logos/ogden-home-reverse-mortgage-utah.jpg";
import ogdenSign from "../logos/ogden-sign-reverse-mortgage-utah.jpg";
import Loader from "react-loaders";
import projectSection from "../logos/ogden-rate-arrow-reverse-mortgage-utah.jpg";

function Ogden() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ParallaxBanner
        title="reverse mortgage utah"
        id="mortgage-broker-utah-closing-guarantee-Container-1"
        layers={[
          { image: imgOgden, speed: -20 },
          { image: imgOgden, speed: -10 },
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
            Ogden<br></br>Reverse Mortgage Utah Expert
          </h1>
        </div>
      </ParallaxBanner>
      <Container maxWidth="md">
        {/* first section */}
        <p id="reverse-mortgage-texas-contact-us-Container-p">
          Introducing Kenny Farshchian, your trusted home loan expert in Ogden,
          Utah! With a wealth of experience, Kenny has assisted numerous
          homebuyers in finding the ideal home loan tailored to their specific
          needs and budget. He is dedicated to guiding you through the entire
          process, ensuring you secure the most favorable interest rate and
          terms for your dream home. Rest assured, with Kenny Farshchian by your
          side, your home financing journey will be a smooth and rewarding one.
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
                Meet Kenny Farshchian, your reliable partner in securing the
                perfect mortgage loan for your homebuying journey – a decision
                that holds immense financial significance!
              </p>
              <p id="salt-lake-city-p">
                At Primary Residential Mortgage, Inc., we boast a stellar
                reputation and years of experience catering to the diverse home
                loan needs of Ogden clients. With Kenny Farshchian by your side,
                rest assured that you'll find the ideal loan to suit your
                specific requirements and budget. Whether it's your first home,
                a luxurious property, an investment venture, or a desire to
                refinance your dream home, we have all the necessary tools and
                expertise to make it happen.
              </p>
              <p id="salt-lake-city-p">
                Flexibility and competitive rates are the cornerstones of our
                service, ensuring that you receive the most attractive home loan
                offers in the area. Our mission is straightforward: to offer
                top-notch guidance and service, addressing our customers'
                financial needs with care. As a trusted mortgage broker highly
                regarded by Ogden residents, we take pride in delivering a
                transparent and smooth process for buyers, sellers, and real
                estate agents alike.
              </p>
            </Stack>
          </div>
        </Stack>
        <p id="salt-lake-city-p">
          Our commitment to building long-term relationships founded on trust
          and mutual respect places our customers as our top priority. So, if
          you're seeking an experienced mortgage lender that Ogden homeowners
          can rely on, look no further than Kenny Farshchian and Primary
          Residential Mortgage, Inc.
        </p>
      </Container>
      {/* second section */}
      <div className="reverse-mortgage-utah-home-Container-stack-img1">
        <div className="image-container">
          <img src={ogdenSign} alt="reverse mortgage Utah Moving Boxes" />
        </div>
        <div id="reverse-mortgage-utah-home-text-1" className="text-container">
          <h2
            title="reverse mortgage utah"
            id="reverse-mortgage-utah-home-parallax-h1"
          >
            Kenny Farshchian: Ogden's best Loan Officer
          </h2>
          <p>
            If you seek a trustworthy mortgage lender in Ogden, UT, known for
            delivering swift and efficient results, look no further than Primary
            Residential Mortgage, Inc. With over a decade of experience, we have
            successfully assisted numerous individuals in realizing their dream
            of homeownership. Obtaining pre-approval for the mortgage loan you
            deserve is as simple as engaging in a brief conversation with us –
            why settle for anything less than the best? Collaborate with the
            premier mortgage broker in Ogden, where our greatest pleasure lies
            in assisting local clients in securing the ideal home financing
            solution. Throughout the entire process, from application to
            closing, we will guide you every step of the way, ensuring you are
            consistently comfortable and well-informed.
          </p>
          <br></br>
          <p>
            Our reputation as one of the top mortgage companies in Ogden is
            well-established, catering to diverse mortgage needs. We specialize
            in acquiring various loan products, including adjustable rate
            mortgages (ARM), FHA loans, VA home loans, HUD programs, USDA loans,
            investment loans, and refinancing options. Rest assured, Kenny
            Farshchian and our adept team will employ the right questions to
            ensure a customized match with the perfect home loan for your
            specific requirements. As we handle all local processing,
            underwriting, and closing document preparation, you can confidently
            anticipate a seamless and expeditious loan closing experience.
          </p>
          <br></br>
          <p>
            Visit us today and allow us to demonstrate the ease with which you
            can secure a loan from one of the most dedicated mortgage companies
            Ogden residents could hope for. We eagerly anticipate the
            opportunity to serve you and meet your home financing needs with the
            utmost professionalism.
          </p>
        </div>
      </div>
      <Container maxWidth="md">
        {/* third section */}

        <div id="reverse-mortgage-texas-home-h2">
          <h2>
            Kenny Farshchian: Your Trusted Mortgage Expert at Primary
            Residential Mortgage, Inc. in Ogden, Utah
          </h2>
        </div>
        <div id="reverse-mortgage-texas-home-p">
          <p>
            With over a decade of experience as a mortgage loan officer, Kenny
            believes that clear and consistent communication is the key to a
            rewarding mortgage loan experience. You can count on Kenny and the
            PRMI team to keep you informed at every stage of the process,
            ensuring you always know where you stand, what the next steps are,
            and when to expect progress.
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
              At our boutique mortgage lending firm, we take a personal interest
              in each and every client, whether you are a first-time homebuyer
              or seeking to refinance. Our dedication lies in finding the
              perfect mortgage loan that Ogden residents trust, tailored to your
              unique situation. We understand that the loan process can feel
              overwhelming, but with our experienced professionals by your side,
              Kenny will guide you through every step, from application to
              closing and beyond. Your journey towards home financing will be
              smooth and supported.
            </p>
          </div>
        </Stack>
        <div id="reverse-mortgage-texas-home-p">
          <p>
            When it comes to mortgages, there is no one-size-fits-all solution.
            At Primary Residential Mortgage, Inc., we offer a diverse range of
            loan options to meet varied customer specifications. With Kenny's
            expertise, we will find the right loan for you with competitive
            rates, favorable terms, and manageable costs. Whether you are
            buying, building, or refinancing your home, our experienced mortgage
            professionals will be with you every step of the way, ensuring you
            make well-informed choices.
          </p>
        </div>
        <div id="reverse-mortgage-texas-home-p">
          <p>
            Your home financing decision is one of the most significant
            commitments you'll ever make, and our goal is to ensure you make the
            right choices for your financial future. Visit our office today to
            experience an uncomplicated, smooth, and refreshing mortgage process
            with Kenny Farshchian and Primary Residential Mortgage, Inc.
          </p>
        </div>
      </Container>
      <div id="salt-lake-city-fourth-section">
        <Container maxWidth="md">
          {/* fourth section */}
          <h2 id="reverse-mortgage-texas-salt-lake-city-h2">
          Expert Mortgage Refinance Solutions in Ogden, UT: Kenny Farshchian and Primary Residential Mortgage, Inc."
          </h2>
          <p id="salt-lake-city-p">
            As a homeowner in Ogden, UT, you're likely aware of the constantly
            fluctuating mortgage rates. While it was once prudent to secure a
            home with a low long-term interest rate, the current rise in
            interest rates has prompted many to consider mortgage refinancing as
            a means to save money.When contemplating a mortgage refinance,
            several critical factors demand consideration, with the expertise of
            an experienced broker being of utmost importance. Kenny Farshchian
            and the team at Primary Residential Mortgage are well-versed in the
            intricacies of the mortgage refinance process Ogden clients seek,
            and we have a proven track record of securing competitive rates for
            our valued clients.
          </p>
          <br></br>
          <p id="salt-lake-city-p">
            For those seeking the right home loan refinance option in Ogden and
            the surrounding areas, Kenny Farshchian and our team at Primary
            Residential Mortgage are at your service. We offer a seamless and
            efficient mortgage refinancing process that Ogden residents highly
            recommend, eliminating lengthy waiting periods for loan approval.
            Our commitment to exceptional customer service and our ability to
            provide competitive offers on any mortgage refinance inquiry sets us
            apart in the industry. We stand ready to guide you through every
            step of the process, ensuring a smooth journey from start to finish.
          </p>
          <br></br>
          <p id="salt-lake-city-p">
            Whether you are in the initial stages of financial organization or
            ready to explore final refinancing options with a specific property
            in mind, we possess the expertise to cater to your unique needs. For
            quick and accessible mortgage refinancing in Ogden, contact us today
            and experience the excellence that Ogden residents speak highly of!
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

export default Ogden;
