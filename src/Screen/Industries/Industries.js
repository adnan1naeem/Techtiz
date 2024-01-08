import React from "react";
import NavBar from "../../Component/NavBar/NavBar";
import { Box } from "@mui/material";
import Professionals from "../../Component/Industries/Professionals";
import Transportation from "../../Component/Industries/Transportation";
import Education from "../../Component/Industries/Education/Education";
import Commerce from "../../Component/Industries/Commerce";
import Networking from "../../Component/Industries/Networking/Networking";
import MVPs from "../../Component/Industries/MVPs/MVPs";
import SalesTeam from "../../Component/SalesTeam/SalesTeam";
import Footer from "../../Component/Footer/Footer";

function Industries() {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div>
      <NavBar />
      <Box sx={{ marginTop: { xs: "30%", sm: "15%", md: "14%", lg: "11%" } }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "3%",
            flexWrap: "wrap",
          }}
        >
          <Professionals />
          <Box
            sx={{
              width: { xs: "100%", sm: "80%", md: "80%", lg: "40%", xl: "35%" },
              transform: isHovered ? "translateY(-12px)" : "translateY(0)",
              transition: "transform 1s ease",
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img
              src="https://techtiz.co/wp-content/uploads/2023/10/skilled-pro.webp"
              alt=""
              style={{ width: "100%" }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            background: "#153A5F",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "3%",
            paddingTop: "5%",
            paddingBottom: "2%",
            marginTop: "5%",
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", sm: "80%", md: "50%", lg: "40%", xl: "35%" },
            }}
          >
            <img
              src="https://techtiz.co/wp-content/uploads/2023/12/Transportation.webp"
              alt=""
              style={{ width: "100%" }}
            />
          </Box>
          <Transportation />
        </Box>
        <Education />
        <Commerce />
        <Networking />
        <MVPs />
        <SalesTeam />
        <Footer />
      </Box>
    </div>
  );
}

export default Industries;
