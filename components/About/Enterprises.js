import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { IoMdArrowRoundForward } from "react-icons/io";

function Enterprises({ onclick }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: { xs: "30%", sm: "15%", md: "14%", lg: "11%" }

      }}
    >
      <Typography
        sx={{
          color: "#153A5F",
          fontSize: "2.7em",
          fontWeight: "700",
          textAlign: "center",
        }}
      >
        Making Technology Work for You
      </Typography>
      <Typography
        sx={{
          color: "#18B0E6",
          fontSize: "1.7em",
          fontWeight: "700",
          textAlign: "center",
        }}
      >
        Startups. SMEs. Enterprises
      </Typography>
      <Typography
        sx={{
          color: "#153A5F",
          fontSize: "1.1em",
          fontWeight: "400",
          textAlign: "center",
          marginTop: "2%",
        }}
      >
        Techtiz is a custom software development company that helps startups and
        businesses of all sizes create chart-topping apps <br /> and software.
        We have a team of super-talented engineers with advanced expertise in
        mobile app development, web <br /> application development, UX/UI
        design, and more. With on-time enterprise-level implementation, we have
        a proven track <br /> record of helping diverse businesses embark on
        their transformation journeys.
      </Typography>
      <Button
        variant="contained"
        endIcon={<IoMdArrowRoundForward />}
        sx={{
          marginTop: "3%",

          padding: { xs: "3%", sm: "2%", md: "1.5%", lg: "0.80%" },
          paddingLeft: "1.4%",
          paddingRight: "1.4%",
          borderRadius: 0,
          textTransform: "none",
          fontSize: "16px",
          fontWeight: "400",
          background: "#18B0E6",
          "&:hover": {
            backgroundColor: "#153A5F",
          },
        }}
        href={onclick}
      >
        Discuss Now &nbsp; &nbsp;
      </Button>
    </Box>
  );
}

export default Enterprises;