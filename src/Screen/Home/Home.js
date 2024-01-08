import React from "react";
import NavBar from "../../Component/NavBar/NavBar";
import { Box } from "@mui/material";
import Weeks from "../../Component/Weeks/Weeks";
import BusinessTogether from "../../Component/BusinessTogether/BusinessTogether";
import MainBanner from "../../Component/MainBanner/MainBanner";
import Expertise from "../../Component/Expertise/Expertise";
import Model from "../../Component/Model/Model";
import Partner from "../../Component/Partner/Partner";
import Technologies from "../../Component/Technologies/Technologies";
import FeedBack from "../../Component/FeedBack/FeedBack";

import Footer from "../../Component/Footer/Footer";
import SalesTeam from "../../Component/SalesTeam/SalesTeam";

function Home() {
  return (
    <div>
      <NavBar />
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
        <Footer />
      </Box>
    </div>
  );
}

export default Home;
