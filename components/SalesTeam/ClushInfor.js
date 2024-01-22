import React from "react";
import { Box, Card, CardContent } from "@mui/material";
function ClushInfor() {
  return (
    <Box>
      <Card
        sx={{
          width: { xs: "20rem", sm: "23rem", md: "26rem", lg: "32rem" },
          height: { xs: "5rem", sm: "6rem", md: "7rem", lg: "8rem" },
          marginTop: "8%",
          background: "#6373810F",
          boxShadow: "none",
        }}
      >
        <CardContent
          sx={{
            marginLeft: "1%",
            marginTop: "-3%",
          }}
        >
          <img
            src="https://techtiz.co/wp-content/uploads/2023/09/clutch-e1696137965599.jpg"
            alt=""
            style={{ width: "30%" }}
          />
        </CardContent>
      </Card>
    </Box>
  );
}

export default ClushInfor;
