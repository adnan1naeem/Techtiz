import React, { useState } from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import Image from "next/image";

function PortfoliosCard({
  title,
  description,
  mainImage,
  mr,
  ml,
  width,
  height,
  mrstep,
  mlstep,
  widthImg,
  mrlast,
  blogLink
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        cursor: "pointer"
      }}
      onClick={() => {
        window.location.href = blogLink;
      }}
    >
      <Card
        sx={{
          width: { xs: "21rem", sm: "35rem", md: "30rem", lg: "35rem" },
          height: { xs: "36rem", sm: "19rem", md: "20rem", lg: "19rem" },
          borderRadius: "30px",
          background: "#F8F8F8",
          transition: "transform 1s ease", // Adding transition for the transform property
          transform: isHovered ? "translateY(-12px)" : "translateY(0)",
          marginTop: "5%",
          boxShadow: "none",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              sm: "row",
              md: "row",
              lg: "row",
              xl: "row",
            },
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              height: { xs: "12rem", sm: "10rem", md: "9rem", lg: "11rem" },
              width: widthImg,
              mt: "2%",
              mr: mr,
              ml: ml,
              // "@media screen and (min-width: 1500px)": {
              //   width: "210%",
              // },
              "@media screen and (min-width: 1200px) and (max-width: 1300px)": {
                width: width,
                height: height,
                mr: mrlast,
              },
              "@media screen and (min-width: 1300px)": {
                mr: mrstep,
                ml: mlstep,
              },
            }}
          >
            <Image src={mainImage} alt="" style={{ height: "100%" }} />
          </Box>
          <Box sx={{ mt: "3%", ml: title === "Linked Golf" ? "3%" : 0 }}>
            <Typography
              sx={{
                fontSize: "23px",
                color: "#153A5F",
                fontWeight: "600",
                fontFamily: "'Mont-Bold',Sans-serif",
              }}
            >
              {title}
            </Typography>
            <Typography
              sx={{
                color: "#7A7A7A",
                fontSize: "13px",
                fontWeight: 600,
                fontFamily: "'Mont-Regular',Sans-serif",
                marginTop: "1%",
                lineHeight: "19px",
                "@media screen and (min-width: 1200px) and (max-width: 1300px)":
                  {
                    fontSize: "13px",
                  },
              }}
            >
              {(description ?? "").split(/\r?\n/).map((item, key) => {
                return (
                  <span key={key}>
                    {item}
                    <br />
                  </span>
                );
              })}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default PortfoliosCard;
