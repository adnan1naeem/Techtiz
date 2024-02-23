import React from "react";
import Button from "@mui/material/Button";

function ButtonBusiness({
  text,
  background,
  onClick,
  color,
  paddingLeft,
  paddingRight,
}) {
  const disableHoverEffect = background === "#153A5F";

  return (
    <div>
      <Button
        variant="outlined"
        onClick={onClick}
        sx={{
          color: color,
          fontWeight: "400",
          borderRadius: 1,
          fontSize: "17px",
          fontFamily: "'Mont-Regular', sans-serif",
          border: `1px solid ${disableHoverEffect ? background : "#18B0E6"}`,
          textTransform: "none",
          background: background,
          paddingTop: "15px",
          paddingBottom: "15px",
          paddingLeft: paddingLeft,
          paddingRight: paddingRight,
          marginTop: "11px",
          "&:hover": {
            
            backgroundColor: disableHoverEffect ? background : "#18B0E6",
            color: disableHoverEffect ? color : "white",
            border: `1px solid ${disableHoverEffect ? background : "#18B0E6"
              }`,
          },
        }}
      >
        {text}
      </Button>
    </div>
  );
}

export default ButtonBusiness;