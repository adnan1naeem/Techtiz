import React from "react";
import { Box } from "@mui/material";
import Navbar from "../../Component/NavBar/NavBar";
import Grow from "../../Component/MobileApplication/Grow";
import MobileServices from "../../Component/MobileApplication/MobileServices";

function Mobile() {
  const [isHovered, setIsHovered] = React.useState(false);
  return (
    <div>
      <Navbar />
      <Box sx={{ marginTop: { xs: "30%", sm: "15%", md: "14%", lg: "13%" } }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "12%",
            flexWrap: "wrap",
          }}
        >
          <Grow />
          <Box
            sx={{
              width: { xs: "100%", sm: "80%", md: "80%", lg: "34%", xl: "35%" },
              transform: isHovered ? "translateY(-12px)" : "translateY(0)",
              transition: "transform 1s ease",
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img
              src="https://techtiz.co/wp-content/uploads/2023/11/Mobile-App.svg"
              alt=""
              style={{ width: "100%" }}
            />
          </Box>
        </Box>
        <MobileServices/>
      </Box>
    </div>
  );
}

export default Mobile;
