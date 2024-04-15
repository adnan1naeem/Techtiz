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
            xs: "100%",
            sm: "100%",
            md: "30rem",
            lg: "38rem",
            xl: "33rem",
          },
          "@media screen and (max-width: 360px)": {
            width: "22rem",
          },
          "@media screen and (max-width: 280px)": {
            width: "20rem",
          },

          height: { xs: "24rem", sm: "26rem", md: "32rem", lg: "28rem" },
          "@media screen and (min-width: 1700px)": {
            width: "36rem",
          },
          "@media screen and (min-width: 1530px) and (max-width: 1600px)": {
            width: "37rem",

          },
          "@media screen and (min-width: 1200px) and (max-width: 1300px)": {
            width: '47rem',

          },
          boxShadow: "none",
        }}
      >
        <CardContent sx={{
          display: "flex", flexDirection: "column",
          // ml: { xs: '3%', md: 0 },
        }}>
          <Typography
            sx={{
              color: "#153A5F",
              fontSize: { xs: "1em", sm: "1.3em" },
              fontWeight: "600",
              marginTop: { xs: "3%", md: 1, lg: 2 },

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
              fontSize: { xs: "1.4em", sm: "2.2em", md: "2.6em" },
              fontWeight: "600",
              marginTop: { xs: "4%", md: "3%" },
              transition: "opacity 1s ease-in-out",
              opacity: isVisible ? 1 : 0,
              fontFamily: "Mont-Bold, Sans-serif",
              lineHeight: { xs: '30px', sm: '45px' },
              width: "100%",
              "@media screen and (min-width: 1200px) and (max-width: 1300px)": {
                width: '60%',

              },
            }}
          >
            {`Grow With an\n
            Unconventional &\n
            Engaging Website`}
          </Typography>

          <Typography
            sx={{
              color: "#153A5F",
              fontSize: { xs: "14.4px", sm: "14.4px", md: "1.2em" },
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
              width: '12em',
              paddingLeft: { xs: '2px', sm: "6px" },
              paddingRight: { xs: '2px', sm: "6px" },
              borderRadius: "5px",
              textTransform: "none",
              fontSize: "16px",
              fontWeight: "600",
              background: "#18B0E6",
              fontFamily: "Mont-Regular, Sans-serif",
              boxShadow: "none",
              "&:hover": {
                backgroundColor: "#153A5F",
              },
              "@media screen and (max-width: 280px)": {
                width: "60%",
              },
            }}
          >
            Discuss now &nbsp;
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}

export default GrowWebsite;
