import { Box, Typography } from "@mui/material";
import FeedbackVideo from "../FeedbackVideo/FeedbackVideo";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Slider from "react-slick";
import { useEffect, useRef, useState } from "react";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <FaChevronRight
      className={className}
      style={{
        ...style,
        display: "block",
        color: "white",
        marginRight: '-0.7%'


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
        marginLeft: "-1%",
      }}
      onClick={onClick}
    />
  );
}

function FeedBack() {
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
      ref={weeksRef}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        background: "#153A5F",
        p: { xs: '0', sm: "2.5rem", md: '5.5rem', lg: '5.5rem', xl: "9.5rem" },
        pt: { xs: '3.5rem', sm: "8rem", md: '10rem', lg: '15.5rem', xl: "15.5rem" },
        pb: { xs: '3.5rem', sm: "8rem", md: '10rem', lg: '15.5rem', xl: "15.5rem" },
        "@media screen and (min-width: 1100px) and (max-width: 1300px)": {
          p: '1.5rem',
          pt: "5rem",
          pb: "5rem",
        },
         "@media screen and (min-width: 900px) and (max-width: 1100px)": {
          p: '0',
          pt: "10rem",
          pb: "10rem",
        },
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
          transition: "opacity 1s ease-in-out",
          opacity: isVisible ? 1 : 0,
          fontFamily: "'Mont-Bold', sans-serif",
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
          mt: { xs: "5%", md: "0%" },
          fontSize: {
            xs: "0.8em",
            sm: "1em",
            lg: "1em",
          },
          fontWeight: "100",
          transition: "opacity 1s ease-in-out",
          opacity: isVisible ? 1 : 0,
          fontFamily: "'Mont-Regular', sans-serif"
        }}
      >
        Our diverse and satisfied clientele have consistently shared positive
        feedback about their experiences with us.
      </Typography>
      <Box
        sx={{
          marginLeft: { xs: "10%", sm: "5%", md: '12%', lg: "5%", xl: "12%" },
          marginRight: { xs: "10%", sm: "5%", md: '12%', lg: "5%", xl: "12%" },
          paddingTop: '4%'
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
