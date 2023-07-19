import React, { useEffect } from "react";
import disclosureInfo from "../logos/Disclosure.jpg";
import Loader from "react-loaders";
import { ParallaxBanner } from "react-scroll-parallax";
import ContactForm from "../components/ContactForm/ContactForm";
import "./layout.scss";
import { Container } from "@mui/material";

function Disclosure() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <ParallaxBanner
        title="reverse mortgage utah"
        id="disclosure-Container-1"
        layers={[
          { image: disclosureInfo, speed: -20 },
          { image: disclosureInfo, speed: -10 },
        ]}
        className="aspect-[2/1]"
      >
        <div title="reverse mortgage utah" id="disclosure-banner-title">
          <h1 title="reverse mortgage utah" id="disclosure-Container-h1">
            Disclosure & Information
          </h1>
        </div>
      </ParallaxBanner>
      <Container >
        <h2>Conventional 30-year Fixed-Rate Loan:</h2>
        <p id="disclosure-p">
          Rate(s) quoted is/are based upon a $400,000, 30-year fixed mortgage.
          25% down payment, 740 credit score, and a DTI of 35% required. Rates
          are subject to change and are subject to borrower(s) qualification.
          *Rates quoted are based on the examples above. Rates are subject to
          change and are subject to borrower qualification. Terms of repayment
          that reflect the payment obligations over the full term of the loan,
          including any balloon payment (typically a payment schedule). Payment
          does not include taxes and insurance. The actual payment amount will
          be greater. Some state and county maximum loan amount restrictions may
          apply.
        </p>

        <h2>Conventional 15-year Fixed-Rate Loan: </h2>
        <p id="disclosure-p">
          Rate(s) quoted is/are based upon a $400,000, 15-year fixed mortgage.
          25% down payment, 740 credit score, and a DTI of 35% required. Rates
          are subject to change and are subject to borrower(s) qualification.
          *Rates quoted are based on the examples above. Rates are subject to
          change and are subject to borrower qualification. Terms of repayment
          that reflect the repayment obligations over the full term of the loan,
          including any balloon payment (typically a payment schedule). Payment
          does not include taxes and insurance. The actual payment amount will
          be greater. Some state and county maximum loan amount restrictions may
          apply.
        </p>

        <h2>FHA Loan: </h2>
        <p id="disclosure-p">
          Rate(s) quoted is/are based upon a $400,000, 30-year fixed mortgage.
          3.5% down payment, 740 credit score, and a DTI of 35% required. Rates
          are subject to change and are subject to borrower(s)qualification.
          *Rates quoted are based on the examples above. Rates are subject to
          change and are subject to borrower qualification. Terms of repayment
          that reflect the payment obligations over the full term of the loan,
          including any balloon payment (typically a payment schedule).
          Thereafter, the monthly loan payment will consist of equal monthly
          principal and interest payments only until the end of the loan.
          Payment does not include taxes and insurance premiums. The actual
          payment amount will be greater. Some state and county maximum loan
          amount restrictions may apply.
        </p>

        <h2>VA Loan: </h2>
        <p id="disclosure-p">
          Rate(s) quoted is/are based upon a $400,000, 30-year fixed mortgage.
          0% down payment, 740 credit score, a DTI of 35% required, and a 2.3%
          funding fee. Rates are subject to change and are subject to
          borrower(s) qualification. *Rates quoted are based on the examples
          above. Rates are subject to change and are subject to borrower
          qualification. Terms of repayment that reflect the repayment
          obligations over the full term of the loan, including any balloon
          payment (typically a payment schedule). Payment does not include taxes
          and insurance premiums. The actual payment amount will be greater.
          Some state and county maximum loan amount restrictions may apply. VA
          loans do not require PMI. The VA loan is a benefit of military service
          and only offered to veterans, surviving spouses, and active-duty
          military. The Home Loan Expert isa VA approved Lender; not endorsed or
          sponsored by the Dept. of Veterans Affairs or any government agency.
          VA Interest rate reduction loans (IRRRL) are only for Veterans who
          currently have a VA loan, current loan rate restrictions apply, and
          limits to recoupment of costs and fees apply. Program and Lender
          overlays apply. *Closing costs and fees may still apply. VA home loan
          purchases, have options for 0% down payment, No private mortgage
          Insurance requirements, competitive interest rates, with specific
          qualification requirements. VA Interest rate reduction loans (IRRRL)
          are only for Veterans who currently have a VA loan, current loan rate
          restrictions apply, and limits to recoupment of costs and fees apply.
          VA Cash-out Refinances are available for Veterans with or without
          current VA loans. Policies and guidelines may vary and are subject to
          the individual borrower(s) qualification. Program and Lender overlays
          apply.
        </p>

        <p id="disclosure-p">
          by Primary Residential Mortgage, Inc. NMLS#: 919520 Utah DRE Mortgage
          Office License # 8335595. MLO 1639863. All loans subject to credit and
          property approval. PRMI NMLS 3094. PRMI is an Equal Housing Lender.
          Some products and services may not be available in all states. Credit
          and collateral are subject to approval. Terms and conditions apply.
          This is not a commitment to lend. Programs, rates, terms and
          conditions are subject to change without notice.
        </p>
      </Container>

      <div id="Reverse-Mortgage-Florida-Container-contact">
        <ContactForm id="Reverse-Mortgage-Florida-Container-contact-2"></ContactForm>
      </div>
      <Loader type="ball-rotate" />
    </>
  );
}

export default Disclosure;
