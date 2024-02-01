import React from "react";
import { Box, Card, CardContent, Typography, Button } from "@mui/material";
import { IoMdArrowRoundForward } from "react-icons/io";
import List from "./List";

function Transportation({onPress}) {
    return (
        <Box
            sx={{ display: "flex", justifyContent: "center", alignContent: "center" }}
        >
            <Card
                sx={{
                    width: { xs: "22rem", sm: "23rem", md: "23rem", lg: "33rem" },
                    height: { xs: "38rem", sm: "39xrem", md: "38rem", lg: "34rem" },
                    background: "none",
                    boxShadow: "none",
                }}
            >
                <CardContent sx={{ display: "flex", flexDirection: "column" }}>
                    <Typography
                        sx={{ color: "#F8F8F8", fontSize: "2.2em", fontWeight: "600", }}
                    >
                        Transportation and Logistics
                    </Typography>
                    <Typography
                        sx={{
                            color: "#6EC1E4",
                            fontSize: "1.1em",
                            fontWeight: "300",
                            marginTop: "2%",
                        }}
                    >
                        Convenient logistics and transportation solutions that save cost
                    </Typography>
                    <Typography
                        sx={{
                            color: "#6EC1E4",
                            fontSize: "1.3em",
                            fontWeight: "bold",
                            marginTop: "7%",
                            borderLeft: "10px solid #18B0E6",
                            height: "18px",
                            lineHeight:'18px',
                            paddingLeft: "10px",
                            paddingTop: "-10px%",
                        }}
                    >
                        What we offer
                    </Typography>
                    <Typography
                        sx={{
                            color: "#F8F8F8",
                            fontSize: "21px",
                            fontWeight: "600",
                            lineHeight: "29px",
                            marginTop: "5%",
                        }}
                    >
                        Development of software for management distribution
                    </Typography>
                    <Box sx={{ marginTop: "3%", paddingLeft: '5%' }}>
                        <List listone="Inventory management systems" textColor="#F8F8F8" />
                        <List listone="Delivery tracking software" textColor="#F8F8F8" />
                        <List listone="User-friendly and efficient mobile applications" textColor="#F8F8F8" />
                        <List listone="Validation and standardization of data" textColor="#F8F8F8" />
                    </Box>
                    <Button
                        variant="contained"
                        endIcon={<IoMdArrowRoundForward />}
                        onClick={onPress}
                        sx={{
                            marginTop: "8%",

                            padding: { xs: "3%", sm: "2%", md: "1.5%", lg: "1.8%" },
                            width: { xs: "100%", sm: "80%", md: "60%", lg: "40%" },
                            paddingLeft: "1%",
                            paddingRight: "1%",
                            borderRadius: 1,
                            textTransform: "none",
                            fontSize: "16px",
                            fontWeight: "400",
                            background: "none",
                            boxShadow: "none",
                            color: "#F8F8F8",
                            border: "1px solid #18B0E6",
                            "&:hover": {
                                backgroundColor: "#6EC1E4",
                                color: '#153A5F'
                            },
                        }}
                    >
                        Discuss Now &nbsp; &nbsp;
                    </Button>
                </CardContent>
            </Card>
        </Box>
    );
}

export default Transportation;
