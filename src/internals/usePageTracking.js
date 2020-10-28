// https://github.com/react-ga/react-ga/issues/122#issuecomment-668640145

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga";

const usePageTracking = () => {
  const [initialized, setInitialized] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (!window.location.href.includes("localhost")) {
      ReactGA.initialize("UA-88791541-12");
    }
    setInitialized(true);
  }, []);

  useEffect(() => {
    if (initialized) {
      ReactGA.pageview(location.pathname + location.search);
    }
  }, [initialized, location]);
};

export default usePageTracking;
