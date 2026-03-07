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
        <Route path="/kylecuss.com/" element={<Home />} />
        <Route path="/kylecuss.com/case-studies" element={<CaseStudies />} />
        <Route path="/kylecuss.com/about" element={<About />} />
        <Route path="/kylecuss.com/resume" element={<Resume />} />
        <Route path="/kylecuss.com/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;