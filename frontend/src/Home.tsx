import "./Home.css";
import ResultsView from "./components/ResultsView/ResultsView";
import { RootStateOrAny, useSelector } from "react-redux";
import { useEffect } from "react";

function Home() {
  const currentTheme = useSelector(
    (state: RootStateOrAny) => state?.themes?.selected
  );
  const displayInitView = useSelector(
    (state: RootStateOrAny) => state?.view?.init
  );
  useEffect(() => {
    localStorage.setItem("theme", currentTheme);
  }, [currentTheme]);

  return (
    <div className={currentTheme + " home"}>
      {displayInitView ? <ResultsView /> : null}
    </div>
  );
}

export default Home;
