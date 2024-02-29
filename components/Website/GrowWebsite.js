import React from "react";
import { Box, Card, CardContent, Typography, Button } from "@mui/material";
import { IoMdArrowRoundForward } from "react-icons/io";
function GrowWebsite({ onPress }) {
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
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        marginTop: "1%",
        mr: "8%",
        "@media screen and (min-width: 1700px)": {
          mt: "-1%",
        },
       
      }}
    >
      <Card
        sx={{
          width: {
            xs: "21rem",
            sm: "100%",
            md: "30rem",
            lg: "38rem",
            xl: "33rem",
          },
          height: { xs: "32rem", sm: "32xrem", md: "32rem", lg: "28rem" },
          "@media screen and (min-width: 1700px)": {
            width: "36rem",
          },
          "@media screen and (min-width: 1530px) and (max-width: 1600px)": {
              width: "37rem",
              
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
              transition: "opacity 1s ease-in-out",
              opacity: isVisible ? 1 : 0,
              fontFamily: "Mont-Bold, Sans-serif",
            }}
          >
            &nbsp;Web App Development
          </Typography>
          <Typography
            sx={{
              color: "#153A5F",
              fontSize: "2.7em",
              fontWeight: "800",
              marginTop: "1%",
              transition: "opacity 1s ease-in-out",
              opacity: isVisible ? 1 : 0,
              fontFamily: "Mont-Bold, Sans-serif",
            }}
          >
            Grow With an
          </Typography>
          <Typography
            sx={{
              color: "#153A5F",
              fontSize: "2.8em",
              fontWeight: "800",
              marginTop: "-4%",
              transition: "opacity 1s ease-in-out",
              opacity: isVisible ? 1 : 0,
              fontFamily: "Mont-Bold, Sans-serif",
            }}
          >
            Unconventional &
          </Typography>
          <Typography
            sx={{
              color: "#153A5F",
              fontSize: "2.7em",
              fontWeight: "800",
              marginTop: "-4%",
              transition: "opacity 1s ease-in-out",
              opacity: isVisible ? 1 : 0,
              fontFamily: "Mont-Bold, Sans-serif",
            }}
          >
            Engaging Website
          </Typography>

          <Typography
            sx={{
              color: "#153A5F",
              fontSize: "1.3em",
              fontWeight: "300",
              marginTop: "2%",
              fontFamily: "Mont-Regular, Sans-serif",
            }}
          >
            Make your website stand out with our professional <br /> web
            development services.
          </Typography>
          <Button
            variant="contained"
            endIcon={<IoMdArrowRoundForward />}
            onClick={onPress}
            sx={{
              marginTop: "6%",

              padding: { xs: "3%", sm: "2%", md: "1.5%", lg: "1.8%" },
              width: { xs: "100%", sm: "60%", md: "60%", lg: "35%" },
              paddingLeft: "6px",
              paddingRight: "6px",
              borderRadius: "5px",
              textTransform: "none",
              fontSize: "16px",
              fontWeight: "400",
              background: "#18B0E6",
              fontFamily: "Mont-Regular, Sans-serif",
              boxShadow: "none",
              "&:hover": {
                backgroundColor: "#153A5F",
              },
            }}
          >
            Discuss Now &nbsp; &nbsp;
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}

export default GrowWebsite;
