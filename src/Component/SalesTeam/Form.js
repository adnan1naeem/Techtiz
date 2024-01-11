import React from "react";
import { Box, Card, CardContent } from "@mui/material";
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
          <Form>
          <select class="form-control" id="submit-form" name="Unit_type" required>
        <option selected disabled>Select One</option>
        <option value="1">InDoor</option>
        <option value="2">OutDoor</option>
        <option value="3">Compressor</option>
        <option value="4">Outdoor Fan Motor</option>
        <option value="5">Indoor Fan Motor</option>
        <option value="6">Louver</option>
      </select>
          </Form>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Form;
