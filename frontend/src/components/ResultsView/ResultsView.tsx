import { ToastContainer } from "react-toastify";
import ItemMenu from "./ItemMenu/ItemMenu";
import "./ResultsView.css";
import "react-toastify/dist/ReactToastify.css";
import TotalsMenu from "./TotalsMenu/TotalsMenu";

function ResultsView() {
  return (
    <div className="results-view">
      <ToastContainer />
      <ItemMenu />
      <TotalsMenu />
    </div>
  );
}

export default ResultsView;
