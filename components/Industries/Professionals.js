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
          width: { xs: "22rem", sm: "23rem", md: "31rem", lg: "31rem" },
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
              height: "17px",
              lineHeight: "18px",
              paddingLeft: "10px",
              transition: "opacity 1s ease-in-out",
          opacity: isVisible ? 1 : 0,
            }}
          >
            Industries
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
            Skilled professionals with
          </Typography>
          <Typography
            sx={{
              color: "#18B0E6",
              fontSize: "2.2em",
              fontWeight: "600",
              marginTop: "-2%",
              transition: "opacity 1s ease-in-out",
          opacity: isVisible ? 1 : 0,
            }}
          >
            State of the art technology
          </Typography>
          <Typography
            sx={{
              color: "#153A5F",
              fontSize: "1.1em",
              fontWeight: "400",
              marginTop: "5%",
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

              padding: { xs: "3%", sm: "2%", md: "1.5%", lg: "2%" },
              width: { xs: "100%", sm: "80%", md: "60%", lg: "40%" },
              paddingLeft: "3%",
              paddingRight: "3%",
              borderRadius: 1,
              textTransform: "none",
              fontSize: "16px",
              fontWeight: "400",
              background: "#18B0E6",
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

export default Professionals;
