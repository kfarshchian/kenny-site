import React, {useEffect} from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import closingGuarantee from "../logos/mortgage-broker-utah-approved.jpg";

function ClosingGuarantee() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
<ParallaxBanner
        title="reverse mortgage utah"
        id="mortgage-broker-utah-closing-guarantee-Container-1"
        layers={[
          { image: closingGuarantee, speed: -20 },
          { image: closingGuarantee, speed: -10 },
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
            Loan Closing Guarantee
          </h1>
        </div>
      </ParallaxBanner>

    </>
  );
}

export default ClosingGuarantee;
