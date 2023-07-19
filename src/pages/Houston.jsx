import React, { useEffect } from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import { Container, Stack, Divider } from "@mui/material";
import ContactForm from "../components/ContactForm/ContactForm";
import imgHouston from "../logos/houston-house-reverse-mortgage-texas.jpg";
import houstonSign from "../logos/houston-sign-reverse-mortgage-texas.jpg";
import Loader from "react-loaders";
import projectSection from "../logos/houston-rate-reverse-mortgage-texas.jpg";

function Houston() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ParallaxBanner
        title="reverse mortgage utah"
        id="mortgage-broker-utah-closing-guarantee-Container-1"
        layers={[
          { image: imgHouston, speed: -20 },
          { image: imgHouston, speed: -10 },
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
            Houston<br></br>Reverse Mortgage Texas
          </h1>
        </div>
      </ParallaxBanner>
      <Container maxWidth="md">
        {/* first section */}
        <p id="reverse-mortgage-texas-contact-us-Container-p">
          Introducing Kenny Farshchian, your trusted home loan expert in
          Houston, Texas! With a wealth of experience, Kenny has assisted
          numerous homebuyers in finding the ideal home loan tailored to their
          specific needs and budget. He is dedicated to guiding you through the
          entire process, ensuring you secure the most favorable interest rate
          and terms for your dream home in the vibrant city of Houston. Rest
          assured, with Kenny Farshchian by your side, your home financing
          journey in Houston, Texas, will be a smooth and rewarding one.
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
                Kenny Farshchian and his team have years of experience in the
                mortgage industry, making them experts at finding the right loan
                for you and ensuring a smooth process.
              </p>
              <p id="salt-lake-city-p">
                As licensed lenders in Houston, TX, we are trusted to assist
                with down payment assistance programs, providing that extra help
                when needed. With extensive knowledge of the home-buying
                process, we will be there to support you at every step.
              </p>
              <p id="salt-lake-city-p">
                When seeking a mortgage in Houston, Texas, you need someone who
                understands the area and can find the best financing options for
                you. That's where Kenny Farshchian and his team of experienced
                PRMI professionals come in. We are committed to meeting all your
                mortgage needs and finding the perfect solution for your
                specific circumstances.
              </p>
            </Stack>
          </div>
        </Stack>

        <p id="salt-lake-city-p">
          Whether you're a first-time homebuyer, considering a refinance, or
          interested in leveraging your home equity, our team is here to help
          you achieve your goals. Kenny Farshchian is highly sought-after for a
          reason - his expertise, experience, and dedication to his clients'
          best interests. Rest assured, he will guide you through the entire
          process from start to finish, ensuring you get the best possible deal.
          Contact us today and experience why we are the most ideal provider for
          first-time buyer home loans in Houston, TX. Our track record speaks
          for itself!
        </p>
      </Container>

      {/* second section */}
      <div className="reverse-mortgage-utah-home-Container-stack-img1">
        <div className="image-container">
          <img src={houstonSign} alt="reverse mortgage Utah Moving Boxes" />
        </div>
        <div id="reverse-mortgage-utah-home-text-1" className="text-container">
          <h2
            title="reverse mortgage utah"
            id="reverse-mortgage-utah-home-parallax-h1"
          >
            Unlock Your Houston Homeownership Dreams with Kenny Farshchian and
            His Team
          </h2>
          <p>
            In Houston, Texas, you'll find the best loan officer in the business
            – Kenny Farshchian. With a team of experienced professionals at
            Primary Residential Mortgage Inc., we are your go-to mortgage
            lenders! We know that your home is one of your most significant
            investments, and we're here to ensure you secure the best mortgage
            terms for your financing or refinancing needs.
          </p>
          <br></br>
          <p>
            Kenny and his team are dedicated to understanding your short-term
            and long-term goals, tailoring the perfect mortgage loan to suit
            your unique situation and requirements. With a diverse range of
            mortgage products available, including Fixed Rate Mortgages,
            Adjustable Rate Mortgages (ARMs), VA Loans, FHA Loans, USDA Loans,
            Investment Loans, and Conventional Loans, we have the expertise to
            meet your needs.
          </p>
          <br></br>
          <p>
            Having served the Houston, TX community for over 10 years, Kenny
            Farshchian has built a reputation as a trusted name in the industry.
            As one of the top mortgage lenders, we take pride in delivering
            personalized solutions to match your financial goals. You can rely
            on us for competitive rates and favorable terms on all our mortgage
            products.
          </p>
          <br></br>
          <p>
            Whether you're looking to refinance and reduce your mortgage costs
            or are a first-time buyer seeking a home loan, Houston, TX residents
            recommend Kenny Farshchian and his team. We have a high approval
            success rate and are committed to making your homeownership dreams a
            reality. Reach out to us today to learn more about our services – we
            can't wait to work with you!
          </p>
        </div>
      </div>
      <Container maxWidth="md">
        {/* third section */}

        <div id="reverse-mortgage-texas-home-h2">
          <h2>
            Your Path to Houston Homeownership: Trusted Loan Officer Kenny
            Farshchian Can Make It Happen!
          </h2>
        </div>
        <div id="reverse-mortgage-texas-home-p">
          <p>
            When it comes to buying a home in Houston, having a reliable Loan
            Officer by your side is crucial. Look no further than Kenny
            Farshchian, an experienced native of Houston with a proven track
            record of success in securing mortgages. With over 10 years of
            helping individuals and families find their dream homes, Kenny
            possesses extensive knowledge of the local real estate market,
            making him the perfect choice to tailor a mortgage solution to your
            unique needs.
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
              Kenny leads a dedicated team of customer-oriented mortgage loan
              officers in Houston, Texas, all committed to helping you find your
              ideal home loan. At Primary Residential Mortgage Inc., our mission
              is to ensure you get pre-qualified for a loan, providing you with
              a clear understanding of how much you can afford for your new
              home.
            </p>
          </div>
        </Stack>
        <div id="reverse-mortgage-texas-home-p">
          <p>
            With access to a diverse group of lenders, Kenny and his team can
            secure the best possible interest rates and terms that align
            perfectly with your specific situation. We take pride in being a
            full-service mortgage loan officer team recommended by homeowners
            throughout Houston, TX, making the entire process easy and
            straightforward for you.
          </p>
        </div>
        <div id="reverse-mortgage-texas-home-p">
          <p>
            Our exceptional reputation in the Texas mortgage lending industry
            speaks for itself, and you can trust that you're in capable hands
            with us. If you're on the lookout for a loan officer in Houston,
            Texas, who genuinely prioritizes your needs, don't hesitate to reach
            out to Kenny Farshchian today! Let's work together to secure your
            dream home in the vibrant city of Houston
          </p>
        </div>
      </Container>
      <div id="salt-lake-city-fourth-section">
        <Container maxWidth="md">
          {/* fourth section */}
          <h2 id="reverse-mortgage-texas-salt-lake-city-h2">
           Loan Officer Kenny Farshchian, the Trusted Mortgage Expert!
          </h2>
          <p id="salt-lake-city-p">
            Introducing Kenny Farshchian - Your Trusted Mortgage Expert in
            Houston When it comes to securing their dream homes in Houston,
            savvy homebuyers turn to none other than Kenny Farshchian, the
            expert at Primary Residential Mortgage Inc. With a stellar
            reputation in the industry, Kenny provides a seamless and
            hassle-free experience for his clients, making him the go-to
            mortgage professional in the area. Kenny's extensive knowledge of
            the mortgage industry allows him to delve into each client's unique
            financial situation, swiftly identifying the most suitable options
            available. This ensures that his clients get the best possible
            offers on their home loans, saving them time and money in the long
            run.
          </p>
          <br></br>
          <p id="salt-lake-city-p">
            As one of the finest mortgage loan officers in Houston, Kenny
            Farshchian is a well-known name among potential homeowners. His
            unwavering passion lies in helping individuals in the communities he
            serves achieve their dream of homeownership. For Houston homeowners,
            Kenny specializes in providing a distinct kind of refinance mortgage
            trusted to enhance the value of their investments.
          </p>
          <br></br>
          <p id="salt-lake-city-p">
            So, what makes Kenny Farshchian stand out in Houston's competitive
            market? Firstly, he boasts an extensive network of industry
            contacts, giving him access to convenient and affordable mortgage
            options that have earned high praise from his clients. Moreover, his
            in-depth understanding of the local housing market enables him to
            devise innovative solutions for even the most intricate financing
            challenges, always prioritizing his clients' best interests.
          </p>
          <br></br>
          <p id="salt-lake-city-p">
            If you're in the market for a new home loan or seeking a refinance
            mortgage that Houston residents wholeheartedly trust, don't hesitate
            to get in touch with Kenny Farshchian. Discover firsthand what this
            esteemed mortgage expert can do for you, as he continues to make
            homeownership dreams a reality with unparalleled dedication and
            expertise.
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

export default Houston;
