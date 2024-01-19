import { Box, Typography } from "@mui/material";

function Hiring() {
  return (
    <Box sx={{ marginTop: "0%", background: "#F8F8F8", paddingBottom: "8%" }}>
      <Typography
        sx={{
          textAlign: "center",
          paddingTop: "7%",
          color: "#153A5F",
          fontSize: "2.2em",
          fontWeight: "600",
        }}
      >
        Techtiz Hiring Process
      </Typography>
      <Typography
        sx={{
          textAlign: "center",
          color: "#153A5F",
          fontSize: "1em",
          fontWeight: "400",
          marginTop: "1%",
        }}
      >
        Techtiz hires on the basis of skills, we need people who can be
        efficient, vigilant and on top of their game.
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "3%",
          marginTop: "5%",
        }}
      >
        <Box
          sx={{
            width: { xs: "21em", sm: "35em", md: "19em", lg: "18rem" },
            marginTop: "11%",
          }}
        >
          <Typography
            sx={{ color: "#18B0E6", fontSize: "2em", fontWeight: "600" ,textAlign:{xs:'center',sm:'left'}}}
          >
            Hiring Funnel
          </Typography>
          <Typography
            sx={{
              color: "#153A5F",
              fontSize: "1.1em",
              fontWeight: "400",
              marginTop: "5%",
            }}
          >
            In order to put together a team of highly skilled software
            developers, TechTiz follows a process starting with interactive
            interviews to understand your true potential.
          </Typography>
        </Box>
        <Box
          sx={{ width: { xs: "21em", sm: "30em", md: "30em", lg: "40rem" } ,marginTop: { xs: "10%", sm: "10%", md: "0", lg: "0" }}}
        >
          <img
            src="https://techtiz.co/wp-content/uploads/2023/10/Hiring.webp"
            alt=""
            style={{ width: "100%" }}
          />
        </Box>
      </Box>
    </Box>
  );
}
export default Hiring;
