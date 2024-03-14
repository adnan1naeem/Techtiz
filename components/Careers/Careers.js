import React, { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Grid, Paper } from "@mui/material";
import Welcoming from "./Welcoming";
import CrossLine from "../MobileApplication/CrossLine";
import ExpertiseMobile from "../MobileApplication/ExpertiseMobile";
import ImgForm from "./ImgForm";

const useStyles = makeStyles((theme) => ({
  leftPaper: {
    position: 'sticky',
    top: 150,
    color: "yellow",
    padding: 10,
    zIndex: 1,
  },
  rightPaper: {
    top: 10,
    overflowY: 'auto',
    padding: 0,
  },
}));
function Careers({ onPress }) {
  const classes = useStyles();
  const [scrollTop, setScrollTop] = useState(0);
  const [scrollEnd, setScrollEnd] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrollTop(scrollY);
      setScrollEnd(
        document.documentElement.scrollHeight - window.innerHeight === scrollY
      );
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleRightScroll = (e) => {
    if (scrollEnd) {
      e.stopPropagation();
    }
  };

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
            gap: "2%",
            mt: '3%',
            mb: '5%'
          }}
        >
          <Box>
            <Box className={classes.leftPaper}>
              <ExpertiseMobile
                title1={`Why`}
                title2={`You Should`}
                title3={`Choose TechTiz`}
                onPress={onPress}
              />
            </Box>
          </Box>
          <Box onScroll={handleRightScroll} className={classes.rightPaper}>
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
