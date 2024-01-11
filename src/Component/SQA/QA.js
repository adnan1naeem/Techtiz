import React from "react";
import { Box, Card, CardContent, Typography, Button } from "@mui/material";
import { IoMdArrowRoundForward } from "react-icons/io";
function QA() {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignContent: "center" }}
    >
      <Card
        sx={{
          width: { xs: "23rem", sm: "33rem", md: "28rem", lg: "36rem" },
          height: { xs: "45rem", sm: "26rem", md: "32rem", lg: "28rem" },

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
            &nbsp;QA & Testing
          </Typography>
          <Typography
            sx={{
              color: "#153A5F",
              fontSize: "2.7em",
              fontWeight: "800",
              marginTop: "1%",
            }}
          >
            Keep Your Business
          </Typography>
          <Typography
            sx={{
              color: "#153A5F",
              fontSize: "2.8em",
              fontWeight: "800",
              marginTop: "-4%",
            }}
          >
           Running With Our
          </Typography>
          <Typography
            sx={{
              color: "#153A5F",
              fontSize: "2.7em",
              fontWeight: "800",
              marginTop: "-4%",
            }}
          >
           Software Quality
          </Typography>
          <Typography
            sx={{
              color: "#153A5F",
              fontSize: "2.7em",
              fontWeight: "800",
              marginTop: "-4%",
            }}
          >
          Testing Services
          </Typography>

          <Typography
            sx={{
              color: "#153A5F",
              fontSize: "1.1em",
              fontWeight: "400",
              marginTop: "2%",
            }}
          >
            Getting the most out of your business starts with a <br/>customized quality testing approach
          </Typography>
          <Button
            variant="contained"
            endIcon={<IoMdArrowRoundForward />}
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

export default QA;
