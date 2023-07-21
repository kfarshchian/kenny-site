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
            <Route path="/" element={<Home />}/>
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/loans" element={<Loans />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/Utah-mortgage-salt-lake-city" element={<SaltLakeCity />} />
            <Route path="/Utah-mortgage-Layton" element={<Layton />} />
            <Route path="/Utah-mortgage-Bountiful" element={<Bountiful />} />
            <Route path="/Utah-Mortgage-Syracuse" element={<Syracuse />} />
            <Route path="/Reverse-mortgage-Utah-Ogden" element={<Ogden />} />
            <Route path="/Reverse-mortgage-Utah-WestValleyCity" element={<WestValleyCity />} />
            <Route path="/Reverse-mortgage-Florida-Venice" element={<Venice />} />
            <Route path="/Reverse-mortgage-Florida-Palm-Beach" element={<PalmBeach />} />
            <Route path="/Reverse-mortgage-Florida-Naples" element={<Naples />} />
            <Route path="/Reverse-mortgage-Texas-Austin" element={<Austin />} />
            <Route path="/Reverse-mortgage-Texas-Dallas" element={<Dallas />} />
            <Route path="/Reverse-mortgage-Texas-Houston" element={<Houston />} />
            <Route path="/our-process" element={<OurProcess />} />
            <Route path="/Disclosure" element={<Disclosure />} />
            <Route path="/closing-guarantee" element={<ClosingGuarantee />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/where-to-apply-for-a-mortgage" element={<Apply />} />
            <Route path="/where-to-get-a-mortgage" element={<GetMortgage />} />
            <Route path="/how-much-mortgage-can-I-afford" element={<Afford />} />
          </Routes>
          </ParallaxProvider>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
