import React, { useRef } from "react";
import { Box } from "@mui/material";
import Enterprises from "../../components/About/Enterprises";
import Core from "../../components/About/Core";
import Software from "../../components/About/Software";
import Leadership from "../../components/About/Leadership";
import SalesTeam from "../../components/SalesTeam/SalesTeam";

function Index() {
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
        <Enterprises onPress={handleClick} />
        <Core />
        <Software />
        <Leadership />
        <div id="contact-section" ref={contactSectionRef}>
          <SalesTeam />
        </div>
      </Box>
    </div>
  );
}

export default Index;