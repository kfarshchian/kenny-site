import React from 'react';
import reverseMortgageFlorida from '../logos/reverse-mortgage-florida-reverse-mortgage-texas.png'
import { ParallaxBanner } from 'react-scroll-parallax';
import './layout.scss'
import { Container, Button, Grid } from '@mui/material';
import Contactform from '../components/ContactForm/ContactForm'
import Loader from 'react-loaders'






function Loans() {
  

  return (
    <>
        <ParallaxBanner
        id='Reverse-Mortgage-Florida-Container-1'
      layers={[
        { image: reverseMortgageFlorida, speed: -20 },
        { image: reverseMortgageFlorida, speed: -10 },
      ]}
      className="aspect-[2/1]"
    >
      <div id='Reverse-Mortgage-Florida-Container-banner-title'>
        <h1 id='Reverse-Mortgage-Florida-Container-h1' >Types of Home Loans</h1>
      </div>
    </ParallaxBanner>
      <Container>
        <h2 id='Reverse-Mortgage-Florida-Container-h2'>Our Services</h2>
        <Button  href={'#Reverse-Mortgage-Florida-Container-button'} id='Reverse-Mortgage-Florida-Container-button'>Home Loans</Button> <Button href={'https://apply.prmihome.com/#/journey?referrerId=kenf%40primeres.com'} id='Reverse-Mortgage-Florida-Container-button'>Refinance</Button> 
        <h3 id='Reverse-Mortgage-Florida-Container-h3'>Not sure what type of loan you need, or what you qualify for? We offer more than a dozen types of loans and expert guidance to help you find the right loan for the home you want, with the best payment options.</h3>
        <Button id='Reverse-Mortgage-Florida-Container-button' href={'https://apply.prmihome.com/#/journey?referrerId=kenf%40primeres.com'}>Loan Questionnaire</Button>
        
        <Grid id='Reverse-Mortgage-Florida-Container-grid' container spacing={3}>
        <Grid  item xs={4}>
            <div>
              <h4 id='Reverse-Mortgage-Florida-Container-h4'>Reverse Mortgage</h4>
              <p>Enables the borrower to access the unencumbered value of the property.</p>
            </div>
            </Grid>
        <Grid item xs={4}>
            <div>
              <h4 id='Reverse-Mortgage-Florida-Container-h4'>Adjustable Rate Mortgage (ARM)</h4>
              <p>Designed for those who wish to start out with a lower introductory monthly payment.</p>
            </div>
            </Grid>
            <Grid item xs={4}>
            <div>
              <h4 id='Reverse-Mortgage-Florida-Container-h4'>FHA 203k Dream Loan</h4>
              <p>Loans up to $31k above purchase price toward remodeling or home repairs.</p>
            </div>
            </Grid>
            <Grid item xs={4}>
            <div>
              <h4 id='Reverse-Mortgage-Florida-Container-h4'>Manufactured Home Loan</h4>
              <p>Special loan programs for either built or unbuilt manufactured homes.</p>
            </div>
            </Grid>
            <Grid item xs={4}>
            <div>
              <h4 id='Reverse-Mortgage-Florida-Container-h4'>Chenoa Fund</h4>
              <p>Down payment assistance program with flexible options.</p>
            </div>
            </Grid>
            <Grid item xs={4}>
            <div>
              <h4 id='Reverse-Mortgage-Florida-Container-h4'>FHA Solar Wind and Select</h4>
              <p>Finances home purchase and installation of energy-saving upgrades.</p>
            </div>
            </Grid>
            <Grid item xs={4}>
            <div>
              <h4 id='Reverse-Mortgage-Florida-Container-h4'>One-Time Close Construction</h4>
              <p>Finances land, construction, and permanent mortgage into one loan.</p>
            </div>
            </Grid>
            <Grid item xs={4}>
            <div>
              <h4 id='Reverse-Mortgage-Florida-Container-h4'>Conventional</h4>
              <p>“Traditional” loan with low rates and low down payment options.</p>
            </div>
            </Grid>
            <Grid item xs={4}>
            <div>
              <h4 id='Reverse-Mortgage-Florida-Container-h4'>Fresh Start</h4>
              <p>Special financing for buyers with past credit issues like bankruptcy, short sale, or foreclosure.</p>
            </div>
            </Grid>
            <Grid item xs={4}>
            <div>
              <h4 id='Reverse-Mortgage-Florida-Container-h4'>Jumbo</h4>
              <p>Finances home purchases up to $2.5 million with options for low down payment and no mortgage insurance.</p>
            </div>
            </Grid>
            <Grid item xs={4}>
            <div>
              <h4 id='Reverse-Mortgage-Florida-Container-h4'>FHA</h4>
              <p>Government-backed loan great for first-time homebuyers or those with higher debt-to-income ratios.</p>
            </div>
            </Grid>
            <Grid item xs={4}>
            <div>
              <h4 id='Reverse-Mortgage-Florida-Container-h4'>HUD Program</h4>
              <p>Low down for eligible properties.</p>
            </div>
            </Grid>
            <Grid item xs={4}>
            <div>
              <h4 id='Reverse-Mortgage-Florida-Container-h4'>USDA</h4>
              <p>Rural property financing with no down payment.</p>
            </div>
            </Grid>
            <Grid item xs={4}>
            <div>
              <h4 id='Reverse-Mortgage-Florida-Container-h4'>FHA 203(h) Disaster Relief Loan</h4>
              <p>Offers zero-down financing to those whose homes were damaged or destroyed by a natural disaster.</p>
            </div>
            </Grid>
            <Grid item xs={4}>
            <div>
              <h4 id='Reverse-Mortgage-Florida-Container-h4'>Investment</h4>
              <p>Options to finance investment property, or to use rental income or asset depreciation as qualifying income.</p>
            </div>
            </Grid>
            <Grid item xs={4}>
            <div>
              <h4 id='Reverse-Mortgage-Florida-Container-h4'>VA</h4>
              <p>Loans tailored to those who have served or are currently serving in the military.</p>
            </div>
            </Grid>
            
          
            </Grid>
        </Container>
        <Container>
          

          <p>
            <br></br>
            <br></br>
          </p>
        </Container>
        <div id='Reverse-Mortgage-Florida-Container-contact'>
        <Contactform id='Reverse-Mortgage-Florida-Container-contact-2'></Contactform>
        </div>
        <Loader type="ball-rotate" />
    </>
  );
}

export default Loans;
