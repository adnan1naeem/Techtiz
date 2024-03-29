import React, { useState, useRef } from "react";
import { Box } from "@mui/material";
import Professionals from "../../components/Industries/Professionals";
import Transportation from "../../components/Industries/Transportation";
import Education from "../../components/Industries/Education/Education";
import Commerce from "../../components/Industries/Commerce";
import Networking from "../../components/Industries/Networking/Networking";
import MVPs from "../../components/Industries/MVPs/MVPs";
import SalesTeam from "../../components/SalesTeam/SalesTeam";
// import Footer from "../components/Footer/Footer";

function Industries() {
  const contactSectionRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (contactSectionRef.current) {
      const yOffset = -180;
      const element = contactSectionRef.current;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div>
      {/* <NavBar /> */}
      <Box sx={{ marginTop: { xs: "30%", sm: "15%", md: "14%", lg: "11%" } }}>
        <Box
          sx={{
            display: "flex",
            marginLeft: { xs: "2%", sm: "0%", lg: "2%", xl: 0 },
            justifyContent: "center",
            gap: {
              xs: "10%",
              sm: "0%",
              md: "3%",
              lg: "5%",
              xl: "3%",
            },
            flexWrap: "wrap",
          }}
        >
          <Professionals onPress={handleClick} />
          <Box
            sx={{
              width: {
                xs: "90%",
                sm: "70%",
                md: "44%",
                lg: "42%",
                xl: "38%",
              },
              "@media screen  and (min-width: 1700px)": {
                width: "30%",
              },
              "@media screen  and (max-width: 380px)": {
                marginTop: "-12%"
              },
              "@media screen and (min-width: 900px) and (max-width: 936px)": {
                marginTop: "-18%",
                width: '45%'
              },
              transform: isHovered ? "translateY(-12px)" : "translateY(0)",
              transition: "transform 1s ease",
              marginTop: { xs: "-28%", sm: "-15%", md: "1%", lg: "1%" },
              "@media screen and (min-width: 1200px) and (max-width: 1300px)": {
                width: "43%",
                mt: '2%'
              },
              "@media screen and (min-width: 600px) and (max-width: 700px)": {
                width: "80%",
              },
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img
              src="https://techtiz.co/wp-content/uploads/2023/10/skilled-pro.webp"
              alt=""
              style={{ width: "100%" }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            background: "#153A5F",
            display: "flex",
            flexDirection: { sm: "column-reverse", md: "row" },
            flexWrap: "wrap",
            justifyContent: "center",
            paddingTop: "5%",
            paddingBottom: "3%",
            "@media screen and (min-width: 1700px)": {
              pt: "4%",
            },
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", sm: "80%", md: "30%", lg: "40%", xl: "35%" },
              marginTop: 5,
              "@media screen and (min-width: 1200px) and (max-width: 1300px)": {
                width: "43%",

              },
            }}
          >
            <img
              src="https://techtiz.co/wp-content/uploads/2023/12/Transportation.webp"
              alt=""
              style={{ width: "95%" }}
            />
          </Box>
          <Transportation onPress={handleClick} />
        </Box>
        <Education onPress={handleClick} />
        <Commerce onPress={handleClick} />
        <Networking onPress={handleClick} />
        <MVPs onPress={handleClick} />
        <div id="contact-section" ref={contactSectionRef}>
          <SalesTeam />
        </div>

        {/* <Footer /> */}
      </Box>
    </div>
  );
}

export default Industries;
