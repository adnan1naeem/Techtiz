import React, { useRef } from "react";
// import NavBar from "../../Component/NavBar/NavBar";
import { Box } from "@mui/material";
import OurPortfolio from "../../components/Portfolios/OurPortfolio";
import AllPortfolios from "./AllPortfolios";
import SalesTeam from "../../components/SalesTeam/SalesTeam";
import Image from "next/image";
import Head from "next/head";




// import SalesTeam from "../../components/SalesTeam/SalesTeam";
// import Footer from "../../Component/Footer/Footer";

function Portfolios() {
  const [isHovered, setIsHovered] = React.useState(false);
  const contactSectionRef = useRef(null);
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
    <Head>
        <title>Portfolios | Techtiz</title>
        <meta name="description" content="" key="desc" />
      </Head>
      {/* <NavBar /> */}
      <Box sx={{ marginTop: { xs: "30%", sm: "15%", md: "14%", lg: "12%" } }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "5%",
            flexWrap: "wrap",
            mb: '4%'
          }}
        >
          <OurPortfolio onPress={handleClick} />
          <Box
            sx={{
              width: { xs: "100%", sm: "80%", md: "50%", lg: "40%", xl: "35%" },
              mt: '-1%',
              transform: isHovered ? "translateY(-12px)" : "translateY(0)",
              transition: "transform 1s ease",
              '@media screen and (min-width: 1700px)': {
                width: '33%'
              },
              "@media screen and (min-width: 1200px) and (max-width: 1300px)": {
                width: '44%'

              },
              '@media screen and (max-width: 1103px)': {
                marginTop: "-4rem"
              },

            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Image
              src={require('../../assets/portfolio-innovation.webp')}
              alt=""
              style={{ width: "100%" }}
            />
          </Box>
        </Box>
        <AllPortfolios />
        <div id="contact-section" ref={contactSectionRef}>
          <SalesTeam />
        </div>

      </Box>
    </div>
  );
}

export default Portfolios;
