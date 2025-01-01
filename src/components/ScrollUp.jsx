import React, { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

const ScrollUp = () => {
  const { pathname } = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    if (navigationType === "PUSH") {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
};

export default ScrollUp;
