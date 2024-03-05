import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
function ContactInfo() {
  return (
    <Box>
      <Card
        sx={{
          width: { xs: "20rem", sm: "23rem", md: "28rem", lg: "30rem" },
          height: { xs: "27rem", sm: "27rem", md: "16rem", lg: "15rem" },
          borderRadius: "5px",
          background: "#6373810F",
          boxShadow: "none",
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            gap: "6%",
            marginTop: "4%",
            marginLeft: "5%",
            flexWrap: "wrap",
          }}
        >
        <Box sx={{ "&:hover img": { transform: "scale(1.1)",transition: "transform 0.3s ease" }, }}>
          <img
            src="https://techtiz.co/wp-content/uploads/2023/09/pakistan.svg"
            alt=""
            width={"63px"}
          />
          </Box>
          <Box>
            <Typography
              sx={{
                color: "#153A5F",
                fontSize: "20px",
                fontWeight: "600",
                paddingBottom: "7%",
                fontFamily: "'Mont-Bold', sans-serif"
              }}
            >
              Contact Info
            </Typography>
            <Typography
              sx={{
                color: "#153A5F",
                fontSize: "15px",
                fontFamily: "'Mont-Regular', sans-serif",
                fontWeight: 600,
              }}
            >
              Email: contact@techtiz.co
            </Typography>
            <Typography
              sx={{
                color: "#153A5F",
                fontSize: "15px",
                fontFamily: "'Mont-Regular', sans-serif",
                fontWeight: 600,
              }}
            >
              Phone: +92 326 1199244
            </Typography>
            <Typography
              sx={{
                color: "#153A5F",
                fontSize: "15px",
                fontFamily: "'Mont-Regular', sans-serif",
                fontWeight: 600,
              }}
            >
              Office address: 34, Block-Civic Center,
            </Typography>
            <Typography
              sx={{
                color: "#153A5F",
                fontSize: "15px",
                fontFamily: "'Mont-Regular', sans-serif",
                fontWeight: 600,
              }}
            >
              Quaid - e- Azam Town / Township, Scheme, <br /> Lahore, Pakistan
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default ContactInfo;
