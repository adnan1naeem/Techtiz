import ExpertiseCard from "../ExpertiseCard/ExpertiseCard";
import { Box, Typography } from "@mui/material";

function Expertise() {
  return (
    <Box sx={{ background: "#18B0E6", marginTop: "2%" }}>
      <Box sx={{ paddingTop: "4%", display: "flex", flexDirection: "column" }}>
        <Typography
          sx={{
            textAlign: "center",
            color: "#FFFFFF",
            fontSize: "43.2px",
            fontWeight: "600",
            fontFamily: "Mont-Bold, Sans-serif",
          }}
        >
          Our Expertise
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            marginTop: "2%",
            color: "#FFFFFF",
            fontFamily: "Mont-Regular, Sans-serif",
            fontWeight: '300'

          }}
        >
          Our skilled team excels in mobile app development (iOS, Android,
          React, React Native, Flutter), web <br /> applications, E-commerce
          websites, UX/UI design, software quality assurance, optimization, and
          maintenance.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          paddingLeft: { md: 0, lg: 10 },
          paddingRight: { md: 0, lg: 10 },
          fontSize: { xs: "2.1em", sm: "2.1em", md: "2.1em", lg: "2.7em" },
          gap: "2.5%",
          marginTop: "2%",
          paddingBottom: "5%",
        }}
      >
        <ExpertiseCard
          title="Web Development"
          imageCard="https://techtiz.co/wp-content/uploads/2023/11/web-dev.svg"
          description="Techtiz crafts stunning websites with cutting-edge features."
          href="/website"
        />
        <ExpertiseCard
          title="Mobile App Development"
          imageCard="https://techtiz.co/wp-content/uploads/2023/11/mobileAppDev.svg"
          description="Techtiz delivers seamless mobile experiences for diverse platforms."
          href="/mobile-application"
        />
        <ExpertiseCard
          title="Software Quality Assurance"
          imageCard="https://techtiz.co/wp-content/uploads/2023/11/ux-ui_.svg"
          description="Techtiz ensures flawless performance through rigorous testing."
          href="sqa"
        />
        <ExpertiseCard
          title="UI/UX Design"
          imageCard="https://techtiz.co/wp-content/uploads/2023/11/ux-ui_.svg"
          description="Techtiz creates intuitive and visually captivating user interfaces."
          href="ui-ux-design"
        />
      </Box>
    </Box>
  );
}

export default Expertise;
