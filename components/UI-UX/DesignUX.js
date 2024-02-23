import React from "react";
import { Box, Card, CardContent, Typography, Button } from "@mui/material";
import { IoMdArrowRoundForward } from "react-icons/io";
function DesignUX({onPress}) {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 700);

    return () => clearTimeout(timer);
  }, []);
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignContent: "center",mt:"-1%" }}
    >
      <Card
        sx={{
          width: { xs: "23rem", sm: "33rem", md: "36rem", lg: "36rem" },
          height: { xs: "35rem", sm: "32rem", md: "32rem", lg: "28rem" },

          boxShadow: "none",
        }}
      >
        <CardContent sx={{ display: "flex", flexDirection: "column" }}>
          <Typography
            sx={{
              color: "#153A5F",
              fontSize: "1.2em",
              fontWeight: "600",
              borderLeft: "3px solid #18B0E6",
              height: "15px",
              lineHeight: "20px",
              transition: "opacity 1s ease-in-out",
          opacity: isVisible ? 1 : 0,
          fontFamily:"Mont-Bold, Sans-serif",
            }}
          >
            &nbsp;UI/UX Design
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
            UI/UX Design That
          </Typography>
          <Typography
            sx={{
              color: "#153A5F",
              fontSize: "2.8em",
              fontWeight: "800",
              marginTop: "-2%",
              transition: "opacity 1s ease-in-out",
          opacity: isVisible ? 1 : 0,
          fontFamily:"Mont-Bold, Sans-serif",
            }}
          >
            Drives Growth & Never
          </Typography>
          <Typography
            sx={{
              color: "#153A5F",
              fontSize: "2.7em",
              fontWeight: "800",
              marginTop: "-2%",
              transition: "opacity 1s ease-in-out",
          opacity: isVisible ? 1 : 0,
          fontFamily:"Mont-Bold, Sans-serif",
            }}
          >
            Lets You Down
          </Typography>

          <Typography
            sx={{
              color: "#153A5F",
              fontSize: "1.1em",
              fontWeight: "300",
              marginTop: "5%",
              fontFamily:"Mont-Regular, Sans-serif",
            }}
          >
            With our user-friendly and responsive interfaces, you <br/> can establish
            an online presence, drive growth, and <br/> disrupt your industry
          </Typography>
          <Button
            variant="contained"
            endIcon={<IoMdArrowRoundForward />}
            onClick={onPress}
            sx={{
              marginTop: "8%",

              padding: { xs: "3%", sm: "2%", md: "1.5%", lg: "1.8%" },
              width: { xs: "100%", sm: "80%", md: "60%", lg: "40%" },
              paddingLeft: "1%",
              paddingRight: "1%",
              borderRadius: 0,
              textTransform: "none",
              fontSize: "16px",
              fontFamily:"Mont-Regular, Sans-serif",
              boxShadow:'none',
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

export default DesignUX;
