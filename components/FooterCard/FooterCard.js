import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import Link from "next/link";

function FooterCard({
  title,
  text1,
  text2,
  text3,
  text4,
  text5,
  href_one,
  href_two,
  href_three,
  href_four,
  href_five,
}) {
  return (
    <Box>
      <Card
        sx={{
          height: { sx: "17rem", sm: "21rem", md: "19rem", lg: "17rem" },
          width: { sx: "10rem", sm: "7rem", md: "9rem", lg: "12rem" },
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
              fontFamily:"Mont-Bold, Sans-serif",
            }}
          >
            {title}
          </Typography>

          <Link
            style={{ textDecoration: "none" }}
            href={{ pathname: href_one }}
          >
            <Typography
              sx={{
                color: "#153A5F",
                "&:hover": {
                  color: "#18B0E6",
                },
                cursor: "pointer",
                fontSize: "15px",
                fontFamily:"Mont-Regular, Sans-serif",
                fontWeight:600,
                "@media screen and (min-width: 1200px) and (max-width: 1300px)": {
                  fontSize: "15px",
              },
              }}
            >
              {text1}
            </Typography>
          </Link>

          <Link
            style={{ textDecoration: "none" }}
            href={{ pathname: href_two }}
          >
            <Typography
              sx={{
                color: "#153A5F",
                marginTop: "10px",
                "&:hover": {
                  color: "#18B0E6",
                },
                cursor: "pointer",
                fontSize: "15px",
                fontFamily:"Mont-Regular, Sans-serif",
                fontWeight:600,
                "@media screen and (min-width: 1200px) and (max-width: 1300px)": {
                  fontSize: "15px",
              },
              }}
            >
              {text2}
            </Typography>
          </Link>

          <Link
            style={{ textDecoration: "none" }}
            href={{ pathname: href_three }}
          >
            <Typography
              sx={{
                color: "#153A5F",
                marginTop: "10px",
                "&:hover": {
                  color: "#18B0E6",
                },
                cursor: "pointer",
                fontSize: "15px",
                fontFamily:"Mont-Regular, Sans-serif",
                fontWeight:600,
                "@media screen and (min-width: 1200px) and (max-width: 1300px)": {
                  fontSize: "15px",
              },
              }}
            >
              {text3}
            </Typography>
          </Link>

          <Link
            style={{ textDecoration: "none" }}
            href={{ pathname: href_four }}
          >
            <Typography
              sx={{
                color: "#153A5F",
                marginTop: "10px",
                "&:hover": {
                  color: "#18B0E6",
                },
                cursor: "pointer",
                fontSize: "15px",
                fontFamily:"Mont-Regular, Sans-serif",
                fontWeight:600,
                "@media screen and (min-width: 1200px) and (max-width: 1300px)": {
                  fontSize: "15px",
              },
              }}
            >
              {text4}
            </Typography>
          </Link>

          <Link
            style={{ textDecoration: "none" }}
            href={{ pathname: href_five }}
          >
            <Typography
              sx={{
                color: "#153A5F",
                marginTop: "10px",
                "&:hover": {
                  color: "#18B0E6",
                },
                cursor: "pointer",
                fontSize: "15px",
                fontFamily:"Mont-Regular, Sans-serif",
                fontWeight:600,
                "@media screen and (min-width: 1200px) and (max-width: 1300px)": {
                  fontSize: "15px",
              },
              }}
            >
              {text5}
            </Typography>
          </Link>
        </CardContent>
      </Card>
    </Box>
  );
}

export default FooterCard;
