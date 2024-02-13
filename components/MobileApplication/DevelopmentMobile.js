import { Box, Typography } from "@mui/material";
import MobileServices from "./MobileServices";

function DevelopmentMobile({ onPress }) {
  return (
    <Box
      sx={{
        background: "#153A5F",
        marginTop: "1%",
        backgroundImage: `url('https://techtiz.co/wp-content/uploads/2023/10/bg-lines.png')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '260px',

        paddingBottom: "5%",
        marginBottom: "3%",
      }}
    >
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
        <MobileServices
          image="https://techtiz.co/wp-content/uploads/2023/10/reactjs-svgrepo-com.svg"
          title="React Native Development"
          des="We develop high-quality digital products using the best cross-platform mobile app development platform."
          onPress={onPress}
        />
        <MobileServices
          image="https://techtiz.co/wp-content/uploads/2023/10/flutter-svgrepo-com.svg"
          title="Flutter App Development"
          des="Our solution-oriented developers use Flutter UI framework to deliver unconventional and engaging app designs that drive growth."
          onPress={onPress}

        />
        <MobileServices
          image="https://techtiz.co/wp-content/uploads/2023/10/icons8-android-2.svg"
          title="Andriod Development"
          des="We design intuitive and easy-to-use Android apps with people in mind, so your customers can use them on any device type"
          onPress={onPress}

        />
        <MobileServices
          image="https://techtiz.co/wp-content/uploads/2023/10/icons8-ios-800-300x300.png"
          title="ios Development"
          des="With years of experience and expertise in all the latest coding languages, our solution-oriented programmers create feature-rich and intuitive rich iOS apps."
          onPress={onPress}

        />
      </Box>
    </Box>
  );
}
export default DevelopmentMobile;
