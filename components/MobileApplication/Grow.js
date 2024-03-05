import React from "react";
import { Box, Card, CardContent, Typography, Button } from "@mui/material";
import { IoMdArrowRoundForward } from "react-icons/io";
function Grow({ onPress }) {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 700);

    return () => clearTimeout(timer);
  }, []);
  
  return (
    <Box
      sx={{
        display: "flex", justifyContent: "center", alignContent: "center", marginTop: '4%', '@media screen and (min-width: 1700px)': {
          mt: '3%'

        }
      }}
    >
      <Card
        sx={{
          width: { xs: "100%", sm: "100%", md: "38rem", lg: "31rem" },
          height: { xs: "22rem", sm: "30rem", md: "32rem", lg: "25rem" },
          boxShadow: "none",
          "@media screen and (min-width: 1200px) and (max-width: 1300px)": {
                width:'33rem',
                
              
              },
        }}
      >
        <CardContent sx={{ display: "flex", flexDirection: "column" }}>
          <Typography
            sx={{
              color: "#153A5F",
              fontSize: {xs: "1em",sm:"1.3em"},
              fontWeight: "600",
              borderLeft: "3px solid #18B0E6",
              height: "16px",
              lineHeight: "17px",
              transition: "opacity 1s ease-in-out",
              opacity: isVisible ? 1 : 0,
              fontFamily: "Mont-Bold, Sans-serif",
            }}
          >
            &nbsp;Mobile App Development
          </Typography>
          <Typography
            sx={{
              color: "#153A5F",
              fontSize: {xs: "1.4em", sm:"2.2em"},
              fontWeight: "600",
              marginTop: "3%",
              transition: "opacity 1s ease-in-out",
              opacity: isVisible ? 1 : 0,
              fontFamily: "Mont-Bold, Sans-serif",
            }}
          >
            Grow With a Mobile App
            Your Customers Will Love
          </Typography>
          <Typography
            sx={{
              color: "#18B0E6",
              fontSize: "1.2em",
              fontWeight: "600",
              transition: "opacity 1s ease-in-out",
              opacity: isVisible ? 1 : 0,
              fontFamily: "Mont-Bold, Sans-serif",

            }}>iOS | Android | React Native | Flutter</Typography>
          <Typography
            sx={{
              color: "#153A5F",
              fontSize: {xs: "0.9em",sm:"1.1em"},
              fontWeight: 600,
              marginTop: "5%",
              fontFamily: "Mont-Regular, Sans-serif",
            }}
          >
            Take your business to the next level with a mobile app that disrupts
            your Industry
          </Typography>
          <Button
            variant="contained"
            endIcon={<IoMdArrowRoundForward />}
            onClick={onPress}
            sx={{
              marginTop: "8%",
              padding: { xs: "3%", sm: "2%", md: "1.5%", lg: "2.2%" },
              width: { xs: "50%", sm: "40%", md: "60%", lg: "42.7%" },
              borderRadius: '3px',
              textTransform: "none",
              fontFamily: "Mont-Regular, Sans-serif",
              fontSize: "16px",
              fontWeight: "400",
              background: "#18B0E6",
              boxShadow: 'none',
              "&:hover": {
                backgroundColor: "#153A5F",
              },
            }}
          >
            Get Started &nbsp;
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Grow;
