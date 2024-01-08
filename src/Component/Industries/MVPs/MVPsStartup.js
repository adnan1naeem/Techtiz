import React from "react";
import { Box, Card, CardContent, Typography, Button } from "@mui/material";
import { IoMdArrowRoundForward } from "react-icons/io";
import List from "../List";


function MVPsStartup() {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignContent: "center" }}
    >
      <Card
        sx={{
          width: { xs: "22rem", sm: "32rem", md: "23rem", lg: "33rem" },
          height: { xs: "38rem", sm: "39rem", md: "38rem", lg: "34rem" },
          background: "none",
          boxShadow: "none",
        }}
      >
        <CardContent sx={{ display: "flex", flexDirection: "column" }}>
          <Typography
            sx={{ color: "#F8F8F8", fontSize: "2.2em", fontWeight: "600" }}
          >
            MVPs for Startups
          </Typography>
          <Typography
            sx={{
              color: "#18B0E6",
              fontSize: "1.1em",
              fontWeight: "300",
              marginTop: "1%",
            }}
          >
            We empower startups with MVPs specifically tailored to redefine their digital identity and establish dominance.
          </Typography>
          <Typography
            sx={{
              color: "#18B0E6",
              fontSize: "1.2em",
              fontWeight: "700",
              marginTop: "4%",
              borderLeft: "12px solid #18B0E6",
              height: "20px",
              paddingLeft: "10px",
              lineHeight:'20px'
            }}
          >
            What we offer
          </Typography>
          <Typography
            sx={{
              color: "#F8F8F8",
              fontSize: "21px",
              fontWeight: "600",
              lineHeight: "29px",
              marginTop: "5%",
            }}
          >
            Development of software for management distribution
          </Typography>
          <Box sx={{ marginTop: "3%" }}>
            <List listone="Inventory management systems"  textColor="#F8F8F8"/>
            <List listone="Delivery tracking software"  textColor="#F8F8F8"/>
            <List listone="User-friendly and efficient mobile applications"  textColor="#F8F8F8"/>
            <List listone="Validation and standardization of data"  textColor="#F8F8F8"/>
          </Box>
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
              background: "none",
              boxShadow: "none",
              color: "F8F8F8",
              border: "1px solid #18B0E6",
              "&:hover": {
                backgroundColor: "#18B0E6",
                color:'black'
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

export default MVPsStartup;
