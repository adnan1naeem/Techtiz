import React from "react";
import NavBar from "../../Component/NavBar/NavBar";
import { Box } from "@mui/material";
import Enterprises from "../../Component/About/Enterprises";
import Core from "../../Component/About/Core";
import Software from "../../Component/About/Software";
import Leadership from "../../Component/About/Leadership";
import SalesTeam from "../../Component/SalesTeam/SalesTeam";
import Footer from "../../Component/Footer/Footer";


function About() {
  return (
    <div>
      <NavBar />
      <Box>
        <Enterprises/>
        <Core/>
        <Software/>
        <Leadership/>
        <SalesTeam/>
        <Footer/>
      </Box>
    </div>
  );
}

export default About;
