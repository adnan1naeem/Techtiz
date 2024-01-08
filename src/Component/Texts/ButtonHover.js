import React from "react";
import Button from "@mui/material/Button";

function ButtonHover({textButton}) {
  return (
    <div className="App">
      <Button
        variant="outlined"
        sx={{
          borderRadius: "50px",
          color: "#f8f8f8",
          fontWeight: "500",
          fontSize: "15px",
          paddingTop: "4px",
          paddingBottom: "4px",
          border: "2.2px solid #18B0E6",
          textTransform: "none",
       
          "&:hover": {
            backgroundColor: "#18B0E6", // Set the desired background color on hover
          },
        }}
      >
        {textButton}
      </Button>
    </div>
  );
}

export default ButtonHover;
