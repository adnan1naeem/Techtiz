import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

function TagCard({ image, des, date }) {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: "3%" }}>
      <Card
        sx={{
          width: { xs: "21rem", sm: "23rem", md: "23rem", lg: "22rem" },
          height: { xs: "32rem", sm: "32rem", md: "32rem", lg: "26rem" },
          borderRadius: "3px",
          background: "white",

          cursor: "pointer",

          "&:hover": {
            transform: "scale(1.01) ",
          },
        }}
      >
        {/* <CardContent sx={{ mt: "-4%", ml: "-5%" }}> */}
        <Box sx={{ width: "27rem" }}>
          <CardMedia image={image} sx={{ height: "8rem", width: "83%" }} />
        </Box>
        <CardContent sx={{ height: "185px" }}>
          <Typography
            sx={{
              width: "90%",
              ml: "2%",
              mt: "12px",
              color: "#153A5F",
              fontWeight: "500",
              fontSize: "23px",
            }}
          >
            {des}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography
            sx={{
              color: "#18B0E6",
              fontSize: "14px",
              fontWeight: "500",
              textTransform: "uppercase",
              ml: "3%",

              // mb: "3%",
            }}
          >
            Read More »
          </Typography>
        </CardContent>

        {/* <Box sx={{ borderTop: "0.6px solid #adadad" }}> */}
        <CardContent
          sx={{
            borderTop: "1px solid #eaeaea",
            marginTop: "0%",
          }}
        >
          <Typography
            sx={{
              color: "#adadad",
              ml: "3%",
              fontSize: "12px",
              fontWeight: "400",
              width: "100%",
              // mt: { xs: "6%", sm: "4%" },
            }}
          >
            {date}
          </Typography>
        </CardContent>
        {/* </Box> */}
        {/* </CardContent> */}
      </Card>
    </Box>
  );
}
export default TagCard;
