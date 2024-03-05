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
        ml: { xl: '-8%' },
        "@media screen and (min-width: 1700px)": {
          mt: "-1%",
        },
      }}
    >
      <Card
        sx={{
          width: {
            xs: "24rem",
            sm: "37rem",
            md: "30rem",
            lg: "38rem",
            xl: "33rem",
          },
          height: { xs: "28rem", sm: "26rem", md: "32rem", lg: "28rem" },
          "@media screen and (min-width: 1700px)": {
            width: "36rem",
          },
          "@media screen and (min-width: 1530px) and (max-width: 1600px)": {
            width: "37rem",

          },
          "@media screen and (min-width: 1200px) and (max-width: 1300px)": {
            width: '45rem',

          },
          boxShadow: "none",
        }}
      >
        <CardContent sx={{
          display: "flex", flexDirection: "column",
          ml: {xs: '3%', md: 0},
        }}>
          <Typography
            sx={{
              color: "#153A5F",
              fontSize: {xs:"1em", sm: "1.3em"},
              fontWeight: "600",
              marginTop: {xs:"4%",md: 1, lg: 2},
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
              fontSize: {xs: "1.9em", sm:"2.2em", md: "2.7em"},
              fontWeight: "800",
              marginTop: {xs:"4%",md: "3%"},
              transition: "opacity 1s ease-in-out",
              opacity: isVisible ? 1 : 0,
              fontFamily: "Mont-Bold, Sans-serif",
            }}
          >
            {`Grow With an\n
            Unconventional &\n
            Engaging Website`}
          </Typography>

          <Typography
            sx={{
              color: "#153A5F",
              fontSize: "1.2em",
              fontWeight: 600,
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
            Discuss now &nbsp; &nbsp;
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}

export default GrowWebsite;
