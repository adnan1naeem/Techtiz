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
        marginTop: { xs: "30%", sm: "15%", md: "14%", lg: "12%" }

      }}
    >
      <Typography
        sx={{
          color: "#153A5F",
          fontSize: "2.7em",
          fontWeight: "bold",
          textAlign: "center",
          transition: "opacity 1s ease-in-out",
          opacity: isVisible ? 1 : 0,
          fontFamily: "'Mont-Bold', sans-serif"
        }}
      >
        Making Technology Work for You
      </Typography>
      <Typography
        sx={{
          color: "#18B0E6",
          fontSize: "1.7em",
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
          fontSize: "17.6px",
          fontWeight: 600,
          textAlign: "center",
          marginTop: "1%",
          fontFamily: "'Mont-Regular', sans-serif"
        }}
      >
        Techtiz is a custom software development company that helps startups and
        businesses of all sizes create chart-topping apps <br /> and software.
        We have a team of super-talented engineers with advanced expertise in
        mobile app development, web <br /> application development, UX/UI
        design, and more. With on-time enterprise-level implementation, we have
        a proven track <br /> record of helping diverse businesses embark on
        their transformation journeys.
      </Typography>
      <Button
        variant="contained"
        endIcon={<IoMdArrowRoundForward />}
        onClick={onPress}
        sx={{
          marginTop: "3%",
          boxShadow:'none',
         pt:{xs:'2%',sm:'1%',lg:'0.6%'},
         pb:{xs:'2%',sm:'1%',lg:'0.6%'},
          pl:{xs:'4%',sm:'2.6%',lg:'2%'},
          pr: {xs:'4%',sm:'2.6%',lg:'2%'},
          borderRadius: 1,
          textTransform: "none",
          fontSize: "17px",
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