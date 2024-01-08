import { Box, Typography } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import TechnologiesCard from "../TechnologiesCard/TechnologiesCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <FaChevronRight
      className={className}
      style={{
        ...style,
        display: "block",
        color: "#153A8D",

        marginRight: "1%", // Add right margin of 5%
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <FaChevronLeft
      className={className}
      style={{ ...style, display: "block",color: "#153A8D", marginLeft:'-3%'}}
      onClick={onClick}
    />
  );
}

function Technologies() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Show 4 slides by default
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 1200, // Show 3 slides on medium screens (md)
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // Show 2 slides on small screens (sm)
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <Box sx={{ marginTop: "4%" }}>
      <Typography
        sx={{
          color: "#153A8D",
          textAlign: "center",
          fontSize: "2.7em",
          fontWeight: "600",
        }}
      >
        Technologies
      </Typography>
      <Typography
        sx={{
          color: "#153A8D",
          textAlign: "center",
          fontWeight: "100",
          fontSize: "1em",
        }}
      >
        We are a multi-platform app development company with modern technologies
        in our arsenal
      </Typography>
      <Box sx={{ marginTop: "5%", marginLeft: "12%", marginRight: "10%" ,marginBottom:'6%'}}>
        <Slider {...settings}>
          <TechnologiesCard />
          <TechnologiesCard />
          <TechnologiesCard />
          <TechnologiesCard />
          <TechnologiesCard />
        </Slider>
      </Box>
    </Box>
  );
}

export default Technologies;
