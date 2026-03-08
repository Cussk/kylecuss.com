import React from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";

import ScrollToTop from "./components/ScrollToTop";

import About from "./routes/About";
import Contact from "./routes/Contact";
import Home from "./routes/Home";
import CaseStudies from "./routes/CaseStudies";
import Resume from "./routes/Resume";

function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;