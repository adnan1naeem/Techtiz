import React, { useRef } from "react";
import { Box } from "@mui/material";
import DesignUX from "../../components/UI-UX/DesignUX";
import DoUX from "../../components/UI-UX/DoUX";
import DoItUX from "../../components/UI-UX/DoItUX";
import DiscussProject from "../../components/Website/DiscussProject";
import SalesTeam from "../../components/SalesTeam/SalesTeam";
import styles from "../../styles/ModelCard.module.css";
import Image from "next/image";
import Head from "next/head";


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
         <Head>
        <title>UI/UX Design | Techtiz</title>
        <meta name="description" content="" key="desc" />
      </Head>
            <Box sx={{ marginTop: { xs: "30%", sm: "15%", md: "14%", lg: "14%", xl: '12%' } }}>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "1%",
                        flexWrap: "wrap",
                    }}
                >
                    <DesignUX onPress={handleClick} />
                    <Box
                        sx={{
                            width: { xs: "100%", sm: "80%", md: "36%", lg: "42%", xl: "28%" },
                            transform: isHovered ? "translateY(-12px)" : "translateY(0)",
                            transition: "transform 1s ease",
                            marginTop: { xs: '10%', sm: '10%', md: '5%', lg: 0 },
                            '@media screen and (min-width: 1700px)': {
                                width: '31%'
                            }
                        }}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <Image
                            src={require('../../assets/svg/ui-ux-mobile-app-dev.svg')}
                            alt=""
                            className={styles.uiImage}
                            style={{
                                width: "100%",
                            }}
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
