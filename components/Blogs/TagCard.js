import { Box, Card, CardContent, Typography } from "@mui/material";

function TagCard({ image, des, date }) {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: "3%" }}>
      <Card
        sx={{
          width: { xs: "21rem", sm: "23rem", md: "23rem", lg: "21rem" },
          height: { xs: "32rem", sm: "32rem", md: "32rem", lg: "26rem" },
          borderRadius: "9px",
          background: "white",

          cursor: "pointer",

          "&:hover": {
            transform: "scale(1.01) ",
          },
        }}
      >
        <CardContent sx={{ mt: "-4%", ml: "-5%" }}>
          <Box sx={{ width: "27rem" }}>
            <img
              style={{ width: "80%", height: "8.3rem" }}
              src={image}
              alt=""
            />
          </Box>
          <Typography
            sx={{
              mt: "5%",
              width: "90%",
              ml: "10%",
              color: "#153A5F",
              fontWeight: "500",
              fontSize: "25px",
            }}
          >
           {des}
          </Typography>
          <Typography
            sx={{
              color: "#18B0E6",
              fontSize: "14px",
              fontWeight: "500",
              textTransform: "uppercase",
              ml: "10%",
              mt: "5%",
              mb: "6%",
            }}
          >
            Read More »
          </Typography>
          <Box sx={{ borderTop: "0.6px solid #adadad", mr: "-5%" }}>
            <Typography
              sx={{
                color: "#adadad",
                ml: "10%",
                fontSize: "12px",
                fontWeight: "400",
                width: "100%",
                mt: { xs: "6%", sm: "4%" },
              }}
            >
             {date}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
export default TagCard;
