import React from "react";
import Button from "@mui/material/Button";

function DoButton({
    text,
    isSelected,
    onClick,
}) {
    return (
        <div>
            <Button
                variant="outlined"
                onClick={onClick}
                sx={{
                    color: "#153A5F",
                    fontWeight: "700",
                    fontSize: "17px",
                    border: isSelected ? "2px solid #18B0E6" : "none",
                    textTransform: "none",
                    background: isSelected ? "#F6F9FC" : "#EAEAEA",
                    fontFamily:"Mont-Bold, Sans-serif",
                    paddingTop: "11px",
                    paddingBottom: "11px",
                    paddingLeft: "23px",
                    paddingRight: "23px",
                    fontFamily:"Mont-Bold, Sans-serif",
                    marginTop: "8px",
                    borderRadius: "28px",
                    "&:hover": {
                        backgroundColor: isSelected ? "#F6F9FC" : "#EAEAEA",
                        border: isSelected ? "2px solid #18B0E6" : "none",
                    },
                  
                }}
            >
                {text}
            </Button>
        </div>
    );
}

export default DoButton;
