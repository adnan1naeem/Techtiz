import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import { IoMdCall } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import { FaSearchLocation } from "react-icons/fa";

function FooterReach() {
    return (
      <Box>
        <Card
          sx={{
            width: {sx:"12rem",sm :'12rem', md:'12rem', lg:'14em'},
            height: "17rem",
            background: "none",
            boxShadow: "none",
          }}
        >
          <CardContent sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              sx={{
                color: "#153A5F",
                fontSize: "18px",
                fontWeight: "600",
                paddingBottom: "12%",
              }}
            >
              Reach Us
            </Typography>
            <Typography
              sx={{
                display: "flex",
                alignItems: "center", // Align items vertically
                color: "#153A5F",
                "&:hover": {
                  color: "#18B0E6",
                },
                cursor: "pointer",
              }}
            >
              <IoMdCall style={{ marginRight: '3%', fontWeight: '600', fontSize: '17px' }} />
              <span style={{ fontSize: '17px' }}>+92 326 1199244</span>
            </Typography>
            <Typography
              sx={{
                display: "flex",
                alignItems: "center", // Align items vertically
                color: "#153A5F",
                marginTop: "10px",
                "&:hover": {
                  color: "#18B0E6",
                },
                cursor: "pointer",
              }}
            >
              <MdOutlineMail style={{ marginRight: '3%', fontWeight: '600', fontSize: '17px' }} />
              <span style={{ fontSize: '17px' }}>contact@techtiz.co</span>
            </Typography>
            <Typography
              sx={{
                display: "flex",
                alignItems: "center", // Align items vertically
                color: "#153A5F",
                marginTop: "10px",
                "&:hover": {
                  color: "#18B0E6",
                },
                cursor: "pointer",
              }}
            >
              <FaSearchLocation style={{ marginRight: '3%', fontWeight: '300', fontSize: '17px' }} />
              <span style={{ fontSize: '17px' }}>Our location</span>
            </Typography>
          </CardContent>
        </Card>
      </Box>
    );
  }
  

export default FooterReach;
