import React, { useRef } from "react";
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
  const contactSectionRef = useRef(null);
  const handleClick = () => {
    if (contactSectionRef.current) {
      const yOffset = -180;
      const element = contactSectionRef.current;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };
  return (
    <div>
      <Box>
        <MainBanner onPress={handleClick} />
        <Weeks />
        <BusinessTogether onClick={handleClick} />
        <Expertise />
        <Model onPress={handleClick} />
        <Partner onPress={handleClick} />
        <Technologies />
        <FeedBack />
        <div id="contact-section" ref={contactSectionRef}>
          <SalesTeam />
        </div>
      </Box>
    </div>
  );
}

export default HomeScreen;
