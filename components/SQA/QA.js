import React from "react";
import { Box, Card, CardContent, Typography, Button } from "@mui/material";
import { IoMdArrowRoundForward } from "react-icons/io";
function QA({onPress}) {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 700);

    return () => clearTimeout(timer);
  }, []);
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignContent: "center" ,mb:{xs:'28%',md:'0%'}}}
    >
      <Card
        sx={{
          width: { xs: "100%", sm: "33rem", md: "28rem", lg: "36rem" },
          height: { xs: "45rem", sm: "26rem", md: "32rem", lg: "28rem" },
          "@media screen and (min-width: 1200px) and (max-width: 1300px)": {
             width:'31rem'
              
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
              height: "20px",
              lineHeight: "20px",
              transition: "opacity 1s ease-in-out",
          opacity: isVisible ? 1 : 0,
          fontFamily:"Mont-Bold, Sans-serif",
            }}
          >
            &nbsp;QA & Testing
          </Typography>
          <Typography
            sx={{
              color: "#153A5F",
              fontSize: "2.7em",
              fontWeight: "800",
              marginTop: "1%",
              transition: "opacity 1s ease-in-out",
          opacity: isVisible ? 1 : 0,
          fontFamily:"Mont-Bold, Sans-serif",
            }}
          >
            Keep Your Business
          </Typography>
          <Typography
            sx={{
              color: "#153A5F",
              fontSize: "2.8em",
              fontWeight: "800",
              marginTop: "-3%",
              transition: "opacity 1s ease-in-out",
          opacity: isVisible ? 1 : 0,
          fontFamily:"Mont-Bold, Sans-serif",
          "@media screen and (min-width: 1200px) and (max-width: 1300px)": {
            marginTop: "-4.4%",
              
              },
            }}

          >
           Running With Our
          </Typography>
          <Typography
            sx={{
              color: "#153A5F",
              fontSize: "2.7em",
              fontWeight: "800",
              marginTop: "-3%",
              transition: "opacity 1s ease-in-out",
          opacity: isVisible ? 1 : 0,
          fontFamily:"Mont-Bold, Sans-serif",
          fontFamily:"Mont-Bold, Sans-serif",
          "@media screen and (min-width: 1200px) and (max-width: 1300px)": {
            marginTop: "-4.4%",
              
              },
            }}
          >
           Software Quality
          </Typography>
          <Typography
            sx={{
              color: "#153A5F",
              fontSize: "2.7em",
              fontWeight: "800",
              marginTop: "-3%",
              transition: "opacity 1s ease-in-out",
          opacity: isVisible ? 1 : 0,
          fontFamily:"Mont-Bold, Sans-serif",
          "@media screen and (min-width: 1200px) and (max-width: 1300px)": {
            marginTop: "-4.4%",
            
              
              },
            }}
          >
          Testing Services
          </Typography>

          <Typography
            sx={{
              color: "#153A5F",
              fontSize: "1.1em",
              fontWeight: 600,
              marginTop: "2%",
              fontFamily:"Mont-Regular, Sans-serif",
            }}

          >
            Getting the most out of your business starts with a <br/>customized quality testing approach
          </Typography>
          <Button
            variant="contained"
            endIcon={<IoMdArrowRoundForward />}
            onClick={onPress}
            sx={{
              marginTop: "6%",

              padding: { xs: "3%", sm: "2%", md: "1.5%", lg: "1.8%" },
              width: { xs: "100%", sm: "80%", md: "60%", lg: "40%" },
              paddingLeft: "1%",
              paddingRight: "1%",
              borderRadius: 0,
              textTransform: "none",
              fontSize: "16px",
              fontWeight: "400",
              background: "#18B0E6",
              fontFamily:"Mont-Regular, Sans-serif",
              boxShadow:"none",
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

export default QA;
