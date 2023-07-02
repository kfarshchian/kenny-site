import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Navbar";
import Footer from "./components/Footer";
import Team from "./pages/Team";
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
import Services from "./pages/Services";
import Disclosure from "./pages/Disclosure.jsx";
import ClosingGuarantee from "./pages/ClosingGuarantee.jsx";

function App() {
  return (
    <Router>
      <div className="flex-column justify-flex-start min-100-vh">
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Team" element={<Team />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/Loans" element={<Loans />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/SaltLakeCity" element={<SaltLakeCity />} />
            <Route path="/Layton" element={<Layton />} />
            <Route path="/Bountiful" element={<Bountiful />} />
            <Route path="/Syracuse" element={<Syracuse />} />
            <Route path="/Ogden" element={<Ogden />} />
            <Route path="/WestValleyCity" element={<WestValleyCity />} />
            <Route path="/Venice" element={<Venice />} />
            <Route path="/Palm-Beach" element={<PalmBeach />} />
            <Route path="/Naples" element={<Naples />} />
            <Route path="/Austin" element={<Austin />} />
            <Route path="/Dallas" element={<Dallas />} />
            <Route path="/Houston" element={<Houston />} />
            <Route path="/OurProcess" element={<OurProcess />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Disclosure" element={<Disclosure />} />
            <Route path="/ClosingGuarantee" element={<ClosingGuarantee />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
