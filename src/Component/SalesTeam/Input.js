import { Box } from "@mui/material";
import './Input.css'

function Input() {
  return (
    <Box
      sx={{
        width: { xs: "13rem", sm: "13rem", md: "13rem", lg: "15rem" },
        height: "2.9rem",
      }}
    >
      <input
        type="text"
        placeholder="First Name"
        
        style={{
          height: "100%",
          width: "100%",
          border: "1px solid rgba(99, 115, 129, 0.06)",
          backgroundColor: "rgba(99, 115, 129, 0.06)",
          paddingLeft: "5%",
          fontSize: "1rem",
          color: "#637381",
          outline: 'none',
          "&:focus": {
            border: "3px solid #637381",
           
          },
         
        }}
      />
    </Box>
  );
}

export default Input;
