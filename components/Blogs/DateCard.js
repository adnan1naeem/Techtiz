import { Box, Typography } from "@mui/material";

function DateCard({ title ,image ,des}) {
  return (
    <Box sx={{ width: "80%", ml: "10%", mr: "10%" }}>
      <Typography
        sx={{
          color: "#c36",
          fontSize: "2rem",
          fontWeight: "500",
          mt: { xs: "3rem", sm: "3%", md: "1%", lg: "2%" },
          cursor: "pointer",
          lineHeight: "40px",
          "&:hover": {
            color: "#153A5F",
          },
        }}
      >
        {title}
      </Typography>
      <Box sx={{ mt: "1%", width: "100%" }}>
        <img src={image} alt="" style={{ width: "100%" }} />
      </Box>
      <Typography sx={{ mt: "1%", fontSize: "16px", color: "#333333",pb:'5%' }}>
        {des}
      </Typography>
    </Box>
  );
}
export default DateCard;
