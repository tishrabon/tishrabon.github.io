import { useState, useContext, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

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

function App() {
  // const [count, setCount] = useState(0);
  const { theme } = useContext(themeContext);
  const location = useLocation();

  const [stick, setStick] = useState(false);

  useEffect(() => {
    const exePosition = () => {
      console.log("exe Position yall!");
      if (location.pathname === "/") {
        setStick(window.scrollY >= window.innerHeight);
      } else {
        setStick(true);
      }
    };

    window.addEventListener("scroll", exePosition);

    return () => window.removeEventListener("scroll", exePosition);
  }, []);

  return (
    <div
      className={`motherContainer verticalS overflow-hidden ${theme} w-full`}
    >
      <Header stick={stick} />

      <main
        className={`mainland m-0 flex min-h-[300vh] w-full flex-col items-center justify-start rounded-[30px]`}
      >
        <Routes>
          <Route path="/" element={<Home stick={stick} />} />

          <Route path="/devs-insight" element={<DevsInsight />} />

          <Route path="/portfolio" element={<Portfolio />} />

          <Route path="/side-skills" element={<SideSkills />} />

          <Route path="/hire-dev" element={<HireDev />} />

          <Route path="/lets-connect" element={<LetsConnect />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
