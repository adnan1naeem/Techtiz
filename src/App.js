import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { useLayoutEffect } from "react";
import ScrollToTop from "react-scroll-to-top";
import Home from "./Screen/Home/Home";
import About from "./Screen/About/About";
import Industries from "./Screen/Industries/Industries";
import Portfolios from "./Screen/Portfolios/Portfolios";
import Career from "./Screen/Career/Career";
import Mobile from "./Screen/Mobile/Mobile";
import GetStarted from "./Screen/GetStarted/GetStarted";
import Web from "./Screen/Web/Web";
import UI from "./Screen/UI/UI";
import Sqa from "./Screen/Sqa/Sqa";


function App() {
  const Wrapper = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children;
  };
  return (
    <div className="App">
      <Router>
        <Wrapper>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/industries" element={<Industries />} />
            <Route exact path="/portfolio" element={<Portfolios />} />
            <Route exact path="/careers" element={<Career />} />
            <Route exact path="/mobile-application" element={<Mobile />} />
            <Route exact path="/website" element={<Web />} />
            <Route exact path="/get-started" element={<GetStarted />} />
            <Route exact path="/ui-ux-design" element={<UI />} />
            <Route exact path="/sqa" element={<Sqa />} />
          </Routes>
        </Wrapper>
      </Router>
      <ScrollToTop smooth style={{ background: "#e6e6e6" }} />
    </div>
  );
}

export default App;
