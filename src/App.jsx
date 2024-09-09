import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  About,
  Contact,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Work,
} from "./components";
import StarsCanvas from "./components/canvas/Stars";
import ProblemSolving from "./components/ProblemSolving";
import ResumeComponent from "./components/ResumeView";
import ProjectPage from "./components/ProjectPage";
import PersonalProject from "./components/PersonalProject";
const HomePage = () => (
  <div className="relative z-0 bg-primary">
    <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
      <Navbar />
      <Hero />
    </div>
    <About />
    <Work />
    <Tech />
    <PersonalProject />
    <ProblemSolving />
    <ResumeComponent />
    <Feedbacks />
    <div className="relative z-0">
      <Contact />
      <StarsCanvas />
    </div>
  </div>
);

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<ProjectPage />} />
    </Routes>
  </BrowserRouter>
);
export default App;
