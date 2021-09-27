import "./App.css";

import { FullStack } from "./components/fullStack";
import { OurDevelopment } from "./components/ourDevelopment";
import { OurProjects } from "./components/ourProjects";
import { ContactUs } from "./components/contactUs/contactUs";
import { ValuedServices } from "./components/valuedServices";
function App() {
  return (
    <>
      <FullStack />
      {/* <ValuedServices /> */}
      <OurDevelopment />
      <OurProjects />
      {/* <ContactUs /> */}
    </>
  );
}

export default App;
