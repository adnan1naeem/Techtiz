import { Box, Typography } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import TechnologiesCard from "../TechnologiesCard/TechnologiesCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useRef, useState } from "react";
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
        marginRight: '1%'

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
        marginLeft: "-4%",
      }}
      onClick={onClick}
    />
  );
}

function Technologies() {
  const [isVisible, setIsVisible] = useState(false);
  const weeksRef = useRef(null);


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(weeksRef.current);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.2,
      }
    );

    if (weeksRef.current) {
      observer.observe(weeksRef.current);
    }

    return () => {
      if (weeksRef.current) {
        observer.unobserve(weeksRef.current);
      }
    };
  }, []);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Show 4 slides by default
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
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
    <Box sx={{ marginTop: { xs: "20%", sm: "12%", md: "4%" }, marginBottom: { xs: "20%", sm: "12%", md: "4%" } }} ref={weeksRef}>
      <Typography
        sx={{
          color: "#153A5F",
          textAlign: "center",
          fontSize: { xs: "1.8em", sm: "2.1em", md: "2.1em", lg: "2.7em" },
          fontWeight: "bold",
          transition: "opacity 1s ease-in-out",
          opacity: isVisible ? 1 : 0,
          fontFamily: "'Mont-Bold', sans-serif"
        }}
      >
        Technologies
      </Typography>
      <Typography
        sx={{
          marginTop: { xs: "5%", md: '1%' },
          color: "#153A5F",
          textAlign: "center",
          fontWeight: 600,
          fontSize: { xs: "0.9em", md: "1em" },
          transition: "opacity 1s ease-in-out",
          pl: { xs: '3%' },
          pr: { xs: '3%' },
          opacity: isVisible ? 1 : 0,
          fontFamily: "'Mont-Regular', sans-serif"
        }}
      >
        We are a multi-platform app development company with modern technologies
        in our arsenal
      </Typography>
      <Box
        sx={{
          marginTop: { xs: "8%", md: '5%' },
          marginLeft: { xs: '8%', sm: '10%', md: '7%', lg: '8%', xl: '22%' },
          marginRight: { xs: '8%', sm: '10%', md: '7%', lg: '8%', xl: '22%' },
          marginBottom: "5%",
          "@media screen and (min-width: 1530px) and (max-width: 1600px)": {
            marginLeft: '18%',
            mr: '18%'
          },
        }}
      >
        <Box sx={{
          ml: '5%',
        }}>
          <Slider {...settings} >
            <TechnologiesCard image={'https://techtiz.co/wp-content/uploads/2023/10/css3-logo-svg-vector.svg'} width="80%" />
            <TechnologiesCard image={'https://techtiz.co/wp-content/uploads/2023/10/Flutter.svg'} />
            <TechnologiesCard image={'https://techtiz.co/wp-content/uploads/2023/09/reactjs.svg'} />
            <TechnologiesCard image={'https://techtiz.co/wp-content/uploads/2023/09/android.svg'} />
            <TechnologiesCard image={'https://techtiz.co/wp-content/uploads/2023/09/nodejs-white.svg'} />
            <TechnologiesCard image={'https://techtiz.co/wp-content/uploads/2023/10/Bootstrap-Icon.svg'} />
            <TechnologiesCard image={'https://techtiz.co/wp-content/uploads/2023/10/html5-2.svg'} width="45%" />
          </Slider>
        </Box>
      </Box>
    </Box>
  );
}


export default Technologies;
