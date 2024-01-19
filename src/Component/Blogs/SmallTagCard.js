import { Box, Card, CardContent, Typography } from "@mui/material";

function SmallTagCard({ image, des, date }) {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: "3%", }}>
      <Card
        sx={{
          width: { xs: "21rem", sm: "23rem", md: "23rem", lg: "21rem" },
          height: { xs: "32rem", sm: "32rem", md: "32rem", lg: "15rem" },
          borderRadius: "9px",
          background: "white",
          boxShadow:'none',

          cursor: "pointer",
        }}
      >
        <CardContent sx={{ display:'flex' }}>
        <Box>
            <Typography
              sx={{
                mt: "5%",
                width: "80%",
                ml: "1%",
                color: "#54595F",
                fontWeight: "500",
                fontSize: "20px",
                lineHeight:'24px'
              }}
            >
              Debunking Myths about IT Outsourcing and Staff Augmentation – Myth
              Buster Series (Part 3)
            </Typography>
            <Typography
              sx={{
                color: "#adadad",
                ml: "1%",
                fontSize: "12px",
                fontWeight: "400",
                width: "100%",
                mt: { xs: "6%", sm: "4%" },
              }}
            >
              December 31, 2023
            </Typography>
          </Box>
          <Box sx={{ width: "25rem",mt:'5%' }}>
            <img
              style={{ width: "100%", height: "10.3rem" }}
              src="https://techtiz.co/wp-content/uploads/2023/12/7-768x384.jpg"
              alt=""
            />
          </Box>

          
        </CardContent>
      </Card>
    </Box>
  );
}
export default SmallTagCard;
