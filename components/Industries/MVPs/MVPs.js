// pages/mvps.js
import { Box } from "@mui/material";
import MVPsStartup from "../MVPs/MVPsStartup";
import Image from "next/image";

function MVPs({onPress}) {
    
    return (
        <Box
            sx={{
                background: "#153A5F",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "3%",
                paddingTop: "5%",
                paddingBottom: "2%",
                marginTop: "1%",
                pt: "6%",
            }}
        >
            <Box
                sx={{
                    width: { xs: "100%", sm: "80%", md: "50%", lg: "40%", xl: "35%" },
                }}
            >
                <img
                    src="https://techtiz.co/wp-content/uploads/2023/12/mvp-1024x864.webp"
                    alt=""
                    style={{ width: "100%" }}
                />
            </Box>
            <MVPsStartup onPress={onPress} />
        </Box>
    );
}

export default MVPs;
