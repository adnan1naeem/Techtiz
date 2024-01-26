import { Box, Typography } from "@mui/material";
import React from "react";
import ContactInfo from "./ContactInfo";
import ClushInfor from "./ClushInfor";
import Form from "./Form";

function SalesTeam({ id }) {
  return (
    <Box id={id}>
      <Typography
        sx={{
          color: "#153A5F",
          fontSize: "2.7em",
          fontWeight: "700",
          textAlign: "center",
        }}
      >
        Contact our sales team
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "5%",
          flexWrap: "wrap",
          marginTop: "3%",
        }}
      >
        <Box>
          <Form />
        </Box>
        <Box>
          <ContactInfo />
          <ClushInfor />
        </Box>
      </Box>
    </Box>
  );
}

export default SalesTeam;
