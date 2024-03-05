import React, { useRef } from "react";
import { Box } from "@mui/material";

import Grow from "../../components/MobileApplication/Grow";
import CrossLine from "../../components/MobileApplication/CrossLine";
import ExpertiseMobile from "../../components/MobileApplication/ExpertiseMobile";
import OutshineCard from "../../components/MobileApplication/OutshineCard";
import DoItMobile from "../../components/MobileApplication/DoItMobile";
import DiscussProject from "../../components/Website/DiscussProject";
import SalesTeam from "../../components/SalesTeam/SalesTeam";
import DevelopmentMobile from "../../components/MobileApplication/DevelopmentMobile";

function Mobile() {
  const contactSectionRef = useRef(null);
  const [isHovered, setIsHovered] = React.useState(false);
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
      <Box
        sx={{
          marginTop: { xs: "30%", sm: "15%", md: "14%", lg: "11%", xl: "10%" },
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
              width: { xs: "60%", sm: "70%", md: "30%", lg: "30%", xl: "24%" },
              mt: { xs: 0, sm: 0, md: "2%", lg: 0, xl: 0 },
              transform: isHovered ? "translateY(-12px)" : "translateY(0)",
              transition: "transform 1s ease",
              "@media screen and (min-width: 1530px) and (max-width: 1600px)": {
                width: "30rem",
                top: 250,
              },
              "@media screen and (min-width: 1200px) and (max-width: 1300px)": {
                width: '37%',
                mt: '1%'
              },
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img
              src="https://techtiz.co/wp-content/uploads/2023/11/Mobile-App.svg"
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
            justifyContent: "center",
            gap: "3%",
          }}
        >
          <Box sx={{
            marginTop: "3%"
          }}>
            <ExpertiseMobile
              onPress={handleClick}
              title1="Our Expertise"
              des="Guaranteed delivery of an App that satisfies your goals."
            />
          </Box>

          <Box>
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
  );
}

export default Mobile;
