import { Box, Typography } from "@mui/material";
import DevelopmentCard from "../DevelopmentCard/DevelopmentCard";
import { useEffect, useRef, useState } from "react";

function Weeks() {
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
        marginTop: "5.5rem",
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          fontSize: { xs: "1.8em", sm: "2.1em", md: "2.1em", lg: "2.7em" },
          fontWeight: 'bold',
          lineHeight: '50px',
          color: "#153A5F",
          fontFamily: "'Mont-Bold', sans-serif",
          transition: "opacity 1s ease-in-out",
          opacity: isVisible ? 1 : 0,


        }}
      >
        Go Live In Less Than 4 Weeks
      </Typography>

      <Typography
        sx={{
          textAlign: "center",
          mt: '0.8%',
          width: { md: "100%", lg: "100%" },
          color: "#153A5F",
          lineHeight: "25px",
          fontSize: "1em",
          fontWeight: 600,
          fontFamily: "'Mont-Regular', sans-serif",
          transition: "opacity 1s ease-in-out",
          pl: { xs: '3%' },
          pr: { xs: '3%' },
          opacity: isVisible ? 1 : 0,
        }}
      >
        With our proven express delivery, you'll get your custom build
        software or mobile<br /> app in less than a month.
      </Typography>


      <Box
        sx={{

          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "1.5%",
          marginTop: "3%",
          '@media screen and (min-width: 1500px)': { // Adjust the minimum width as per your requirement
            maxWidth: "1200px",
            margin: "0 auto",
            marginTop: '2%'
          }
        }}
      >
        <DevelopmentCard
          background="#18B0E6"
          title="Ideation & Discovery"
          Description="This is where we get to know you; your needs, your ideas, and how we can turn them into a reality."
        />
        <DevelopmentCard
          background="#153A5F"
          title="Custom Development"
          Description="Our super smart tech experts create and design products that are tailored to build positive user experiences for your customers, starting with an MVP."
        />
        <DevelopmentCard
          background="#18B0E6"
          title="Team Augmentation"
          Description="You want to digitize your operations, or scale your tech foundations? Our managed teams of talented engineers and developers can augment your growth."
        />
        <DevelopmentCard
          background="#153A5F"
          title="Product Design"
          Description="Intuitive and responsive design is what we excel at; whether it is a redesign job or starting from scratch."
        />
        <DevelopmentCard
          background="#18B0E6"
          title="Support & Maintenance"
          Description="We don’t just sell and forget. We follow up and provide support and maintenance services for regular updates and seamless execution"
        />
        <DevelopmentCard
          background="#153A5F"
          title="Rescue Missions"
          Description="If your previous development team fell short of meeting your project requirements, our rescue team is here to assist in getting your project back on course."
        />
      </Box>
    </Box>
  );
}

export default Weeks;
