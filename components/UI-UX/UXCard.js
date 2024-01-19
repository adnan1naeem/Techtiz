import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";

function UXCard({ image, heading, text }) {
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
                    width: { xs: "21rem", sm: "32rem", md: "30rem", lg: "32rem" },
                    height: { xs: "22rem", sm: "18rem", md: "17rem", lg: "15rem" },
                    borderRadius: "10px",
                    background: "white",

                    border: '1px solid #18B0E6',
                    marginTop: "8%",
                    boxShadow: "none",

                }}
            >
                <CardContent
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        marginLeft: '1.5%'
                    }}
                >
                    <Box
                        sx={{ width: { xs: "5rem", sm: "5rem", md: "5rem", lg: "3.2rem" } }}
                    >
                        <img
                            style={{
                                width: "100%"

                            }}
                            src={image}
                            alt=""
                        />
                    </Box>
                    <Box sx={{ marginTop: "3%", width: "90%" }}>
                        <Typography
                            sx={{
                                color: "#153A5F",
                                fontSize: "1.3rem",
                                fontWeight: "600",
                                marginBottom: "15px",
                            }}
                        >
                            {heading}
                        </Typography>
                        <Typography
                            sx={{ color: "#153A5F", fontWeight: "400", fontSize: "0.9rem", lineHeight: '1.5em', marginBottom: '1px' }}
                        >
                            {text}
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
}

export default UXCard;
