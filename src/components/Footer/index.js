import React from "react";
import { Container, Link, Stack, Divider, Typography } from "@mui/material";
import smallLogo from "../../logos/smalllogokenny.png";
import prmiLogo from "../../logos/prmi1.png";
import equalLogo from "../../logos/equalhousingopp.png";
import PinDropIcon from "@mui/icons-material/PinDrop";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import InstagramIcon from "@mui/icons-material/Instagram";
import Map from "../Map/Map";
import "./footer.scss";

const Footer = () => {
  return (
    <div id="footer">
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "50px",
          paddingTop: "15px",
        }}
      >
        <Stack
          direction={{ xs: "column", sm: "row" }}
          id="stackLinks"
          sx={{
            marginTop: "15px",
            marginBottom: "15px",
            paddingLeft: "5px",
            paddingRight: "5px",
          }}
          divider={<Divider orientation="vertical" flexItem />}
          spacing={{ xs: 1, sm: 2, md: 2 }}
        >
          <Stack
            direction={{ xs: "column", sm: "column" }}
            id="stackLinksUtah"
            sx={{
              marginTop: "15px",
              marginBottom: "15px",
              paddingLeft: "5px",
              paddingRight: "5px",
            }}
            spacing={{ xs: 1, sm: 1, md: 1 }}
          >
            <h3 id="stateName" className="stateNameUtah" >Utah</h3>
            <Link
              id="reverse-mortgage-florida-footer"
              href="/SaltLakeCity"
              sx={{
                color: "black",
                textTransform: "none",
                textDecoration: "none",
              }}
            >
              Salt Lake City
            </Link>
            <Link
              id="reverse-mortgage-florida-footer"
              href="/Layton"
              sx={{
                color: "black",
                textTransform: "none",
                textDecoration: "none",
              }}
            >
              Layton
            </Link>
            <Link
              id="reverse-mortgage-florida-footer"
              href="/Bountiful"
              sx={{
                color: "black",
                textTransform: "none",
                textDecoration: "none",
              }}
            >
              Bountiful
            </Link>
            <Link
              id="reverse-mortgage-florida-footer"
              href="/Syracuse"
              sx={{
                color: "black",
                textTransform: "none",
                textDecoration: "none",
              }}
            >
              Syracuse
            </Link>
            <Link
              id="reverse-mortgage-florida-footer"
              href="/Ogden"
              sx={{
                color: "black",
                textTransform: "none",
                textDecoration: "none",
              }}
            >
              Ogden
            </Link>
            <Link
              id="reverse-mortgage-florida-footer"
              href="/West Valley City"
              sx={{
                color: "black",
                textTransform: "none",
                textDecoration: "none",
              }}
            >
              West Valley City
            </Link>
          </Stack>
          <Stack
            direction={{ xs: "column", sm: "column" }}
            id="stackLinks"
            sx={{
              marginTop: "15px",
              marginBottom: "15px",
              paddingLeft: "5px",
              paddingRight: "5px",
            }}
            spacing={{ xs: 1, sm: 1, md: 1 }}
          >
            <h3 id="stateName" >Florida</h3>
            <Link
              id="reverse-mortgage-florida-footer"
              href="/Venice"
              sx={{
                color: "black",
                textTransform: "none",
                textDecoration: "none",
              }}
            >
              Venice
            </Link>
            <Link
              id="reverse-mortgage-florida-footer"
              href="/PalmBeach"
              sx={{
                color: "black",
                textTransform: "none",
                textDecoration: "none",
              }}
            >
              Palm Beach
            </Link>
            <Link
              id="reverse-mortgage-florida-footer"
              href="/Naples"
              sx={{
                color: "black",
                textTransform: "none",
                textDecoration: "none",
              }}
            >
              Naples
            </Link>
            <h3 id="stateName" className="stateNameTexas">Texas</h3>
            <Link
              id="reverse-mortgage-florida-footer"
              href="/Austin"
              sx={{
                color: "black",
                textTransform: "none",
                textDecoration: "none",
              }}
            >
              Austin
            </Link>
            <Link
              id="reverse-mortgage-florida-footer"
              href="/Dallas"
              sx={{
                color: "black",
                textTransform: "none",
                textDecoration: "none",
              }}
            >
              Dallas
            </Link>
            <Link
              id="reverse-mortgage-florida-footer"
              href="/Houston"
              sx={{
                color: "black",
                textTransform: "none",
                textDecoration: "none",
              }}
            >
              Houston
            </Link>
          </Stack>
          <div id="mapDiv">
            <Map></Map>
          </div>
          <Stack
            direction={{ xs: "column", sm: "column" }}
            id="stackLinks"
            sx={{
              marginTop: "15px",
              marginBottom: "15px",
              paddingLeft: "5px",
              paddingRight: "5px",
            }}
            spacing={{ xs: 1, sm: 1, md: 1 }}
          >
            <Link
              id="reverse-mortgage-florida-footer"
              href="/"
              sx={{
                color: "black",
                textTransform: "none",
                textDecoration: "none",
              }}
            >
              Home
            </Link>
            <Link
              id="reverse-mortgage-florida-footer"
              href="/quickbooks"
              sx={{
                color: "black",
                textTransform: "none",
                textDecoration: "none",
              }}
            >
              Our Process
            </Link>
            <Link
              id="reverse-mortgage-florida-footer"
              href="/contact"
              sx={{
                color: "black",
                textTransform: "none",
                textDecoration: "none",
              }}
            >
              Loans
            </Link>
            <Link
              id="reverse-mortgage-florida-footer"
              href="/contact"
              sx={{
                color: "black",
                textTransform: "none",
                textDecoration: "none",
              }}
            >
              Contact
            </Link>
            <Link
              id="reverse-mortgage-florida-footer"
              href="/contact"
              sx={{
                color: "black",
                textTransform: "none",
                textDecoration: "none",
              }}
            >
              Closing Guarantee
            </Link>
            <Link
              id="reverse-mortgage-florida-footer"
              href="/contact"
              sx={{
                color: "black",
                textTransform: "none",
                textDecoration: "none",
              }}
            >
              disclosure and information
            </Link>
            <Link
              id="reverse-mortgage-florida-footer"
              href="/contact"
              sx={{
                color: "black",
                textTransform: "none",
                textDecoration: "none",
              }}
            >
              Licenses
            </Link>
            <Link
              id="reverse-mortgage-florida-footer"
              href="/contact"
              sx={{
                color: "black",
                textTransform: "none",
                textDecoration: "none",
              }}
            >
              Team
            </Link>
            <Link
              id="reverse-mortgage-florida-footer"
              href="/contact"
              sx={{
                color: "black",
                textTransform: "none",
                textDecoration: "none",
              }}
            >
              Consumer Voice
            </Link>
            <Link
              id="reverse-mortgage-florida-footer"
              href="/contact"
              sx={{
                color: "black",
                textTransform: "none",
                textDecoration: "none",
              }}
            >
              Terms of use
            </Link>
            
          </Stack>
        </Stack>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          sx={{
            marginTop: "15px",
            marginBottom: "15px",
            paddingLeft: "5px",
            paddingRight: "5px",
          }}
          divider={<Divider orientation="vertical" flexItem />}
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >
          <div>
            <Typography variant="caption">
              <PinDropIcon />
              Address:1165 Wilmington Ave #250, Salt Lake City, UT 84106
            </Typography>
          </div>
          <div>
            <Typography variant="caption">
              <LocalPhoneIcon />
              Phones:(801) 520-8475; (801) 320-7081{" "}
            </Typography>
          </div>
        </Stack>
        <Stack
          direction="row"
          sx={{ marginTop: "15px", marginBottom: "15px" }}
          divider={<Divider orientation="vertical" flexItem />}
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >
          <Link
            sx={{
              color: "black",
              textTransform: "none",
              textDecoration: "none",
            }}
            href="https://www.facebook.com/"
            target="_blank"
          >
            <FacebookIcon />
          </Link>
          <Link
            sx={{
              color: "black",
              textTransform: "none",
              textDecoration: "none",
            }}
            href="https://www.linkedin.com"
            target="_blank"
          >
            <LinkedInIcon />
          </Link>
          <Link
            sx={{
              color: "black",
              textTransform: "none",
              textDecoration: "none",
            }}
            href="https://www.instagram.com"
            target="_blank"
          >
            <InstagramIcon />
          </Link>
          <Link
            sx={{
              color: "black",
              textTransform: "none",
              textDecoration: "none",
            }}
            href="mailto:kenf@primeres.com"
            target="_blank"
          >
            <MailOutlineIcon />
          </Link>
        </Stack>
        <img id="smallLogo" src={smallLogo} alt="SmallLogo" />
        <Typography variant="caption">
          © 2023 | Kenny Farshchian | Primary Residential Mortgage, Inc. All
          Rights Reserved.
          | <a id="reverse-mortgage-florida-privacy-policy" href='https://www.primeres.com/privacy-policy'> Privacy Policy</a>
        </Typography>
        <Typography variant="caption" sx={{ textAlign: "center" }}>
          by Primary Residential Mortgage, Inc. NMLS#: 919520 Utah DRE Mortgage
          Office License # 8335595. MLO 0117736. MC3094-122. All loans subject
          to credit and property approval. PRMI NMLS 3094. PRMI is an Equal
          Housing Lender. Some products and services may not be available in all
          states. Credit and collateral are subject to approval. Terms and
          conditions apply. This is not a commitment to lend. Programs, rates,
          terms and conditions are subject to change without notice.
        </Typography>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          id="prmi-eoh"
          sx={{
            marginTop: "15px",
            marginBottom: "15px",
            paddingLeft: "5px",
            paddingRight: "5px",
            alignItems: "center",
          }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >
          <img id="prmiLogo" src={prmiLogo} alt="SmallLogo" />
          <img id="equalLogo" src={equalLogo} alt="SmallLogo" />
        </Stack>
      </Container>
    </div>
  );
};

export default Footer;
