import React from "react";
import { Box, Card, CardContent, Typography, Button } from "@mui/material";
import { IoMdArrowRoundForward } from "react-icons/io";
function QA({ onPress }) {
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
        // mb: { xs: "28%", sm: '1%', md: "0%" },
      }}
    >
      <Card
        sx={{
          width: { xs: "100%", sm: "33rem", md: "28rem", lg: "36rem" },
          height: { xs: "29rem", sm: "26rem", md: "32rem", lg: "28rem" },
          "@media screen and (min-width: 1200px) and (max-width: 1300px)": {
            width: "31rem",
          },
          "@media screen and (min-width: 400px) and (max-width: 600px)": {
            height: '24rem'
          },

          boxShadow: "none",
        }}
      >
        <CardContent sx={{ display: "flex", flexDirection: "column" }}>
          <Typography
            sx={{
              color: "#153A5F",
              fontSize: { xs: '16px', md: "1.3em" },
              fontWeight: "600",
              borderLeft: "3px solid #18B0E6",
              height: "20px",
              lineHeight: "20px",
              transition: "opacity 1s ease-in-out",
              opacity: isVisible ? 1 : 0,
              fontFamily: "Mont-Bold, Sans-serif",
            }}
          >
            &nbsp;QA & Testing
          </Typography>
          <Typography
            sx={{
              color: "#153A5F",
              fontSize: { xs: '33.6px', md: "2.6em" },
              fontWeight: "800",
              lineHeight: "43px",
              marginTop: { xs: '5%', md: "1%", lg: "3.5%" },
              transition: "opacity 1s ease-in-out",
              opacity: isVisible ? 1 : 0,
              fontFamily: "Mont-Bold, Sans-serif",
            }}
          >
            Keep Your Business Running With Our Software Quality Testing
            Services
          </Typography>

          <Typography
            sx={{
              color: "#153A5F",
              fontSize: "1.1em",
              fontWeight: 600,
              marginTop: "2%",
              fontFamily: "Mont-Regular, Sans-serif",
            }}
          >
            Getting the most out of your business starts with a <br />
            customized quality testing approach
          </Typography>
          <Button
            variant="contained"
            endIcon={<IoMdArrowRoundForward />}
            onClick={onPress}
            sx={{
              marginTop: "6%",
              padding: { xs: "1%", sm: "2%", md: "1.5%", lg: "1.8%" },
              // width: { xs: "50%", sm: "80%", md: "60%", lg: "40%" },
              width: '12em',
              paddingLeft: "1%",
              paddingRight: "1%",
              borderRadius: 1,
              textTransform: "none",
              fontSize: "16px",
              fontWeight: "600",
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

export default QA;
