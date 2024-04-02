import { Box } from "@mui/material";
import React from "react";
import PortfoliosCard from "./PortfoliosCard";
function AllPortfolios() {
  return (
    <Box
      sx={{
        background: "#153A5F",

        pt: "5%",
        pb: "5%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "2.5%",
          "@media screen and (min-width: 1500px)": {
            justifyContent: "space-between",
            maxWidth: "1200px",
            margin: "0 auto",
          },
        }}
      >
        <PortfoliosCard
          widthImg={{ xs: "12rem", sm: "60rem", md: "50rem", lg: "50rem" }}
          mainImage="https://techtiz.co/wp-content/uploads/2023/10/techhitz-dash-board-1-2.png"
          title="Dashboard.earth"
          description={`It's an App that connects people to local activities that address the realities of climate change in your neighborhood.As pollution is affecting the global environment, there is a dire need to provide insights  to the community so that they can work together to enhance their surrounding environment. \n TechTiz systematically designed Dashboard.earth app suggests appropriate actions that can assist you in converting your city's audacious environment goals into reality.`}
        />
        <PortfoliosCard
          widthImg={{ xs: "12rem", sm: "60rem", md: "50rem", lg: "35rem" }}
          mainImage="https://techtiz.co/wp-content/uploads/2023/10/qartt-2-1.png"
          title="Qartt Partner"
          description={`Qartt is a UK-based delivery company that helps businesses  to deliver and keep track of their orders. Due to coronavirus restrictions businesses become digital, and there become a gap between interactions. \n TechTiz developed qartt partner that allows businesses to deliver packages to make great money while keeping track of personal schedules. It also allows businesses to focus on their product, making life easier and saving from the hassle and expense of managing your own delivery team.`}
          mr={{ xs: "3%" }}
        />
        <PortfoliosCard
          widthImg={{ xs: "12rem", sm: "60rem", md: "50rem", lg: "65rem" }}

          mainImage="https://techtiz.co/wp-content/uploads/2023/10/techhitz-qratt-01-2.png"
          title="Qartt"
          description="Qartt, based in the UK, is an application that bridges businesses and delivery partners. Managing delivery teams and monitoring their productivity can be a significant challenge for businesses. TechTiz played a pivotal role in transforming qartt into a real-time application that empowers companies to track orders, optimize delivery routes for riders, and seamlessly manage their products."
        />
        <PortfoliosCard
          widthImg={{ xs: "12rem", sm: "60rem", md: "50rem", lg: "45rem" }}
          mainImage="https://techtiz.co/wp-content/uploads/2023/10/Group-431.png"
          title="Step"
          description="Qartt, based in the UK, is an application that bridges businesses and delivery partners. Managing delivery teams and monitoring their productivity can be a significant challenge for businesses. TechTiz played a pivotal role in transforming qartt into a real-time application that empowers companies to track orders, optimize delivery routes for riders, and seamlessly manage their products."
          mrstep='-2px'
          mlstep="4.5%"
          mr="3%"
          ml="7%"
          mrlast="-0.9%"

        />
      </Box>
    </Box>
  );
}
export default AllPortfolios;
