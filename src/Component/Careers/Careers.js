import { Box } from "@mui/material";
import React from "react";
import Welcoming from "./Welcoming";
import CrossLine from "../MobileApplication/CrossLine";
import ExpertiseMobile from "../MobileApplication/ExpertiseMobile";

function Careers() {
  return (
    <Box sx={{ marginTop: { xs: "30%", sm: "15%", md: "14%", lg: "6%" } }}>
      <img
        style={{ width: "100%" }}
        src="https://techtiz.co/wp-content/uploads/2023/10/senior-manager-is-sitting-boardroom-with-multiracial-colleagues-discussing-project.jpg"
        alt=""
      />
      <Box>
        <Welcoming />
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "8%",
          }}
        >
          <Box>
            <ExpertiseMobile
              title="Why
You Should 
Choose TechTiz"
            />
          </Box>

          <Box>
            <CrossLine
              title="Recreational trips"
              des="We believe in work-life balance, offering recreational trips to unwind."
            />
            <CrossLine
              title="In-house lunch"
              des="Enjoy our delicious in-house lunches together as part of our team."
            />
            <CrossLine
              title="Paid certifications"
              des="We invest in your growth with paid certifications to boost your skills."
            />
            <CrossLine
              title="Health coverage"
              des="Your well-being matters; that’s why we provide comprehensive health coverage."
            />

            <CrossLine
              title="Medical leaves"
              des="Take care of yourself with the peace of mind of medical leaves when needed."
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Careers;
