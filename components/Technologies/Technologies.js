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
        height: 30,
        width: 30,
        
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
        height: 30,
        width: 30,
        color: "#153A8D",
        marginLeft: "-5%",
      }}
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
    nextArrow: <SampleNextArrow  />,
    prevArrow: <SamplePrevArrow />,
    // centerMode: true, // Enable center mode

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
          color: "var(--e-global-color-9f67d62)",
          textAlign: "center",
          fontSize: "2.7em",
          fontWeight: "600",
        }}
      >
        Technologies
      </Typography>
      <Typography
        sx={{
          marginTop: '1%',
          color: "var(--e-global-color-9f67d62)",
          textAlign: "center",
          fontWeight: "100",
          fontSize: "1em",
        }}
      >
        We are a multi-platform app development company with modern technologies
        in our arsenal
      </Typography>
      <Box
        sx={{
          marginTop: "2%",
          marginLeft: {xs: '8%', sm: '10%', md: '7%', lg: '14%', xl:'22%'},
          marginRight: {xs: '8%', sm: '10%', md: '7%', lg: '14%', xl:'22%'},
          // backgroundColor: {xs: 'red', sm: 'purple', md: 'yellow', lg: 'green', xl:'orange'},
          marginBottom: "7%"
        }}
      >
      <Box sx={{ml:'6%'}}> 

     
        <Slider {...settings} >
          <TechnologiesCard image={'https://techtiz.co/wp-content/uploads/2023/10/css3-logo-svg-vector.svg'} />
          <TechnologiesCard image={'https://techtiz.co/wp-content/uploads/2023/10/Flutter.svg'} />
          <TechnologiesCard image={'https://techtiz.co/wp-content/uploads/2023/09/reactjs.svg'} />
          <TechnologiesCard image={'https://techtiz.co/wp-content/uploads/2023/09/android.svg'} />
          <TechnologiesCard image={'https://techtiz.co/wp-content/uploads/2023/09/nodejs-white.svg'} />
          <TechnologiesCard image={'https://techtiz.co/wp-content/uploads/2023/10/Bootstrap-Icon.svg'} />
          <TechnologiesCard image={'https://techtiz.co/wp-content/uploads/2023/10/html5-2.svg'} />
        </Slider>
        </Box>
      </Box>
    </Box>
  );
}


export default Technologies;
