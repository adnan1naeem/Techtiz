import React from "react";

import { Box } from "@mui/material";
import Careers from "../../components/Careers/Careers";
import Hiring from "../../components/Careers/Hiring";
import SalesTeam from "../../components/SalesTeam/SalesTeam";

function Career() {
  return (
    <div>
      <Box>
        <Careers />
        <Hiring />
        <SalesTeam />
      </Box>
    </div>
  );
}

export default Career;
