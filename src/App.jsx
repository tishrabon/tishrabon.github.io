import { useState, useContext, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { MdRailwayAlert } from "react-icons/md";

import {
  Home,
  DevsInsight,
  Portfolio,
  SideSkills,
  HireDev,
  LetsConnect,
} from "./pages";
import { Header, Footer } from "./components";
import { themeContext } from "./context/ThemeContext";
import { ScrollUp } from "./components";

function App() {
  if (typeof global === "undefined") {
    var global = window;
  }
  // const [count, setCount] = useState(0);
  const { theme } = useContext(themeContext);
  const location = useLocation();

  const [stick, setStick] = useState(false);

  useEffect(() => {
    const exePosition = () => {
      // setStick(window.scrollY >= window.innerHeight);
      setStick(window.scrollY >= 110 * (window.innerHeight / 100));
    };

    if (location.pathname === "/") {
      window.addEventListener("scroll", exePosition);
    } else {
      setStick(true);
    }

    return () => window.removeEventListener("scroll", exePosition);
  }, [location]);

  return (
    <div className={`app-container verticalS overflow-hidden ${theme}`}>
      <Header stick={stick} />

      {/*     <main
        className={`mainland flex min-h-[300vh] w-full flex-col items-center justify-start rounded-[30px] px-3`}
      >
*/}
      <main
        className={`mainland flex flex-col items-center justify-start rounded-[30px]`}
      >
        <ScrollUp />
        <Routes>
          <Route path="/" element={<Home stick={stick} />} />

          <Route path="/devs-insight" element={<DevsInsight />} />

          <Route path="/portfolio" element={<Portfolio />} />

          {/*<Route path="/side-skills" element={<SideSkills />} />*/}

          <Route path="/hire-dev" element={<HireDev />} />

          {/*<Route path="/lets-connect" element={<LetsConnect />} />*/}

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

function NotFound() {
  return (
    <div className="otherpage-container verticalC gap-5 text-xl">
      <MdRailwayAlert size={70} />
      <p className="px-5 text-center">404: Wrong Destination..</p>
    </div>
  );
}

export default App;
