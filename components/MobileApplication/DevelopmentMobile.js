import { Box, Typography } from "@mui/material";
import MobileServices from "./MobileServices";

function DevelopmentMobile() {
  return (
    <Box sx={{ background: "#153A5F", marginTop: "1%", paddingBottom: "5%",marginBottom:'3%' }}>
      <Typography
        sx={{
          textAlign: "center",
          paddingTop: "5%",
          color: "#FFFFFF",
          fontSize: "2.2em",
          fontWeight: "600",
        }}
      >
        Mobile App Development Services
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "2%",
          marginBottom: "5%",
          marginTop: "4%",
        }}
      >
        <MobileServices image="https://techtiz.co/wp-content/uploads/2023/10/reactjs-svgrepo-com.svg"  title="React Native Development"/>
        <MobileServices image="https://techtiz.co/wp-content/uploads/2023/10/flutter-svgrepo-com.svg" title="Flutter App Development"/>
        <MobileServices image="https://techtiz.co/wp-content/uploads/2023/10/icons8-android-2.svg" title="Andriod Development" />
        <MobileServices image="https://techtiz.co/wp-content/uploads/2023/10/icons8-ios-800-300x300.png" title="ios Development" />
      </Box>
    </Box>
  );
}
export default DevelopmentMobile;
