import React from "react";
import { Box, Card, CardContent, Typography, Button } from "@mui/material";
import { IoMdArrowRoundForward } from "react-icons/io";
function Grow() {
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
              height: "20px",
              lineHeight: "20px",
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
            }}
          >
            Grow With a Mobile App
          </Typography>
          <Typography
            sx={{
              color: "#153A5F",
              fontSize: "2.2em",
              fontWeight: "600",
              marginTop: "-2%",
            }}
          >
            Your Customers Will Love
          </Typography>
          <Typography   sx={{
              color: "#18B0E6",
              fontSize: "1.2em",
              fontWeight: "600",
 
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
            sx={{
              marginTop: "8%",

              padding: { xs: "3%", sm: "2%", md: "1.5%", lg: "1.8%" },
              width: { xs: "100%", sm: "80%", md: "60%", lg: "40%" },
              paddingLeft: "1%",
              paddingRight: "1%",
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

export default Grow;
