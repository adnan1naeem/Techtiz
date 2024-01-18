import React from "react";
import { Box, Card, CardContent, Typography, Button } from "@mui/material";
import { IoMdArrowRoundForward } from "react-icons/io";
import List from "./List";

function CommerceRescourse() {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                mt: "4%",
            }}
        >
            <Card
                sx={{
                    width: { xs: "22rem", sm: "35rem", md: "48rem", lg: "70rem", xl: '80rem' },
                    height: { xs: "55rem", sm: "70rem", md: "60rem", lg: "33rem" },
                    borderRadius: "60px",
                    background: "#153A5F",
                    boxShadow: "none",
                    mt: "1%",
                }}
            >
                <CardContent sx={{ display: "flex", flexDirection: "row", gap: '10%', flexWrap: 'wrap-reverse', justifyContent: 'center', pt: '5%' }}>
                    <Box
                        sx={{
                            width: { xs: "90%", sm: "60%", md: "46%", lg: "30%", xl: "30%" }, mt: { xs: "-36%", sm: "-10%", md: "-10rem", lg: "5%", xl: '-1%' }
                        }}
                    >
                        <img
                            src="https://techtiz.co/wp-content/uploads/2023/11/emcommerce.webp"
                            alt=""
                            style={{ width: "100%" }}
                        />
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignContent: "center",
                        }}
                    >
                        <Card
                            sx={{
                                width: { xs: "22rem", sm: "28rem", md: "33rem", lg: "33rem" },
                                height: { xs: "38rem", sm: "39xrem", md: "38rem", lg: "34rem" },
                                background: "none",
                                boxShadow: "none",
                                mt: '5%'
                            }}
                        >
                            <CardContent sx={{ display: "flex", flexDirection: "column" }}>

                                <Typography
                                    sx={{
                                        color: "#18B0E6",
                                        fontSize: "1.2em",
                                        fontWeight: "700",
                                        marginTop: "4%",
                                        borderLeft: "11px solid #18B0E6",
                                        height: "20px",
                                        paddingLeft: "10px",
                                        lineHeight: '20px',

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
                                    Development of secure E-commerce platforms that grow and sell
                                </Typography>
                                <Box sx={{ marginTop: "3%" }}>
                                    <List
                                        listone="Inventory management systems"
                                        textColor="#F8F8F8"
                                    />
                                    <List
                                        listone="Delivery tracking software"
                                        textColor="#F8F8F8"
                                    />
                                    <List
                                        listone="User-friendly and efficient mobile applications"
                                        textColor="#F8F8F8"
                                    />
                                    <List
                                        listone="Validation and standardization of data"
                                        textColor="#F8F8F8"
                                    />
                                </Box>
                                <Button
                                    variant="contained"
                                    endIcon={<IoMdArrowRoundForward />}
                                    sx={{
                                        marginTop: "8%",

                                        padding: { xs: "3%", sm: "2%", md: "1.5%", lg: "1.8%" },
                                        width: { xs: "100%", sm: "80%", md: "60%", lg: "40%" },
                                        paddingLeft: "1%",
                                        paddingRight: "1%",
                                        borderRadius: 0,
                                        textTransform: "none",
                                        fontSize: "16px",
                                        fontWeight: "400",
                                        background: "none",
                                        boxShadow: "none",
                                        color: "F8F8F8",
                                        border: "1px solid #18B0E6",
                                        "&:hover": {
                                            backgroundColor: "#18B0E6",
                                            color: "black",
                                        },
                                    }}
                                >
                                    Discuss Now &nbsp; &nbsp;
                                </Button>
                            </CardContent>
                        </Card>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
}
export default CommerceRescourse;
