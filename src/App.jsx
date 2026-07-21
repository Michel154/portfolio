import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";

import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Who from "./components/Who";
import Works from "./components/Works";
import ProjectsPage from "./components/ProjectsPage";
import Navbar from "./Navbar";

const Container = styled.div`
  height: 100vh;
  scroll-behavior: smooth;
  scrollbar-width: none;
  background-color: #0a192f;
  color: white;

  overflow-y: auto;

  font-family: sans-serif;

  @media (min-width: 1025px) {
    scroll-snap-type: y mandatory;
  }

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
`;

function Home() {
  return (
    <Container id="main-scroll-container">
      <div id="home">
        <Hero />
      </div>
      <div id="who">
        <Who />
      </div>
      <div id="works">
        <Works />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </Container>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
