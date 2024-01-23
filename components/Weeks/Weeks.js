import { Box, Typography } from "@mui/material";
import DevelopmentCard from "../DevelopmentCard/DevelopmentCard";

function Weeks() {
  return (
    <Box
      sx={{
        marginTop: "3%",
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          fontSize: { xs: "2.1em", sm: "2.1em", md: "2.1em", lg: "2.7em" },
          fontWeight: "600",
          color: "#153A5F",
          fontFamily: "Mont bold, Sans-serif",
        }}
      >
        Go Live In Less Than 4 Weeks
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            width: { md: "100%", lg: "35%" },
            color: "#153A5F",
            lineHeight: "25px",
            fontSize: "1em",
          }}
        >
          With our proven express delivery, you'll get your custom build
          software or mobile app in less than a month.
        </Typography>
      </Box>

      <Box
        sx={{
          paddingLeft: { md: 10, lg: 20, xl: 25 },
          paddingRight: { md: 10, lg: 20, xl: 25 },
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "1%",
          marginTop: "2%",
        }}
      >
        <DevelopmentCard
          background="#18B0E6"
          title="Ideation & Discovery"
          Description="This is where we get to know you; your needs, your ideas, and how we can turn them into a reality."
        />
        <DevelopmentCard
          background="#153A5F"
          title="Custom Development"
          Description="Our super smart tech experts create and design products that are tailored to build positive user experiences for your customers, starting with an MVP."
        />
        <DevelopmentCard
          background="#18B0E6"
          title="Team Augmentation"
          Description="You want to digitize your operations, or scale your tech foundations? Our managed teams of talented engineers and developers can augment your growth."
        />
        <DevelopmentCard
          background="#153A5F"
          title="Product Design"
          Description="Intuitive and responsive design is what we excel at; whether it is a redesign job or starting from scratch."
        />
        <DevelopmentCard
          background="#18B0E6"
          title="Support & Maintenance"
          Description="We don’t just sell and forget. We follow up and provide support and maintenance services for regular updates and seamless execution"
        />
        <DevelopmentCard
          background="#153A5F"
          title="Rescue Missions"
          Description="If your previous development team fell short of meeting your project requirements, our rescue team is here to assist in getting your project back on course."
        />
      </Box>
    </Box>
  );
}

export default Weeks;
