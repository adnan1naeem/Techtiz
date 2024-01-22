import React from "react";
import { Box } from "@mui/material";
import DesignUX from "../../components/UI-UX/DesignUX";
import DoUX from "../../components/UI-UX/DoUX";
import DoItUX from "../../components/UI-UX/DoltUX";
import DiscussProject from "../../components/Website/DiscussProject";
import SalesTeam from "../../components/SalesTeam/SalesTeam";

function UI() {
    const [isHovered, setIsHovered] = React.useState(false);
    return (
        <div>
            <Box sx={{ marginTop: { xs: "30%", sm: "15%", md: "14%", lg: "14%" } }}>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "8%",
                        flexWrap: "wrap",
                    }}
                >
                    <DesignUX />
                    <Box
                        sx={{
                            width: { xs: "100%", sm: "80%", md: "34%", lg: "33%", xl: "30%" },
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
                <DiscussProject />
                <SalesTeam />
            </Box>
        </div>
    );
}

export default UI;
