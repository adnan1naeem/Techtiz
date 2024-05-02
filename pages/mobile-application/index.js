import React, { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Grow from "../../components/MobileApplication/Grow";
import CrossLine from "../../components/MobileApplication/CrossLine";
import ExpertiseMobile from "../../components/MobileApplication/ExpertiseMobile";
import OutshineCard from "../../components/MobileApplication/OutshineCard";
import DoItMobile from "../../components/MobileApplication/DoItMobile";
import DiscussProject from "../../components/Website/DiscussProject";
import SalesTeam from "../../components/SalesTeam/SalesTeam";
import DevelopmentMobile from "../../components/MobileApplication/DevelopmentMobile";
import Image from "next/image";
import Head from "next/head";

const useStyles = makeStyles((theme) => ({
  leftPaper: {
    position: "sticky",
    top: 190,
    color: "yellow",
    padding: 10,
    zIndex: 1,
  },
  rightPaper: {
    top: 10,
    overflowY: "auto",
    padding: 0,
  },
}));

function Mobile() {
  const contactSectionRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const classes = useStyles();
  const [scrollTop, setScrollTop] = useState(0);
  const [scrollEnd, setScrollEnd] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrollTop(scrollY);
      setScrollEnd(
        document.documentElement.scrollHeight - window.innerHeight === scrollY
      );
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleRightScroll = (e) => {
    if (scrollEnd) {
      e.stopPropagation();
    }
  };

  const handleClick = () => {
    if (contactSectionRef.current) {
      const yOffset = -180;
      const element = contactSectionRef.current;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <>
     <Head>
        <title>Mobile App | Techtiz</title>
        <meta name="description" content="" key="desc" />
      </Head>
      <div>
        <Box
          sx={{
            marginTop: {
              xs: "30%",
              sm: "15%",
              md: "14%",
              lg: "11%",
              xl: "10%",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: { xs: "1%", sm: "2%", md: "2%", lg: "12%", xl: "8%" },
              width: "100%",
              flexWrap: "wrap",
              "@media screen and (min-width: 1700px)": {
                gap: "10%",
              },
            }}
          >
            <Grow onPress={handleClick} />

            <Box
              sx={{
                width: {
                  xs: "60%",
                  sm: "70%",
                  md: "30%",
                  lg: "30%",
                  xl: "24%",
                },
                mt: { xs: 0, sm: 0, md: "2%", lg: 0, xl: 0 },
                transform: isHovered ? "translateY(-12px)" : "translateY(0)",
                transition: "transform 1s ease",
                "@media screen and (min-width: 1530px) and (max-width: 1600px)":
                  {
                    width: "30rem",
                    top: 250,
                  },
                "@media screen and (min-width: 1200px) and (max-width: 1300px)":
                  {
                    width: "37%",
                    mt: "1%",
                  },
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Image
                src={require("../../assets/svg/website-mobile-app.svg")}
                alt=""
                style={{ width: "100%" }}
              />
            </Box>
          </Box>
          <DevelopmentMobile onPress={handleClick} />
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: { xs: "start", md: "center" },
              gap: "1%",
              pl: { xs: "0%", sm: "5%", md: "3%" },
              pr: { xs: "5%", sm: "5%", md: "3%" },
              "@media screen and (min-width: 1200px) and (max-width: 1350px)": {
                pl: "1%",
                pr: "1%",
                gap: "5%",
              },
              "@media screen and (min-width: 1010px) and (max-width: 1200px)": {
                pl: "1%",
                pr: "10%",
                gap: "10%",
              },
            }}
          >
            <Box
              sx={{
                marginTop: "3%",
                width: { xs: "100%", md: "100%%", lg: "30%", xl: "30%" },
                "@media screen and (min-width: 1200px) and (max-width: 1350px)":
                  {
                    width: "35%",
                  },
                "@media screen and (min-width: 1010px) and (max-width: 1200px)":
                  {
                    width: "35%",
                  },
              }}
            >
              <Box className={classes.leftPaper}>
                <ExpertiseMobile
                  onPress={handleClick}
                  title1="Our Expertise"
                  des="Guaranteed delivery of an App that satisfies your goals."
                />
              </Box>
            </Box>

            <Box
              sx={{
                width: { xs: "100%", lg: "45%", xl: "40%" },
                "@media screen and (min-width: 1200px) and (max-width: 1350px)":
                  {
                    width: "55%",
                  },
                "@media screen and (min-width: 1010px) and (max-width: 1200px)":
                  {
                    width: "55%",
                  },
                "@media screen and (max-width: 1010px)": {
                  mt: "-2%",
                  ml: "2%",
                  mr: "2%",
                },
                "@media screen and (max-width: 600px)": {
                  mt: "-2%",
                },
              }}
              onScroll={handleRightScroll}
              className={classes.rightPaper}
            >
              <CrossLine
                title="Cross-Platform Excellence"
                des="We specialize in developing mobile apps that seamlessly run on both iOS and Android platforms, ensuring a wider reach for your target audience."
              />
              <CrossLine
                title="Cutting-Edge Technologies"
                des="Our team stays at the forefront of technology trends, utilizing the latest tools and frameworks to deliver innovative and high-performance mobile solutions."
              />
              <CrossLine
                title="User-Centric Design"
                des="Our user interface (UI) and user experience (UX) experts ensure that your app is not only visually appealing but also intuitive and easy to navigate."
              />
              <CrossLine
                title="Customization and Scalability"
                des="We craft tailor-made solutions that cater to your unique business needs, and our apps are designed to scale as your business grows."
              />

              <CrossLine
                title="Security First Approach"
                des="Security is paramount in today’s digital landscape. We integrate robust security measures to protect your app and user data from potential threats."
              />
              <CrossLine
                title="Post-Launch Support"
                des="Our commitment doesn’t end with the app launch. We provide ongoing maintenance, updates, and support to ensure your app’s long-term success."
              />
            </Box>
          </Box>
          <OutshineCard />
          <DoItMobile />
          <DiscussProject onPress={handleClick} />
          <div id="contact-section" ref={contactSectionRef}>
            <SalesTeam />
          </div>
        </Box>
      </div>
    </>
  );
}

export default Mobile;
