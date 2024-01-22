import React from "react";
import { Box } from "@mui/material";
import Weeks from "../../components/Weeks/Weeks";
import BusinessTogether from "../../components/BusinessTogether/BusinessTogether";
import MainBanner from "../../components/MainBanner/MainBanner";
import Expertise from "../../components/Expertise/Expertise";
import Model from "../../components/Model/Model";
import Partner from "../../components/Partner/Partner";
import Technologies from "../../components/Technologies/Technologies";
import FeedBack from "../../components/FeedBack/FeedBack";

import SalesTeam from "../../components/SalesTeam/SalesTeam";

function HomeScreen() {
  return (
    <div>
      <Box>
        <MainBanner />
        <Weeks />
        <BusinessTogether />
        <Expertise />
        <Model />
        <Partner />
        <Technologies />
        <FeedBack />
        <SalesTeam />
      </Box>
    </div>
  );
}

export default HomeScreen;
