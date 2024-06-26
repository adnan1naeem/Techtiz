import { Box, Typography } from "@mui/material";
import React from "react";
import QAButton from "./QAButton";
import { MdTimer } from "react-icons/md";
import { BiSolidDetail } from "react-icons/bi";
import { FaSearchDollar } from "react-icons/fa";
import { PiMedalBold } from "react-icons/pi";
import QACard from "./QACard";
import { useEffect, useRef, useState } from "react";



function QAForYou() {
  const [selectedButton, setSelectedButton] = useState(
    "Fast Results"
  );

  const handleButtonClick = (text) => {
    setSelectedButton(text);
  };
  const [isVisible, setIsVisible] = useState(false);
  const weeksRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(weeksRef.current);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.2,
      }
    );

    if (weeksRef.current) {
      observer.observe(weeksRef.current);
    }

    return () => {
      if (weeksRef.current) {
        observer.unobserve(weeksRef.current);
      }
    };
  }, []);
  return (
    <Box ref={weeksRef} sx={{ marginTop: "3%" }}>
      <Typography
        sx={{
          color: "#153A5F",
          fontSize: { xs: "1.7rem", sm: "2.7em", xl: "2.7em" },
          fontWeight: "600",
          textAlign: "center",
          transition: "opacity 1s ease-in-out",
          opacity: isVisible ? 1 : 0,
          fontFamily: "Mont-Bold, Sans-serif",
        }}
      >
        What's in it for you
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: "center", width: '100%' }}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "2%",
            background: "#F6F9FC",
            // width: "50rem",
            width: { xs: "90%", sm: "50em", xl: "50em" },
            // marginLeft: { lg: "18%", xl: '26%' },
            // marginRight: { lg: "18%", xl: '26%' },
            padding: "0% 0.5% 0.3% 0.5%",
            // "@media screen and (min-width: 1530px) and (max-width: 1800px)": {
            //   marginLeft: '21%',
            //   marginRight: '21%',
            // },
            borderRadius: "40px",
            marginTop: "2%",
            // "@media screen and (min-width: 1200px) and (max-width: 1300px)": {
            //   marginLeft: '13%',
            //   marginRight: '13%',

            // },
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
      </Box>

      {selectedButton === "Fast Results" && (
        <QACard
          title="Fast Results"
          text="Producing better software in short time periods for maintaining a high level of quality through automation testing."
          image={require('../../assets/sqa-fast-results.webp')}
          lg="14em"
          lgtext="30em"
        />
      )}
      {selectedButton === "Detailed Testing" && (
        <QACard
          title="Detailed Testing"
          text="Comprehensive testing to cover the most popular testing solutions."
          image={require('../../assets/sqa-testing.webp')}
          lg="14em"
          lgtext="30em"

        />
      )}
      {selectedButton === "Cost Reduction" && (
        <QACard
          title="Cost Reduction"
          text="Reduce costs of manual testing while integrating the GUI"
          image={require('../../assets/sqa-cost-reduction-1.svg')}
          lg="22em"
          top='-25%'
          lgtext="20em"


        />
      )}
      {selectedButton === "Top Talent" && (
        <QACard
          title="Top Talent"
          text="QA testing professionals that are on top of their game with the latest changes in mobile and web quality indicators."
          image={require('../../assets/sqa-top-talent.webp')}
          lg='13em'
          lgtext="30em"
        />
      )}
    </Box>
  );
}

export default QAForYou;
