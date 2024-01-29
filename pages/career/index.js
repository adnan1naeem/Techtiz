import React, { useRef } from "react";

import { Box } from "@mui/material";
import Careers from "../../components/Careers/Careers";
import Hiring from "../../components/Careers/Hiring";
import SalesTeam from "../../components/SalesTeam/SalesTeam";

function Career() {
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
        <Careers onPress={handleClick} />
        <Hiring />
        <div id="contact-section" ref={contactSectionRef}>
          <SalesTeam />
        </div>
      </Box>
    </div>
  );
}

export default Career;
