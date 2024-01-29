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
        display: 'flex',
        flexDirection: 'column', // or 'row' depending on your layout
        justifyContent: 'center',
        height: '50rem',
        background: "#153A5F",
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          color: "#FFFFFF",
          paddingRight: 3,
          paddingLeft: 3,
          fontSize: {
            xs: "1.5em",
            sm: "1.8em",
            md: "2em",
          },
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
          paddingRight: 3,
          paddingLeft: 3,
          fontSize: {
            xs: "0.8em",
            sm: "1em",
            md: "1.2em",
          },
          fontWeight: "100",
        }}
      >
        Our diverse and satisfied clientele have consistently shared positive
        feedback about their experiences with us.
      </Typography>
      <Box
        sx={{
          marginLeft: '16%',
          marginRight: '16%',
          paddingTop: '2%'
        }}
      >
        <Slider {...settings}>
          <FeedbackVideo link={'https://techtiz.co/wp-content/uploads/2023/11/Linked-golf-app-review.mp4'} />
          <FeedbackVideo link={'https://techtiz.co/wp-content/uploads/2023/11/Norbu-Snow-Feedback.mp4'} />
          <FeedbackVideo link={'https://techtiz.co/wp-content/uploads/2023/11/Linked-golf-app-review.mp4'} />
        </Slider>
      </Box>
    </Box>
  );
}

export default FeedBack;
