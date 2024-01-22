import React from "react";
// import NavBar from "../../Component/NavBar/NavBar";
import { Box } from "@mui/material";
import OurPortfolio from "../../components/Portfolios/OurPortfolio";
import AllPortfolios from "./AllPortfolios";
// import SalesTeam from "../../components/SalesTeam/SalesTeam";
// import Footer from "../../Component/Footer/Footer";

function Portfolios() {
  const [isHovered, setIsHovered] = React.useState(false);
  return (
    <div>
      {/* <NavBar /> */}
      <Box sx={{ marginTop: { xs: "30%", sm: "15%", md: "14%", lg: "11%" } }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "3%",
            flexWrap: "wrap",
          }}
        >
          <OurPortfolio />
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
              src="https://techtiz.co/wp-content/uploads/2023/10/innovation.webp"
              alt=""
              style={{ width: "100%" }}
            />
          </Box>
        </Box>
        <AllPortfolios/>
       {/* <SalesTeam/> */}
       {/* <Footer/> */}
      </Box>
    </div>
  );
}

export default Portfolios;
