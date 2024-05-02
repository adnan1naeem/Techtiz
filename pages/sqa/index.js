import { Box } from "@mui/material";

import React, { useRef } from "react";
import QA from "../../components/SQA/QA";
import DoQA from "../../components/SQA/DoQA";
import QAForYou from "../../components/SQA/QAForYou";
import Autonomous from "../../components/SQA/Autonomous";
import DiscussProject from "../../components/Website/DiscussProject";
import SalesTeam from "../../components/SalesTeam/SalesTeam";
import Image from "next/image";
import Head from "next/head";

function Sqa() {
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
    <Box>
    <Head>
        <title>SQA | Techtiz</title>
        <meta name="description" content="" key="desc" />
      </Head>
      <Box sx={{ marginTop: { xs: "30%", sm: "15%", md: "14%", lg: "14%", xl: '10%' } }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "2%",
            flexWrap: "wrap",
            '@media screen and (min-width: 1700px)': {
              gap: '1%'
            },
            "@media screen and (min-width: 1200px) and (max-width: 1300px)": {
              gap: 0,

            },
          }}
        >
          <QA onPress={handleClick} />
          <Box
            sx={{
              width: { xs: "100%", sm: "80%", md: "38%", lg: "43%", xl: "32%" },
              transform: isHovered ? "translateY(-12px)" : "translateY(0)",
              transition: "transform 1s ease",
              // mt: '-30%',
              // marginTop: { xs: "-32%", sm: 0, md: 0, lg: 0 },
              '@media screen and (min-width: 1700px)': {
                width: '35%'
              },
              // '@media screen and (max-width: 899px)': {
              //   marginTop: "-15em"
              // },
              // '@media screen and (max-width: 520px)': {
              //   marginTop: "-32em"
              // },

            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Image
              src={require('../../assets/sqa-quality-check.webp')}
              alt=""
              style={{ width: "96%" }}
            />
          </Box>
        </Box>
      </Box>
      <DoQA />
      <QAForYou />
      <Autonomous />
      <DiscussProject onPress={handleClick} />
      <div id="contact-section" ref={contactSectionRef}>
        <SalesTeam />
      </div>
    </Box>
  );
}
export default Sqa;
