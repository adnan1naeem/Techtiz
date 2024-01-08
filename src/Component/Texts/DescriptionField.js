import { Box } from "@mui/material";
import React, { useState } from "react";

function DescriptionField() {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <Box sx={{ marginTop: "2%", width: { xs: "80%", sm: "70%", md: "50%" } }}>
      <textarea
        className="form-control"
        placeholder="Message"
        type="text"
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={{
          height: "8rem",
          width: "100%",
          backgroundColor: "#6373810F",
          border: `1px solid ${isFocused ? "#637381" : "rgba(99,115,129,0.06)"}`,
          color: "#637381", // Text color when focused and unfocused
          fontSize: '15px',
          paddingLeft: '3%',
        }}
        placeholderStyle={{
          color: isFocused ? "#7A7A7A" : "#153A8D", // Placeholder color
        }}
      />
    </Box>
  );
}

export default DescriptionField;
