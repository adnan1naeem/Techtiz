import { Box, Typography } from "@mui/material";
import React from "react";
import CommerceRescourse from "./CommerceRescourse";

function Commerce({onPress}) {
    return (
        <Box sx={{ mt: "6%" }}>
            <Typography
                sx={{
                    textAlign: "center",
                    color: "#153A5F",
                    fontSize: "2.2em",
                    fontWeight: "700",
                }}
            >
                E-Commerce
            </Typography>
            <Typography
                sx={{
                    textAlign: "center",
                    color: "#153A5F",
                    fontSize: "1.1em",
                    fontWeight: "400",
                    mt: "5px",
                    lineHeight: "20px",
                }}
            >
                We implement intuitive ideas for e-commerce businesses, helping them<br />
                grab more sales
            </Typography>
            <Box>
                <CommerceRescourse onPress={onPress} />
            </Box>
        </Box>
    );
}
export default Commerce;
