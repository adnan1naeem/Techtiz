import { Box } from "@mui/material";
import AutonomousText from "./AutonomousText";
import Image from "next/image";
import bg from '../../assets/svg/sqa-bg-pat-autonomus.svg';

function Autonomous() {
  return (
    <Box
      sx={{
        background: "#153A5F",
        marginTop: "5%",
        backgroundImage: `url(${bg.src})`,
        backgroundSize: '600px',
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "3%",
          flexWrap: "wrap",
          paddingTop: "5%",
          paddingBottom: "5%",
        }}
      >
        <AutonomousText />
        <Box
          sx={{
            width: { xs: "94%", sm: "35rem", md: "39%", lg: "43%", xl: "35rem" },
            transition: "transform 1s ease",
            marginTop: { xs: "10%", sm: "10%", md: "7%", lg: "5%", xl: "3%" },

          }}
        >
          <Image
            src={require('../../assets/sqa-ai-testing.webp')}
            alt=""
            style={{ width: "100%" }}
          />
        </Box>
      </Box>
    </Box>
  );
}
export default Autonomous;
