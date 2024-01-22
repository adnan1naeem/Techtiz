import { Box } from "@mui/material";
import React from "react";



function FeedbackVideo() {
    
  return (
    <Box
      sx={{
        border: "8px solid #5899da",
        width: { xs: "20rem", sm: "27rem", md: "20rem", lg: "90%", xl : "90%" },
        "&:hover": {
          border: "8px solid #2e80d1",
        },
        position: "relative",
      }}
    >
      <video
        controls
        style={{ width: "100%" }}
        poster="https://techtiz.co/wp-content/uploads/2023/11/Feedback-video-thumbnail-1.jpeg"
      >
        <source
          src="https://techtiz.co/wp-content/uploads/2023/11/Linked-golf-app-review.mp4"
          type="video/mp4"
        />
      </video>
    </Box>
  );
}

export default FeedbackVideo;
