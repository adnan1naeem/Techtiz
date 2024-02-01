import { Box, Typography } from "@mui/material";
import React from "react";
import SocialNetworking from "./SocialNetworking";

function Networking({onPress}) {
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
                Social Networking
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
                We are taking “social” to the next level through interactive web and
                mobile applications.
            </Typography>
            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: "3%",
                    paddingTop: "5%",
                    paddingBottom: "2%",
                    marginTop: "1%",
                }}
            >
                <SocialNetworking onPress={onPress} />
                <Box
                    sx={{
                        width: { xs: "100%", sm: "80%", md: "40%", lg: "35%", xl: "30%" },
                    }}
                >
                    <img
                        src="https://techtiz.co/wp-content/uploads/2023/12/social.webp"
                        alt=""
                        style={{ width: "100%" }}
                    />
                </Box>
            </Box>
        </Box>
    );
}
export default Networking;
