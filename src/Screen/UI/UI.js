import React from "react";
import { Box } from "@mui/material";
import Navbar from "../../Component/NavBar/NavBar";

import DesignUX from "../../Component/UI-UX/DesignUX";
import DoUX from "../../Component/UI-UX/DoUX";
import DoItUX from "../../Component/UI-UX/DoItUX";
import DiscussProject from "../../Component/Website/DiscussProject";
import Footer from "../../Component/Footer/Footer";
import SalesTeam from "../../Component/SalesTeam/SalesTeam";

function UI() {
  const [isHovered, setIsHovered] = React.useState(false);
  return (
    <div>
      <Navbar />
      <Box sx={{ marginTop: { xs: "30%", sm: "15%", md: "14%", lg: "14%" } }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "8%",
            flexWrap: "wrap",
          }}
        >
          <DesignUX />
          <Box
            sx={{
              width: { xs: "100%", sm: "80%", md: "34%", lg: "33%", xl: "30%" },
              transform: isHovered ? "translateY(-12px)" : "translateY(0)",
              transition: "transform 1s ease",
              marginTop:{xs:'10%',sm:'10%',md:0,lg:0}
            
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img
              src="https://techtiz.co/wp-content/uploads/2023/11/mobileAppDev.svg"
              alt=""
              style={{ width: "100%" }}
            />
          </Box>
        </Box>
        <DoUX/>
        <DoItUX/>
        <DiscussProject/>
        <SalesTeam/>
        <Footer/>
      </Box>
    </div>
  );
}

export default UI;
