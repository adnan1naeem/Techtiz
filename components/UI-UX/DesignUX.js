import React from "react";
import { Box, Card, CardContent, Typography, Button } from "@mui/material";
import { IoMdArrowRoundForward } from "react-icons/io";
function DesignUX({ onPress }) {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 700);

    return () => clearTimeout(timer);
  }, []);
  return (
    <Box
      sx={{
        display: "flex", justifyContent: "center", alignContent: "center", mt: "2%", '@media screen and (min-width: 1700px)': {
          mt: '1%'
        },
      }}
    >
      <Card
        sx={{
          width: { xs: "23rem", sm: "100%", md: "36rem", lg: "36rem" },
          height: { xs: "30rem", sm: "30rem", md: "32rem", lg: "28rem" },

          boxShadow: "none",
          "@media screen and (min-width: 1200px) and (max-width: 1300px)": {
            width: '38rem'
          },

        }}
      >
        <CardContent sx={{ display: "flex", flexDirection: "column" }}>
          <Typography
            sx={{
              color: "#153A5F",
              fontSize: "1.2em",
              fontWeight: "600",
              borderLeft: "3px solid #18B0E6",
              height: "15px",
              lineHeight: "20px",
              transition: "opacity 1s ease-in-out",
              opacity: isVisible ? 1 : 0,
              fontFamily: "Mont-Bold, Sans-serif",
            }}
          >
            &nbsp;UI/UX Design
          </Typography>
          <Typography
            sx={{
              color: "#153A5F",
              fontSize: { xs: "1.9em", md: "2.7em" },
              fontWeight: "900",
              marginTop: { xs: "2%", md: "2%" },
              transition: "opacity 1s ease-in-out",
              opacity: isVisible ? 1 : 0,
              fontFamily: "Mont-Bold, Sans-serif",
              lineHeight: '50px',
              '@media screen and (min-width: 1700px)': {
                mt: '-2%'
              },
              "@media screen and (min-width: 1200px) and (max-width: 1300px)": {
                // mt: '-2%'
                width: "90%",
              },

            }}
          >
            {`UI/UX Design That
            \nDrives Growth & Never\nLets You Down`}
          </Typography>

          <Typography
            sx={{
              color: "#153A5F",
              fontSize: "1.1em",
              fontWeight: 600,
              marginTop: "5%",
              fontFamily: "'Mont-Regular', sans-serif",
              '@media screen and (min-width: 1700px)': {
                mt: '2%'
              },
              "@media screen and (min-width: 1200px) and (max-width: 1300px)": {
                mt: '2%',

              },


            }}
          >
            With our user-friendly and responsive interfaces, you <br /> can establish
            an online presence, drive growth, and <br /> disrupt your industry
          </Typography>
          <Button
            variant="contained"
            endIcon={<IoMdArrowRoundForward />}
            onClick={onPress}
            sx={{
              marginTop: "8%",
              padding: { xs: "3%", sm: "2%", md: "1.5%", lg: "1.8%" },
              width: { xs: "100%", sm: "40%", md: "60%", lg: "40%" },
              paddingLeft: "0.6%",
              paddingRight: "0.6%",
              borderRadius: '6px',
              textTransform: "none",
              fontSize: "16px",
              fontFamily: "Mont-Regular, Sans-serif",
              boxShadow: 'none',
              fontWeight: 600,
              background: "#18B0E6",
              "&:hover": {
                backgroundColor: "#153A5F",
              },
              '@media screen and (min-width: 1700px)': {
                mt: '7%',
                width: '35%'
              },
              "@media screen and (min-width: 1200px) and (max-width: 1300px)": {
                mt: '6%'
              },



            }}
          >
            Discuss now &nbsp; &nbsp;
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}

export default DesignUX;
