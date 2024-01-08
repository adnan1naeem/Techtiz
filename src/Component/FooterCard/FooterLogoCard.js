import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";
function FooterLogoCard() {
  return (
    <Box>
      <Card
        sx={{
          width: {sx:"20rem",sm :'29rem', md:'19rem', lg:'17rem'},
          height: "17rem",
          background: "none",
          boxShadow: "none",
        }}
      >
        <CardContent sx={{ display: "flex", flexDirection: "column" }}>
          <img
            src="https://techtiz.co/wp-content/uploads/2023/09/Techtiz-Logo-with-Icon-PNG-e1695527913263.png"
            alt=""
            style={{width:'10rem' ,paddingBottom:'10%'}}
          />
          <Typography
            sx={{
              color: "#153A5F",
              fontSize: '17px'
            }}
          >
            Advancing beyond traditional software development practices and
            empowering your business with innovative digital solutions.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default FooterLogoCard;
