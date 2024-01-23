import { Box } from "@mui/material";
import React from "react";

function FeedbackVideo({ link }) {
  return (
    <Box
    sx={{
      border: "8px solid",
      borderImage: "linear-gradient(to right, #134569, #106380)",
      borderImageSlice: 1,
      boxShadow: "0px 0px 10px #134569", 
      width: "98%",
      "&:hover": {
        border: "8px solid #106380", 
        borderImage: "linear-gradient(to right, #106380, #134569)", 
        borderImageSlice: 1,
        
      },
      position: "relative",
    }}
  >
      <video
        controls
        style={{ width: "100%" }}
        poster="https://techtiz.co/wp-content/uploads/2023/11/Feedback-video-thumbnail-1.jpeg"
      >
        <source src={link} type="video/mp4" />
      </video>
    </Box>
  );
}

export default FeedbackVideo;
