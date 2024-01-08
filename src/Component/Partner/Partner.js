import React from "react";
import PartnerCard from "../PartnerCard/PartnerCard";
import { Box, Typography } from "@mui/material";
import ButtonBusiness from "../Texts/ButtonBusiness";

function Partner() {
  return (
    <Box
      sx={{
        background:
          "radial-gradient(at center center, #18B0E6 0%, #153A8D 85%);",
        marginTop: "5%",
        paddingTop: "5%",
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          color: "#FFFFFF",
          fontSize:  { xs: "2em", sm: "2.5em", md: "2.7em" ,lg:'2.7em'},
          fontWeight: "600",
          lineHeight: "53px",
        }}
      >
        Case Studies: Qarrt, Qarrt Partner,
        <br /> and Dashboard.Earth.
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "1%",
          marginTop: "4%",
          flexWrap: "wrap",
        }}
      >
        <PartnerCard
          cardImage="https://techtiz.co/wp-content/uploads/2023/09/qartt-2-1.png"
          title="Qartt"
          description="Qartt streamlines order tracking and  delivery for businesses, offering optimized routes for delivery partners, making product management seamless."
        />
        <PartnerCard
          cardImage="https://techtiz.co/wp-content/uploads/elementor/thumbs/techhitz-qratt-01-1-qd89iqy5aq9yfjsbroo4rixfrh4ulujpjsp250oidu.png"
          title="Qartt partner"
          description="Qartt bridges the digital gap between businesses and customers, helping them manage deliveries, track orders, and focus on their products without the need for an in-house delivery team."
        />
        <PartnerCard
          cardImage="https://techtiz.co/wp-content/uploads/elementor/thumbs/techhitz-dash-board-1-1-qd89in6sk9piyqjz6hvzyj4yllrj3kr9v8v9i2wxhu.png"
          title="Dashboard.Earth"
          description="Dashboard.earth connects communities to local activities addressing climate change, fostering collaboration for environmental improvement."
        />
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "center", paddingBottom: "5%" }}
      >
        <ButtonBusiness
          text="Let's Start"
          color="white"
          paddingLeft="40px"
          paddingRight="40px"
        />
      </Box>
    </Box>
  );
}

export default Partner;
