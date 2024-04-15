import React from "react";
import Button from "@mui/material/Button";

function HomeButtonBusiness({
  text,
  background,
  onClick,
  color,
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
          fontSize: "17px",
          fontFamily: "'Mont-Regular', sans-serif",
          border: `2px solid ${disableHoverEffect ? background : "#18B0E6"}`,
          textTransform: "none",
          background: background,
          height: { xs: 50, sm: 55, md: 60 },
          paddingLeft: { xs: "24px", md: "37px" },
          paddingRight: { xs: "24px", md: "37px" },
          marginTop: "11px",
          "@media screen and (min-width: 700px) and (max-width: 910px)": {
            paddingTop: "10px",
            paddingBottom: "10px",

          },
          "&:hover": {

            backgroundColor: disableHoverEffect ? background : 'rgba(24, 176, 230, 0.6)',
            color: disableHoverEffect ? color : "white",
            border: `2px solid ${disableHoverEffect ? background : 'rgba(24, 176, 230, 0.6)'
              }`,
          },
        }}
      >
        {text}
      </Button>
    </div>
  );
}

export default HomeButtonBusiness;
