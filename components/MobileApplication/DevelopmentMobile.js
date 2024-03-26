import { Box, Typography } from "@mui/material";
import MobileServices from "./MobileServices";
import React from "react";
import { useEffect, useRef, useState } from "react";
function DevelopmentMobile({ onPress }) {
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
  return (
    <Box
      ref={weeksRef}
      sx={{
        background: "#153A5F",
        marginTop: "1%",
        backgroundImage: `url('https://techtiz.co/wp-content/uploads/2023/10/bg-lines.png')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '260px',

        paddingBottom: "6%",
        marginBottom: "3%",
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          paddingTop: "6%",
          color: "#FFFFFF",
          fontSize: { xs: "18px", sm: "2.2em" },
          fontWeight: "600",
          transition: "opacity 1s ease-in-out",
          fontFamily: "Mont-Bold, Sans-serif",
          opacity: isVisible ? 1 : 0,
        }}
      >
        Mobile App Development Services
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "1%",
          marginBottom: "2%",
          '@media screen and (min-width: 1700px)': {
            mt: '0.7%'

          }
        }}
      >
        <MobileServices
          image="https://techtiz.co/wp-content/uploads/2023/10/reactjs-svgrepo-com.svg"
          title="React Native Development"
          des="We develop high-quality digital products using the best cross-platform mobile app development platform."
          onPress={onPress}
        />
        <MobileServices
          image="https://techtiz.co/wp-content/uploads/2023/10/flutter-svgrepo-com.svg"
          title="Flutter App Development"
          des="Our solution-oriented developers use Flutter UI framework to deliver unconventional and engaging app designs that drive growth."
          onPress={onPress}

        />
        <MobileServices
          image="https://techtiz.co/wp-content/uploads/2023/10/icons8-android-2.svg"
          title="Andriod Development"
          des="We design intuitive and easy-to-use Android apps with people in mind, so your customers can use them on any device type"
          onPress={onPress}

        />
        <MobileServices
          image="https://techtiz.co/wp-content/uploads/2023/10/icons8-ios-800-300x300.png"
          title="iOS Development"
          des="With years of experience and expertise in all the latest coding languages, our solution-oriented programmers create feature-rich and intuitive rich iOS apps."
          onPress={onPress}

        />
      </Box>
    </Box>
  );
}
export default DevelopmentMobile;
