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
          width: { sx: "12rem", sm: "14rem", md: "14rem", lg: "14em" },
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
              fontFamily: "Mont-Bold, Sans-serif",
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
            <IoMdCall
              style={{ marginRight: "3%", fontWeight: "600", fontSize: "17px", fontFamily: "Mont-Regular, Sans-serif", }}
            />
            <a href="tel:+923261199244">

              <span style={{
                fontSize: "17px", fontFamily: "Mont-Regular, Sans-serif", fontWeight: 600,
                "@media screen and (min-width: 1200px) and (max-width: 1300px)": {
                  fontSize: "15px",
                },
              }}>+92 326 1199244</span>
            </a>

          </Typography>
          <a
            href="mailto:contact@techtiz.co"
            style={{ textDecoration: "none" }}
          >
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
                fontWeight: 600,
                width: { md: "16rem" },
                "@media screen and (min-width: 1200px) and (max-width: 1300px)": {
                  fontSize: "15px",
                },
              }}
            >
              <MdOutlineMail
                style={{
                  marginRight: "3%",
                  fontWeight: "600",
                  fontSize: "17px",
                }}
              />

              <span style={{ fontSize: "17px", fontFamily: "Mont-Regular, Sans-serif", }}>contact@techtiz.co</span>
            </Typography>
          </a>
          <a
            href="https://maps.app.goo.gl/xdnZEaDkwAxztgJq6"
            style={{ textDecoration: "none" }}
          >
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
                fontWeight: 600,
                "@media screen and (min-width: 1200px) and (max-width: 1300px)": {
                  fontSize: "15px",
                },
              }}
            >
              <FaSearchLocation
                style={{
                  marginRight: "3%",
                  fontWeight: "200",
                  fontSize: "17px",
                }}
              />
              <span style={{ fontSize: "17px", fontFamily: "Mont-Regular, Sans-serif", }}>Our location</span>
            </Typography>
          </a>
        </CardContent>
      </Card>
    </Box>
  );
}

export default FooterReach;
