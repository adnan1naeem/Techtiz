import { Box, Typography } from "@mui/material";
import React from "react";


function QACard({ title,text ,image,lg,top}) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: "13%",
        marginTop: "7%",
        flexWrap: "wrap",
      }}
    >
      
      <Box sx={{ width: { xs: "21rem", sm: "32em", md: "20em", lg: "30em" }, marginTop:'5%',textAlign:'left'}}>
        <Typography   sx={{
          color: "#153A5F",
          fontSize: "1.5em",
          fontWeight: "600",
      
        }}>
        {title}
        </Typography>
        <Typography sx={{
          color: "#153A5F",
          fontSize: "1em",
          fontWeight: "500",
          marginTop:'4%'
      
        }}>
        {text}
        </Typography>
      </Box>
      <Box sx={{ width: { xs: "21rem", sm: "24em", md: "17em", lg: lg } }}>
        <img
          src={image}
          alt=""
          style={{ width: "100%" ,marginTop:top}}
        />
      </Box>
    </Box>
  );
}

export default QACard;
