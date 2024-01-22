import React from "react";
import { Box } from "@mui/material";

import Started from "../../components/Started/Started";
import SalesTeam from "../../components/SalesTeam/SalesTeam";
import Footer from "../../components/Footer/Footer";

function GetStarted() {
  const [isHovered, setIsHovered] = React.useState(false);
  return (
    <div>
      {/* <Navbar /> */}
      <Box sx={{ marginTop: { xs: "30%", sm: "15%", md: "14%", lg: "13%" } }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "12%",
            flexWrap: "wrap",
          }}
        >
          <Started />
          <Box
            sx={{
              width: { xs: "100%", sm: "80%", md: "70%", lg: "34%", xl: "35%" },
              transform: isHovered ? "translateY(-12px)" : "translateY(0)",
              transition: "transform 1s ease",
              marginTop: { xs: "-33%", sm: "-30%", md: "-15%", lg: "0" },
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img
              src="https://techtiz.co/wp-content/uploads/2023/10/contact-us.webp"
              alt=""
              style={{ width: "100%" }}
            />
          </Box>
        </Box>
        <SalesTeam />
        <Footer />
      </Box>
    </div>
  );
}

export default GetStarted;
