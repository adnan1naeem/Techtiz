import React from "react";
import { Box } from "@mui/material";
import Navbar from "../../Component/NavBar/NavBar";

import GrowWebsite from "../../Component/Website/GrowWebsite";
import OurServices from "../../Component/Website/Services/OurServices";
import DoIt from "../../Component/Website/DoIt/DoIt";

function Web() {
  const [isHovered, setIsHovered] = React.useState(false);
  return (
    <div>
      <Navbar />
      <Box sx={{ marginTop: { xs: "30%", sm: "15%", md: "14%", lg: "13%" } }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "8%",
            flexWrap: "wrap",
          }}
        >
          <GrowWebsite />
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
        <OurServices/>
        <DoIt/>
      </Box>
    </div>
  );
}

export default Web;
