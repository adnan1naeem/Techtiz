import { Box, Typography } from "@mui/material";
import React from "react";
import Mobile from "../../Assets/app-dev.svg";
import Line from "../../Assets/bg-pat.svg";
import ButtonBusiness from "../Texts/ButtonBusiness";
import './MainBanner.css'
import { keyframes } from '@emotion/react'; 

function MainBanner() {
  const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

  return (
    <Box
      sx={{
      
        background: "#153A5F",
      
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          
        }}
      >
        <img
          src={Line}
          alt=""
          className="responsive-img-Line"
        />
        <img
          src={Mobile}
          alt=""
          className="responsive-img-Mobile"
        />
      </Box>

      <Box
        sx={{
          position: "absolute",
          top: { xs: 150, sm: 150, md: 150, lg: 200 }, 
          left: { xs: 15, sm: 50, md: 100, lg: 150 }, 
          width: { xs: "90%", sm: "70%", md: "60%", lg: "40%" }, 
        }}
      >
        <Typography
          sx={{
            color: "#FFFFFF",
            fontSize: { xs: "20px", sm: "28px", md: "40px" },
            fontWeight: "600",
        
            animation: `${fadeIn} 1s ease-in-out 5s forwards`,
    
          }}
         
        >
          WE BUILD CUSTOM SOFTWARE AND CHART-TOPPING APPS FOR DISRUPTIVE
          BUSINESSES
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: "20px",
            marginTop: "10%",
 
            
          }}
        >
          <ButtonBusiness
            text="About Us"
            background="white"
            paddingLeft="45px"
            paddingRight="45px"
          />
          <ButtonBusiness
            text="Talk To Us"
            color="white"
            paddingLeft="40px"
            paddingRight="40px"
          />
        </Box>
      </Box>
    </Box>
  );
}

export default MainBanner;
