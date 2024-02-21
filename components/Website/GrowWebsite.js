import React from "react";
import { Box, Card, CardContent, Typography, Button } from "@mui/material";
import { IoMdArrowRoundForward } from "react-icons/io";
function GrowWebsite({onPress}) {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 700);

    return () => clearTimeout(timer);
  }, []);
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignContent: "center" ,marginTop:'1%',mr:'8%'}}
    >
      <Card
        sx={{
          width: { xs: "22rem", sm: "28rem", md: "27rem", lg: "38rem" },
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
              height: "18px",
              lineHeight: "20px",
              transition: "opacity 1s ease-in-out",
          opacity: isVisible ? 1 : 0,
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
            }}
          >
            Make your website stand out with our professional <br/> web development services.
          </Typography>
          <Button
            variant="contained"
            endIcon={<IoMdArrowRoundForward />}
            onClick={onPress}
            sx={{
              marginTop: "6%",

              padding: { xs: "3%", sm: "2%", md: "1.5%", lg: "1.8%" },
              width: { xs: "100%", sm: "80%", md: "60%", lg: "35%" },
              paddingLeft: "2px",
              paddingRight: "2px",
              borderRadius: 0,
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

export default GrowWebsite;
