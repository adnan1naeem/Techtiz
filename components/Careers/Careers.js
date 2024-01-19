import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import Welcoming from "./Welcoming";
import CrossLine from "../MobileApplication/CrossLine";
import ExpertiseMobile from "../../components/MobileApplication/ExpertiseMobile";
import ImgForm from "./ImgForm";

function Careers() {
  return (
    <Box>
      <ImgForm />

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
