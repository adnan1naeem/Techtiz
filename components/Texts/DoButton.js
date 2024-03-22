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
                    fontWeight: "500",
                    fontSize: {xs:"15px", md:"1rem"},
                    border: isSelected ? "2px solid #18B0E6" : "none",
                    textTransform: "none",
                    background: isSelected ? "#F6F9FC" : "#EAEAEA",
                    fontFamily: "Mont-Bold, Sans-serif",
                    paddingTop: {xs:"13px", md: "11px"},
                    paddingBottom: {xs:"13px", md: "11px"},
                    paddingLeft: {xs:"25px", md: "23"},
                    paddingRight: {xs:"25px", md: "23px"},
                    fontFamily: "Mont-Bold, Sans-serif",
                    marginTop: "4px",
                    marginBottom: "4px",
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
