import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import QAButton from "./QAButton";
import { MdTimer } from "react-icons/md";
import { BiSolidDetail } from "react-icons/bi";
import { FaSearchDollar } from "react-icons/fa";
import { PiMedalBold } from "react-icons/pi";
import QACard from "./QACard";



function QAForYou() {
  const [selectedButton, setSelectedButton] = useState(
    "Top Talent"
  );

  const handleButtonClick = (text) => {
    setSelectedButton(text);
  };

  return (
    <Box sx={{ marginTop: "5%" }}>
      <Typography
        sx={{
          color: "#153A5F",
          fontSize: "2.7em",
          fontWeight: "600",
          textAlign: "center",
        }}
      >
        What's in it for you
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "2%",
          background: "#F6F9FC",
          marginLeft: "18%",
          marginRight: "18%",
          padding: " 0.5% 0.5% 0.5% 0.5%",
          borderRadius: "40px",
          marginTop: "3%",
        }}
      >
        <QAButton
          text="Fast Results"
          isSelected={selectedButton === "Fast Results"}
          onClick={() => handleButtonClick("Fast Results")}
          icon={MdTimer}
        />
        <QAButton
          text="Detailed Testing"
          isSelected={selectedButton === "Detailed Testing"}
          onClick={() => handleButtonClick("Detailed Testing")}
          icon={BiSolidDetail}
        />
        <QAButton
          text="Cost Reduction"
          isSelected={selectedButton === "Cost Reduction"}
          onClick={() => handleButtonClick("Cost Reduction")}
          icon={FaSearchDollar}
        />
        <QAButton
          text="Top Talent"
          isSelected={selectedButton === "Top Talent"}
          onClick={() => handleButtonClick("Top Talent")}
          icon={PiMedalBold}
        />
      </Box>
      {selectedButton === "Fast Results" && (
        <QACard
          title="Fast Results"
          text="Producing better software in short time periods for maintaining a high level of quality through automation testing."
          image="https://techtiz.co/wp-content/uploads/2023/09/fast-results.webp"
          lg="13em"
        />
      )}
      {selectedButton === "Detailed Testing" && (
        <QACard
          title="Detailed Testing"
         text="Comprehensive testing to cover the most popular testing solutions."
          image="https://techtiz.co/wp-content/uploads/2023/09/testing.webp"
          lg="13em"

        />
      )}
      {selectedButton === "Cost Reduction" && (
        <QACard
          title="Cost Reduction"
          text="Reduce costs of manual testing while integrating the GUI"   
          image="https://techtiz.co/wp-content/uploads/2023/09/cost-reduction-1.svg"
          lg="22em"
          top='-14%'
        />
      )}
      {selectedButton === "Top Talent" && (
        <QACard
          title="Top Talent"
         text="QA testing professionals that are on top of their game with the latest changes in mobile and web quality indicators."
          image="https://techtiz.co/wp-content/uploads/2023/09/top-talent.webp"
          lg='15em'
        />
      )}
    </Box>
  );
}

export default QAForYou;
