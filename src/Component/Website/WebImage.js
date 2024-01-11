import { Box } from "@mui/material";
import React from "react";
function WebImage({image}) {
  return (
    <Box
      sx={{ width: { xs: "2.4rem", sm: "2.4rem", md: "2.4rem", lg: "2.4rem" },marginTop:'6%' }}
    >
      <img
        style={{ width: "100%" ,height:'5rem'}}
        src={image}
        alt=""
      />
    </Box>
  );
}
export default WebImage;
