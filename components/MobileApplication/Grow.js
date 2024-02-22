import React from "react";
import { Box, Card, CardContent, Typography, Button } from "@mui/material";
import { IoMdArrowRoundForward } from "react-icons/io";
function Grow({onPress}) {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 700);

    return () => clearTimeout(timer);
  }, []);
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignContent: "center" ,marginTop:'4%'}}
    >
      <Card
        sx={{
          width: { xs: "22rem", sm: "23rem", md: "23rem", lg: "31rem" },
          height: { xs: "32rem", sm: "32xrem", md: "32rem", lg: "28rem" },

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
              height: "16px",
              lineHeight: "17px",
              transition: "opacity 1s ease-in-out",
          opacity: isVisible ? 1 : 0,
            }}
          >
            &nbsp;Mobile App Development
          </Typography>
          <Typography
            sx={{
              color: "#153A5F",
              fontSize: "2.2em",
              fontWeight: "600",
              marginTop: "1%",
              transition: "opacity 1s ease-in-out",
          opacity: isVisible ? 1 : 0,
            }}
          >
            Grow With a Mobile App
          </Typography>
          <Typography
            sx={{
              color: "#153A5F",
              fontSize: "2.2em",
              fontWeight: "600",
              marginTop: "-2%",transition: "opacity 1s ease-in-out",
          opacity: isVisible ? 1 : 0,

            }}
          >
            Your Customers Will Love
          </Typography>
          <Typography   sx={{
              color: "#18B0E6",
              fontSize: "1.2em",
              fontWeight: "600",
              transition: "opacity 1s ease-in-out",
          opacity: isVisible ? 1 : 0,
 
            }}>iOS | Android | React Native | Flutter</Typography>
          <Typography
            sx={{
              color: "#153A5F",
              fontSize: "1.1em",
              fontWeight: "400",
              marginTop: "5%",
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
              width: { xs: "100%", sm: "80%", md: "60%", lg: "44%" },
              
              borderRadius: '5px',
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
            Get Started &nbsp; &nbsp;
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Grow;
