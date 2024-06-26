import { Box, Typography } from "@mui/material";
import { FaDiamond } from "react-icons/fa6";

function List({ listone, textColor }) {
    return (
        <Box>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "2px",
                }}
            >
                {/* <FaDiamond style={{ color: "rgb(110, 193, 228)", marginRight: "8px", fontSize: '13px' }} />"🔹 " */}

                <Typography sx={{
                    color: textColor,
                    fontSize: { xs: "0.9em", sm: '1em' },
                    fontWeight: '600',
                    width: '100%',
                    fontFamily: "Mont-Regular, Sans-serif",
                }}>
                    🔹 {listone}
                </Typography>
            </div>

        </Box>
    );
}

export default List;
