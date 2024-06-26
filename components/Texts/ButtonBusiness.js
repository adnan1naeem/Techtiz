import React from "react";
import Button from "@mui/material/Button";

function ButtonBusiness({
  text,
  background,
  onClick,
  color,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  fontSize,
  plSM,
  prSM

}) {
  const disableHoverEffect = background === "#153A5F";

  return (
    <div>
      <Button
        variant="outlined"
        onClick={onClick}
        sx={{
          color: color,
          fontWeight: 600,
          borderRadius: 1,
          fontSize: fontSize || "17px",
          fontFamily: "'Mont-Regular', sans-serif",
          border: `1px solid ${disableHoverEffect ? background : "#18B0E6"}`,
          textTransform: "none",
          background: background,
          paddingTop: paddingTop || "15px",
          paddingBottom: paddingBottom || "15px",
          paddingLeft: paddingLeft,
          paddingRight: paddingRight,
          marginTop: "11px",
          "@media screen and (min-width: 700px) and (max-width: 910px)": {
            paddingTop: "10px",
            paddingBottom: "10px",

          },
          "@media screen and (min-width: 600px)": {
            paddingLeft: plSM,
            paddingRight: prSM

          },
          "&:hover": {
            backgroundColor: disableHoverEffect ? background : 'rgba(24, 176, 230, 0.6)',
            color: disableHoverEffect ? color : "white",
            border: `1px solid ${disableHoverEffect ? background : 'rgba(24, 176, 230, 0.6)'
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