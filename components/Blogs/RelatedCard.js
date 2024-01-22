import { Box, Card, CardContent, Typography } from "@mui/material";

function RelatedCard({ image, des, date }) {
    return (
        <Box sx={{ display: "flex", justifyContent: "center", mt: "3%" }}>
            <Card
                sx={{
                    width: { xs: "21rem", sm: "23rem", md: "23rem", lg: "21rem" },
                    height: { xs: "32rem", sm: "32rem", md: "32rem", lg: "32rem" },
                    borderRadius: "2px",
                    background: "white",

                    cursor: "pointer",

                    "&:hover": {
                        transition: "0.4s",
                        boxShadow: "none",

                        border: "4px solid #6EC1E4",
                    },
                }}
            >
                <CardContent sx={{ mt: "-5%", ml: "-5%" }}>
                    <Box sx={{ width: "21rem" }}>
                        <img
                            style={{ width: "113%", height: "15.3rem" }}
                            src="https://techtiz.co/wp-content/uploads/2023/12/4-2-768x384.jpg"
                            alt=""
                        />
                    </Box>
                    <Typography
                        sx={{
                            mt: "8%",
                            width: "80%",
                            ml: "10%",
                            color: "#54595F",
                            fontWeight: "500",
                            fontSize: "21px",
                        }}
                    >
                        The Future of MVP Development – Trends To Watch Out For in 2024 and
                        Beyond
                    </Typography>
                    <Box sx={{ mt: "8%", mr: "-5%" }}>
                        <Typography
                            sx={{
                                color: "#adadad",
                                ml: "10%",
                                fontSize: "12px",
                                fontWeight: "400",
                                width: "100%",
                                mt: { xs: "6%", sm: "4%" },
                            }}
                        >
                            December 28, 2023
                        </Typography>
                    </Box>
                    <Typography
                        sx={{
                            color: "#153A5F",
                            fontSize: "14px",
                            fontWeight: "600",
                            textTransform: "uppercase",
                            ml: "10%",
                            mt: "5%",
                            mb: "6%",
                        }}
                    >
                        Read More »
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
}
export default RelatedCard;
