import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import Image from "next/image";
import imageis from '../../assets/svg/contact-pakistan.svg';
function ContactInfo() {
  return (
    <Box>
      <Card
        sx={{
          width: { xs: "97.5%", sm: "30rem", md: "30rem", lg: "30rem" },
          // width: "97.5%",
          height: { xs: "27rem", sm: "27rem", md: "25rem", lg: "15rem" },
          borderRadius: "5px",
          background: "#6373810F",
          boxShadow: "none",
          marginLeft: { xs: "5px", sm: 0 },
          "@media screen and (min-width: 500px) and (max-width: 600px)": {
            width: "30rem"
          },
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
          <Box sx={{ "&:hover img": { transform: "scale(1.1)", transition: "transform 0.3s ease" }, }}>
            <img
              src={`${imageis.src}`}
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
