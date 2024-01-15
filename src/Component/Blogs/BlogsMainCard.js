import { Box, Card, CardContent, Typography } from "@mui/material";

function BlogsMainCard({ image, des, date }) {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: "3%" }}>
      <Card
        sx={{
          width: { xs: "21rem", sm: "23rem", md: "23rem", lg: "23rem" },
          height: { xs: "32rem", sm: "32rem", md: "32rem", lg: "32rem" },
          borderRadius: "2px",
          background: "white",

          cursor: "pointer",

          "&:hover": {
            transform: "scale(1.01) ",
          },
        }}
      >
        <CardContent sx={{ mt: "-4%", ml: "-5%" }}>
          <Box sx={{ width: "23rem" }}>
            <img
              style={{ width: "113%", height: "15.3rem" }}
              src={image}
              alt=""
            />
          </Box>
          <Typography
            sx={{
              mt: "8%",
              width: "80%",
              ml: "10%",
              color: "#54595F",
              fontWeight: "500",
              fontSize: "21px",
            }}
          >
            {des}
          </Typography>
          <Typography
            sx={{
              color: "#153A5F",
              fontSize: "11px",
              fontWeight: "600",
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
export default BlogsMainCard;
