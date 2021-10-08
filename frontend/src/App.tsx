import { useEffect } from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import "./App.css";
import InputView from "./components/InputView/InputView";
import Navbar from "./components/Navbar/Navbar";
import ResultsView from "./components/ResultsView/ResultsView";

function App() {
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
    <div className={currentTheme}>
      <Navbar />
      {displayInitView ? <InputView /> : <ResultsView />}
    </div>
  );
}

export default App;
