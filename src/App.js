import React from "react";
import {Routes  } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Grid } from "@mui/material";
import { Route } from "react-router";
import { Home } from "./pages/Home/Home";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { Login } from "./pages/Login/Login";
import { Register } from "./pages/Register/Register";
import { Profile } from "./pages/Profile/Profile";
import { About } from "./pages/About/About";
import "./app.css";


function App() {
  return (
    
      <div className="App">
        <Navbar />
        <Grid
          container
          marginTop="50px"
          height="auto"
          borderRadius="10px"
          backgroundColor="rgba(255, 255, 255, 0.1)"
          sx={{ padding: "50px", overflow: "hidden" }}
        >
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={< Register />} /> 
            <Route path="/profile" element={< Profile />} /> 
            <Route path="/about" element={< About />} />
            </Routes>
        </Grid>
        <Footer />
      </div>

  );
}

export default App;
