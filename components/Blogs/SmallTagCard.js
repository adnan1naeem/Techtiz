import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

function SmallTagCard({ image, des, date }) {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: "3%" }}>
      <Card
        sx={{
          width: { xs: "21rem", sm: "23rem", md: "23rem", lg: "23rem" },
          height: { xs: "10rem", sm: "10rem", md: "10rem", lg: "10rem" },
          borderRadius: "9px",
          background: "white",
          boxShadow: "none",

          cursor: "pointer",
        }}
      >
        <CardContent sx={{ display: "flex" }}>
          <Box>
            <Typography
              sx={{
                width: "97%",

                color: "#54595F",
                fontWeight: "500",
                fontSize: "15px",
              }}
            >
              Debunking Myths about IT Outsourcing and Staff Augmentation – Myth
              Buster Series (Part 3)
            </Typography>
            <Typography
              sx={{
                color: "#adadad",

                fontSize: "12px",
                fontWeight: "400",
                width: "100%",
              }}
            >
              December 31, 2023
            </Typography>
          </Box>
          <CardMedia
            image="https://techtiz.co/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-18-at-13.55.20-300x169.jpeg"
            sx={{ width: "260px", height: "140px" }}
          />
        </CardContent>
      </Card>
    </Box>
  );
}
export default SmallTagCard;
