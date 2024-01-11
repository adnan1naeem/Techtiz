import { Box } from "@mui/material";
import AutonomousText from "./AutonomousText";

function Autonomous() {
  return (
    <Box sx={{ background: "#153A5F", marginTop: "5%" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "5%",
          flexWrap: "wrap",
          paddingTop: "5%",
          paddingBottom: "5%",
        }}
      >
        <AutonomousText/>
        <Box
          sx={{
            width: { xs: "94%", sm: "80%", md: "39%", lg: "37%", xl: "35rem" },
            transition: "transform 1s ease",
            marginTop: { xs: "-34%", sm: "1%", md: "7%", lg: "5%",xl:'3%' },
          }}
        >
          <img
            src="https://techtiz.co/wp-content/uploads/2023/10/Ai-testing.webp"
            alt=""
            style={{ width: "100%" }}
          />
        </Box>
      </Box>
    </Box>
  );
}
export default Autonomous;
