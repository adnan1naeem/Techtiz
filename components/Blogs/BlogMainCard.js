import { Box, Card, CardContent, Typography } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";

function BlogsMainCard({ image, title, date }) {
  return (
    <Box>
      <Card
        sx={{
          width: { xs: "21rem", sm: "22rem", md: "22rem", lg: "23rem" },
          height: "30rem",
          mb: "3%",
          borderRadius: "3px",
          border: "0 solid #69727d",
          marginTop: "4%",
          cursor: "pointer",

          "&:hover": {
            transform: "scale(1.01) ",
          },
        }}
      >
        <CardMedia sx={{ height: "210px" }} image={image} />

        <CardContent sx={{ height: "150px" }}>
          <Typography
            sx={{
              mt: "5%",
              width: "85%",
              ml: "5%",
              color: "#54595F",
              fontWeight: "500",
              lineHeight: "1.2",
              fontSize: "21px",
            }}
          >
            {title}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography
            sx={{
              color: "#153A5F",
              fontSize: "11px",
              fontWeight: "600",
              textTransform: "uppercase",
              lineHeight: 1.3,
              mt: "3%",
              ml: "5%",
            }}
          >
            Read More »
          </Typography>
        </CardContent>

        <CardContent
          sx={{
            borderTop: "1px solid #eaeaea",
            marginTop: "5%",
          }}
        >
          <Typography
            sx={{
              lineHeight: "1.3",
              fontSize: "12px",
              color: "#adadad",
              marginLeft: "4%",
            }}
          >
            {date}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
export default BlogsMainCard;
