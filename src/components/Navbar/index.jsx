import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.scss";
import { Menu, MenuItem } from "@mui/material";
import PageLink from "../PageLink/PageLink";
import AppMenu from "../AppMenu";
import { useState } from "react";
import { NestedMenuItem } from "mui-nested-menu";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const pageNames = [];
const pageLinks = [];

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const serviceAreahandleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const serviceAreahandleClose = () => {
    setAnchorEl(null);
  };

  const [ABanchorEl, ABsetAnchorEl] = useState(null);
  const ABopen = Boolean(ABanchorEl);

  const aboutUshandleClick = (event) => {
    ABsetAnchorEl(event.currentTarget);
  };

  const aboutushandleClose = () => {
    ABsetAnchorEl(null);
  };

  return (
    <>
      <div className="navbar">
        {/* This is the logo section */}
        <AppMenu pages={pageNames} pageLinks={pageLinks} />
        <div className="logo-container">
          <Link
            to="/"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              className="logo"
              id="Utah-Mortgage-KENNY-LOGO"
              src="./logos/smalllogokenny.png"
              alt="Logic Lounge logo"
              style={{ height: "100px" }}
            />
          </Link>
        </div>
        {/* This is the page link sections */}
        <div className="page-links">
          <div className="pageLink" id="home">
            <PageLink
              id="home"
              component="button"
              className="pageLink"
              page={"Home"}
              pageLink={"/"}
            />
          </div>
          <div className="pageLink">
            <NavLink
              sx={{
                textTransform: "none",
              }}
              onClick={aboutUshandleClick}
            >
              About Us
              <ArrowDropDownIcon sx={{ fontSize: 15, margin: 0 }} /> 
            </NavLink>
            <Menu
              anchorEl={ABanchorEl}
              open={ABopen}
              onClose={aboutushandleClose}
              sx={{ color: "#4F758B !important" }}
            >
              <MenuItem onClick={aboutushandleClose}>
                <span className="mortgage-company-utah-about-us">
                  <PageLink class="" page={"About Us"} pageLink={"/aboutus"} />
                </span>
              </MenuItem>
              <MenuItem onClick={aboutushandleClose}>
                <span className="mortgage-company-utah-team">
                  <PageLink class="" page={"Our Process"} pageLink={"/our-process"} />
                </span>
              </MenuItem>
              <MenuItem onClick={aboutushandleClose}>
                <span className="mortgage-company-utah-team">
                  <PageLink class="" page={"Closing Guarantee"} pageLink={"/closing-guarantee"} />
                </span>
              </MenuItem>
              <MenuItem onClick={aboutushandleClose}>
                <span className="mortgage-company-utah-team">
                  <PageLink class="" page={"Blog"} pageLink={"/blog"} />
                </span>
              </MenuItem>
            </Menu>
            <NavLink
              sx={{
                textTransform: "none",
              }}
              onClick={serviceAreahandleClick}
            >
              Service Area
              <ArrowDropDownIcon sx={{ fontSize: 15, margin: 0 }} /> 
            </NavLink>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={serviceAreahandleClose}
            >
              <MenuItem onClick={serviceAreahandleClose}>
                <span className="mortgage-company-utah-team">
                  <NestedMenuItem
                    label="Utah"
                    id="try"
                    style={pageLinks}
                    parentMenuOpen={open}
                  >
                    <span className="mortgage-company-utah-team">
                    <PageLink
                        page={"Salt Lake City"}
                        pageLink={`/Utah-mortgage-salt-lake-city`}
                      ></PageLink>
                      <PageLink
                        page={"Layton"}
                        pageLink={`/Utah-mortgage-Layton`}
                      ></PageLink>
                      <PageLink
                        page={"Bountiful"}
                        pageLink={`/Utah-mortgage-Bountiful`}
                      ></PageLink>
                      <PageLink
                        page={"Syracuse"}
                        pageLink={`/Utah-Mortgage-Syracuse`}
                      ></PageLink>
                      <PageLink
                        page={"Ogden"}
                        pageLink={`/Reverse-mortgage-Utah-Ogden`}
                      ></PageLink>
                      <PageLink
                        page={"West Valley City"}
                        pageLink={`/Reverse-mortgage-Utah-WestValleyCity`}
                      ></PageLink>
                      
                    </span>
                  </NestedMenuItem>
                </span>
              </MenuItem>
              <MenuItem onClick={serviceAreahandleClose}>
                <span className="mortgage-company-utah-team">
                  <NestedMenuItem
                    label="Florida"
                    style={pageLinks}
                    parentMenuOpen={open}
                  >
                    <span className="mortgage-company-utah-team">
                      <PageLink page={"Venice"} pageLink={`/Reverse-mortgage-Florida-Venice`} />
                      <PageLink page={"Palm Beach"} pageLink={`/Reverse-mortgage-Florida-Palm-Beach`} />
                      <PageLink page={"Naples"} pageLink={`/Reverse-mortgage-Florida-Naples`} />
                    </span>
                  </NestedMenuItem>
                </span>
              </MenuItem>
              <MenuItem onClick={serviceAreahandleClose}>
                <span className="mortgage-company-utah-team">
                  <NestedMenuItem
                    label="Texas"
                    style={pageLinks}
                    parentMenuOpen={open}
                  >
                    <span className="mortgage-company-utah-team">
                      <PageLink page={"Austin"} pageLink={`/Reverse-mortgage-Texas-Austin`} />
                      <PageLink page={"Houston"} pageLink={`/Reverse-mortgage-Texas-Houston`} /> 
                      <PageLink page={"Dallas"} pageLink={`/Reverse-mortgage-Texas-Dallas`} />
                    </span>
                  </NestedMenuItem>
                </span>
              </MenuItem>
            </Menu>
          </div>
          <div className="pageLink">
            <PageLink id="pageLink" page={"Contact Us"} pageLink={"/contact"} />
          </div>
          <div className="pageLink">
            <PageLink id="pageLink" page={"Loans"} pageLink={"/loans"} />
          </div>
        </div>
        {/* This is the user link sections */}
        <div className="user-links">
          <>
            <div className="pageLink">
              <section className="mortgage-company-utah-apply-today">
                <PageLink page="Loan Questionnaire" pageLink="https://apply.prmihome.com/#/journey?referrerId=kenf%40primeres.com" />
              </section>
            </div>
            <div className="pageLink">
              <section className="mortgage-company-utah-team-number">
                <PageLink page="801-520-8475" pageLink="" />
              </section>
            </div>
          </>
        </div>
        <div className="logo-container">
          <Link
            to="/"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
            }}
          >
            <img
              className="logo"
              id="Utah-Mortgage-PRMI-LOGO"
              src="./logos/shortlogo.png"
              alt="Logic Lounge logo"
              style={{ height: "75px" }}
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
