import React, { useRef } from "react";
import { Box } from "@mui/material";
import DesignUX from "../../components/UI-UX/DesignUX";
import DoUX from "../../components/UI-UX/DoUX";
import DoItUX from "../../components/UI-UX/DoItUX";
import DiscussProject from "../../components/Website/DiscussProject";
import SalesTeam from "../../components/SalesTeam/SalesTeam";

function UI() {
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
            <Box sx={{ marginTop: { xs: "30%", sm: "15%", md: "14%", lg: "14%" } }}>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "4%",
                        flexWrap: "wrap",
                    }}
                >
                    <DesignUX  onPress={handleClick} />
                    <Box
                        sx={{
                            width: { xs: "100%", sm: "80%", md: "34%", lg: "38%", xl: "35%" },
                            transform: isHovered ? "translateY(-12px)" : "translateY(0)",
                            transition: "transform 1s ease",
                            marginTop: { xs: '10%', sm: '10%', md: 0, lg: 0 }

                        }}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <img
                            src="https://techtiz.co/wp-content/uploads/2023/11/mobileAppDev.svg"
                            alt=""
                            style={{ width: "100%" }}
                        />
                    </Box>
                </Box>
                <DoUX />
                <DoItUX />
                <DiscussProject onPress={handleClick} />
                <div id="contact-section" ref={contactSectionRef}>
          <SalesTeam />
        </div>
            </Box>
        </div>
    );
}

export default UI;
