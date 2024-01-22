import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";

function ServicesCard({ image, heading, text }) {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <Card
                sx={{
                    width: { xs: "21rem", sm: "21rem", md: "21rem", lg: "22rem" },
                    height: { xs: "19rem", sm: "19rem", md: "19rem", lg: "20rem" },
                    borderRadius: "10px",
                    background: "white",
                    marginTop: "8%",
                    boxShadow: "none",
                }}
            >
                <CardContent
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        width: "100%",
                        height: "100%",
                        objectFit: "contain"
                    }}
                >
                    <Box
                        sx={{ width: { xs: "6rem", sm: "6rem", md: "6rem", lg: "6rem" } }}
                    >
                        <img
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "contain", // or "contain" depending on your preference
                            }}
                            src={image}
                            alt=""
                        />
                    </Box>
                    <Box sx={{ marginTop: "10%" }}>
                        <Typography
                            sx={{
                                color: "#153A5F",
                                fontSize: "1.3rem",
                                fontWeight: "600",
                                marginBottom: "15px",
                                width: '40em'
                            }}

                        >
                            {heading}
                        </Typography>
                        <Typography
                            sx={{ color: "#153A5F", fontWeight: "400", fontSize: "0.9rem", lineHeight: '1.5em', marginBottom: '5px' }}
                        >
                            {text}
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
}

export default ServicesCard;
