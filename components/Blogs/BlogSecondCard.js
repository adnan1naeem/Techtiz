import { Box, Card, CardContent, Typography } from "@mui/material";

function BlogSecondCard({ image, des, date }) {
    return (
        <Box sx={{ display: "flex", justifyContent: "center", mt: "3%" }}>
            <Card
                sx={{
                    width: { xs: "21rem", sm: "23rem", md: "20rem", lg: "20rem" },
                    height: { xs: "20rem", sm: "20rem", md: "20rem", lg: "20rem" },
                    borderRadius: "2px",
                    background: "none",
                    boxShadow: "none",
                    cursor: "pointer",

                }}
            >
                <CardContent sx={{ mt: "-4%", ml: "-5%" }}>
                    <Box sx={{ width: { xs: "21rem", sm: "23rem", md: "20rem", lg: "20rem" }, }}>
                        <img
                            style={{ width: "113%", height: "14.3rem" }}
                            src={image}
                            alt=""
                        />
                    </Box>
                    <Typography
                        sx={{
                            mt: "3%",
                            width: "100%",
                            ml: "2%",
                            color: "#54595F",
                            fontWeight: "500",
                            fontSize: "21px",
                            lineHeight: "25px",
                        }}
                    >
                    {des}
                    </Typography>

                    <Box>
                        <Typography
                            sx={{
                                color: "#adadad",
                                ml: "2%",
                                fontSize: "12px",
                                fontWeight: "400",
                                width: "100%",
                                mt: "1%",
                            }}
                        >
                            {date}
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
}
export default BlogSecondCard;
