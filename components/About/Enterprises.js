import React, { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { IoMdArrowRoundForward } from "react-icons/io";

function Enterprises({ onPress }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 700); 

    return () => clearTimeout(timer);
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: { xs: "30%", sm: "22%", md: "18%", lg: "12%" }

      }}
    >
      <Typography
        sx={{
          color: "#153A5F",
          fontSize: {xs: "28.8px",sm:'28.8',md:'43.2px', lg:"2.7em"},
          fontWeight: "bold",
          textAlign: "center",
          transition: "opacity 1s ease-in-out",
          opacity: isVisible ? 1 : 0,
          fontFamily: "'Mont-Bold', sans-serif",
          "@media screen and (min-width: 100px) and (max-width: 450px)": {
                  mt:'18%',
                  width:'80%'
              },
          
        }}
      >
        Making Technology Work for You
      </Typography>
      <Typography
        sx={{
          color: "#18B0E6",
          fontSize: {xs: "1em", sm:"1.7em"},
          textAlign: "center",
          transition: "opacity 1s ease-in-out",
          opacity: isVisible ? 1 : 0,
          fontFamily: "'Mont-Bold', sans-serif"
        }}
      >
        Startups. SMEs. Enterprises
      </Typography>
      <Typography
        sx={{
          color: "#153A5F",
          fontSize: {xs: "14px", sm:"17.6px"},
          fontWeight: 600,
          pl: {xs: '3%', sm: '5%', lg: '15%'},
          pr: {xs: '3%', sm: '5%', lg: '15%'},
          textAlign: "center",
          marginTop:{xs: "3%",sm:'1%'},
          fontFamily: "'Mont-Regular', sans-serif",
          width:'95%'
        }}
      >
        Techtiz is a custom software development company that helps startups and
        businesses of all sizes create chart-topping apps and software.
        We have a team of super-talented engineers with advanced expertise in
        mobile app development, web application development, UX/UI
        design, and more. With on-time enterprise-level implementation, we have
        a proven track record of helping diverse businesses embark on
        their transformation journeys.
      </Typography>
      <Button
        variant="contained"
        endIcon={<IoMdArrowRoundForward />}
        onClick={onPress}
        sx={{
          marginTop:{xs: "7%",sm:'4%',md:'3%'},
          boxShadow:'none',
         pt:{xs:'1.2%',sm:'1%',lg:'0.6%'},
         pb:{xs:'1.2%',sm:'1%',lg:'0.6%'},
          pl:{xs:'3.3%',sm:'2.6%',lg:'2%'},
          pr: {xs:'3.3%',sm:'2.6%',lg:'2%'},
          borderRadius: "2%",
          textTransform: "none",
          fontSize: {xs:'14.4px',sm:"17px"},
          fontWeight: "600",
          background: "#18B0E6",
          fontFamily: "'Mont-Regular', sans-serif",
          "&:hover": {
            backgroundColor: "#153A5F",
          },
          '@media screen and (min-width: 1700px)': {
            pt:'0.6%',
            pb:'0.6%',
            pr:'1.7%',
            pl:'1.7%'
            
             }
       
        }}
   
      >
        Discuss now &nbsp;
      </Button>
    </Box>
  );
}

export default Enterprises;