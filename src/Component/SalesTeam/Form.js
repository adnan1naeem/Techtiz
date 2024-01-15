import React from "react";
import { Box, Card, CardContent } from "@mui/material";
import Input from "./Input";
function Form() {
  return (
    <Box>
      <Card
        sx={{
          width: { xs: "20rem", sm: "23rem", md: "26rem", lg: "38rem" },
          height: { xs: "42rem", sm: "38rem", md: "32rem", lg: "28rem" },

          background: "#6373810F",
          boxShadow: "none",
        }}
      >
        <CardContent>
        <Box>
          <Input/>
        </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Form;
