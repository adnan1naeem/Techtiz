import { Box } from "@mui/material";

import React from "react";
import QA from "../../components/SQA/QA";
import DoQA from "../../components/SQA/DoQA";
import QAForYou from "../../components/SQA/QAForYou";
import Autonomous from "../../components/SQA/Autonomous";
import DiscussProject from "../../components/Website/DiscussProject";
import SalesTeam from "../../components/SalesTeam/SalesTeam";

function Sqa() {
  const [isHovered, setIsHovered] = React.useState(false);
  return (
    <Box>
      <Box sx={{ marginTop: { xs: "30%", sm: "15%", md: "14%", lg: "14%" } }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "2%",
            flexWrap: "wrap",
          }}
        >
          <QA />
          <Box
            sx={{
              width: { xs: "100%", sm: "80%", md: "38%", lg: "43%", xl: "35%" },
              transform: isHovered ? "translateY(-12px)" : "translateY(0)",
              transition: "transform 1s ease",
              marginTop: { xs: "10%", sm: "10%", md: 0, lg: 0 },
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img
              src="https://techtiz.co/wp-content/uploads/2023/10/Quality-Check.webp"
              alt=""
              style={{ width: "100%" }}
            />
          </Box>
        </Box>
      </Box>
      <DoQA />
      <QAForYou />
      <Autonomous />
      <DiscussProject />
      <SalesTeam />
    </Box>
  );
}
export default Sqa;
