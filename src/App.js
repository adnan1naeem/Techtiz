import "./App.css";

import { FullStack } from "./components/fullStack";
import { OurDevelopment } from "./components/ourDevelopment";
import { OurProjects } from "./components/ourProjects";
import { ContactUs } from "./components/contactUs/contactUs";
import { ValuedServices } from "./components/valuedServices";
import { FeedBack } from "./components/feedback/index";
import { OurPricing } from "./components/ourPricing";
function App() {
  return (
    <>
      <FullStack />
      <ValuedServices />
      <OurDevelopment />
      <OurProjects />
      <FeedBack />
      <OurPricing />
      {/* <ContactUs /> */}
    </>
  );
}

export default App;
