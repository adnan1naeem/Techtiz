import { Box } from "@mui/material";
import React from "react";
function WebImage({ image, height, mt }) {
  return (
    <Box
      sx={{ width: { xs: "2.4rem", sm: "2.4rem", md: "2.4rem", lg: "2.9rem" }, marginTop: '2%' }}
    >
      <img
        style={{ width: "100%", height: height, marginTop: mt }}
        src={image}
        alt=""
      />
    </Box>
  );
}
export default WebImage;
