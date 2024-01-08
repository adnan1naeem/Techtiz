import React from "react";
import NavBar from "../../Component/NavBar/NavBar";
import { Box } from "@mui/material";
import Careers from "../../Component/Careers/Careers";

function Career() {
  return (
    <div>
      <NavBar />
      <Box>
        <Careers/>
      </Box>
    
    </div>
  );
}

export default Career;
