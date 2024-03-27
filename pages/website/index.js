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
      <Box sx={{
        marginTop: { xs: "30%", sm: "15%", md: "14%", lg: "13%" }, "@media screen and (min-width: 1200px) and (max-width: 1300px)": {
          mt: '12%'
        },
      }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "10%",
            flexWrap: "wrap",
            "@media screen and (min-width: 1200px) and (max-width: 1300px)": {
              gap: "1%",
            },
          }}
        >
          <GrowWebsite onPress={handleClick} />
          <Box
            sx={{
              width: { xs: "50%", sm: "50%", md: "28%", lg: "28%", xl: "20%" },
              mt: { md: '4%', lg: '-3%' },
              '@media screen and (min-width: 1700px)': {
                width: '21%',
                mt: '-4%'
              },
              "@media screen and (min-width: 1530px) and (max-width: 1600px)": {
                width: "24rem",
                top: 250
              },
              transform: isHovered ? "translateY(-12px)" : "translateY(0)",
              transition: "transform 1s ease",
              "@media screen and (min-width: 1200px) and (max-width: 1300px)": {
                width: '31%',

              },
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img
              src="https://techtiz.co/wp-content/uploads/2023/11/webdesign_1.webp"
              alt=""
              style={{ width: { sm: "100%" } }}
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
