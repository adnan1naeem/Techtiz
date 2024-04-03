import React from "react";
import { Box, Card, CardContent, Typography, Button } from "@mui/material";
import { IoMdArrowRoundForward } from "react-icons/io";

function Professionals({ onPress }) {
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
        marginTop: "2%",
      }}
    >
      <Card
        sx={{
          width: { xs: "100%", sm: "34rem", md: "31rem", lg: "33rem", xl: "33rem" },
          height: { xs: "29rem", sm: "32xrem", md: "32rem", lg: "28rem" },
          // backgroundColor: { xs: "red", md: "blue", xs: "orange", sm: "pink", lg: "green", xl: "transparent" },
          boxShadow: "none",
          '@media screen and (min-width: 1700px)': {
            width: '33rem'
          },
          "@media screen and (min-width: 1200px) and (max-width: 1300px)": {
            width: '33rem',
            mt: '2%'
          },

        }}
      >
        <CardContent sx={{ display: "flex", flexDirection: "column" }}>
          <Typography
            sx={{
              color: "#153A5F",
              fontSize: "1.3em",
              fontWeight: "600",
              borderLeft: "3px solid #18B0E6",
              height: "17px",
              lineHeight: "18px",
              paddingLeft: "10px",
              transition: "opacity 1s ease-in-out",
              opacity: isVisible ? 1 : 0,
              fontFamily: "Mont-Bold, Sans-serif",
            }}
          >
            Industries
          </Typography>
          <Typography
            sx={{
              color: "#153A5F",
              fontSize: { xs: "1.6em", md: "2.2em" },
              fontWeight: "600",
              marginTop: "1.2%",
              transition: "opacity 1s ease-in-out",
              opacity: isVisible ? 1 : 0,
              fontFamily: "Mont-Bold, Sans-serif",
            }}
          >
            Skilled professionals with
          </Typography>
          <Typography
            sx={{
              color: "#18B0E6",
              fontSize: { xs: "1.6em", md: "2.2em" },
              fontWeight: "600",
              lineHeight: '30px',
              transition: "opacity 1s ease-in-out",
              opacity: isVisible ? 1 : 0,
              fontFamily: "Mont-Bold, Sans-serif",
            }}
          >
            State of the art technology
          </Typography>
          <Typography
            sx={{
              color: "#153A5F",
              fontSize: { xs: "0.9em", md: "1.1em" },
              fontWeight: 600,
              marginTop: { xs: "3%", md: "5%" },
              fontFamily: "Mont-Regular, Sans-serif",
            }}
          >
            If you need our help, have questions about how to use the platform
            or are experiencing technical difficulties, please do not hesitate
            to contact us.
          </Typography>
          <Button
            variant="contained"
            endIcon={<IoMdArrowRoundForward />}
            onClick={onPress}
            sx={{
              marginTop: "8%",
              padding: { xs: "1%", sm: "2%", md: "1.5%", lg: "2.3%" },
              // width: { xs: 170, sm: "40%", md: "50%", lg: "43%" },
              width: "12em",
              paddingLeft: "3%",
              paddingRight: "3%",
              borderRadius: 1,
              textTransform: "none",
              fontSize: "16px",
              fontWeight: 600,
              background: "#18B0E6",
              fontFamily: "Mont-Regular, Sans-serif",
              "@media screen and (min-width: 1200px) and (max-width: 1300px)": {
                width: "41%",
              },
              boxShadow: 'none',
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

export default Professionals;
