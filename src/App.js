import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Navbar";
import Footer from "./components/Footer";
import Loans from "./pages/Loans";
import ContactUs from "./pages/ContactUs";
import SaltLakeCity from "./pages/SaltLakeCity";
import AboutUs from "./pages/Aboutus";
import Layton from "./pages/Layton";
import Bountiful from "./pages/Bountiful.jsx";
import Syracuse from "./pages/Syracuse.jsx";
import Ogden from "./pages/Ogden";
import WestValleyCity from "./pages/WestValleyCity.jsx";
import Venice from "./pages/Venice.jsx";
import Naples from "./pages/Naples.jsx";
import PalmBeach from "./pages/PalmBeach.jsx";
import Austin from "./pages/Austin";
import Dallas from "./pages/Dallas.jsx";
import Houston from "./pages/Houston";
import OurProcess from "./pages/OurProcess";
import Disclosure from "./pages/Disclosure.jsx";
import ClosingGuarantee from "./pages/ClosingGuarantee.jsx";
import Afford from "./pages/Afford";
import Apply from "./pages/Apply";
import GetMortgage from "./pages/GetMortgage"
import { ParallaxProvider } from 'react-scroll-parallax';
import Blog from './pages/Blog';
import './theme.scss'

function App() {
  return (
    <Router>
      <div className="flex-column justify-flex-start min-100-vh">
        <Header />
        <div className="container">
          <ParallaxProvider>
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/aboutus" element={<AboutUs />} />
            <Route exact path="/loans" element={<Loans />} />
            <Route exact path="/contact" element={<ContactUs />} />
            <Route exact path="/Utah-mortgage-salt-lake-city" element={<SaltLakeCity />} />
            <Route exact path="/Utah-mortgage-Layton" element={<Layton />} />
            <Route exact path="/Utah-mortgage-Bountiful" element={<Bountiful />} />
            <Route exact path="/Utah-Mortgage-Syracuse" element={<Syracuse />} />
            <Route exact path="/Reverse-mortgage-Utah-Ogden" element={<Ogden />} />
            <Route exact path="/Reverse-mortgage-Utah-WestValleyCity" element={<WestValleyCity />} />
            <Route exact path="/Reverse-mortgage-Florida-Venice" element={<Venice />} />
            <Route exact path="/Reverse-mortgage-Florida-Palm-Beach" element={<PalmBeach />} />
            <Route exact path="/Reverse-mortgage-Florida-Naples" element={<Naples />} />
            <Route exact path="/Reverse-mortgage-Texas-Austin" element={<Austin />} />
            <Route exact path="/Reverse-mortgage-Texas-Dallas" element={<Dallas />} />
            <Route exact path="/Reverse-mortgage-Texas-Houston" element={<Houston />} />
            <Route exact path="/our-process" element={<OurProcess />} />
            <Route exact path="/Disclosure" element={<Disclosure />} />
            <Route exact path="/closing-guarantee" element={<ClosingGuarantee />} />
            <Route exact path="/blog" element={<Blog />} />
            <Route exact path="/where-to-apply-for-a-mortgage" element={<Apply />} />
            <Route exact path="/where-to-get-a-mortgage" element={<GetMortgage />} />
            <Route exact path="/how-much-mortgage-can-I-afford" element={<Afford />} />
          </Routes>
          </ParallaxProvider>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
