import React from "react";
import { Box } from "@mui/material";
import Enterprises from "../../components/About/Enterprises";
import Core from "../../components/About/Core";
import Software from "../../components/About/Software";
import Leadership from "../../components/About/Leadership";
import SalesTeam from "../../components/SalesTeam/SalesTeam";

function Index() {
  return (
    <div>
      <Box>
        <Enterprises onclick={'#SalesTeam'} />
        <Core />
        <Software />
        <Leadership />
        <SalesTeam id={"SalesTeam"} />
      </Box>
    </div>
  );
}

export default Index;