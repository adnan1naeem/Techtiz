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
            const yOffset = -180
            const element = contactSectionRef.current;
            const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    }

        return (
            <div>
                {/* <NavBar /> */}
                <Box sx={{ marginTop: { xs: "30%", sm: "15%", md: "14%", lg: "11%" } }}>
                    <Box
                        sx={{
                            display: "flex",
                            marginLeft: '2%',
                            justifyContent: "center",
                            gap: "5%",
                            flexWrap: "wrap",
                        }}
                    >
                        <Professionals onPress={handleClick} />
                        <Box
                            sx={{
                                width: { xs: "100%", sm: "80%", md: "45%", lg: "37%", xl: "30%" },
                                transform: isHovered ? "translateY(-12px)" : "translateY(0)",
                                transition: "transform 1s ease",
                                marginTop:{xs:'-8%', sm:'1%',lg:'1%'},
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
                            flexWrap: "wrap",
                            justifyContent: "center",
                            paddingTop: "8%",
                            paddingBottom:'3%'

                        }}
                    >
                        <Box
                            sx={{
                                width: { xs: "100%", sm: "80%", md: "50%", lg: "40%", xl: "35%" },
                                marginTop: 5,
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
                    <Education onPress={handleClick}/>
                    <Commerce onPress={handleClick}/>
                    <Networking onPress={handleClick}/>
                    <MVPs onPress={handleClick}/>
                    <div id="contact-section" ref={contactSectionRef}>
                        <SalesTeam />
                    </div>

                    {/* <Footer /> */}
                </Box>
            </div>
        );
    }

    export default Industries;
