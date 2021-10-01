import React from "react";
import { FullStack } from "./components/fullStack";
import { OurDevelopment } from "./components/ourDevelopment";
import { OurProjects } from "./components/ourProjects";
import { ContactUs } from "./components/contactUs/contactUs";
import { ValuedServices } from "./components/valuedServices";
import { FeedBack } from "./components/feedback";
import { OurPricing } from "./components/ourPricing";
import { Industries } from "./components/industries";
import { Footer } from "./components/Footer";
import Appbar from "./components/Appbar";
import "./App.css";
import { LatestBlog } from "./components/latestBlog";
import { Box } from "@material-ui/core";

function App() {
  return (
    <Box style={{ overflowX: "hidden" }}>
      <Appbar />
      <FullStack />
      <ValuedServices />
      <OurDevelopment />
      <OurProjects />
      <Industries />
      <FeedBack />
      <OurPricing />
      <LatestBlog />
      <ContactUs />

      <Footer />
    </Box>
  );
}

export default App;
