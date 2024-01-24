// pages/industries.js
import React, { useState } from "react";
// import NavBar from "../components/NavBar/NavBar";
import { Box } from "@mui/material";
import Professionals from "../../components/Industries/Professionals";
import Transportation from "../../components/Industries/Transportation";
import Education from "../../components/Industries/Education/Education";
import Commerce from "../../components/Industries/Commerce";
import Networking from "../../components/Industries/Networking/Networking";
import MVPs from "../../components/Industries/MVPs/MVPs";
// import SalesTeam from "../components/SalesTeam/SalesTeam";
// import Footer from "../components/Footer/Footer";

function Industries() {
    const [isHovered, setIsHovered] = useState(false);

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
                    <Professionals />
                    <Box
                        sx={{
                            width: { xs: "100%", sm: "80%", md: "80%", lg: "40%", xl: "35%" },
                            transform: isHovered ? "translateY(-12px)" : "translateY(0)",
                            transition: "transform 1s ease",
                            marginTop: '1%',
                        }}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <img
                            src="https://techtiz.co/wp-content/uploads/2023/10/skilled-pro.webp"
                            alt=""
                            style={{ width: "90%" }}
                        />
                    </Box>
                </Box>
                <Box
                    sx={{
                        background: "#153A5F",
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        gap: "3%",
                        paddingTop: "5%",
                        paddingBottom: "2%",
                    }}
                >
                    <Box
                        sx={{
                            width: { xs: "100%", sm: "80%", md: "50%", lg: "40%", xl: "35%" },
                        }}
                    >
                        <img
                            src="https://techtiz.co/wp-content/uploads/2023/12/Transportation.webp"
                            alt=""
                            style={{ width: "100%" }}
                        />
                    </Box>
                    <Transportation />
                </Box>
                <Education />
                <Commerce />
                <Networking />
                <MVPs />
                {/* <SalesTeam /> */}
                {/* <Footer /> */}
            </Box>
        </div>
    );
}

export default Industries;
