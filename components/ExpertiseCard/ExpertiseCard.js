import React, { useState } from "react";
import { Box, Card, CardActions, CardContent, Typography } from "@mui/material";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";

function ExpertiseCard({ title, imageCard, imagestyle, description, href, width, ml }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box sx={{ mt: '2%' }}>
      <Link href={{ pathname: href }} style={{ textDecoration: 'none' }}>
        <Card
          sx={{
            width: { xs: "20rem", sm: "36rem", md: "26rem", lg: "31rem" },
            height: { xs: "25rem", sm: "22rem", md: "20rem", lg: "19rem" },
            borderRadius: "30px",
            background: "#F8F8F8",
            transition: "transform 1s ease", // Adding transition for the transform property
            transform: isHovered ? "translateY(-12px)" : "translateY(0)",
            marginTop: "3%",
            boxShadow: 'none'
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <CardContent
            style={{ marginLeft: "5%", marginRight: "10%" }}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row", md: "row", lg: "row" },
              marginTop: "13%",
              justifyContent: "space-between",
            }}
          >

            <Box sx={{ width: { xs: "100%", sm: "100%", md: "100%", lg: "60%" } }}>
              <Typography
                sx={{
                  fontSize: "31px",
                  color: "#153A5F",
                  fontWeight: "600",
                  lineHeight: 1,
                  fontFamily: "Mont-Bold, Sans-serif",
                }}
              >
                {title}
              </Typography>
              <Typography
                sx={{
                  color: "#7A7A7A",
                  fontSize: "14px",

                  fontFamily: "Mont-Regular, Sans-serif",
                  marginTop: "2%",
                  fontWeight: 600,
                  lineHeightt: 17,
                }}
              >
                {description}
              </Typography>
            </Box>
            <Box
              sx={{
                width: width,
                marginTop: { xs: "8%", sm: "0%" },
                ml: ml,
                mr: "-4%",
                height: { md: '20%' },
                height: { md: '20%' },
                "@media screen and (min-width: 1200px) and (max-width: 1300px)": {
                  width: href==="sqa" ?"30%": "40%",
                },
                "@media screen and (min-width: 1300px) and (max-width: 1535px)": {
                  width: href==="sqa" ?"30%": "40%",
                },
              }}
            >
              <img src={imageCard} alt="" style={{ imagestyle }} />
            </Box>
          </CardContent>
          <CardActions style={{ display: "flex", justifyContent: "flex-end", position: 'absolute',bottom: "5%", right: "5%", }} sx={{ top: { xs: "90%", sm: "80%", md: "85%", lg: "80%" } }}>
            <GoArrowUpRight
              style={{
                fontSize: "30px",
                color: "#153A5F",
                marginRight: "5%",
              }}
            />
          </CardActions>
        </Card>
      </Link>
    </Box>
  );
}

export default ExpertiseCard;
