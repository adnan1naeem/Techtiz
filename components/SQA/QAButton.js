import React from "react";
import Button from "@mui/material/Button";


function QAButton({
  text,
  isSelected,
  onClick,
  icon: IconComponent,
}) {
  return (
    <div>
      <Button
        variant="outlined"
        onClick={onClick}
        sx={{
          color: "#153A5F",
          fontWeight: "600",
          fontSize: "15px",
          border: isSelected ? "2px solid #18B0E6" : "none",
          textTransform: "none",
          background: isSelected ? "#F6F9FC" : "#EAEAEA",
          paddingTop: "13px",
          paddingBottom: "13px",
          paddingLeft: "23px",
          paddingRight: "23px",
          marginTop: "8px",
          borderRadius: "28px",
          fontFamily: "Mont-Bold, Sans-serif",
          "&:hover": {
            backgroundColor: isSelected ? "#F6F9FC" : "#EAEAEA",
            border: isSelected ? "2px solid #18B0E6" : "none",
          },
          display: "flex",
          alignItems: "center",
        }}
      >
        {IconComponent && (
          <IconComponent style={{ marginRight: "8px" }} />
        )}
        {text}
      </Button>
    </div>
  );
}

export default QAButton;
