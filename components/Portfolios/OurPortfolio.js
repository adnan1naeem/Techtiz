import React from "react";
import { Box, Card, CardContent, Typography, Button } from "@mui/material";
import { IoMdArrowRoundForward } from "react-icons/io";

function OurPortfolio({ onPress }) {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 700);

    return () => clearTimeout(timer);
  }, []);
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignContent: "center" }}
    >
      <Card
        sx={{
          width: { xs: "22rem", sm: "23rem", md: "31rem", lg: "31rem" },
          height: { xs: "32rem", sm: "32xrem", md: "32rem", lg: "28rem" },
          
          '@media screen and (min-width: 1700px)': {
           mt:'3%'
            
             },
       

          boxShadow: "none",
        }}
      >
        <CardContent sx={{ display: "flex", flexDirection: "column" }}>
          <Typography
            sx={{
              color: "#153A5F",
              fontSize: "1.3em",
              fontWeight: "600",
              borderLeft: "3px solid #18B0E6",
              height: "18px",
              lineHeight: "20px",
              paddingLeft: "10px",
              transition: "opacity 1s ease-in-out",
              opacity: isVisible ? 1 : 0,
              fontFamily: "'Mont-Bold', sans-serif"
            }}
          >
            Our Portfolios
          </Typography>
          <Typography
            sx={{
              color: "#153A5F",
              fontSize: "2.5em",
              fontWeight: "600",
              marginTop: "3%",
              lineHeight: "45px",
              transition: "opacity 1s ease-in-out",
          opacity: isVisible ? 1 : 0,
          fontFamily: "'Mont-Bold', sans-serif"
            }}
          >
            We Have Innovative and Time-Tested Solutions to Grow Your Business
          </Typography>

          <Typography
            sx={{
              color: "#153A5F",
              fontSize: "1.1em",
              fontWeight: "400",
              marginTop: "5%",
              fontFamily: "'Mont-Regular', sans-serif"
            }}
          >
            At TechTiz, we transform goals and dreams into digital solutions
            that pay off for years to come.
          </Typography>
          <Button
            variant="contained"
            endIcon={<IoMdArrowRoundForward />}
            onClick={onPress}
            sx={{
              marginTop: "8%",

              padding: { xs: "3%", sm: "2%", md: "1.5%", lg: "1.8%" },
              width: { xs: "100%", sm: "80%", md: "60%", lg: "43%" },
              paddingLeft: "2%",
              paddingRight: "2%",
              borderRadius: "5px",
              textTransform: "none",
              fontSize: "16px",
              fontWeight: "400",
              background: "#18B0E6",
              boxShadow:'none',
              "&:hover": {

                backgroundColor: "#153A5F",
              },
            }}
          >
            Discuss now &nbsp; &nbsp;
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}

export default OurPortfolio;
