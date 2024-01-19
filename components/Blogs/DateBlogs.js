import { Box, Typography } from "@mui/material";
// import Navbar from "../NavBar/NavBar";
import { useLocation } from "react-router-dom";
import DateCard from "./DateCard";

function DateBlogs() {
    const location = useLocation();
    const item = location.state;
    console.log(item, "hello");
    return (
        <Box>
            <Navbar />
            <Box
                sx={{
                    marginTop: {
                        xs: "40%",
                        sm: "17%",
                        md: "12%",
                        lg: "9.5%",
                        xl: "8%",
                    },

                }}
            >
                <Typography sx={{ fontSize: '2.5rem', color: '#000000', fontWeight: '500', ml: '10%', lineHeight: '45px' }}>
                    Day: {item?.date}
                </Typography>
                <DateCard />
            </Box>
        </Box>
    );
}
export default DateBlogs;
