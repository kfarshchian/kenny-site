import React, { useEffect } from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import { Container, Stack, Divider } from "@mui/material";
import ContactForm from "../components/ContactForm/ContactForm";
import imgAustin from "../logos/austin-city-reverse-mortgage-texas.jpg";
import austinSign from "../logos/austin-sign-reverse-mortgage-texas.jpg";
import Loader from "react-loaders";
import projectSection from "../logos/austin-coins-reverse-mortgage-texas.jpg";

function Austin() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ParallaxBanner
        title="reverse mortgage utah"
        id="mortgage-broker-utah-closing-guarantee-Container-1"
        layers={[
          { image: imgAustin, speed: -20 },
          { image: imgAustin, speed: -10 },
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
            Austin<br></br>Reverse Mortgage Texas
          </h1>
        </div>
      </ParallaxBanner>
      <Container maxWidth="md">
        {/* first section */}
        <p id="reverse-mortgage-texas-contact-us-Container-p">
          Introducing Kenny Farshchian, your trusted home loan expert in Austin,
          Texas! With a wealth of experience, Kenny has assisted numerous
          homebuyers in finding the ideal home loan tailored to their specific
          needs and budget. He is dedicated to guiding you through the entire
          process, ensuring you secure the most favorable interest rate and
          terms for your dream home in the beautiful city of Austin. Rest
          assured, with Kenny Farshchian by your side, your home financing
          journey in Austin, Texas, will be a smooth and rewarding one.
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
                With years of experience in the mortgage industry, Kenny
                Farshchian and his team know how to find the right loan for you
                and make sure the process goes smoothly.
              </p>
              <p id="salt-lake-city-p">
                As licensed lenders who know the ins and outs of mortgages in
                Austin, TX, people trust us to help with down payment assistance
                programs if you need a little extra help. We also have a wealth
                of experience in the home-buying process, so we can assist you
                every step of the way.
              </p>
              <p id="salt-lake-city-p">
                When you're looking for a mortgage in Austin, Texas, you want
                someone who knows the area and can find you the best financing
                options. Kenny Farshchian and his team of experienced PRMI
                professionals are here to help you with all your mortgage needs.
                We'll work with you to find the right mortgage for your unique
                situation.
              </p>
            </Stack>
          </div>
        </Stack>

        <p id="salt-lake-city-p">
          Whether you're buying your first home, looking to refinance, or
          interested in leveraging your home equity, we're here to help you get
          where you want to go. Kenny Farshchian is the most sought-after
          broker, and for good reason, because he's knowledgeable, experienced,
          and always puts his clients' best interests first. He'll also guide
          you through the entire process, from start to finish, so you can be
          confident that you're getting the best possible deal. Contact us today
          to discover why our company is the most ideal provider for a
          first-time buyer home loan Austin, TX residents boast about!
        </p>
      </Container>

      {/* second section */}
      <div className="reverse-mortgage-utah-home-Container-stack-img1">
        <div className="image-container">
          <img src={austinSign} alt="reverse mortgage Utah Moving Boxes" />
        </div>
        <div id="reverse-mortgage-utah-home-text-1" className="text-container">
          <h2
            title="reverse mortgage utah"
            id="reverse-mortgage-utah-home-parallax-h1"
          >
            The Best loan officer Austin, Texas Has To Offer: Kenny Farshchian
          </h2>
          <p>
            Introducing Kenny Farshchian and his experienced team at Primary
            Residential Mortgage Inc., your go-to mortgage lenders in Austin,
            TX! Your home is likely your biggest investment, and we understand
            the importance of securing the best mortgage terms for your
            financing or refinancing needs. Kenny and his team are dedicated to
            finding a mortgage loan that aligns with your short-term and
            long-term goals.
          </p>
          <br></br>
          <p>
            With a range of mortgage products available, including Fixed Rate
            Mortgages, Adjustable Rate Mortgages (ARMs), VA Loans, FHA Loans,
            USDA Loans, Investment Loans, and Conventional Loans, we are
            well-equipped to cater to your unique situation and requirements.
          </p>
          <br></br>
          <p>
            Having served the Austin, TX community for over 10 years, Kenny
            Farshchian is a trusted name in the industry. As one of the top
            mortgage lenders, we take pride in providing personalized solutions
            to meet your needs. Count on us for competitive rates and favorable
            terms on all our mortgage products.
          </p>
          <br></br>
          <p>
            If you're looking for a more affordable mortgage refinance or a
            first-time buyer home loan, Austin, TX residents recommend Kenny
            Farshchian and his team. We have a high approval success rate and
            are committed to helping you achieve your homeownership dreams.
            Contact us today to learn more about our services. We're excited to
            work with you!
          </p>
        </div>
      </div>
      <Container maxWidth="md">
        {/* third section */}

        <div id="reverse-mortgage-texas-home-h2">
          <h2>
            Trusted Loan Officer in Austin - Secure Your Dream Home with Kenny
            Farshchian!
          </h2>
        </div>
        <div id="reverse-mortgage-texas-home-p">
          <p>
            When it comes to buying a home in Austin, the first step is to
            determine your borrowing capacity. That's where a reliable Loan
            Officer comes in to expertly guide you through the process. Look no
            further than Kenny Farshchian, an experienced native of Austin with
            an impressive track record of success in securing mortgages. With
            over 10 years of helping individuals and families find their dream
            homes, Kenny possesses extensive knowledge of the local real estate
            market, ensuring he can find the perfect mortgage solution tailored
            to your unique needs.
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
              Kenny Farshchian leads a team of dedicated, customer-oriented
              mortgage loan officers in Austin, Texas, committed to assisting
              clients in finding their ideal home loans. At Primary Residential
              Mortgage Inc., we make it our mission to help you get
              pre-qualified for a loan, providing you with a clear understanding
              of how much you can afford for your new home.
            </p>
          </div>
        </Stack>
        <div id="reverse-mortgage-texas-home-p">
          <p>
            With access to a diverse group of lenders, Kenny and his team can
            secure the best possible interest rates and terms that align with
            your specific situation. We pride ourselves on being a full-service
            mortgage loan officer team recommended by homeowners in Austin, TX,
            making the process easy and straightforward for you.
          </p>
        </div>
        <div id="reverse-mortgage-texas-home-p">
          <p>
            The PRMI loan officers are renowned for their exceptional reputation
            in the business, especially in the Texas mortgage lending industry.
            Rest assured that you're in capable hands with us. If you're
            searching for a loan officer in Austin, Texas, who genuinely
            prioritizes your needs, reach out to Kenny Farshchian today! Let's
            work together to secure your dream home in Austin.
          </p>
        </div>
      </Container>
      <div id="salt-lake-city-fourth-section">
        <Container maxWidth="md">
          {/* fourth section */}
          <h2 id="reverse-mortgage-texas-salt-lake-city-h2">
            Introducing Kenny Farshchian - Your Trusted Mortgage Expert in
            Austin
          </h2>
          <p id="salt-lake-city-p">
            When it comes to securing their dream homes in Austin, savvy
            homebuyers turn to none other than Kenny Farshchian, the expert at
            Primary Residential Mortgage Inc. With a stellar reputation in the
            industry, Kenny provides a seamless and hassle-free experience for
            his clients, making him the go-to mortgage professional in the area.
            Kenny's extensive knowledge of the mortgage industry allows him to
            delve into each client's unique financial situation, swiftly
            identifying the most suitable options available. This ensures that
            his clients get the best possible offers on their home loans, saving
            them time and money in the long run.
          </p>
          <br></br>
          <p id="salt-lake-city-p">
            As one of the finest mortgage loan officers in Austin, Kenny
            Farshchian is a well-known name among potential homeowners. His
            unwavering passion lies in helping individuals in the communities he
            serves achieve their dream of homeownership. For Austin homeowners,
            Kenny specializes in providing a distinct kind of refinance mortgage
            trusted to enhance the value of their investments.
          </p>
          <br></br>
          <p id="salt-lake-city-p">
            So, what makes Kenny Farshchian stand out in Austin's competitive
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
            mortgage that Austin residents wholeheartedly trust, don't hesitate
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

export default Austin;
