// pages/mvps.js
import { Box } from "@mui/material";
import MVPsStartup from "../MVPs/MVPsStartup";
import Image from "next/image";

function MVPs({ onPress }) {

    return (
        <Box
            sx={{
                background: "#153A5F",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
                gap: "3%",
                paddingTop: "5%",
                paddingBottom: "2%",
                marginTop: "1%",
                pt: "6%",
                flexDirection: { xs: "column-reverse", lg: "row" }
            }}
        >
            <Box
                sx={{
                    width: { xs: "100%", sm: "80%", md: "50%", lg: "40%", xl: "25%" },
                    "@media screen and (min-width: 1200px) and (max-width: 1300px)": {
                        width: "44%",

                    },
                }}
            >
                <Image
                    src={require('../../../assets/industries-mvp.webp')}
                    alt=""
                    style={{ width: "100%" }}
                />
            </Box>
            <MVPsStartup onPress={onPress} />
        </Box>
    );
}

export default MVPs;
