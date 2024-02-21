import React, { useState } from "react";
import { Box, Card, CardActions, CardContent, Typography } from "@mui/material";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";

function ExpertiseCard({ title, imageCard, height, description, href }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box>
      <Link href={{ pathname: href }} style={{ textDecoration: 'none' }}>
        <Card
          sx={{
            width: { xs: "21rem", sm: "25rem", md: "26rem", lg: "31rem" },
            height: { xs: "31rem", sm: "20rem", md: "20rem", lg: "19rem" },

            borderRadius: "30px",
            background: "#F8F8F8",
            transition: "transform 1s ease", // Adding transition for the transform property
            transform: isHovered ? "translateY(-12px)" : "translateY(0)",
            marginTop: "4%",
            boxShadow:'none'
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

            <Box sx={{ width: { xs: "100%", sm: "45%", md: "45%", lg: "45%" } }}>
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
                  fontWeight: "300",
                  fontFamily: "Mont-Regular, Sans-serif",
                  marginTop: "2%",
                  lineHeightt: 17,
                }}
              >
                {description}
              </Typography>
            </Box>
            <Box
              sx={{
                width: { xs: "100%", sm: "40%", md: "40%", lg: "40%" },
                marginTop: { xs: "8%", sm: "0%", md: "0%", lg: "0%" },
              }}
            >
              <img src={imageCard} alt="" style={{ height: height }} />
            </Box>
          </CardContent>
          <CardActions style={{ display: "flex", justifyContent: "flex-end" }}>
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
