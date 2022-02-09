import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";

import Home from "./components/Home/Home.js";
import Navbar from "./components/Navbar/Navbar.js";
import Auth from "./components/Auth/Auth.js";

const App = () => {
  return (
    <Router>
      <Container maxWidth="lg">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/auth" element={<Auth />} exact />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
