import React from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Home from "./routes/Home";
import Project from "./routes/Project";
import Resume from "./routes/Resume";

function App() {
  return (
    <>
    <Routes>
      <Route path="/kylecuss.com/" element={<Home />} />
      <Route path="/kylecuss.com/project" element={<Project />} />
      <Route path="/kylecuss.com/about" element={<About />} />
      <Route path="/kylecuss.com/resume" element={<Resume />} />
      <Route path="/kylecuss.com/contact" element={<Contact />} />
    </Routes>
    </>
  );
}

export default App;
