import React from "react";
import NavBar from "../../Component/NavBar/NavBar";
import { Box } from "@mui/material";
import Careers from "../../Component/Careers/Careers";
import Hiring from "../../Component/Careers/Hiring";
import SalesTeam from "../../Component/SalesTeam/SalesTeam";
import Footer from "../../Component/Footer/Footer";

function Career() {
  return (
    <div>
      <NavBar />
      <Box>
        <Careers/>
        <Hiring/>
        <SalesTeam/>
        <Footer/>
      </Box>
    
    </div>
  );
}

export default Career;
