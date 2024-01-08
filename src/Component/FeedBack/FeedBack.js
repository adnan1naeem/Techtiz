import { Box, Typography } from "@mui/material";
import FeedbackVideo from "../FeedbackVideo/FeedbackVideo";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <FaChevronRight
      className={className}
      style={{
        ...style,
        display: "block",
        color: "white",

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
      style={{
        ...style,
        display: "block",
        color: "white",
        marginLeft: "-3%",
      }}
      onClick={onClick}
    />
  );
}

function FeedBack() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Show 4 slides by default
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 1200, // Show 3 slides on medium screens (md)
        settings: {
          slidesToShow: 2,
        },
      },
     
      {
        breakpoint: 968, // Show 2 slides on small screens (sm)
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <Box
      sx={{
        background: "#153A5F",
      }}
    >
      <Typography
        sx={{
          paddingTop: "10%",
          textAlign: "center",
          color: "#FFFFFF",
          fontSize: "2em",
          fontWeight: "600",
        }}
      >
        Feedback From Satisfied Clients
      </Typography>
      <Typography
        sx={{
          paddingTop: "1%",
          textAlign: "center",
          color: "#FFFFFF",
          fontSize: "1em",
          fontWeight: "100",
        }}
      >
        Our diverse and satisfied clientele have consistently shared positive
        feedback about their experiences with us.
      </Typography>
      <Box
        sx={{
          marginTop: "4%",
          marginLeft: "12%",
          marginRight: "10%",
          paddingBottom: "10%",
        }}
      >
        <Slider {...settings}>
          <FeedbackVideo />
          <FeedbackVideo />
          <FeedbackVideo />
        </Slider>
      </Box>
    </Box>
  );
}

export default FeedBack;
