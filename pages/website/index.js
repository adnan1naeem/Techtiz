import React, { useRef } from "react";
import { Box } from "@mui/material";
import GrowWebsite from "../../components/Website/GrowWebsite";
import OurServices from "../../components/Website/Services/OurServices";
import DoIt from "../../components/Website/DoIt/DoIt";
import Stack from "../../components/Website/Stacks";
import DiscussProject from "../../components/Website/DiscussProject";
import SalesTeam from "../../components/SalesTeam/SalesTeam";

function Web() {
  const [isHovered, setIsHovered] = React.useState(false);
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
      <Box sx={{ marginTop: { xs: "30%", sm: "15%", md: "14%", lg: "13%" } }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "8%",
            flexWrap: "wrap",
          }}
        >
          <GrowWebsite onPress={handleClick}  />
          <Box
            sx={{
              width: { xs: "100%", sm: "80%", md: "34%", lg: "28%", xl: "24%" },
              transform: isHovered ? "translateY(-12px)" : "translateY(0)",
              transition: "transform 1s ease",
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img
              src="https://techtiz.co/wp-content/uploads/2023/11/webdesign_1.webp"
              alt=""
              style={{ width: "100%" }}
            />
          </Box>
        </Box>
        <OurServices />
        <DoIt />
        <Stack />
        <DiscussProject onPress={handleClick} />
        <div id="contact-section" ref={contactSectionRef}>
          <SalesTeam />
        </div>
      </Box>
    </div>
  );
}

export default Web;
