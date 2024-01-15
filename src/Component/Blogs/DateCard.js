import { Box, Typography } from "@mui/material";

function DateCard() {
  return (
    <Box sx={{ width: "80%", ml: "10%",mr:'10%' }}>
      <Typography
        sx={{
          color: "#c36",
          fontSize: "2rem",
          fontWeight: "500",
          mt: {xs:'3rem',sm:'3%',md:'1%',lg:"1%"},
          cursor: "pointer",
          lineHeight:'40px',
          "&:hover": {
            color: "#153A5F",
          },
        }}
      >
        MVP Development : A Guide for Non-Techies
      </Typography>
      <Box sx={{ mt: "1%", width: "100%" }}>
        <img
          src="https://techtiz.co/wp-content/uploads/2023/12/3-2.jpg"
          alt=""
          style={{ width: "100%" }}
        />
      </Box>
      <Typography sx={{ mt: "1%", fontSize: "16px", color: "#333333" }}>
        For non-techies, diving into the world of MVP development can seem like
        stepping into a foreign land. The technical jargon, the fast-paced
        nature of development, and the ever-evolving landscape can be
        intimidating. But fear not. This guide is your passport to understanding
        MVPs – no coding knowledge required!
      </Typography>
    </Box>
  );
}
export default DateCard;
