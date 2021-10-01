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

function App() {
  return (
    <>
      <Appbar />
      <FullStack />
      <ValuedServices />
      <OurDevelopment />
      <OurProjects />
      <Industries />
      <OurPricing />
      <FeedBack />
      <ContactUs />
      <LatestBlog />
      <Footer />
    </>
  );
}

export default App;
